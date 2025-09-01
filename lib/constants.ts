import type { ProjectPortfolio } from "./types"; // Assuming ProjectPortfolio is defined in a types file

export const PORTFOLIO_PROJECTS: ProjectPortfolio[] = [
  {
    id: "residential-complex-pokhara",
    title: "Modern Residential Complex",
    category: "Residential",
    description:
      "Complete UPVC window and door installation for a 24-unit residential complex in Pokhara-12. This project showcased our expertise in large-scale residential installations with energy-efficient solutions.",
    location: "Pokhara-12, Kaski",
    completedDate: "March 2024",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    services: [
      "UPVC Sliding Windows",
      "UPVC Casement Doors",
      "UPVC Partitions",
    ],
  },
  {
    id: "corporate-office-building",
    title: "Corporate Office Building",
    category: "Commercial",
    description:
      "Aluminum partition systems and sliding doors for a multi-story office complex. The project required precision installation and modern aesthetics to create flexible workspace solutions.",
    location: "Pokhara-8, Kaski",
    completedDate: "January 2024",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    services: [
      "Aluminum Partitions",
      "Aluminum Sliding Doors",
      "Aluminum Windows",
    ],
  },
  {
    id: "luxury-hotel-project",
    title: "Luxury Hotel Project",
    category: "Hospitality",
    description:
      "Comprehensive UPVC and aluminum solutions for a 5-star hotel property. This prestigious project combined aesthetic appeal with functional performance for guest comfort.",
    location: "Pokhara-6, Lakeside",
    completedDate: "November 2023",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    services: [
      "UPVC Windows",
      "Aluminum Sliding Doors",
      "Custom Aluminum Work",
    ],
  },
  {
    id: "educational-institution",
    title: "Educational Institution",
    category: "Institutional",
    description:
      "UPVC windows and aluminum partitions for a modern educational facility. The project focused on creating a conducive learning environment with proper ventilation and sound insulation.",
    location: "Pokhara-10, Kaski",
    completedDate: "September 2023",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    services: [
      "UPVC Casement Windows",
      "Aluminum Partitions",
      "UPVC Sliding Windows",
    ],
  },
  {
    id: "industrial-warehouse",
    title: "Industrial Warehouse",
    category: "Industrial",
    description:
      "Heavy-duty steel fabrication and aluminum works for a large industrial warehouse. The project required robust solutions capable of withstanding industrial conditions.",
    location: "Pokhara-15, Industrial Area",
    completedDate: "August 2023",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    services: [
      "Steel Fabrication",
      "Aluminum Industrial Doors",
      "Custom Steel Work",
    ],
  },
  {
    id: "shopping-mall",
    title: "Shopping Mall Complex",
    category: "Commercial",
    description:
      "Large-scale aluminum and steel work for a modern shopping mall. The project included storefronts, partitions, and structural elements with contemporary design.",
    location: "Pokhara-9, Mahendrapul",
    completedDate: "June 2023",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    services: [
      "Aluminum Storefronts",
      "Steel Structural Work",
      "Aluminum Partitions",
    ],
  },
  {
    id: "private-villa",
    title: "Private Villa",
    category: "Residential",
    description:
      "Premium UPVC and aluminum solutions for a luxury private villa. The project emphasized aesthetic appeal while maintaining high performance and energy efficiency.",
    location: "Pokhara-7, Baidam",
    completedDate: "April 2023",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    services: ["UPVC Sliding Doors", "UPVC Casement Windows", "Aluminum Works"],
  },
  {
    id: "healthcare-facility",
    title: "Healthcare Facility",
    category: "Healthcare",
    description:
      "Specialized UPVC and aluminum installations for a modern healthcare facility. The project required adherence to strict hygiene and safety standards.",
    location: "Pokhara-11, Kaski",
    completedDate: "February 2023",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    services: ["UPVC Windows", "Aluminum Partitions", "UPVC Doors"],
  },
];

