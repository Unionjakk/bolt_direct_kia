
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Vehicle } from '@/types/vehicle';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface VehicleEnquiryFormProps {
  vehicle: Vehicle;
}

const VehicleEnquiryForm: React.FC<VehicleEnquiryFormProps> = ({ vehicle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in this ${vehicle.registration_year} ${vehicle.make} ${vehicle.model} (Stock: ${vehicle.stock_number}). Please contact me with more information.`
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting vehicle enquiry:', {
        vehicleId: vehicle.id,
        name: formData.name,
        email: formData.email
      });

      const { data, error } = await supabase.functions.invoke('vehicle-enquiry', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
          vehicleType: 'used_vehicle',
          vehicleId: vehicle.id,
          vehicleDetails: vehicle,
          sourcePage: window.location.pathname
        }
      });

      if (error) {
        console.error('Edge function error:', error);
        throw error;
      }

      console.log('Enquiry submitted successfully:', data);
      
      toast({
        title: "Enquiry Sent Successfully",
        description: "We'll be in touch with you shortly about this vehicle.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: `I'm interested in this ${vehicle.registration_year} ${vehicle.make} ${vehicle.model} (Stock: ${vehicle.stock_number}). Please contact me with more information.`
      });

    } catch (error) {
      console.error('Error submitting enquiry:', error);
      toast({
        title: "Error",
        description: "There was an error sending your enquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enquire About This Vehicle</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your phone number"
            />
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder="Tell us more about your enquiry..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-kia-red hover:bg-kia-red-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to be contacted about this vehicle. 
            We respect your privacy and will not share your information with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default VehicleEnquiryForm;
