export interface PortraitPackage {
  category: string;
  title: string;
  price: string;
  duration: string;
  summary: string;
  deliverables: string[];
  bestFor: string[];
  featured?: boolean;
}

export interface PortraitImage {
  image: string;
  title: string;
  category: string;
  width: number;
  height: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BookingStep {
  number: string;
  title: string;
  description: string;
  href?: string;
  action?: string;
}

export interface PolicyItem {
  title: string;
  description: string;
}

export interface SessionType {
  name: string;
}

export interface GalleryImage extends PortraitImage {}