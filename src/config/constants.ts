// Business Information
export const BUSINESS_INFO = {
  name: 'The Lenders',
  tagline: 'Mortgage Solutions',
  phone: '+12485341720',
  phoneFormatted: '(248) 534-1720',
  email: 'info@thelenders.mortgage',
  address: {
    street: '2930 W. Hamlin Rd',
    city: 'Rochester Hills',
    state: 'Michigan',
    zip: '48309',
    full: '2930 W. Hamlin Rd Rochester Hills, Michigan 48309'
  },
  mapsUrl: 'https://maps.app.goo.gl/SNtyFQi4PGPizbnw9',
  socialMedia: {
    facebook: 'https://facebook.com/thelenders',
    twitter: 'https://x.com/thelenders',
    instagram: 'https://instagram.com/thelenders'
  }
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'The Lenders - Best Mortgage Rates & Home Loans',
  defaultDescription: 'Find the best mortgage rates and home loan solutions with The Lenders. Expert guidance for your home financing needs.',
  siteUrl: 'https://thelenders.com',
  ogImage: '/og-image.jpg',
  twitterHandle: '@thelenders'
} as const;

// Business Hours
export const BUSINESS_HOURS = {
  weekdays: 'Monday - Friday',
  hours: '8AM - 5PM EST'
} as const;
