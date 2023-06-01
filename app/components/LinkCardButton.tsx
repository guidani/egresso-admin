import Link from "next/link";

type Props = {
  to: string;
  label: string;
  icon?: any;
};

export default function LinkCardButton({ to, label, icon }: Props) {
  return (
    <Link
      href={to}
      className="flex flex-col justify-center items-center border-solid border-2 border-green-400 rounded-md gap-2 w-64 h-64 aspect-auto bg-white hover:opacity-50"
    >
      {icon}
      <p className="text-4xl break-all ">{label}</p>
    </Link>
  );
}
