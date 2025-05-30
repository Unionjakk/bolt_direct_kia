
export interface VehicleEnquiryRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  vehicleType: 'new_ev3_offer' | 'used_vehicle';
  vehicleId: number;
  vehicleDetails: any;
  sourcePage?: string;
}

export interface EmailTemplate {
  personalizations: Array<{
    to: Array<{ email: string; name: string }>;
    subject: string;
  }>;
  from: { email: string; name: string };
  content: Array<{
    type: string;
    value: string;
  }>;
}
