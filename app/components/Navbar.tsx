import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4">
      <Link href={"/"}>Inicio</Link>
      <Link href={"/cursos"}>Cursos</Link>
      <Link href={"/campus"}>Campus</Link>
      <Link href={"/egressos"}>Egressos</Link>
    </nav>
  );
}
