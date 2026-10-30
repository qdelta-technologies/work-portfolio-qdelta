import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { WebsiteProject } from "@/types/project";

interface WebsiteListViewProps {
  projects: WebsiteProject[];
  onResetFilter?: () => void;
}

export function WebsiteListView({
  projects,
  onResetFilter,
}: WebsiteListViewProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-[12px] bg-[#181B1C] border border-[#38403F] py-12 sm:py-16 px-4 sm:px-6 text-center space-y-3.5">
        <p className="text-[16px] sm:text-[17px] text-[#F5F6F2] font-medium">
          No projects found in this category
        </p>
        <p className="text-[13px] sm:text-[14px] text-[#A5AAA7] max-w-md mx-auto">
          We are currently updating our archive. Browse other categories or view all
          featured works.
        </p>
        {onResetFilter && (
          <button
            type="button"
            onClick={onResetFilter}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[#202425] hover:bg-[#111315] text-[#FACC15] border border-[#38403F] text-[13.5px] font-medium transition-colors cursor-pointer active:scale-95 touch-manipulation"
          >
            View All Projects
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-3.5">
      {projects.map((project, index) => {
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
            key={project.id}
            {...wrapperProps}
            className={`group block rounded-[12px] bg-[#181B1C] border border-[#38403F] p-3 sm:p-4 md:p-4.5 transition-all duration-200 active:scale-[0.99] touch-manipulation ${
              hasLiveUrl
                ? "hover:border-[#FACC15]/60 hover:bg-[#1C2022] hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] cursor-pointer"
                : "cursor-default opacity-95"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              {/* Left Column: Thumbnail + Details */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
                {/* 16:10 Compact Preview Thumbnail */}
                <div className="relative w-20 h-14 sm:w-28 sm:h-18 md:w-32 md:h-20 shrink-0 rounded-[8px] overflow-hidden bg-[#0F1113] border border-[#38403F] group-hover:border-[#FACC15]/50 transition-colors">
                  <Image
                    src={project.thumbnail}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
                    className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info Text */}
                <div className="space-y-1 sm:space-y-1.5 min-w-0 flex-1">
                  {/* Category & Year badges */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-[#FACC15] bg-[#FACC15]/10 border border-[#FACC15]/25 px-1.5 sm:px-2 py-0.5 rounded-[4px] font-semibold">
                      {project.categoryLabel}
                    </span>
                    {project.year && (
                      <span className="text-[10.5px] sm:text-[11px] font-mono text-[#A5AAA7]">
                        {project.year}
                      </span>
                    )}
                    {project.featured && (
                      <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-[#CBD2CF] bg-[#24292B] border border-[#38403F] px-1.5 py-0.5 rounded-[4px]">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] sm:text-[17px] md:text-[18px] font-bold text-[#FFFFFF] tracking-[-0.01em] group-hover:text-[#FACC15] transition-colors truncate">
                    {project.title}
                  </h3>

                  {/* Description */}
                  {project.description && (
                    <p className="text-[12px] sm:text-[13px] text-[#A5AAA7] font-normal leading-relaxed line-clamp-1 sm:line-clamp-2">
                      {project.description}
                    </p>
                  )}

                  {/* Tech stack pills (Desktop & Tablet) */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="hidden md:flex flex-wrap items-center gap-1.5 pt-0.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-[#CBD2CF]/80 bg-[#141617] border border-[#343938]/60 px-2 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Live Link CTA Button & Mobile Tech Badges */}
              <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#38403F]/60">
                {/* Tech pills visible on mobile screens */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex md:hidden flex-wrap items-center gap-1 max-w-[55%]">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9.5px] font-mono text-[#CBD2CF]/70 bg-[#141617] border border-[#343938]/60 px-1.5 py-0.5 rounded truncate"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {hasLiveUrl ? (
                  <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-[8px] bg-[#24292B] group-hover:bg-[#FACC15] border border-[#38403F] group-hover:border-[#FACC15] text-[12px] sm:text-[12.5px] font-medium text-[#FACC15] group-hover:text-[#111315] transition-all duration-200 ml-auto touch-manipulation">
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                ) : (
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#CBD2CF]/60 px-2.5 py-1 rounded-[6px] bg-[#141617] border border-[#38403F] ml-auto">
                    Archive
                  </span>
                )}
              </div>
            </div>
          </CardWrapper>
        );
      })}
    </div>
  );
}
