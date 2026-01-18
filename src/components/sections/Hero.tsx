import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
        AutOps[IA]
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mb-8">
        Propuesta de valor impactante: Automatización inteligente para equipos
        de alto rendimiento.
      </p>
      <div className="flex gap-4">
        <Button size="lg">Comenzar</Button>
        <Button size="lg" variant="outline">
          Ver Demo
        </Button>
      </div>
    </section>
  );
}
