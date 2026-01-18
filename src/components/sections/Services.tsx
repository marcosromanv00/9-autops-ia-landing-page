import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const pillars = [
    {
      title: "Optimización",
      description: "Refinamos tus procesos existentes con IA.",
      className: "md:col-span-2",
    },
    {
      title: "Automatización",
      description: "Flujos de trabajo autónomos 24/7.",
      className: "",
    },
    {
      title: "Escalabilidad",
      description: "Soluciones que crecen con tu negocio.",
      className: "",
    },
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Nuestros 3 Pilares
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <Card key={i} className={pillar.className}>
            <CardHeader>
              <CardTitle>{pillar.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{pillar.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
