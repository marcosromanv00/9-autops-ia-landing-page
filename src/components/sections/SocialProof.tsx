export default function SocialProof() {
  const logos = ["ALPHA", "NEURAL", "VORTEX", "OXY", "CYBER"];

  return (
    <section className="py-xl border-y border-brand-border bg-brand-surface-low/50 backdrop-blur-sm">
      <div className="container mx-auto px-lg">
        <p className="text-center text-xs font-bold text-text-muted mb-xl uppercase tracking-[0.3em]">
          Ecosistema de Confianza
        </p>
        <div className="flex flex-wrap justify-center items-center gap-xl md:gap-2xl opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-2xl md:text-3xl font-black tracking-tighter text-text-heading hover:text-brand-primary transition-colors cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
