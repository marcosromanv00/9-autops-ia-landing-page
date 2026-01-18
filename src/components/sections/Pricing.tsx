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
      name: "Modular",
      price: "Desde $999",
      features: ["1 Workflow", "Soporte Standard", "Actualizaciones"],
    },
    {
      name: "PRO",
      price: "$2,499",
      features: ["3 Workflows", "Soporte Priority", "Dashboard Analytics"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Workflows ilimitados", "Account Manager", "SLA"],
    },
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Kits y Soluciones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <Card
            key={i}
            className={i === 1 ? "border-primary shadow-lg scale-105" : ""}
          >
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="text-3xl font-bold mt-4">{plan.price}</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-primary">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={i === 1 ? "default" : "outline"}
              >
                Elegir Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
