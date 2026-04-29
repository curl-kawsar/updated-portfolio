import SectionLabel from "./ui/SectionLabel";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: "PROJECT 01",
    name: "BAIUST Transport Tracker",
    summary:
      "Real-time bus tracking system deployed across 12 buses, serving 1,000+ users daily.",
    bullets: [
      "Monorepo architecture with Turborepo and Bun, sharing TypeScript packages across services.",
      "Next.js 16 dashboard with live map tracking; REST API built with Hono, MongoDB, WebSockets, and Redis.",
      "IoT pipeline ingesting GPS telemetry via MQTT into InfluxDB, with operational data in MongoDB.",
      "Fully Dockerized with health checks, OpenTelemetry tracing, Prometheus metrics, and Grafana dashboards.",
    ],
    stack: [
      "Next.js 16",
      "Hono",
      "MongoDB",
      "Redis",
      "WebSockets",
      "MQTT",
      "InfluxDB",
      "Docker",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Turborepo",
      "Bun",
    ],
  },
  {
    number: "PROJECT 02",
    name: "BAIUST Online Judge",
    summary:
      "Competitive programming and assignment grading platform handling ~8,000 requests in 2 hours.",
    bullets: [
      "GitHub-integrated grading via Octokit with proxy rotation, live demo checks, and multi-step GPT-4o analysis for rubric scoring and plagiarism signals.",
      "Supported ~120 concurrent users during a JavaScript competitive program with anti-cheating enforcement and single-device sessions.",
      "Integrated Judge0 for server-side code execution against hidden and visible test cases, with problem leaderboards.",
    ],
    stack: ["Next.js", "Octokit", "OpenAI GPT-4o", "Judge0", "Node.js"],
  },
];

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="space-y-4">
      <SectionLabel number="02" label="SELECTED WORK" />
      <h2
        id="work-heading"
        className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold"
      >
        Things I&apos;ve built
      </h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </section>
  );
}
