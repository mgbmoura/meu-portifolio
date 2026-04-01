import Image from 'next/image';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="bg-card shadow-md py-6 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/perfil.jpg"
            alt="Foto de Perfil de Marcelo Giulian"
            width={80}
            height={80}
            className="rounded-full border-2 border-primaria shadow-lg"
            priority
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primaria">
              Marcelo Giulian
            </h1>
            <p className="text-md md:text-lg text-secundaria">
              Desenvolvedor Full-Stack | O que não te desafia, não te transforma
            </p>
          </div>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
