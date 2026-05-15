import heroImg from "@/assets/hero-sunset.jpg";

interface HeroSectionProps {
  onStartCalculator: () => void;
}

const HeroSection = ({ onStartCalculator }: HeroSectionProps) => (
  <section className="relative w-full overflow-hidden bg-background">
    <div className="relative min-h-[560px] lg:min-h-[640px] flex items-center">
      <img
        src={heroImg}
        alt="Retired man enjoying sunset on beach"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
         <div className="lg:col-span-7 animate-fade-in-up">
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-primary-foreground/90 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            Shariah Compliant Planning
          </span>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-4">
            Retire
            <br />
            <em className="not-italic text-accent">Right.</em>
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl font-light mb-10 max-w-lg">
            Aap ke <span className="font-semibold">Mustaqbil</span> ki planning — built on the values of today, secured for tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onStartCalculator}
              className="bg-primary-foreground text-primary px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Start Your Plan →
            </button>
            <button className="border border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm">
              Learn More
            </button>
          </div>
         </div>
         <div className="lg:col-span-5 hidden lg:block animate-fade-in-up" style={{ animationDelay: "200ms" }}>
           <div className="glass rounded-3xl p-6 shadow-2xl">
             <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Trusted Returns</div>
             <div className="space-y-3">
               {[
                 { label: "Equity", value: "17.24%" },
                 { label: "Debt", value: "9.87%" },
                 { label: "Money Market", value: "9.56%" },
               ].map((s) => (
                 <div key={s.label} className="flex items-center justify-between border-b border-border/50 last:border-0 pb-2 last:pb-0">
                   <span className="text-sm text-foreground/80">{s.label}</span>
                   <span className="font-display font-bold text-2xl heading-accent">{s.value}</span>
                 </div>
               ))}
             </div>
             <div className="text-[10px] text-muted-foreground mt-3">CAGR* — Indicative Returns</div>
           </div>
         </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
