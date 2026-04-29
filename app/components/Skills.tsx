import SectionLabel from "./ui/SectionLabel";
import Chip from "./ui/Chip";

const skillGroups = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C", "C++", "SQL"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Hono", "Next.js", "Django", "FastAPI"],
  },
  {
    category: "Database & Cache",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps & Infra",
    items: ["Docker", "GitHub Actions", "AWS", "VPS", "Linux"],
  },
  {
    category: "Observability",
    items: ["OpenTelemetry", "Prometheus", "Grafana", "Loki"],
  },
  {
    category: "Messaging & Queues",
    items: ["RabbitMQ", "BullMQ"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Next.js", "TanStack", "Axios"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel", "Render", "Clerk", "Trello", "Notion"],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="space-y-4">
      <SectionLabel number="05" label="SKILLS" />
      <h2
        id="skills-heading"
        className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold"
      >
        Tools of the trade
      </h2>
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="space-y-3">
            <h3 className="text-sm font-semibold text-[--foreground]">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
