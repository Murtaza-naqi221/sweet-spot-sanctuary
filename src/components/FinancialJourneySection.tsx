import Reveal from "@/components/Reveal";

const cards = [
  { title: "Income", desc: "What You Earn During Your Working Years.", icon: "💼", num: "01" },
  { title: "Spending", desc: "What Your Lifestyle Costs — Today And In The Future.", icon: "🛒", num: "02" },
  { title: "Investment", desc: "What You Set Aside And Allow To Grow.", icon: "📈", num: "03" },
  { title: "Time", desc: "How Long Your Money Has To Work, And How Long It Needs To Last.", icon: "⏳", num: "04" },
];

const FinancialJourneySection = () => (
  <section className="bg-background py-24 relative overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle at top right, hsl(var(--primary)/0.08), transparent 70%)" }} />
    <div className="max-w-7xl mx-auto px-6 relative">
      <Reveal>
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-primary mb-3 block">— Framework</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
            How Your Financial Journey <em className="heading-accent">Is Looked At</em>
          </h2>
          <div className="gold-bar" />
        </div>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="premium-card group h-full p-7 relative overflow-hidden">
              <div className="absolute top-4 right-5 text-[11px] font-mono text-muted-foreground/60 tracking-wider">{c.num}</div>
              <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-2xl mb-5 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="group-hover:scale-110 transition-transform">{c.icon}</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-500" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FinancialJourneySection;
