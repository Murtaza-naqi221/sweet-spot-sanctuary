const cards = [
  { title: "Income", desc: "What You Earn During Your Working Years.", color: "primary" as const },
  { title: "Spending", desc: "What Your Lifestyle Costs — Today And In The Future.", color: "green" as const },
  { title: "Investment", desc: "What You Set Aside And Allow To Grow.", color: "primary" as const },
  { title: "Time", desc: "How Long Your Money Has To Work, And How Long It Needs To Last.", color: "green" as const },
];

const FinancialJourneySection = () => (
  <section className="bg-gray-section py-16">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        How Your Financial Journey <em className="text-primary not-italic">Is Looked At</em>
      </h2>
      <div className="gold-bar mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
            <div className={`py-3 px-6 ${c.color === "primary" ? "bg-primary" : "bg-green"}`}>
              <span className="text-primary-foreground font-display font-bold text-lg">{c.title}</span>
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
