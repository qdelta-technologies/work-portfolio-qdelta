import React from "react";

interface SectionHeaderProps {
  number?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  id?: string;
}

export function SectionHeader({
  number,
  title,
  description,
  children,
  id,
}: SectionHeaderProps) {
  return (
    <div
      id={id}
      className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 pb-3.5 sm:pb-4 border-b border-[#38403F]"
    >
      <div className="space-y-1 min-w-0">
        <h2 className="text-[22px] sm:text-[25px] md:text-[28px] font-semibold tracking-[-0.02em] text-[#FACC15] flex items-baseline">
          {number && (
            <span className="inline-flex items-baseline gap-2 mr-2.5 text-[#A5AAA7]">
              <span className="font-normal text-[17px] sm:text-[20px] md:text-[22px] font-mono">
                {number}
              </span>
              <span className="text-[#38403F]">/</span>
            </span>
          )}
          <span>{title}</span>
        </h2>
        {description && (
          <p className="text-[#C2C8C5] text-[13px] sm:text-[14px] font-normal leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {children && (
        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3 self-stretch sm:self-end pt-0.5 sm:pt-0">
          {children}
        </div>
      )}
    </div>
  );
}
