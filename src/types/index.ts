// Global type definitions for the project

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

export interface NavigationLink {
  title: string;
  href: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export interface BusinessAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  full: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: BusinessAddress;
  mapsUrl: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

export interface SEOConfig {
  defaultTitle: string;
  defaultDescription: string;
  siteUrl: string;
  ogImage: string;
  twitterHandle: string;
}
