import SectionLabel from "./ui/SectionLabel";

const awards = [
  {
    year: "2026",
    placement: "1st Runner Up",
    event: "CUET CSE FEST Micro-ops National Hackathon",
    location: "Chittagong, BD",
    isChampion: false,
  },
  {
    year: "2026",
    placement: "1st Runner Up",
    event: "Televerse 1.0 Micro-ops National Hackathon",
    location: "Chittagong, BD",
    isChampion: false,
  },
  {
    year: "2025",
    placement: "Champion",
    event: "UAP Innovatex 2025",
    location: "Dhaka, BD",
    isChampion: true,
  },
  {
    year: "2025",
    placement: "Champion",
    event: "NSU Tech Fest 2025",
    location: "Dhaka, BD",
    isChampion: true,
  },
  {
    year: "2025",
    placement: "1st Runner Up",
    event: "MIST Inventious 4.1",
    location: "Dhaka, BD",
    isChampion: false,
  },
  {
    year: "2025",
    placement: "1st Runner Up",
    event: "Televerse 1.0 - API Avengers",
    location: "Chittagong, BD",
    isChampion: false,
  },
  {
    year: "2025",
    placement: "Participant",
    event: "NASA Space Apps Challenge 2025",
    location: "Cumilla, BD",
    isChampion: false,
  },
  {
    year: "2025",
    placement: "Problem Setter (2×)",
    event: "BAIUST CSE FEST 2025 (Spring, Fall)",
    location: "Cumilla, BD",
    isChampion: false,
  },
  {
    year: "2024",
    placement: "Top 10 Finalist",
    event: "OpenAPI National Hackathon - IUT Tech Fest",
    location: "Gazipur, BD",
    isChampion: false,
  },
  {
    year: "2024",
    placement: "Top 9 Finalist",
    event: "SUST CSE Carnival 2024",
    location: "Sylhet, BD",
    isChampion: false,
  },
  {
    year: "2023",
    placement: "Champion",
    event: "DevFest AI Hackathon - Google Developer Group",
    location: "Cumilla, BD",
    isChampion: true,
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      aria-labelledby="recognition-heading"
      className="space-y-4"
    >
      <SectionLabel number="03" label="RECOGNITION" />
      <h2
        id="recognition-heading"
        className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold"
      >
        Hackathons &amp; awards
      </h2>
      <div className="space-y-0">
        {awards.map((award, i) => (
          <div
            key={i}
            className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-4 ${i !== awards.length - 1
              ? "border-b border-[--foreground]/10"
              : ""
              }`}
          >
            <span className="text-xs uppercase tracking-[0.15em] text-[--muted] shrink-0 w-12 font-[family-name:var(--font-body)]">
              {award.year}
            </span>
            <div className="flex-1 min-w-0">
              <p
                className={`text-[15px] font-semibold ${award.isChampion ? "text-[--accent]" : "text-[--foreground]"
                  }`}
              >
                {award.placement}
              </p>
              <p className="text-sm text-[--muted] mt-0.5">{award.event}</p>
            </div>
            <span className="text-xs text-[--muted] shrink-0 sm:text-right">
              {award.location}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
