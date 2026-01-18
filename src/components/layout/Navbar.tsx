export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter">
          AutOps<span className="text-primary">[IA]</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Metodología
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Precios
          </a>
        </div>
        <button className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
          Contacto
        </button>
      </div>
    </nav>
  );
}
