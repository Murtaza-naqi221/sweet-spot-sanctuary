import heroImg from "@/assets/hero-sunset.jpg";
import alMeezanLogo from "@/assets/al-meezan-logo.png";

interface HeroSectionProps {
  onStartCalculator: () => void;
}

const HeroSection = ({ onStartCalculator }: HeroSectionProps) => (
  <section className="relative w-full overflow-hidden bg-background">
    {/* Decorative layered background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.6), transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)/0.6), transparent 70%)" }} />
      <div className="absolute inset-0 grid-pattern opacity-50" />
    </div>

    <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-28 lg:pt-28 lg:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: Editorial copy */}
        <div className="lg:col-span-7 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-8 h-px bg-primary" />
            <span className="text-[11px] tracking-[0.35em] uppercase font-semibold text-primary">
              Shariah Compliant · Pakistan
            </span>
          </div>

          <h1 className="font-display font-bold text-foreground leading-[0.95] mb-6 text-[64px] md:text-[88px] lg:text-[104px] tracking-tight">
            Retire
            <br />
            <span className="heading-accent italic">Right.</span>
          </h1>

          <p className="text-foreground/70 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10">
            <span className="font-medium text-foreground">Aap ke Mustaqbil ki planning</span> — engineered on the
            values of today, secured for the generations of tomorrow.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onStartCalculator}
              className="group bg-primary text-primary-foreground pl-7 pr-3 py-2.5 rounded-full text-sm font-semibold flex items-center gap-3 hover:scale-[1.03] transition-transform"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              Start Your Plan
              <span className="w-9 h-9 rounded-full bg-primary-foreground text-primary flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
            <a className="text-sm font-semibold text-foreground/80 hover:text-primary cursor-pointer flex items-center gap-2 transition-colors">
              <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center">▶</span>
              How it works
            </a>
          </div>

          {/* Inline trust strip */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { v: "17.24%", l: "Equity CAGR*" },
              { v: "100%", l: "Shariah Compliant" },
              { v: "30+ yrs", l: "Investment Heritage" },
            ].map(s => (
              <div key={s.l} className="border-l-2 border-primary/30 pl-4">
                <div className="font-display font-bold text-2xl text-foreground">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Image collage */}
        <div className="lg:col-span-5 relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            {/* Main image */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
              <img src={heroImg} alt="Retired man enjoying sunset" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Floating glass card — top right */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-xl w-48">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-foreground/70">Live Returns</span>
              </div>
              <div className="font-display font-bold text-3xl heading-accent">17.24%</div>
              <div className="text-[11px] text-muted-foreground">Equity CAGR — VAS</div>
            </div>

            {/* Floating glass card — bottom left */}
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl w-56 flex items-center gap-3">
              <img src={alMeezanLogo} alt="" className="w-10 h-10 object-contain" />
              <div>
                <div className="text-[11px] uppercase tracking-wider font-semibold text-foreground/70">Shariah Advisor</div>
                <div className="text-xs font-bold text-foreground">Dr. Imran Usmani</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom marquee strip */}
    <div className="relative border-y border-border bg-background/60 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium overflow-x-auto whitespace-nowrap">
        <span className="text-primary font-bold">★ Awards</span>
        <span>Best Asset Manager Pakistan</span>
        <span className="text-border">/</span>
        <span>SECP Regulated</span>
        <span className="text-border">/</span>
        <span>Halal · Riba-Free</span>
        <span className="text-border">/</span>
        <span>PKR 200B+ AUM</span>
        <span className="text-border">/</span>
        <span>Dr. Imran Usmani · Shariah Advisor</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
