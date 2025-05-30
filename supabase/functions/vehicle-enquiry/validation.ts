
import { VehicleEnquiryRequest } from './types.ts';

export function validateRequest(body: VehicleEnquiryRequest): string | null {
  if (!body.name || !body.email || !body.message || !body.vehicleType || !body.vehicleId) {
    return 'Missing required fields';
  }
  return null;
}