export const COMPANY_INFO = {
  name: "Opera Groups And Company",
  tagline: "Premium UPVC & Aluminum Solutions",
  description:
    "Leading provider of UPVC and aluminum solutions in Pokhara, Nepal. Specializing in high-quality windows, doors, partitions, and custom fabrication services.",
  phone: "061-501380",
  email: "operagroup09@gmail.com",
  location: "Pokhara-14, Kaski",
  address: "Chauthe, Pokhara-14, Kaski, Nepal",
  establishedYear: 2015,
};

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "upvc-sliding-windows",
    title: "UPVC Sliding Windows",
    description:
      "Energy-efficient sliding windows with superior insulation and smooth operation.",
    icon: "Window",
    features: [
      "Energy Efficient",
      "Weather Resistant",
      "Low Maintenance",
      "Sound Insulation",
    ],
  },
  {
    id: "upvc-casement-windows",
    title: "UPVC Casement Windows",
    description:
      "Traditional style casement windows with modern UPVC technology for optimal performance.",
    icon: "Home",
    features: [
      "Traditional Design",
      "Secure Locking",
      "Easy Operation",
      "Durable",
    ],
  },
  {
    id: "upvc-sliding-doors",
    title: "UPVC Sliding Doors",
    description:
      "Space-saving sliding doors perfect for patios, balconies, and room dividers.",
    icon: "DoorOpen",
    features: [
      "Space Saving",
      "Large Glass Panels",
      "Smooth Operation",
      "Security Features",
    ],
  },
  {
    id: "upvc-casement-doors",
    title: "UPVC Casement Doors",
    description:
      "Classic hinged doors with modern UPVC construction for durability and style.",
    icon: "Door",
    features: [
      "Classic Style",
      "Multi-Point Locking",
      "Weather Sealing",
      "Customizable",
    ],
  },
  {
    id: "upvc-partitions",
    title: "UPVC Partitions",
    description:
      "Flexible partition solutions for offices, homes, and commercial spaces.",
    icon: "Separator",
    features: [
      "Flexible Design",
      "Easy Installation",
      "Sound Dampening",
      "Modern Aesthetics",
    ],
  },
  {
    id: "aluminum-works",
    title: "Aluminum Works",
    description:
      "Custom aluminum fabrication for windows, doors, and architectural elements.",
    icon: "Wrench",
    features: [
      "Custom Fabrication",
      "Corrosion Resistant",
      "Lightweight",
      "Modern Design",
    ],
  },
  {
    id: "steel-works",
    title: "Steel Works",
    description:
      "Heavy-duty steel fabrication for industrial and commercial applications.",
    icon: "Hammer",
    features: [
      "Heavy Duty",
      "Industrial Grade",
      "Custom Solutions",
      "Structural Support",
    ],
  },
];

