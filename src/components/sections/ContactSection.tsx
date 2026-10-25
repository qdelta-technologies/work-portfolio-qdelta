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

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 border-t border-[#343938]/40"
      aria-label="Contact QDelta"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="rounded-[14px] bg-[#1B1E1F] border border-[#343938] p-7 sm:p-10 md:p-12 relative overflow-hidden">
          {/* Subtle lime glow background in corner */}
          <div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#D4FF78]/5 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-2xl space-y-6 sm:space-y-8 relative z-10">
            <div className="space-y-3">
              <span className="text-[12px] font-mono uppercase tracking-[0.16em] text-[#D4FF78]">
                START A CONVERSATION
              </span>
              <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-bold text-[#F5F6F2] tracking-[-0.02em] leading-tight">
                Have something in mind?
              </h2>
              <p className="text-[#A5AAA7] text-[16px] sm:text-[19px] font-normal leading-relaxed">
                Let&apos;s make it happen.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="lime"
                size="lg"
                href={whatsappUrl}
                isExternal
                aria-label="Contact QDelta via WhatsApp, opens in a new tab"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={emailUrl}
                aria-label="Contact QDelta via Email"
              >
                <span>Email</span>
                <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
