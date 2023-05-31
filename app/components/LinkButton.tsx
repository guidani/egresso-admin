import Link from "next/link";

type Props = {
  to: string;
  label: string;
};

export default function LinkButton({ to, label }: Props) {
  return (
    <Link href={to}>
      <button className="btn btn-success hover:opacity-80">
        {label}
      </button>
    </Link>
  );
}
