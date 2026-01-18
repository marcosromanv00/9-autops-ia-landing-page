export default function FAQ() {
  const faqs = [
    {
      q: "¿Cómo garantizan la seguridad de mis datos?",
      a: "Utilizamos encriptación de grado empresarial y opciones de despliegue local (on-premise) para asegurar que tu información nunca salga de tu control.",
    },
    {
      q: "¿Es AutOps adaptable a software heredado (legacy)?",
      a: "Sí, nuestros agentes de IA están diseñados para interactuar mediante APIs o emulación de interfaz, permitiendo automatizar sistemas antiguos sin necesidad de migraciones costosas.",
    },
    {
      q: "¿Qué retorno de inversión (ROI) puedo esperar?",
      a: "Típicamente, nuestros clientes ven una reducción del 40-60% en costos operativos y una aceleración del 3x en tiempos de respuesta durante los primeros 90 días.",
    },
    {
      q: "¿Ofrecen capacitación para el equipo?",
      a: "Totalmente. Cada kit incluye sesiones de transferencia tecnológica para que tu equipo aprenda a supervisar y ajustar los flujos de IA.",
    },
  ];

  return (
    <section className="py-section container mx-auto px-lg">
      <div className="max-w-[900px] mx-auto">
        <div className="flex flex-col items-center mb-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-md">
            Manejo de Objeciones
          </h2>
          <p className="text-text-body text-center">
            Todo lo que necesitas saber antes de dar el salto a la IA.
          </p>
        </div>

        <div className="grid gap-lg">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group p-lg bg-brand-surface-low border border-brand-border rounded-lg hover:border-brand-primary/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-text-heading mb-sm flex justify-between items-center group-hover:text-brand-primary transition-colors">
                {faq.q}
                <span className="text-brand-primary opacity-30 group-hover:opacity-100 transition-opacity">
                  ?
                </span>
              </h3>
              <p className="text-text-body leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
