import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const pillars = [
    {
      title: "Agentes Autónomos",
      description:
        "Desplegamos unidades de trabajo inteligentes que toman decisiones y ejecutan tareas complejas sin intervención humana constante.",
      className:
        "md:col-span-2 bg-gradient-to-br from-brand-surface-medium to-brand-background",
      icon: "🤖",
    },
    {
      title: "Integración Core",
      description:
        "Conectamos la IA directamente con tus herramientas actuales (CRM, ERP, Slack).",
      className: "bg-brand-surface-low border-brand-border/50",
      icon: "🔌",
    },
    {
      title: "Análisis Predictivo",
      description:
        "Anticípate a los problemas antes de que ocurran con modelos de aprendizaje profundo.",
      className: "bg-brand-surface-low border-brand-border/50",
      icon: "📈",
    },
  ];

  return (
    <section className="py-section container mx-auto px-lg">
      <div className="flex flex-col items-center mb-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-md">
          Ecosistema de Eficiencia
        </h2>
        <div className="h-1 w-24 bg-brand-primary rounded-full shadow-glow-primary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {pillars.map((pillar, i) => (
          <Card
            key={i}
            className={`${pillar.className} border-brand-border border-2 overflow-hidden group hover:border-brand-primary/50 transition-all duration-500 rounded-bento`}
          >
            <CardHeader>
              <div className="text-4xl mb-md group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <CardTitle className="text-2xl text-text-heading group-hover:text-brand-primary transition-colors">
                {pillar.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-body leading-relaxed">
                {pillar.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
