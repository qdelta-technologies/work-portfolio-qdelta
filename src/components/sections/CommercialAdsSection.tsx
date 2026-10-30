import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Film, Play, Video, Sparkles, Clapperboard, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export function CommercialAdsSection() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    "Hello QDelta, I would like to inquire about Ad Creatives & Promo Reel production."
  );

  const placeholders = [
    {
      id: "commercial-1",
      title: "FinTech & Tech Platform Brand Commercial",
      format: "16:9 Widescreen Cinema",
      aspectClass: "aspect-[16/9]",
      duration: "0:30 Cut",
      stage: "Post-Production",
      stageColor: "text-[#FACC15] bg-[#FACC15]/10 border-[#FACC15]/30",
      description: "Narrative brand commercial shot on cinema camera with custom sound design and motion grading.",
      specs: "4K UHD • 24 FPS • Dolby 5.1",
    },
    {
      id: "reel-1",
      title: "D2C Brand Launch & Viral Reels Series",
      format: "9:16 Vertical Reel",
      aspectClass: "aspect-[9/16] max-w-[260px] mx-auto",
      duration: "0:15 / 0:30 Cuts",
      stage: "Edit Suite",
      stageColor: "text-[#60A5FA] bg-[#60A5FA]/10 border-[#60A5FA]/30",
      description: "Fast-paced vertical reel optimized for Instagram & TikTok with kinetic typography and hook pacing.",
      specs: "1080x1920 • 60 FPS • Sound Sync",
    },
    {
      id: "commercial-2",
      title: "Global SaaS Product Showcase Commercial",
      format: "16:9 Product Spot",
      aspectClass: "aspect-[16/9]",
      duration: "0:45 Cut",
      stage: "Color Grading",
      stageColor: "text-[#34D399] bg-[#34D399]/10 border-[#34D399]/30",
      description: "High-conversion product commercial featuring 3D UI spatial rendering and live-action interface interaction.",
      specs: "Cinema 4K • 3D Motion • HDR",
    },
    {
      id: "reel-2",
      title: "Founder Story & Influencer Performance Reel",
      format: "9:16 Vertical Story Reel",
      aspectClass: "aspect-[9/16] max-w-[260px] mx-auto",
      duration: "0:20 Cut",
      stage: "Storyboarded",
      stageColor: "text-[#CBD2CF] bg-[#24292B] border-[#38403F]",
      description: "Engaging personal brand narrative reel engineered for high organic retention and lead capture.",
      specs: "Vertical HD • Sound Design • Subtitles",
    },
  ];

  return (
    <section
      id="commercials"
      className="w-full py-6 sm:py-8 md:py-10"
      aria-label="Ad Creatives & Promo Reels Showcase"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 space-y-6 sm:space-y-8">
        <SectionHeader
          title="Ad Creatives & Promo Reels"
          description="High-conversion ad creatives, promotional videos, and short-form promo reels."
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181B1C] border border-[#38403F] text-[11.5px] font-mono text-[#FACC15]">
            <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
            <span>PRODUCTION ARCHIVE • COMING SOON</span>
          </div>
        </SectionHeader>

        {/* Status Callout Banner */}
        <div className="rounded-[12px] bg-[#181B1C] border border-[#38403F] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#202425] border border-[#38403F] flex items-center justify-center text-[#FACC15] shrink-0">
              <Clapperboard className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[13.5px] sm:text-[14px] text-[#FFFFFF] font-medium">
                Video portfolio update currently in progress
              </p>
              <p className="text-[12px] text-[#A5AAA7]">
                Commercial video cuts and vertical reel deliverables are being mastered for public viewing. Placeholder campaign formats are previewed below.
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            href={whatsappUrl}
            isExternal
            className="w-full sm:w-auto justify-center text-center shrink-0 text-[12px] active:scale-95 touch-manipulation"
          >
            <span>Inquire About Video Production</span>
            <ArrowUpRight className="w-3 h-3 ml-1" />
          </Button>
        </div>

        {/* Grid of Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {placeholders.map((item) => (
            <div
              key={item.id}
              className="rounded-[12px] bg-[#181B1C] border border-[#38403F] p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-[#38403F]/80 transition-all group"
            >
              {/* Cinematic Viewfinder / Video Frame Placeholder */}
              <div
                className={`relative w-full rounded-[8px] bg-[#0F1113] border border-[#2B3130] overflow-hidden flex flex-col justify-between p-3.5 ${item.aspectClass}`}
              >
                {/* HUD Camera viewfinder markings */}
                <div className="flex items-center justify-between text-[10px] font-mono text-[#A5AAA7]/70 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80 animate-pulse" />
                    <span>REC [●]</span>
                  </div>
                  <span>{item.specs}</span>
                </div>

                {/* Center Cinema Slate / Play icon */}
                <div className="flex flex-col items-center justify-center py-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#1B1E1F]/90 border border-[#38403F] flex items-center justify-center text-[#A5AAA7] group-hover:text-[#FACC15] group-hover:border-[#FACC15]/60 transition-all duration-300">
                    <Play className="w-5 h-5 ml-0.5 fill-current opacity-80" />
                  </div>
                  <span className="text-[11px] font-mono text-[#CBD2CF]/60 uppercase tracking-wider">
                    Preview Coming Soon
                  </span>
                </div>

                {/* Bottom HUD: Timecode & Duration */}
                <div className="flex items-center justify-between text-[10px] font-mono text-[#A5AAA7]/70 select-none pt-2 border-t border-[#202525]">
                  <span>TIMECODE 00:00:00:00</span>
                  <span className="text-[#FACC15] font-semibold">{item.duration}</span>
                </div>
              </div>

              {/* Metadata & Description */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#FFFFFF] tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[4px] border font-medium ${item.stageColor}`}
                  >
                    {item.stage}
                  </span>
                </div>
                <p className="text-[12.5px] text-[#A5AAA7] leading-relaxed">
                  {item.description}
                </p>
                <div className="text-[11px] font-mono text-[#CBD2CF]/70 pt-1">
                  Format: <span className="text-[#F5F6F2]">{item.format}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
