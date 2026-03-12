const cards = [
  { icon: "💰", title: "Income", desc: "What you earn during your working years." },
  { icon: "🛒", title: "Spending", desc: "What your lifestyle costs today and in the future." },
  { icon: "📈", title: "Investment", desc: "What you set aside and allow to grow." },
  { icon: "⏳", title: "Time", desc: "How long your money has to work, and how long it needs to last." },
];

const FinancialJourneySection = () => (
  <section className="bg-gray-section py-16">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        How Your Financial Journey <em className="text-primary">Is Looked At</em>
      </h2>
      <div className="gold-bar mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">{c.icon}</div>
            <div className="font-display text-lg font-bold text-foreground mb-2">{c.title}</div>
            <div className="gold-bar mb-3" style={{ width: 24 }} />
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FinancialJourneySection;
