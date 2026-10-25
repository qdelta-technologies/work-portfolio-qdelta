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
      className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 md:pb-8 border-b border-[#343938]/60"
    >
      <div className="space-y-1.5 sm:space-y-2">
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-semibold tracking-[-0.02em] text-[#D4FF78]">
          {number && (
            <span className="inline-flex items-baseline gap-2.5 mr-3 text-[#A5AAA7]">
              <span className="font-normal text-[20px] sm:text-[24px] md:text-[28px] font-mono">
                {number}
              </span>
              <span className="text-[#343938]">/</span>
            </span>
          )}
          <span>{title}</span>
        </h2>
        {description && (
          <p className="text-[#A5AAA7] text-[15px] sm:text-[16px] md:text-[17px] font-normal leading-relaxed">
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
