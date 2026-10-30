"use client";

import React, { useState, useMemo } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CategoryDropdown } from "@/components/projects/CategoryDropdown";
import { WebsiteGrid } from "@/components/projects/WebsiteGrid";
import { WebsiteListView } from "@/components/projects/WebsiteListView";
import { WEBSITE_PROJECTS } from "@/data/website-projects";
import { WebsiteCategoryId } from "@/types/project";
import { List, LayoutGrid } from "lucide-react";

export function WebsitesSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<WebsiteCategoryId>("all");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") {
      return WEBSITE_PROJECTS;
    }
    return WEBSITE_PROJECTS.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section
      id="websites"
      className="w-full py-6 sm:py-8 md:py-10"
      aria-label="Websites & Applications Showcase"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 space-y-4 sm:space-y-5">
        <SectionHeader
          title="Websites & Web Applications"
          description="Engineered for speed, brand distinctiveness, and conversion."
        >
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* View Mode Toggle (Line View vs Grid View) */}
            <div className="inline-flex items-center rounded-[8px] bg-[#181B1C] border border-[#38403F] p-0.5">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                aria-label="Switch to Line List View"
                title="Line-wise list view"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] text-[12px] font-medium transition-all ${
                  viewMode === "list"
                    ? "bg-[#252A2C] text-[#FACC15] shadow-xs"
                    : "text-[#A5AAA7] hover:text-[#FFFFFF]"
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Line View</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Switch to Grid View"
                title="Grid card view"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] text-[12px] font-medium transition-all ${
                  viewMode === "grid"
                    ? "bg-[#252A2C] text-[#FACC15] shadow-xs"
                    : "text-[#A5AAA7] hover:text-[#FFFFFF]"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid View</span>
              </button>
            </div>

            {/* Category Dropdown */}
            <CategoryDropdown
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              projectCount={filteredProjects.length}
            />
          </div>
        </SectionHeader>

        {/* Dynamic Display: Line View (List) or Card Grid */}
        {viewMode === "list" ? (
          <WebsiteListView
            projects={filteredProjects}
            onResetFilter={() => setSelectedCategory("all")}
          />
        ) : (
          <WebsiteGrid
            projects={filteredProjects}
            onResetFilter={() => setSelectedCategory("all")}
          />
        )}
      </div>
    </section>
  );
}
