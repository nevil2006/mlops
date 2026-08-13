interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={`mb-16 max-w-4xl ${
        align === "center"
          ? "mx-auto text-center"
          : "text-left"
      }`}
    >

      <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-lime-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-7 max-w-2xl text-base leading-8 text-white/45 md:text-lg">
          {description}
        </p>
      )}

    </div>
  );
}