import React from "react";
import { siteConfig, getWhatsAppUrl, getMailtoUrl } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.whatsappMessage
  );
  const emailUrl = getMailtoUrl(siteConfig.contact.email);
  const instagramUrl = siteConfig.contact.instagram || "https://instagram.com/qdelta.technologies";

  return (
    <section
      id="contact"
      className="w-full py-8 sm:py-10 md:py-12 border-t border-[#404A48]"
      aria-label="Contact QDelta"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="rounded-[10px] bg-[#181B1C] border border-[#38403F] p-5 sm:p-7 md:p-8 relative overflow-hidden">
          {/* Subtle yellow glow background in corner */}
          <div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#FACC15]/8 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-xl space-y-4 sm:space-y-5 relative z-10">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#FACC15]">
                START A CONVERSATION
              </span>
              <h2 className="text-[24px] sm:text-[30px] md:text-[34px] font-bold text-[#F5F6F2] tracking-[-0.02em] leading-tight">
                Have something in mind?
              </h2>
              <p className="text-[#A5AAA7] text-[14px] sm:text-[16px] font-normal leading-relaxed">
                Let&apos;s make it happen.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
              <Button
                variant="yellow"
                size="md"
                href={whatsappUrl}
                isExternal
                aria-label="Contact QDelta via WhatsApp, opens in a new tab"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </Button>

              <Button
                variant="yellow"
                size="md"
                href={instagramUrl}
                isExternal
                aria-label="Visit QDelta on Instagram, opens in a new tab"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </Button>

              <Button
                variant="yellow"
                size="md"
                href={emailUrl}
                aria-label="Contact QDelta via Email"
              >
                <span>Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
