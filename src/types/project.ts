export type WebsiteCategoryId =
  | "all"
  | "portfolios"
  | "web-apps"
  | "agency"
  | "business"
  | "education"
  | "ecommerce"
  | "landing-pages"
  | "other";

export interface CategoryOption {
  id: WebsiteCategoryId;
  label: string;
}

export interface WebsiteProject {
  id: string;
  slug: string;
  title: string;
  category: WebsiteCategoryId;
  categoryLabel: string;
  description?: string;
  thumbnail: string;
  liveUrl?: string;
  featured?: boolean;
  year?: number;
  images?: string[];
  technologies?: string[];
  caseStudy?: {
    overview?: string;
    challenge?: string;
    solution?: string;
    results?: string;
  };
}

export interface SocialPost {
  id: string;
  image: string;
  alt: string;
  title?: string;
  campaign?: string;
  aspectRatio?: "square" | "portrait";
}
