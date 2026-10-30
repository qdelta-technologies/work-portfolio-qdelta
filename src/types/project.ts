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

export type WorkDomainId = "websites" | "content" | "commercials";

export interface WorkDomainInfo {
  id: WorkDomainId;
  title: string;
  eyebrow: string;
  subtitle: string;
  badge: string;
}

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

export interface ReelItem {
  id: string;
  title: string;
  category?: string;
  duration?: string;
  videoSrc: string;
  thumbnailTimestamp?: number; // In seconds (e.g. 0.5, 1.2) to capture the viewer's "first expression" hook frame
}
