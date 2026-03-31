import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Seu Nome - Desenvolvedor Web",
  description: "Portfólio de um desenvolvedor web apaixonado por tecnologia.",
};

export default function Home() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React',
    'Next.js', 'Node.js', 'Python', 'SQL', 'Git'
  ];

  const projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição breve do projeto. Tecnologias usadas, desafios superados, etc.',
      link: '#'
    },
    {
      title: 'Projeto 2',
      description: 'Descrição breve do projeto. Tecnologias usadas, desafios superados, etc.',
      link: '#'
    },
  ];

  return (
    <>
      {/* Cabeçalho e Navegação */}
      <header className="w-full sticky top-0 bg-fundo bg-opacity-90 backdrop-blur-sm z-10 py-4 shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 md:space-x-12">
            <a href="#sobre" className="hover:text-primaria transition-colors">Sobre</a>
            <a href="#habilidades" className="hover:text-primaria transition-colors">Habilidades</a>
            <a href="#projetos" className="hover:text-primaria transition-colors">Projetos</a>
            <a href="#contato" className="hover:text-primaria transition-colors">Contato</a>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12 md:py-20 space-y-16 md:space-y-24">

        {/* Seção Sobre */}
        <section id="sobre" className="text-center scroll-mt-20">
          <Image
            src="/profile.png"
            alt="Foto de Perfil"
            width={192}
            height={192}
            className="w-48 h-48 mx-auto mb-6 rounded-full shadow-lg md:w-56 md:h-56 object-cover"
            priority
          />
          <h1 className="text-4xl font-bold text-texto-principal mb-2 md:text-5xl">Seu Nome</h1>
          <p className="text-lg text-texto-principal mb-8 md:text-xl">Desenvolvedor Web Full-Stack</p>
        </section>

        {/* Seção de Habilidades */}
        <section id="habilidades" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-primaria mb-8 text-center">Minhas Habilidades</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {skills.map((skill) => (
              <div key={skill} className="bg-card p-4 rounded-lg shadow-md font-medium">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Projetos */}
        <section id="projetos" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-primaria mb-8 text-center">Meus Projetos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <div key={project.title} className="bg-card p-6 rounded-lg shadow-md flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-primaria">{project.title}</h3>
                <p className="text-texto-principal flex-grow mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="self-start font-semibold text-primaria hover:underline">
                  Ver Projeto &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>
        
        {/* Seção de Contato */}
        <section id="contato" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-primaria mb-8 text-center">Entre em Contato</h2>
          <div className="bg-card p-8 rounded-lg shadow-md max-w-lg mx-auto">
            <p className="text-center text-texto-principal mb-6">Estou aberto a novas oportunidades. Sinta-se à vontade para me contatar.</p>
            <a 
              href="mailto:seu-email@example.com" 
              className="block w-full text-center bg-primaria text-primaria-texto font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105"
            >
              Enviar E-mail
            </a>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="text-center py-8 mt-12">
        <p className="text-texto-principal">&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
