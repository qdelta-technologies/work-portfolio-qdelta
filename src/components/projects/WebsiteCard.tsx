import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { WebsiteProject } from "@/types/project";

interface WebsiteCardProps {
  project: WebsiteProject;
}

export function WebsiteCard({ project }: WebsiteCardProps) {
  const hasLiveUrl = Boolean(project.liveUrl);

  const CardWrapper = hasLiveUrl ? "a" : "div";
  const wrapperProps = hasLiveUrl
    ? {
        href: project.liveUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Visit ${project.title} (${project.categoryLabel}) external website, opens in a new tab`,
      }
    : {
        "aria-label": `${project.title} (${project.categoryLabel}) - Project preview`,
      };

  return (
    <CardWrapper
      {...wrapperProps}
      className={`group block rounded-[10px] bg-[#1B1E1F] border border-[#343938] overflow-hidden transition-all duration-300 ${
        hasLiveUrl
          ? "hover:border-[#48504e] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] cursor-pointer"
          : "cursor-default opacity-95"
      }`}
    >
      {/* 16:10 Landscape Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#151719] border-b border-[#343938]/60">
        <Image
          src={project.thumbnail}
          alt={`Screenshot preview of ${project.title} website`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
          className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          priority={project.featured}
        />
        {/* Subtle hover gradient sheen */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#F5F6F2] tracking-[-0.01em] transition-colors group-hover:text-white">
              {project.title}
            </h3>
          </div>
          <p className="text-[14px] text-[#A5AAA7] font-normal">
            {project.categoryLabel}
          </p>
        </div>

        {/* External Link Arrow Indicator */}
        {hasLiveUrl ? (
          <div
            className="w-9 h-9 rounded-full bg-[#202425] border border-[#343938] flex items-center justify-center text-[#A5AAA7] group-hover:text-[#D4FF78] group-hover:border-[#D4FF78]/60 group-hover:bg-[#111315] transition-all duration-200 shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        ) : (
          <span
            className="text-[11px] font-mono uppercase tracking-wider text-[#A5AAA7]/60 px-2.5 py-1 rounded-full bg-[#151719] border border-[#343938]/40 shrink-0 mt-1"
            title="Internal experiment"
          >
            Archive
          </span>
        )}
      </div>
    </CardWrapper>
  );
}
