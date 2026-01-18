import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Kit",
      price: "$999",
      description:
        "Ideal para equipos pequeños buscando automatizar su primer proceso crítico.",
      features: [
        "1 Workflow de IA",
        "Integración con 2 apps",
        "Soporte vía Slack",
        "Dashboard básico",
      ],
      highlight: false,
    },
    {
      name: "Business Scale",
      price: "$2,499",
      description:
        "Nuestra solución más popular para empresas en crecimiento rápido.",
      features: [
        "5 Workflows Autónomos",
        "Integración Ilimitada",
        "Soporte Priority 24/7",
        "IA Training Personalizado",
      ],
      highlight: true,
    },
    {
      name: "Custom Enterprise",
      price: "Consultar",
      description:
        "Infraestructura de IA dedicada para operaciones de escala global.",
      features: [
        "Workflows Ilimitados",
        "On-premise Deployment",
        "SLA del 99.9%",
        "Account Manager Dedicado",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-section container mx-auto px-lg">
      <div className="text-center mb-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-md">
          Kits de Implementación
        </h2>
        <p className="text-text-body text-lg max-w-[600px] mx-auto">
          Inversiones modulares diseñadas para generar ROI desde la primera
          semana.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-xl items-center">
        {plans.map((plan, i) => (
          <Card
            key={i}
            className={`relative border-2 transition-all duration-300 ${
              plan.highlight
                ? "border-brand-primary bg-brand-surface-medium shadow-glow-primary scale-105 z-10"
                : "border-brand-border bg-brand-surface-low hover:border-brand-primary/30"
            } rounded-bento`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-brand-background text-[10px] font-black uppercase px-md py-1 rounded-full tracking-widest">
                Recomendado
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-text-muted uppercase tracking-widest">
                {plan.name}
              </CardTitle>
              <div className="text-5xl font-bold text-text-heading mt-md mb-sm">
                {plan.price}
              </div>
              <p className="text-sm text-text-body px-md">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <div className="h-px bg-brand-border mb-lg" />
              <ul className="space-y-md">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-md text-sm text-text-body"
                  >
                    <span className="text-brand-primary mt-1">✦</span> {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full h-12 text-md font-bold transition-all ${
                  plan.highlight
                    ? "bg-brand-primary text-brand-background hover:opacity-90"
                    : "bg-transparent border-2 border-brand-border text-text-heading hover:bg-brand-surface-medium hover:border-brand-primary"
                }`}
              >
                Empezar Ahora
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
