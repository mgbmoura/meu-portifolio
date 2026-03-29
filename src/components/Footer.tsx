'use client';

import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // This ensures the code runs only on the client, after hydration
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-foreground text-background text-center p-6">
      <p className="text-sm">&copy; {year} Marcelo Giulian. Desenvolvido como parte da Atividade 4 - Codifica Edu.</p>
    </footer>
  );
}
