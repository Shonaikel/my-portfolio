import Image from "next/image";

export default function ProjectCard({
  title,
  image,
  tags,
  href = "#",
}: {
  title: string;
  image: string;
  tags: string[];
  href?: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden bg-zinc-800/50 border border-zinc-700">
      <Image src={image} alt={title} width={400} height={240} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs text-gray-400 border border-gray-500 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <a href={href} className="text-lime-400 text-sm hover:underline">
          View More →
        </a>
      </div>
    </div>
  );
}
