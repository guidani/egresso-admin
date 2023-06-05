import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from '@clerk/localizations'
import React from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider localization={ptBR}>{children}</ClerkProvider>;
}
