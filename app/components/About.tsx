import SectionLabel from "./ui/SectionLabel";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="space-y-4">
      <SectionLabel number="01" label="ABOUT" />
      <h2
        id="about-heading"
        className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold"
      >
        Building across the stack,
        <br className="hidden md:block" /> one layer at a time.
      </h2>
      <div className="space-y-5 text-[--muted] text-[16.5px] leading-[1.8] max-w-2xl">
        <p>
          I think of myself as language-agnostic - I pick the right tool for the
          problem, not the other way around. I started in frontend, got curious
          about what happens after the request leaves the browser, and kept
          going. These days I spend most of my time in JavaScript and TypeScript,
          write Python when the task calls for it, and I&apos;m steadily working my
          way into DevOps tooling and infrastructure.
        </p>
        <p>
          Outside of day-to-day engineering, I compete. I&apos;ve built projects
          under 24-hour deadlines at national hackathons and come away with
          multiple championships. That habit of shipping under pressure - of
          scoping ruthlessly and executing cleanly - carries over into everything
          I build.
        </p>
        <p>
          I&apos;ve also led teams and programs: coaching over a hundred students
          through a software internship, organizing large-scale tech events, and
          building internal tools that actually get used. I care about craft, but
          I care more about impact.
        </p>
      </div>
    </section>
  );
}
