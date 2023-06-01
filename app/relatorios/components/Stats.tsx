type Props = {
  title?: string | null; 
  value?: string | number | null;
  description?: string | null;
}

export default function Stats({description ,title ,value }: Props) {
  return (
    <div className="stat border-2 rounded-md">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
}
