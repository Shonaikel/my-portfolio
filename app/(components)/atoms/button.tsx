import React from "react";

export interface Props {
  variant?: "primary" | "outline";
  rounded?: "base" | "full-rounded";
  children: React.ReactNode;
  className?: string;
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  rounded = "base",
  className = "",
  children,
  href,
  download,
  target,
  rel,
  onClick,
}: Props) => {

  const base = "inline-flex items-center justify-center px-5 py-3 transition-all duration-300";

  const roundedClass =
    rounded === "full-rounded" ? "rounded-full" : "rounded-md";

  const primary =
    "bg-[#8ff51b] text-black hover:shadow-[0_0_12px_#8ff51b] hover:text-white hover:-translate-y-0.5";

  const outline =
    "border-2 border-white text-white hover:shadow-[0_0_12px_#FFF] hover:-translate-y-0.5";

  const styles = `${base} ${roundedClass} ${
    variant === "primary" ? primary : outline
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        className={styles}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};