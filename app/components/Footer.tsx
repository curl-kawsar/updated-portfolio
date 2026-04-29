import { Mail, Phone } from "lucide-react";
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

export default function Footer() {
  return (
    <footer id="contact" aria-label="Contact information" className="space-y-4">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-[--muted] font-[family-name:var(--font-body)]">
          07 - CONTACT
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold">
          Get in touch
        </h2>
        <p className="text-[--muted] text-sm sm:text-[15px] max-w-md">
          Open to opportunities, collaborations, and interesting conversations.
          Reach out and I&apos;ll get back to you.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <Pill href="mailto:knownaskawsar@gmail.com" variant="solid">
          <Mail size={15} strokeWidth={1.5} />
          knownaskawsar@gmail.com
        </Pill>
        <Pill href="tel:+8801847556023" variant="ghost">
          <Phone size={15} strokeWidth={1.5} />
          01847556023
        </Pill>
        <Pill href="#" variant="ghost">
          <LinkedinIcon size={15} />
          LinkedIn
        </Pill>
      </div>
      <div className="border-t border-[--foreground]/10 pt-6 mt-6">
        <p className="text-xs text-[--muted]">
          © {new Date().getFullYear()} MD. Kawsar Ahmed.
        </p>
      </div>
    </footer>
  );
}
