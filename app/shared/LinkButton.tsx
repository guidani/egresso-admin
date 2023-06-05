import Link from "next/link";

type Props = {
  to: string;
  label: string;
  icon?: any;
};

export default function LinkButton({ to, label, icon }: Props) {
  return (
    <Link href={to} className="btn btn-lg btn-success hover:opacity-80 gap-2">
        {icon}
      <button>
        {label}
      </button>
    </Link>
  );
}
