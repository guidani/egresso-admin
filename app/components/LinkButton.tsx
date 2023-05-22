import Link from "next/link";

type Props = {
  to: string;
  label: string;
};

export default function LinkButton({ to, label }: Props) {
  return (
    <Link href={to}>
      <button className="bg-green-700 px-8 py-2 rounded-md text-white w-full md:w-auto">
        {label}
      </button>
    </Link>
  );
}
