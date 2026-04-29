interface ChipProps {
  label: string;
}

export default function Chip({ label }: ChipProps) {
  return (
    <span className="inline-block rounded-full border border-[--foreground]/15 px-3.5 py-1.5 text-xs font-medium text-[--foreground]/70 hover:border-[--foreground]/30 hover:text-[--foreground] transition-colors">
      {label}
    </span>
  );
}
