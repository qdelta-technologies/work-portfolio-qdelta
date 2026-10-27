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
      className={`group block rounded-[10px] bg-[#181B1C] border border-[#38403F] overflow-hidden transition-all duration-300 ${
        hasLiveUrl
          ? "hover:border-[#FACC15]/60 hover:shadow-[0_12px_36px_rgba(0,0,0,0.65)] cursor-pointer"
          : "cursor-default opacity-95"
      }`}
    >
      {/* 16:10 Landscape Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0F1113] border-b border-[#38403F]">
        <Image
          src={project.thumbnail}
          alt={`Screenshot preview of ${project.title} website`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          priority={project.featured}
        />
        {/* Subtle hover gradient sheen */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content & Metadata */}
      <div className="p-3.5 sm:p-4 flex items-start justify-between gap-3">
        <div className="space-y-0.5 min-w-0">
          <h3 className="text-[15px] sm:text-[16px] font-bold text-[#FFFFFF] tracking-[-0.01em] transition-colors group-hover:text-[#FACC15] truncate">
            {project.title}
          </h3>
          <p className="text-[12.5px] text-[#CBD2CF] font-medium truncate">
            {project.categoryLabel}
          </p>
        </div>

        {/* External Link Arrow Indicator */}
        {hasLiveUrl ? (
          <div
            className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#24292B] border border-[#38403F] flex items-center justify-center text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#111315] group-hover:border-[#FACC15] transition-all duration-200 shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        ) : (
          <span
            className="text-[10px] font-mono uppercase tracking-wider text-[#CBD2CF]/70 px-2 py-0.5 rounded-full bg-[#151719] border border-[#38403F] shrink-0 mt-1"
            title="Internal experiment"
          >
            Archive
          </span>
        )}
      </div>
    </CardWrapper>
  );
}
