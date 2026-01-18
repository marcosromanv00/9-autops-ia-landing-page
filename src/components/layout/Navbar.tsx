export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-background/80 backdrop-blur-md border-b border-brand-border shadow-glass">
      <div className="container mx-auto px-lg h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-text-heading">
          AutOps<span className="text-brand-primary">[IA]</span>
        </div>
        <div className="hidden md:flex gap-xl text-sm font-medium">
          <a
            href="#"
            className="text-text-body hover:text-brand-primary transition-colors"
          >
            Servicios
          </a>
          <a
            href="#"
            className="text-text-body hover:text-brand-primary transition-colors"
          >
            Metodología
          </a>
          <a
            href="#"
            className="text-text-body hover:text-brand-primary transition-colors"
          >
            Precios
          </a>
        </div>
        <button className="bg-brand-primary text-brand-background px-lg py-sm rounded-full text-sm font-bold shadow-glow-primary hover:opacity-90 transition-all hover:scale-105 active:scale-95">
          Contacto
        </button>
      </div>
    </nav>
  );
}
