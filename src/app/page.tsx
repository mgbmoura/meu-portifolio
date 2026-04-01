import Image from 'next/image';

export default function HomePage() {
  const skills = [
    'HTML5 & CSS3',
    'JavaScript (ES6+)',
    'React & Node.js',
    'SQL & NoSQL',
    'Git & GitHub',
    'APIs RESTful',
  ];

  const projects = [
    {
      title: 'Página de Perfil Pessoal',
      description: 'Criação desta página de perfil semântica e responsiva, utilizando Next.js, Tailwind CSS e boas práticas.',
      link: 'https://github.com/mgbmoura',
    },
  ];

  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main column */}
          <div className="lg:flex-grow">
            <section id="sobre" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-primaria mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r from-primaria to-secundaria">
                Sobre Mim
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-texto-principal">
                <p>
                  Sou um desenvolvedor em formação, apaixonado por tecnologia e sempre curioso para entender como as coisas funcionam por trás das telas. Estou em constante aprendizado, buscando evoluir a cada desafio, projeto e linha de código escrita.
                </p>
                <p>
                  Mesmo sem uma experiência sólida ainda, tenho uma grande vontade de crescer na área e me aprimorar nas boas práticas do desenvolvimento web — tanto no front-end quanto no back-end. Acredito que com dedicação, consistência e humildade para aprender, posso construir soluções cada vez melhores e mais úteis para o mundo real.
                </p>
              </div>
            </section>

            <section id="habilidades" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-primaria mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r from-primaria to-secundaria">
                Habilidades
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-lg border border-primaria bg-card text-texto-principal p-4 flex items-center justify-center hover:transform hover:-translate-y-1 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <p className="text-center font-semibold">{skill}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="projetos" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-primaria mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r from-primaria to-secundaria">
                Projetos de Estudo
              </h2>
              <div className="grid md:grid-cols-1 gap-6">
                {projects.map((project) => (
                  <div key={project.title} className="rounded-lg border border-primaria bg-card text-texto-principal shadow-sm hover:shadow-xl transition-shadow duration-300 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight text-secundaria mb-4">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primaria text-primaria-texto hover:bg-primaria/90 h-10 px-4 py-2 mt-4">
                      Ver no GitHub
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Aside column */}
          <aside className="lg:w-1/3 lg:sticky top-20 self-start">
            <div className="rounded-lg border border-primaria bg-card text-texto-principal shadow-lg p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-secundaria mb-4">Redes Sociais</h3>
              <div className="flex flex-col space-y-3">
                 <a href="https://www.linkedin.com/in/marcelo-giulian" target="_blank" rel="noopener noreferrer" className="flex items-center text-primaria font-semibold hover:underline">
                  LinkedIn
                </a>
                <a href="https://github.com/mgbmoura" target="_blank" rel="noopener noreferrer" className="flex items-center text-primaria font-semibold hover:underline">
                  GitHub
                </a>
                <a href="https://www.instagram.com/mrcl_moura_/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primaria font-semibold hover:underline">
                  Instagram
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Contact Section */}
      <section id="contato" className="bg-card w-full scroll-mt-20">
        <div className="container mx-auto text-center py-12 px-4">
          <h2 className="text-3xl font-bold text-primaria mb-4">Entre em Contato</h2>
          <p className="text-lg mb-6 text-texto-principal">Estou disponível para novos desafios e colaborações. Vamos conversar!</p>
          <a href="mailto:mrclgln10@gmail.com" className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium text-primaria-texto h-11 px-8 bg-primaria hover:bg-primaria/80 font-bold">
            mrclgln10@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}
