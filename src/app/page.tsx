import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import placeholderImages from '@/lib/placeholder-images.json';
import { Footer } from "@/components/Footer";

export default function Home() {
  const profileImage = placeholderImages.profile;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground text-center py-12 px-4">
        <Image
          src={profileImage.src}
          alt="Foto de Perfil de Marcelo Giulian"
          width={250}
          height={250}
          className="rounded-full border-4 border-white mx-auto mb-4 shadow-lg"
          data-ai-hint={profileImage["data-ai-hint"]}
          priority
        />
        <h1 className="text-4xl md:text-5xl font-bold">Marcelo Giulian</h1>
        <p className="text-lg opacity-90 mt-1">
          Desenvolvedor Full-Stack | O que não te desafia, não te transforma
        </p>
      </header>

      <nav className="sticky top-0 z-50 bg-foreground text-background shadow-md">
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 p-4">
          <li><a href="#sobre" className="font-semibold hover:text-primary transition-colors">Sobre</a></li>
          <li><a href="#habilidades" className="font-semibold hover:text-primary transition-colors">Habilidades</a></li>
          <li><a href="#projetos" className="font-semibold hover:text-primary transition-colors">Projetos</a></li>
          <li><a href="#contato" className="font-semibold hover:text-primary transition-colors">Contato</a></li>
        </ul>
      </nav>

      <main className="container mx-auto p-4 md:p-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:flex-grow">
            <section id="sobre" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-primary mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r from-primary to-secondary">
                Sobre Mim
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>Sou um desenvolvedor em formação, apaixonado por tecnologia e sempre curioso para entender como as coisas funcionam por trás das telas. Estou em constante aprendizado, buscando evoluir a cada desafio, projeto e linha de código escrita.</p>
                <p>Mesmo sem uma experiência sólida ainda, tenho uma grande vontade de crescer na área e me aprimorar nas boas práticas do desenvolvimento web — tanto no front-end quanto no back-end. Acredito que com dedicação, consistência e humildade para aprender, posso construir soluções cada vez melhores e mais úteis para o mundo real.</p>
              </div>
            </section>

            <section id="habilidades" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-primary mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r from-primary to-secondary">
                Habilidades
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['HTML5 & CSS3', 'JavaScript (ES6+)', 'React & Node.js', 'SQL & NoSQL', 'Git & GitHub', 'APIs RESTful'].map(skill => (
                  <Card key={skill} className="hover:transform hover:-translate-y-1 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <CardContent className="p-4 flex items-center justify-center">
                      <p className="text-center font-semibold text-primary">{skill}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="projetos" className="mb-12 scroll-mt-20">
               <h2 className="text-3xl font-bold text-primary mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r from-primary to-secondary">
                Projetos de Estudo
              </h2>
              <div className="grid md:grid-cols-1 gap-6">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-secondary">Página de Perfil Pessoal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Criação desta página de perfil semântica e responsiva, utilizando Next.js, Tailwind CSS e boas práticas para a Atividade 4.</p>
                    <Button asChild className="mt-4">
                      <a href="https://github.com/mgbmoura" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Ver no GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          <aside className="lg:w-1/3 lg:sticky top-20 self-start">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-secondary">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col space-y-3">
                <a href="https://www.linkedin.com/in/marcelo-giulian" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary font-semibold hover:underline">
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
                <a href="https://github.com/mgbmoura" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary font-semibold hover:underline">
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </a>
                <a href="https://www.instagram.com/mrcl_moura_/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary font-semibold hover:underline">
                  <Instagram className="mr-2 h-5 w-5" /> Instagram
                </a>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
      
      <section id="contato" className="bg-card w-full scroll-mt-20">
        <div className="container mx-auto text-center py-12 px-4">
            <h2 className="text-3xl font-bold text-primary mb-4">Entre em Contato</h2>
            <p className="text-lg mb-6">Estou disponível para novos desafios e colaborações. Vamos conversar!</p>
            <Button size="lg" asChild className="rounded-full font-bold bg-secondary hover:bg-primary">
                <a href="mailto:mrclgln10@gmail.com">mrclgln10@gmail.com</a>
            </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
