export default function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-xl font-bold mb-4">AutOps[IA]</div>
            <p className="text-muted-foreground max-w-[300px]">
              Revolucionando la eficiencia operativa mediante inteligencia
              artificial avanzada.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#">Privacidad</a>
              </li>
              <li>
                <a href="#">Términos</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          © {new Date().getFullYear()} AutOps[IA]. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
