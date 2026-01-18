export default function Methodology() {
  const steps = [
    {
      id: "01",
      title: "Audit IA",
      desc: "Análisis profundo de flujos manuales y detección de ineficiencias críticas.",
    },
    {
      id: "02",
      title: "Arquitectura",
      desc: "Diseño del ecosistema de agentes y selección de modelos LLM óptimos.",
    },
    {
      id: "03",
      title: "Despliegue",
      desc: "Integración final y paso a producción con monitoreo en tiempo real.",
    },
  ];

  return (
    <section className="py-section relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-surface-low/30 -z-10" />

      <div className="container mx-auto px-lg">
        <div className="text-center mb-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-md">
            Sprint de 2 Semanas
          </h2>
          <p className="text-text-body text-lg max-w-[800px] mx-auto">
            Metodología de alto impacto diseñada para entregar valor tangible
            sin fricciones corporativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-[1200px] mx-auto relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent -translate-y-1/2" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative group p-xl bg-brand-surface-medium/50 border border-brand-border rounded-bento backdrop-blur-sm hover:border-brand-primary/50 transition-all duration-500"
            >
              <div className="text-6xl font-black text-brand-primary/10 absolute top-4 right-6 group-hover:text-brand-primary/20 transition-colors">
                {step.id}
              </div>
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary font-bold mb-lg border border-brand-primary/20">
                {step.id}
              </div>
              <h3 className="text-2xl font-bold text-text-heading mb-sm">
                {step.title}
              </h3>
              <p className="text-text-body leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
