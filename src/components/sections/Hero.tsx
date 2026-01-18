import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-md text-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-brand-background -z-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full -z-10 animate-pulse-slow" />

      <div className="inline-flex items-center gap-sm px-md py-xs rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-xs font-bold mb-xl tracking-widest uppercase animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
        </span>
        Nueva era de automatización
      </div>

      <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-lg bg-clip-text text-transparent bg-gradient-to-b from-text-heading to-text-heading/50 leading-tight">
        AutOps<span className="text-brand-primary">[</span>IA
        <span className="text-brand-primary">]</span>
      </h1>

      <p className="text-xl md:text-2xl text-text-body max-w-[700px] mb-2xl leading-relaxed">
        Escala tus operaciones con agentes de IA autónomos.
        <span className="text-text-heading font-medium">
          {" "}
          Eficiencia sin precedentes
        </span>
        , desplegada en semanas.
      </p>

      <div className="flex flex-col sm:flex-row gap-md">
        <Button
          size="lg"
          className="h-14 px-xl text-lg font-bold bg-brand-primary text-brand-background hover:opacity-90 shadow-glow-primary transition-all hover:scale-105"
        >
          Agendar Consultoría
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-14 px-xl text-lg font-bold border-brand-border hover:bg-brand-surface-medium transition-all"
        >
          Explorar Soluciones
        </Button>
      </div>

      {/* Decorative Scanline */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_bottom,transparent_50%,#00F0FF_50%)] bg-[length:100%_4px] animate-scanline" />
    </section>
  );
}
