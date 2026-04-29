import SectionLabel from "./ui/SectionLabel";
import RoleCard from "./RoleCard";

const roles = [
  {
    title: "General Secretary",
    organization: "BAIUST Computer Club (BCC)",
    bullets: [
      "Launched a Software Intern Program, coaching 102 students to ship 6 software modules for the campus.",
      'Hosting twice-weekly "Engineering Adda" tech round-tables (avg. 40 attendees), boosting club retention.',
      "Organized a 24-hour hackathon for 51 teams (196 participants), end-to-end logistics, 90% participant NPS.",
      "Built the club's internal management system and mail server.",
    ],
  },
  {
    title: "Organizer, Mentor, Problem Setter",
    organization: "BAIUST CSE FEST 2025",
    bullets: [
      "Organized a 24-hour hackathon, IUPC, eFootball, Typing Contest, and ICT Quiz for 600+ participants.",
      "Worked closely with faculty to plan and execute the event.",
      "Problem setter for the hackathon segment; mentored participants throughout.",
    ],
  },
  {
    title: "Team Lead",
    organization: "Stars Intern Program (BAIUST)",
    bullets: [
      "Bus Tracker: real-time tracking for 12 buses with live map and ETA.",
      "Treasurer Branch Reconciliation: automated bank-statement / student-payment matching with mismatch alerts and ready-to-sign reports.",
      "Alumni Portal: secure platform for graduate profiles, updates, and networking.",
      "MCP Server: central info agent aggregating live academic, finance, and transport data.",
    ],
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="space-y-4"
    >
      <SectionLabel number="04" label="LEADERSHIP" />
      <h2
        id="leadership-heading"
        className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold"
      >
        Roles &amp; impact
      </h2>
      <div className="space-y-6">
        {roles.map((role) => (
          <RoleCard key={role.title} {...role} />
        ))}
      </div>
    </section>
  );
}
