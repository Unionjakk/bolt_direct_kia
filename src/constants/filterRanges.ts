
export const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: '0-15000', label: 'Under £15,000', min: 0, max: 15000 },
  { value: '15000-20000', label: '£15,000 - £20,000', min: 15000, max: 20000 },
  { value: '20000-25000', label: '£20,000 - £25,000', min: 20000, max: 25000 },
  { value: '25000-30000', label: '£25,000 - £30,000', min: 25000, max: 30000 },
  { value: '30000-40000', label: '£30,000 - £40,000', min: 30000, max: 40000 },
  { value: '40000-50000', label: '£40,000 - £50,000', min: 40000, max: 50000 },
  { value: '50000-plus', label: 'Over £50,000', min: 50000, max: 999999 }
];

export const MILEAGE_RANGES = [
  { value: 'all', label: 'All Mileages' },
  { value: '0-10000', label: 'Under 10,000 miles', min: 0, max: 10000 },
  { value: '10000-25000', label: '10,000 - 25,000 miles', min: 10000, max: 25000 },
  { value: '25000-50000', label: '25,000 - 50,000 miles', min: 25000, max: 50000 },
  { value: '50000-75000', label: '50,000 - 75,000 miles', min: 50000, max: 75000 },
  { value: '75000-100000', label: '75,000 - 100,000 miles', min: 75000, max: 100000 },
  { value: '100000-plus', label: 'Over 100,000 miles', min: 100000, max: 999999 }
];
