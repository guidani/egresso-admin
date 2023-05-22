"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  function goBack() {
    return router.back();
  }
  return (
    <Link href={""} onClick={goBack}>
      voltar
    </Link>
  );
}
