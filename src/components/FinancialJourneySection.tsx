const cards = [
  { title: "Income", desc: "What You Earn During Your Working Years.", color: "primary" as const },
  { title: "Spending", desc: "What Your Lifestyle Costs — Today And In The Future.", color: "green" as const },
  { title: "Investment", desc: "What You Set Aside And Allow To Grow.", color: "primary" as const },
  { title: "Time", desc: "How Long Your Money Has To Work, And How Long It Needs To Last.", color: "green" as const },
];

const FinancialJourneySection = () => (
  <section className="bg-background py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle at top right, hsl(var(--primary)/0.08), transparent 70%)" }} />
    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="max-w-3xl mb-14">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-primary mb-3 block">— Framework</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
          How Your Financial Journey <em className="heading-accent">Is Looked At</em>
        </h2>
        <div className="gold-bar" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="premium-card overflow-hidden group">
            <div className={`py-4 px-6 ${c.color === "primary" ? "bg-primary" : "bg-green"} relative overflow-hidden`}>
              <span className="text-primary-foreground font-display font-bold text-xl relative z-10">{c.title}</span>
              <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-primary-foreground/10 group-hover:scale-150 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FinancialJourneySection;
