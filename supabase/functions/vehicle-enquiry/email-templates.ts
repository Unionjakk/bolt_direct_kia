
import { VehicleEnquiryRequest, EmailTemplate } from './types.ts';

export function createCustomerEmailTemplate(
  body: VehicleEnquiryRequest,
  vehicleDescription: string,
  enquiryId: string
): EmailTemplate {
  return {
    personalizations: [{
      to: [{ email: body.email, name: body.name }],
      subject: `Your DirectKia Enquiry - ${vehicleDescription}`
    }],
    from: { email: 'noreply@directkia.co.uk', name: 'DirectKia' },
    content: [{
      type: 'text/html',
      value: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #dc2626; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">DirectKia</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Thank you for your enquiry, ${body.name}!</h2>
            
            <p style="color: #666; line-height: 1.6;">
              We have received your enquiry about the <strong>${vehicleDescription}</strong> 
              and will be in touch with you shortly.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Your Enquiry Details:</h3>
              <p><strong>Vehicle:</strong> ${vehicleDescription}</p>
              <p><strong>Your Message:</strong> ${body.message}</p>
              ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
              <p><strong>Email:</strong> ${body.email}</p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              Our team will review your enquiry and contact you within 24 hours. 
              If you have any urgent questions, please call us directly.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://directkia.co.uk" style="background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">DirectKia - Your Trusted Kia Partner</p>
            <p style="margin: 5px 0 0 0;">This is a no-reply email | Website: directkia.co.uk</p>
          </div>
        </div>
      `
    }]
  };
}

export function createInternalEmailTemplate(
  body: VehicleEnquiryRequest,
  vehicleDescription: string,
  enquiryId: string,
  clientIP: string
): EmailTemplate {
  return {
    personalizations: [{
      to: [{ email: 'mail@directkia.co.uk', name: 'DirectKia Sales Team' }],
      subject: `New Vehicle Enquiry - ${vehicleDescription} (ID: ${enquiryId})`
    }],
    from: { email: 'mail@directkia.co.uk', name: 'DirectKia Website' },
    content: [{
      type: 'text/html',
      value: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #dc2626; color: white; padding: 20px;">
            <h1 style="margin: 0;">New Vehicle Enquiry</h1>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #333;">Customer Details:</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : '<p><strong>Phone:</strong> Not provided</p>'}
              <p><strong>Enquiry ID:</strong> ${enquiryId}</p>
              <p><strong>Source Page:</strong> ${body.sourcePage || 'Not specified'}</p>
              <p><strong>IP Address:</strong> ${clientIP}</p>
            </div>
            
            <h2 style="color: #333;">Vehicle Details:</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Vehicle:</strong> ${vehicleDescription}</p>
              <p><strong>Type:</strong> ${body.vehicleType === 'new_ev3_offer' ? 'New EV3 Offer' : 'Used Vehicle'}</p>
              <p><strong>Vehicle ID:</strong> ${body.vehicleId}</p>
              ${body.vehicleType === 'new_ev3_offer' && body.vehicleDetails.final_price ? 
                `<p><strong>Price:</strong> £${body.vehicleDetails.final_price.toLocaleString()}</p>` : ''}
              ${body.vehicleType === 'used_vehicle' && body.vehicleDetails.price ? 
                `<p><strong>Price:</strong> £${body.vehicleDetails.price.toLocaleString()}</p>` : ''}
            </div>
            
            <h2 style="color: #333;">Customer Message:</h2>
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <p style="white-space: pre-wrap;">${body.message}</p>
            </div>
          </div>
        </div>
      `
    }]
  };
}

export function getVehicleDescription(body: VehicleEnquiryRequest): string {
  return body.vehicleType === 'new_ev3_offer' 
    ? `${body.vehicleDetails.make} ${body.vehicleDetails.model} ${body.vehicleDetails.variant}${body.vehicleDetails.trim_level ? ` ${body.vehicleDetails.trim_level}` : ''}`
    : `${body.vehicleDetails.registration_year} ${body.vehicleDetails.make} ${body.vehicleDetails.model}`;
}
