export function SectionHeader({
  index,
  kicker,
  title,
  sub,
  align = "left",
}: {
  index?: string;
  kicker: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-6 ${a}`}>
      <div className="flex items-center gap-4">
        {index && <span className="mono-tag text-navy">{index}</span>}
        <span className="h-px w-10 bg-rule-2" aria-hidden="true" />
        <span className="mono-tag">{kicker}</span>
      </div>
      <h2 className="display-sans text-[2.4rem] md:text-[3.4rem] lg:text-[4.4rem] max-w-[22ch]">
        {title}
      </h2>
      {sub && (
        <p className="text-mute text-base md:text-lg max-w-[56ch] leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}
