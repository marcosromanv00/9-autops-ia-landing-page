export default function FAQ() {
  const faqs = [
    {
      q: "¿Cuánto tiempo tarda la implementación?",
      a: "Nuestro sprint estándar es de 2 semanas.",
    },
    {
      q: "¿Necesito conocimientos técnicos?",
      a: "No, nosotros nos encargamos de toda la configuración técnica.",
    },
    {
      q: "¿Qué pasa si necesito soporte después?",
      a: "Ofrecemos planes de mantenimiento y soporte continuo.",
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 max-w-[800px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
