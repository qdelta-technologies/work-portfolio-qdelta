export interface SiteConfig {
  name: string;
  tagline: string;
  subdomain: string;
  contact: {
    email: string;
    whatsappNumber: string; // international format without + or spaces, e.g. "1234567890"
    whatsappMessage?: string;
    instagram?: string;
  };
  navigation: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
  footer: {
    copyright: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "QDelta",
  tagline: "Websites, digital experiences, and creative content.",
  subdomain: "work.qdelta.com",
  contact: {
    email: "hello@qdelta.com",
    whatsappNumber: "15550192834",
    whatsappMessage: "Hi QDelta team, I would like to discuss a project.",
    instagram: "https://instagram.com/qdelta.technologies",
  },
  navigation: [
    { label: "Websites", href: "#websites" },
    { label: "Social Media", href: "#social-media" },
    { label: "Contact ↗", href: "#contact" },
  ],
  footer: {
    copyright: "© 2026 QDelta.",
  },
};

export function getWhatsAppUrl(number: string, message?: string): string {
  const cleanNumber = number.replace(/\D/g, "");
  const encodedMsg = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${cleanNumber}${encodedMsg}`;
}

export function getMailtoUrl(email: string, subject = "Project Inquiry — QDelta"): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
