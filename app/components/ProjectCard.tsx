import Chip from "./ui/Chip";

interface ProjectCardProps {
  number: string;
  name: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export default function ProjectCard({
  number,
  name,
  summary,
  bullets,
  stack,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl sm:rounded-3xl bg-[--surface] p-5 sm:p-7 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]">
      <div className="space-y-4 sm:space-y-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[--muted] font-[family-name:var(--font-body)]">
          {number}
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl font-bold">
          {name}
        </h3>
        <p className="text-[--muted] text-sm sm:text-[15px]">{summary}</p>
        <ul className="space-y-2 text-sm sm:text-[15px] text-[--foreground]/85 list-none">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="text-[--accent] mt-0.5 shrink-0">-</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          {stack.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </div>
      </div>
    </article>
  );
}
