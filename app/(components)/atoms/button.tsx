import React from "react";

export interface Props {
  variant?: "primary" | "outline";
  rounded?: "base" | "full-rounded";
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button = ({
  variant = "primary",
  rounded = "base",
  className = "",
  children,
  href,
}: Props) => {
  const base = "inline-flex items-center justify-center px-5 py-3";
  const roundedClass = rounded === "full-rounded" ? "rounded-full" : "rounded-md";
  const primary = "bg-[#8ff51b] text-black hover:shadow-[0_0_12px_#8ff51b] hover:text-white hover:-translate-y-0.5 transition";
  const outline = "border-2 border-white text-white hover:shadow-[0_0_12px_#FFF] hover:-translate-y-0.5 transition";

  const styles = `${base} ${roundedClass} ${variant === "primary" ? primary : outline} ${className}`;

  return (
    href ? (
        <a href={href} className={styles}>{children}</a>
    ) : (
        <button className={styles}>{children}</button>
    )
  )
}
