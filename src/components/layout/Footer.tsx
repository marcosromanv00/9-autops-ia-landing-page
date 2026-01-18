export default function Footer() {
  return (
    <footer className="py-2xl border-t border-brand-border bg-brand-background">
      <div className="container mx-auto px-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-xl mb-xl">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-text-heading mb-md">
              AutOps<span className="text-brand-primary">[IA]</span>
            </div>
            <p className="text-text-body max-w-[350px] leading-relaxed">
              Ingeniería de procesos impulsada por agentes autónomos. Elevamos
              la eficiencia de tu empresa al siguiente nivel tecnológico.
            </p>
          </div>
          <div>
            <h4 className="text-text-heading font-bold mb-lg uppercase text-xs tracking-widest">
              Legal
            </h4>
            <ul className="space-y-md text-sm">
              <li>
                <a
                  href="#"
                  className="text-text-body hover:text-brand-primary transition-colors"
                >
                  Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-body hover:text-brand-primary transition-colors"
                >
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-body hover:text-brand-primary transition-colors"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-text-heading font-bold mb-lg uppercase text-xs tracking-widest">
              Connect
            </h4>
            <ul className="space-y-md text-sm">
              <li>
                <a
                  href="#"
                  className="text-text-body hover:text-brand-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-body hover:text-brand-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-body hover:text-brand-primary transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-xl border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} AutOps[IA]. Built for the future of
            work.
          </p>
          <div className="flex gap-lg">
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs text-text-muted font-mono uppercase tracking-tighter">
              System Status: All systems nominal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
