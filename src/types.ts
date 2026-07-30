export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  recommendedFor: string;
  badge?: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'saas' | 'sistemas' | 'automacao' | 'web';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  tags: string[];
  features: string[];
  clientType: string;
  completionYear: string;
  demoUrl?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  avatarUrl: string;
  rating: number;
  content: string;
  projectType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  projectDetails: string;
  estimatedBudget: string;
}
