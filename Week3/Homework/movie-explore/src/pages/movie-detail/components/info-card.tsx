interface InfoCardProps {
  label: string;
  value: string;
}

export default function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="bg-surface text-body flex flex-col gap-4 rounded-lg px-8.5 py-7.5">
      <p className="text-muted">{label}</p>
      <p className="text-white">{value}</p>
    </div>
  );
}
