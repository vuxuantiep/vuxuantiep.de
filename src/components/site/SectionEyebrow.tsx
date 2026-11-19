/** Eyebrow-Label mit kleinem Zierelement darunter (Linie–Raute–Linie), wie im Mockup. */
export function SectionEyebrow({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "flex flex-col items-center" : ""}>
      <div className="text-xs uppercase tracking-[0.2em]" style={{ color: "oklch(0.659 0.09 78)" }}>
        {children}
      </div>
      <div className="mt-2 flex items-center gap-2" style={{ color: "oklch(0.659 0.09 78)" }}>
        <span className="h-px w-9 bg-current opacity-60" />
        <span className="h-1.5 w-1.5 rotate-45 bg-current opacity-80" />
        <span className="h-px w-9 bg-current opacity-60" />
      </div>
    </div>
  );
}
