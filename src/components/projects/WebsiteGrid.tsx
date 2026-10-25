import React from "react";
import { WebsiteProject } from "@/types/project";
import { WebsiteCard } from "./WebsiteCard";

interface WebsiteGridProps {
  projects: WebsiteProject[];
  onResetFilter?: () => void;
}

export function WebsiteGrid({ projects, onResetFilter }: WebsiteGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-[18px] bg-[#1B1E1F] border border-[#343938] py-16 px-6 text-center space-y-4">
        <p className="text-[17px] text-[#F5F6F2] font-medium">
          No projects found in this category
        </p>
        <p className="text-[14px] text-[#A5AAA7] max-w-md mx-auto">
          We are currently updating our archive. Browse other categories or view all
          featured works.
        </p>
        {onResetFilter && (
          <button
            type="button"
            onClick={onResetFilter}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[#202425] hover:bg-[#111315] text-[#D4FF78] border border-[#343938] text-[14px] font-medium transition-colors cursor-pointer"
          >
            View All Projects
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {projects.map((project) => (
        <WebsiteCard key={project.id} project={project} />
      ))}
    </div>
  );
}
