"use client";

import React, { useState, useRef, useEffect, useId } from "react";
import { ChevronDown, Check } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { WebsiteCategoryId } from "@/types/project";

interface CategoryDropdownProps {
  selectedCategory: WebsiteCategoryId;
  onSelectCategory: (categoryId: WebsiteCategoryId) => void;
  projectCount: number;
}

export function CategoryDropdown({
  selectedCategory,
  onSelectCategory,
  projectCount,
}: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownId = useId();

  const selectedOption =
    CATEGORIES.find((cat) => cat.id === selectedCategory) || CATEGORIES[0];

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left select-none"
    >
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-block text-[#A5AAA7] text-[13px] font-mono">
          {projectCount} {projectCount === 1 ? "project" : "projects"}
        </span>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-between gap-2.5 min-w-[160px] px-3.5 py-2 sm:py-1.5 rounded-[10px] bg-[#181B1C] border border-[#38403F] text-[#FFFFFF] hover:border-[#FACC15]/60 focus-visible:outline-none focus-visible:border-[#FACC15] transition-all duration-200 text-[13px] font-medium shadow-sm active:scale-[0.99] touch-manipulation"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={dropdownId}
          aria-label="Filter projects by category"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
            <span className="truncate">{selectedOption.label}</span>
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-[#CBD2CF] transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180 text-[#FACC15]" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown Menu (Positioned safely on mobile and desktop) */}
      {isOpen && (
        <div
          id={dropdownId}
          role="listbox"
          aria-label="Categories"
          className="absolute left-0 md:left-auto md:right-0 mt-1.5 w-56 max-w-[calc(100vw-32px)] rounded-[10px] bg-[#181B1C] border border-[#38403F] shadow-[0_12px_36px_rgba(0,0,0,0.7)] py-1 z-30 focus:outline-none animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-1.5 text-[10.5px] font-mono uppercase tracking-wider text-[#A5AAA7] border-b border-[#38403F]/60 mb-0.5">
            Filter by Category
          </div>
          {CATEGORIES.map((category) => {
            const isSelected = category.id === selectedCategory;
            return (
              <button
                key={category.id}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onSelectCategory(category.id);
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
                className={`w-full text-left px-3 py-1.5 text-[13px] flex items-center justify-between transition-colors rounded-[6px] mx-auto my-0.5 max-w-[calc(100%-8px)] ${
                  isSelected
                    ? "bg-[#202425] text-[#FACC15] font-medium"
                    : "text-[#A5AAA7] hover:text-[#F5F6F2] hover:bg-[#202425]/60"
                }`}
              >
                <span>{category.label}</span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
