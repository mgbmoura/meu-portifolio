'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Agora inclui 'inicio'
    const sections = ['inicio', 'sobre', 'habilidades', 'projetos', 'contato'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80; // Ajustado para a altura da barra de navegação

      let currentSection = '';
      // Caso especial para o topo da página
      if (window.scrollY < 200) {
        currentSection = 'inicio';
      } else {
        for (const sectionId of sections) {
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            const sectionTop = sectionElement.offsetTop;
            const sectionHeight = sectionElement.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              currentSection = sectionId;
              break;
            }
          }
        }
      }
      
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentSection = 'contato';
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    // Novo link adicionado
    { href: '#inicio', id: 'inicio', label: 'Início' },
    { href: '#sobre', id: 'sobre', label: 'Sobre' },
    { href: '#habilidades', id: 'habilidades', label: 'Habilidades' },
    { href: '#projetos', id: 'projetos', label: 'Projetos' },
    { href: '#contato', id: 'contato', label: 'Contato' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-texto-principal text-card dark:bg-card dark:text-texto-principal shadow-md">
      <ul className="flex justify-center items-center gap-4 sm:gap-10 p-4">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className={`font-semibold py-2 border-b-2 transition-all duration-300 ${ 
                activeSection === link.id 
                ? 'text-primaria border-primaria' 
                : 'border-transparent hover:border-primaria/50'
              }`}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
