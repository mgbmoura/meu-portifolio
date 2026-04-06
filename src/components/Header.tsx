import Image from 'next/image';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
  return (
    <header id="inicio" className="bg-primaria text-primaria-texto shadow-md py-10 px-4 md:px-8 relative scroll-mt-16">
      <div className="absolute top-6 right-6">
        <ThemeSwitcher />
      </div>
      <div className="container mx-auto flex flex-col items-center text-center gap-4">
              <Image
        src="/profile.png" // Corrigido para o nome de arquivo correto
        alt="Foto de Perfil de Marcelo Giulian"
        width={128}
        height={128}
        className="rounded-full border-4 border-white shadow-lg"
          priority
      />
      <h1 className="text-4xl font-bold">Marcelo Giulian</h1>
      <p className="text-lg mt-2">
        Desenvolvedor Full-Stack | O que não te desafia, não te transforma
      </p>
      </div>
    </header>
  );
}