export const PRODUCTS = [
  {
    id: "upvc",
    title: "UPVC Solutions",
    name: "UPVC Solutions",
    category: "UPVC",
    description:
      "Energy-efficient doors, windows, and partitions with superior insulation properties.",
    features: [
      "Energy Efficient",
      "Weather Resistant",
      "Low Maintenance",
      "Sound Insulation",
    ],
    images: ["/placeholder.svg?height=300&width=400"],
    productCount: "15+ Products",
  },
  {
    id: "aluminum",
    title: "Aluminum Works",
    name: "Aluminum Works",
    category: "Aluminum",
    description:
      "Lightweight, durable, and corrosion-resistant aluminum doors and windows.",
    features: [
      "Lightweight",
      "Corrosion Resistant",
      "Recyclable",
      "Cost Effective",
    ],
    images: ["/placeholder.svg?height=300&width=400"],
    productCount: "12+ Products",
  },
  {
    id: "steel",
    title: "Steel Fabrication",
    name: "Steel Fabrication",
    category: "Steel",
    description:
      "Heavy-duty steel solutions for security doors and custom structural applications.",
    features: [
      "High Security",
      "Fire Resistant",
      "Custom Design",
      "Structural Strength",
    ],
    images: ["/placeholder.svg?height=300&width=400"],
    productCount: "8+ Products",
  },
  {
    id: "upvc-sliding-window-premium",
    name: "Premium UPVC Sliding Window",
    category: "UPVC",
    description:
      "High-performance sliding window with multi-chamber profile and double glazing for superior insulation and durability.",
    price: "Rs. 8,500 per sq.ft",
    features: [
      "Multi-chamber profile",
      "Double glazing",
      "Weather stripping",
      "Smooth sliding mechanism",
      "Energy efficient",
    ],
    specifications: {
      "Profile Thickness": "70mm",
      "Glass Type": "Double Glazed",
      Hardware: "German Technology",
      Warranty: "10 Years",
      "U-Value": "1.2 W/m²K",
    },
    images: ["/placeholder.svg?height=300&width=400"],
  },
  {
    id: "upvc-casement-window-standard",
    name: "Standard UPVC Casement Window",
    category: "UPVC",
    description:
      "Traditional casement window with modern UPVC technology and secure locking.",
    price: "Rs. 7,800 per sq.ft",
    features: [
      "Multi-point locking",
      "Tilt & turn option",
      "Energy efficient",
      "Easy maintenance",
    ],
    specifications: {
      "Profile Thickness": "60mm",
      "Glass Type": "Single/Double Glazed",
      Opening: "Inward/Outward",
      Warranty: "8 Years",
    },
    images: ["/placeholder.svg?height=300&width=400"],
  },
  {
    id: "upvc-sliding-door-patio",
    name: "UPVC Patio Sliding Door",
    category: "UPVC",
    description:
      "Large sliding door perfect for patios with maximum glass area and minimal frame.",
    price: "Rs. 12,000 per sq.ft",
    features: [
      "Large glass panels",
      "Smooth operation",
      "Security locks",
      "Weather resistant",
    ],
    specifications: {
      "Profile Thickness": "80mm",
      "Glass Type": "Tempered Double Glazed",
      "Max Width": "3000mm",
      Warranty: "10 Years",
    },
    images: ["/placeholder.svg?height=300&width=400"],
  },
  {
    id: "aluminum-sliding-window-commercial",
    name: "Commercial Aluminum Sliding Window",
    category: "Aluminum",
    description:
      "Heavy-duty aluminum sliding window designed for commercial applications.",
    price: "Rs. 6,500 per sq.ft",
    features: [
      "Powder coated finish",
      "Thermal break",
      "Commercial grade",
      "Customizable",
    ],
    specifications: {
      "Profile Series": "50mm",
      Finish: "Powder Coated",
      "Glass Type": "Single/Double Glazed",
      Warranty: "5 Years",
    },
    images: ["/placeholder.svg?height=300&width=400"],
  },
  {
    id: "aluminum-partition-office",
    name: "Office Aluminum Partition",
    category: "Aluminum",
    description:
      "Modern aluminum partition system for office spaces with glass panels.",
    price: "Rs. 4,200 per sq.ft",
    features: [
      "Modular design",
      "Glass integration",
      "Cable management",
      "Easy reconfiguration",
    ],
    specifications: {
      "Profile Height": "Floor to ceiling",
      "Glass Type": "Clear/Frosted",
      Finish: "Anodized/Powder Coated",
      Warranty: "3 Years",
    },
    images: ["/placeholder.svg?height=300&width=400"],
  },
  {
    id: "steel-fabrication-custom",
    name: "Custom Steel Fabrication",
    category: "Steel",
    description:
      "Heavy-duty steel fabrication for industrial and structural applications.",
    price: "Rs. 180 per kg",
    features: [
      "Custom design",
      "Welded construction",
      "Galvanized coating",
      "Structural grade",
    ],
    specifications: {
      "Steel Grade": "IS 2062",
      Coating: "Hot Dip Galvanized",
      Welding: "Arc Welding",
      Warranty: "2 Years",
    },
    images: ["/placeholder.svg?height=300&width=400"],
  },
  {
    id: "upvc-partition-office",
    name: "UPVC Office Partition System",
    category: "UPVC",
    description:
      "Modern partition system designed for office spaces with sound insulation and easy installation.",
    price: "Rs. 3,200 per sq.ft",
    features: [
      "Sound insulation",
      "Easy installation",
      "Modular design",
      "Fire resistant",
      "Customizable",
    ],
    specifications: {
      "Panel Thickness": "25mm",
      "Sound Reduction": "32dB",
      "Fire Rating": "Class B-s1, d0",
      Warranty: "8 Years",
      "Max Height": "3000mm",
    },
    images: ["/placeholder.svg?height=300&width=400"],
  },
  {
    id: "aluminum-curtain-wall",
    name: "Aluminum Curtain Wall System",
    category: "Aluminum",
    description:
      "High-performance curtain wall system for modern commercial buildings with thermal efficiency.",
    price: "Rs. 5,800 per sq.ft",
    features: [
      "Thermal break",
      "High wind resistance",
      "Custom colors",
      "Energy efficient",
      "Low maintenance",
    ],
    specifications: {
      "Profile Series": "60mm",
      "Wind Load": "3000 Pa",
      "Thermal Break": "24mm",
      Warranty: "5 Years",
      "Max Panel Size": "1500x3000mm",
    },
    images: ["/placeholder.svg?height=300&width=400"],
  },
  {
    id: "upvc-french-door",
    name: "UPVC French Door",
    category: "UPVC",
    description:
      "Elegant French door design with UPVC construction for patios and garden access.",
    price: "Rs. 15,000 per sq.ft",
    features: [
      "French design",
      "Double glazing",
      "Multi-point locking",
      "Weather resistant",
      "Elegant finish",
    ],
    specifications: {
      "Profile Thickness": "80mm",
      "Glass Type": "Tempered Double Glazed",
      "Opening Style": "Inward/Outward",
      Warranty: "10 Years",
      "Max Width": "2400mm",
    },
    images: ["/placeholder.svg?height=300&width=400"],
  },
  {
    id: "steel-security-door",
    name: "Steel Security Door",
    category: "Steel",
    description:
      "Heavy-duty security door with reinforced construction for maximum protection.",
    price: "Rs. 25,000 per unit",
    features: [
      "Reinforced construction",
      "Multi-point locking",
      "Fire resistant",
      "Anti-theft design",
      "Customizable",
    ],
    specifications: {
      "Steel Thickness": "3mm",
      "Lock Points": "5-point",
      "Fire Rating": "EI 30",
      Warranty: "3 Years",
      "Door Thickness": "45mm",
    },
    images: ["/placeholder.svg?height=300&width=400"],
  },
];
export const CLIENT_TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Rajesh Poudel",
    position: "Property Developer",
    company: "Himalayan Properties",
    testimonial:
      "Opera Groups delivered exceptional quality for our residential complex. Their attention to detail and professional installation exceeded our expectations. The UPVC windows have significantly improved energy efficiency.",
    rating: 5,
    project: "Modern Residential Complex",
  },
  {
    id: "testimonial-2",
    name: "Priya Sharma",
    position: "Facility Manager",
    company: "Tech Solutions Pvt. Ltd.",
    testimonial:
      "The aluminum partition system installed by Opera Groups transformed our office space. The quality is outstanding and the installation was completed on schedule. Highly recommended for commercial projects.",
    rating: 5,
    project: "Corporate Office Building",
  },
  {
    id: "testimonial-3",
    name: "Suresh Gurung",
    position: "Hotel Owner",
    company: "Lakeside Resort",
    testimonial:
      "Working with Opera Groups was a pleasure. They understood our requirements perfectly and delivered premium solutions that enhanced our hotel's aesthetic appeal and functionality.",
    rating: 5,
    project: "Luxury Hotel Project",
  },
];
