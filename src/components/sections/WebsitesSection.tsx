"use client";

import React, { useState, useMemo } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CategoryDropdown } from "@/components/projects/CategoryDropdown";
import { WebsiteGrid } from "@/components/projects/WebsiteGrid";
import { WEBSITE_PROJECTS } from "@/data/website-projects";
import { WebsiteCategoryId } from "@/types/project";

export function WebsitesSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<WebsiteCategoryId>("all");

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
      className="py-6 sm:py-8 md:py-10 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 border-t border-[#343938]/30"
      aria-label="Websites Showcase"
    >
      <div className="space-y-3.5 sm:space-y-4">
        <SectionHeader
          title="Websites"
          description="Designed with purpose. Built with care."
        >
          <CategoryDropdown
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            projectCount={filteredProjects.length}
          />
        </SectionHeader>

        <WebsiteGrid
          projects={filteredProjects}
          onResetFilter={() => setSelectedCategory("all")}
        />
      </div>
    </section>
  );
}
