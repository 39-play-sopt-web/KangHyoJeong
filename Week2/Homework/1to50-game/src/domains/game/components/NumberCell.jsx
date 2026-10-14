export function NumberCell({ value, textClassName, onClick }) {
  if (value == null) {
    return (
      <div className="aspect-square w-full animate-flash rounded-2xl border border-dashed border-border-strong shadow-card" />
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex aspect-square w-full items-center justify-center
        rounded-2xl border border-border bg-surface shadow-card animate-flash
        ${textClassName} font-semibold tabular-nums
        cursor-pointer transition-colors duration-300 ease-out hover:bg-border/30`}
    >
      {value}
    </button>
  );
}
