import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Sparkles, Clapperboard, ArrowRight } from "lucide-react";
import { BackgroundLayer } from "@/components/layout/BackgroundLayer";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export default function Home() {
  const options = [
    {
      id: "websites",
      title: "Websites & Applications",
      hint: "12 Projects",
      href: "/websites",
      icon: Globe,
    },
    {
      id: "content",
      title: "Content Creation",
      hint: "Curated Media",
      href: "/content-creation",
      icon: Sparkles,
    },
    {
      id: "commercials",
      title: "Commercial Ads & Reels",
      hint: "Placeholders",
      href: "/commercial-ads",
      icon: Clapperboard,
    },
  ];

  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.whatsappMessage
  );

  return (
    <div className="relative flex flex-col min-h-screen bg-[#111214] text-[#F5F6F2] justify-between">
      {/* Background with Amber Texture & Subtle Dark Yellow Grid */}
      <BackgroundLayer />

      {/* Minimal Header with Logo */}
      <header className="relative z-10 w-full pt-5 sm:pt-8 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center tracking-tight focus-visible:outline-none py-1"
            aria-label="QDelta Home"
          >
            <Image
              src="/images/qdelta-logo.png"
              alt="QDelta"
              width={110}
              height={40}
              priority
              className="h-6.5 sm:h-8 w-auto object-contain"
            />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-medium text-[#A5AAA7] hover:text-[#FACC15] transition-colors py-1.5 px-3 rounded-full bg-[#181B1C] border border-[#38403F] hover:border-[#FACC15]/60 active:scale-95 touch-manipulation"
          >
            <span>Contact</span>
            <span className="text-[#FACC15]">↗</span>
          </a>
        </div>
      </header>

      {/* Center Stage: Title + Equal-Size Stack of 3 Options */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-3.5 sm:px-6 py-8 sm:py-16">
        <div className="max-w-xl w-full mx-auto space-y-6 sm:space-y-8">
          {/* Top Title (Clean, minimal, no heavy text) */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#1B1E1F] border border-[#343938] text-[#CBD2CF] text-[10.5px] sm:text-[11px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
              <span>SELECTED ARCHIVE</span>
            </div>
            <h1 className="text-[32px] sm:text-[46px] md:text-[54px] font-bold text-[#F5F6F2] tracking-[-0.03em] leading-tight">
              Our Work<span className="text-[#FACC15]">.</span>
            </h1>
            <p className="text-[#A5AAA7] text-[13px] sm:text-[15px] font-normal">
              Select a category to view our work
            </p>
          </div>

          {/* Equal-Sized Stack of 3 Options (Line by line) */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full">
            {options.map((option) => {
              const Icon = option.icon;
              return (
                <Link
                  key={option.id}
                  href={option.href}
                  className="group relative flex items-center justify-between w-full h-[68px] sm:h-[80px] px-4 sm:px-6 rounded-[14px] bg-[#181B1C] hover:bg-[#1E2224] border border-[#38403F] hover:border-[#FACC15] shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(250,204,21,0.12)] transition-all duration-200 active:scale-[0.985] cursor-pointer touch-manipulation"
                >
                  {/* Left: Icon + Title */}
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] bg-[#24292B] group-hover:bg-[#FACC15] text-[#FACC15] group-hover:text-[#111315] border border-[#38403F] group-hover:border-[#FACC15] flex items-center justify-center shrink-0 transition-colors duration-200">
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <span className="text-[15px] sm:text-[17px] md:text-[18px] font-semibold text-[#FFFFFF] group-hover:text-[#FACC15] transition-colors truncate">
                      {option.title}
                    </span>
                  </div>

                  {/* Right: Badge / Indicator + Arrow */}
                  <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                    <span className="text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-wider text-[#A5AAA7] group-hover:text-[#CBD2CF] hidden sm:inline">
                      {option.hint}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#202425] group-hover:bg-[#FACC15] text-[#A5AAA7] group-hover:text-[#111315] flex items-center justify-center transition-all duration-200">
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full py-5 border-t border-[#343938]/60 text-center text-[12px] text-[#A5AAA7]">
        <div className="max-w-[1320px] mx-auto px-4 flex items-center justify-center">
          <span>{siteConfig.footer.copyright}</span>
        </div>
      </footer>
    </div>
  );
}
