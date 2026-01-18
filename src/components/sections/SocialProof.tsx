export default function SocialProof() {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
          {/* Logos placeholders */}
          <div className="text-2xl font-bold">ALPHA</div>
          <div className="text-2xl font-bold">BETA</div>
          <div className="text-2xl font-bold">GAMMA</div>
          <div className="text-2xl font-bold">DELTA</div>
        </div>
      </div>
    </section>
  );
}
