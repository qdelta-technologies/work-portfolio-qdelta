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
  tagline: "Websites, digital solutions, and creative content.",
  subdomain: "work.qdelta.in",
  contact: {
    email: "hello@qdelta.in",
    whatsappNumber: "917815895689",
    whatsappMessage: "Hi QDelta team, I would like to discuss a project.",
    instagram: "https://www.instagram.com/qdelta.in?exln=MWR2engwdGM2MDdpdw==",
  },
  navigation: [
    { label: "Websites", href: "#websites" },
    { label: "Social Media", href: "#social-media" },
    { label: "Contact ↗", href: "#contact" },
  ],
  footer: {
    copyright: "© 2026 QDelta Technologies.",
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
