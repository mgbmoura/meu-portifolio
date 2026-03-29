import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Perfil Pessoal - Marcelo Giulian",
  description: "Desenvolvedor Full-Stack | O que não te desafia, não te transforma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn("min-h-screen bg-background font-sans antialiased", poppins.className)}>
        {children}
      </body>
    </html>
  );
}
