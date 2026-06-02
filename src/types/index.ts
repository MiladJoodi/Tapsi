export interface NavItem {
  label: string;
  href: string;
  cta?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billingCycle: string;
  description: string;
  discount: string;
  features: string[];
  popular?: boolean;
  variant: "primary" | "secondary";
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  excerpt: string;
  content: string;
  image: string;
  results: { label: string; value: string }[];
}

export interface Career {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface TravelDestination {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  image: string;
  likes: number;
  views: number;
}
