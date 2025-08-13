// TypeScript interfaces for Opera Groups And Company

export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  phone: string
  email: string
  address: string
  location: string
  establishedYear: number
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  image?: string
}

export interface Product {
  id: string
  name: string
  category: "upvc" | "aluminum" | "steel"
  description: string
  features: string[]
  specifications?: Record<string, string>
  images: string[]
  price?: string
}

export interface ProjectPortfolio {
  id: string
  title: string
  category: string
  description: string
  location: string
  completedDate: string
  images: string[]
  services: string[]
}

export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image?: string
  experience: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  service: string
  message: string
}
