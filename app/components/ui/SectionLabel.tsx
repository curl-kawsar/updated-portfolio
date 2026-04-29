interface SectionLabelProps {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] text-[--muted] font-[family-name:var(--font-body)]">
      {number} - {label}
    </p>
  );
}
