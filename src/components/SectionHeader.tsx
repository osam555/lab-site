export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-accent">{eyebrow}</p>
      )}
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
      {description && <p className="mt-3 max-w-2xl leading-relaxed text-muted">{description}</p>}
    </header>
  );
}
