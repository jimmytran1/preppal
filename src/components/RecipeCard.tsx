interface RecipeCardProps {
  title: string;
  tags: string[];
  time: number;
  cal: number;
  source: string;
  protein: number;
  carbs: number;
  fat: number;
}

export default function RecipeCard({
  title,
  tags,
  time,
  cal,
  source,
  protein,
  carbs,
  fat,
}: RecipeCardProps) {
  return (
    <div className="flex rounded-2xl border border-cream overflow-hidden bg-white">
      {/* Left macro panel */}
      <div className="bg-green-dark px-4 py-4 flex flex-col justify-center gap-5 shrink-0 w-24 text-center">
        {[
          { label: "PROT", value: protein, unit: "G" },
          { label: "CARB", value: carbs, unit: "G" },
          { label: "FAT", value: fat, unit: "G" },
        ].map(({ label, value, unit }) => (
          <div key={label} className="flex flex-col gap-0.5">
            <span className="font-body text-xs font-bold tracking-widest text-white/70 uppercase">
              {label}
            </span>
            <span className="heading-sm text-white leading-none">
              {value}
              {unit}
            </span>
          </div>
        ))}
      </div>

      {/* Right content */}
      <div className="flex flex-col justify-between px-4 py-4 flex-1">
        <div className="flex flex-col gap-3">
          <h3 className="body-text text-green-dark leading-tight">{title}</h3>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-sm text-green-dark border border-cream rounded-full px-4 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <p className="font-body text-base text-green">
          {time} min &nbsp; {cal} cal &nbsp; {source}
        </p>
      </div>
    </div>
  );
}
