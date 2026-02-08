export default function ExperienceItem({
  year,
  role,
  company,
  description,
}: {
  year: string;
  role: string;
  company: string;
  description: string;
}) {
  return (
    <div className="relative pl-8 border-l-2 border-lime-400">
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-lime-400" />
      <p className="text-lime-400 font-medium">{year}</p>
      <h3 className="text-white font-semibold">{role}</h3>
      <p className="text-gray-400 text-sm">{company}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
}
