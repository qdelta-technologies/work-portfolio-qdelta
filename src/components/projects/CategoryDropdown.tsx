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
          className="inline-flex items-center justify-between gap-3 min-w-[190px] px-4 py-2.5 rounded-[12px] bg-[#1B1E1F] border border-[#343938] text-[#F5F6F2] hover:border-[#A5AAA7] focus-visible:outline-none focus-visible:border-[#D4FF78] transition-all duration-200 text-[14px] font-medium shadow-sm active:scale-[0.99]"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={dropdownId}
          aria-label="Filter projects by category"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF78]"></span>
            <span className="truncate">{selectedOption.label}</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#A5AAA7] transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180 text-[#D4FF78]" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id={dropdownId}
          role="listbox"
          aria-label="Categories"
          className="absolute right-0 mt-2 w-60 rounded-[14px] bg-[#1B1E1F] border border-[#343938] shadow-[0_12px_36px_rgba(0,0,0,0.6)] py-1.5 z-30 focus:outline-none animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-[#A5AAA7] border-b border-[#343938]/50 mb-1">
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
                className={`w-full text-left px-3.5 py-2.5 text-[14px] flex items-center justify-between transition-colors rounded-[8px] mx-auto my-0.5 max-w-[calc(100%-8px)] ${
                  isSelected
                    ? "bg-[#202425] text-[#D4FF78] font-medium"
                    : "text-[#A5AAA7] hover:text-[#F5F6F2] hover:bg-[#202425]/60"
                }`}
              >
                <span>{category.label}</span>
                {isSelected && (
                  <Check className="w-4 h-4 text-[#D4FF78] shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
