import type { ReactNode } from "react";

export default function ContactItem({
  icon,
  text,
  href,
}: {
  icon: ReactNode;
  text: string;
  href?: string;
}) {
  const content = (
    <>
      {icon}
      <span>{text}</span>
    </>
  );
  return (
    <div className="flex items-center gap-2 text-lime-400">
      {href ? (
        <a href={href} className="flex items-center gap-2 hover:underline">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
