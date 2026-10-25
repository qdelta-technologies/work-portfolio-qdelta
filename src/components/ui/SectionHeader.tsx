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
      className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-[#343938]/50"
    >
      <div className="space-y-1">
        <h2 className="text-[22px] sm:text-[25px] md:text-[28px] font-semibold tracking-[-0.02em] text-[#D4FF78]">
          {number && (
            <span className="inline-flex items-baseline gap-2 mr-2.5 text-[#A5AAA7]">
              <span className="font-normal text-[17px] sm:text-[20px] md:text-[22px] font-mono">
                {number}
              </span>
              <span className="text-[#343938]">/</span>
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
        <div className="flex items-center gap-3 self-start md:self-end">
          {children}
        </div>
      )}
    </div>
  );
}
