import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import Pill from "./ui/Pill";

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Recognition", href: "#recognition" },
  { label: "Leadership", href: "#leadership" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function IdentityColumn() {
  return (
    <aside className="lg:sticky lg:top-8 lg:self-start">
      <div className="space-y-3 lg:space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
        {/* Profile photo */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]">
          <Image
            src="/kawsar-profile.jpg"
            alt="MD. Kawsar Ahmed - Software Engineer"
            width={176}
            height={176}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Name and title */}
        <div className="space-y-2 sm:space-y-3">
          <h1
            className="font-[family-name:var(--font-display)] font-bold leading-[1.1]"
            style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
          >
            Kawsar Ahmed
          </h1>
          <p className="text-sm sm:text-base font-medium text-[--foreground]">
            Software Engineer · Data Science Major
          </p>
          <p className="flex items-center justify-center lg:justify-start gap-1.5 text-xs sm:text-sm text-[--muted]">
            <MapPin size={14} strokeWidth={1.5} />
            Cumilla, Bangladesh
          </p>
        </div>

        {/* Navigation - horizontal on mobile, vertical on desktop */}
        <nav aria-label="Primary navigation">
          {/* Mobile: horizontal centered nav */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[--muted] hover:text-[--foreground] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Desktop: vertical nav */}
          <ul className="hidden lg:block space-y-1.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-sm text-[--muted] hover:text-[--foreground] transition-colors py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact pills */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-2.5">
          <Pill href="mailto:knownaskawsar@gmail.com" variant="solid">
            <Mail size={15} strokeWidth={1.5} />
            <span className="hidden sm:inline">Email</span>
            <span className="sm:hidden">Mail</span>
          </Pill>
          <Pill href="tel:+8801847556023" variant="ghost">
            <Phone size={15} strokeWidth={1.5} />
            Call
          </Pill>
          <Pill href="#" variant="ghost">
            <LinkedinIcon size={15} />
            LinkedIn
          </Pill>
        </div>
      </div>
    </aside>
  );
}
