import { UserButton } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import LogoIfpi from "../public/topo_ifpi.png";
import AuthProvider from "./Providers/AuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Egresso Administrativo",
  description: "Painel administrativo do sistema de egressos.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body className={inter.className}>
          <header className="w-full bg-green-500 h-16">
            <div className="container mx-auto flex items-center justify-between">
              <Link href={"/"}>
                <Image src={LogoIfpi} alt="Logo ifpi" width={64} height={64} />
              </Link>
              <p className="text-2xl ml-4 text-white">Sistema Egressos</p>
              <UserButton afterSignOutUrl="/" />
            </div>
          </header>
          <div className="container mx-auto">{children}</div>
        </body>
      </html>
    </AuthProvider>
  );
}
