"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitContactForm } from "@/app/actions";

/**
 * Contact Component: Uses React 19 Client Side state and Server Actions
 * for a seamless, no-refresh form experience.
 */
export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus("success");
        setMessage(result.message);
      } else {
        setStatus("error");
        setMessage("Hubo un error al enviar el formulario.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Algo salió mal. Por favor intentalo de nuevo.");
    }
  }

  return (
    <section id="contacto" className="py-section container mx-auto px-lg">
      <div className="glass-morphism max-w-[600px] mx-auto p-xl rounded-bento text-center">
        <div className="text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-md">
          Contacto
        </div>
        <h2 className="text-4xl font-bold mb-lg text-text-heading">
          Inicia tu Transformación
        </h2>
        <p className="text-text-body mb-xl leading-relaxed">
          Deja tu correo y un agente te contactará en menos de 24 horas para
          agendar un diagnóstico gratuito.
        </p>

        {status === "success" ? (
          <div className="p-lg bg-brand-accent/10 border border-brand-accent rounded-lg text-brand-accent font-medium animate-in fade-in zoom-in duration-500">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-md">
            <Input
              name="email"
              type="email"
              placeholder="tu@empresa.com"
              required
              className="bg-brand-surface-medium/50 border-brand-border h-12 text-text-heading focus:ring-brand-primary"
            />
            <textarea
              name="message"
              placeholder="¿Qué proceso te gustaría automatizar?"
              required
              className="w-full min-h-[120px] bg-brand-surface-medium/50 border-brand-border rounded-md p-md text-sm text-text-heading focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full h-12 bg-brand-primary text-brand-background font-bold text-lg hover:opacity-90 transition-all shadow-glow-primary"
            >
              {status === "loading" ? "Enviando..." : "Enviar Solicitud"}
            </Button>
            {status === "error" && (
              <p className="text-destructive text-sm mt-2">{message}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
