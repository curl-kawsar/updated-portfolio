import { GraduationCap, Award } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="space-y-4">
      <SectionLabel number="06" label="EDUCATION" />
      <h2 id="education-heading" className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold">
        Academic background
      </h2>
      <article className="rounded-2xl sm:rounded-3xl bg-[--surface] p-5 sm:p-7 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]">
        <div className="space-y-5">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="shrink-0 mt-1 rounded-xl sm:rounded-2xl bg-[--surface-muted] p-2.5 sm:p-3">
              <GraduationCap size={22} strokeWidth={1.5} className="text-[--accent]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[--foreground]">
                Bangladesh Army International University of Science and Technology
              </h3>
              <p className="text-sm text-[--muted] mt-1">
                B.Sc. in Computer Science and Engineering - Data Science Major
              </p>
            </div>
          </div>
          <div className="border-t border-[--foreground]/10 pt-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[--muted]">CGPA</span>
              <span className="font-[family-name:var(--font-display)] font-bold text-2xl text-[--foreground]">3.02</span>
            </div>
            <div>
              <span className="text-sm text-[--muted]">Thesis</span>
              <p className="text-[15px] text-[--foreground] mt-1">Voice-based Emotion Recognition</p>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <Award size={16} strokeWidth={1.5} className="text-[--accent] mt-0.5 shrink-0" />
              <p className="text-[15px] text-[--foreground]">
                BAIUST National and International Distinguished Student Award - 3× recipient
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
