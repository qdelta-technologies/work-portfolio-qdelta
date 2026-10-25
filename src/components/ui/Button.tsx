import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "lime" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "outline",
  size = "md",
  href,
  isExternal = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.98] select-none rounded-[12px] whitespace-nowrap";

  const sizeStyles = {
    sm: "px-4 py-2 text-[14px] gap-2",
    md: "px-5 py-2.5 text-[15px] gap-2.5",
    lg: "px-7 py-3.5 text-[16px] gap-3 font-semibold",
  };

  const variantStyles = {
    lime: "bg-[#D4FF78] text-[#111315] hover:bg-[#e2ff9e] shadow-[0_2px_12px_rgba(212,255,120,0.15)]",
    outline:
      "bg-[#1B1E1F] text-[#F5F6F2] border border-[#343938] hover:border-[#A5AAA7] hover:bg-[#202425]",
    ghost: "text-[#A5AAA7] hover:text-[#F5F6F2] hover:bg-[#1B1E1F]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
