export default function Methodology() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Sprint de 2 Semanas
        </h2>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto mb-12">
          De la idea a la producción en tiempo récord. Nuestra metodología ágil
          garantiza resultados tangibles rápido.
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-8 max-w-[1000px] mx-auto">
          <div className="flex-1 p-6 bg-background rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">01</div>
            <h3 className="text-xl font-semibold mb-2">Diagnóstico</h3>
            <p className="text-sm text-muted-foreground">
              Identificamos cuellos de botella y oportunidades.
            </p>
          </div>
          <div className="flex-1 p-6 bg-background rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">02</div>
            <h3 className="text-xl font-semibold mb-2">Construcción</h3>
            <p className="text-sm text-muted-foreground">
              Desarrollo intensivo de la solución.
            </p>
          </div>
          <div className="flex-1 p-6 bg-background rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">03</div>
            <h3 className="text-xl font-semibold mb-2">Entrega</h3>
            <p className="text-sm text-muted-foreground">
              Despliegue y optimización final.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
