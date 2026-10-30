export interface ProductSpecification {
  height: string;
  length: string;
  width: string;
  loadCapacity: string;
  material: string;
  finish: string;
  levels?: string;
  pitchAdjustment?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  galleryImages: string[];
  benefits: string[];
  specifications: ProductSpecification;
  customizationOptions: string[];
  idealApplications: string[];
  features: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  solutions: string[];
  badge: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'Warehouse' | 'Supermarket' | 'Mezzanine' | 'Heavy Duty' | 'Industrial';
  location: string;
  description: string;
  imageUrl: string;
  details: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productCategory: string;
  requiredDimensions: string;
  loadCapacityRequired: string;
  projectDetails: string;
  uaeEmirate: string;
}
