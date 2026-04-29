interface RoleCardProps {
  title: string;
  organization: string;
  bullets: string[];
}

export default function RoleCard({ title, organization, bullets }: RoleCardProps) {
  return (
    <article className="rounded-2xl sm:rounded-3xl bg-[--surface] p-5 sm:p-7 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]">
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[--foreground]">{title}</h3>
          <p className="text-sm text-[--muted] mt-1">{organization}</p>
        </div>
        <ul className="space-y-2 text-[15px] text-[--foreground]/85 list-none">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="text-[--accent] mt-0.5 shrink-0">-</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
