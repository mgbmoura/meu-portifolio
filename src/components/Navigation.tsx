export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-card text-texto-principal shadow-md">
      <ul className="flex justify-center items-center gap-4 sm:gap-10 p-4">
        <li><a href="#sobre" className="font-semibold hover:text-primaria transition-colors">Sobre</a></li>
        <li><a href="#habilidades" className="font-semibold hover:text-primaria transition-colors">Habilidades</a></li>
        <li><a href="#projetos" className="font-semibold hover:text-primaria transition-colors">Projetos</a></li>
        <li><a href="#contato" className="font-semibold hover:text-primaria transition-colors">Contato</a></li>
      </ul>
    </nav>
  );
}
