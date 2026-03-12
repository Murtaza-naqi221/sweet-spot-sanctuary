import waysStacked from "@/assets/ways-stacked.jpg";

const WaysSection = () => (
  <section className="bg-background py-16">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Ways People Use <em className="text-primary not-italic">Retire Right</em>
      </h2>
      <div className="gold-bar mb-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: single large image */}
        <div className="rounded-2xl overflow-hidden h-full">
          <img 
            src={waysStacked} 
            alt="Senior man walking with friends in a park" 
            className="w-full h-full min-h-[600px] object-cover object-center" 
          />
        </div>
        {/* Right: content cards */}
        <div className="space-y-6 flex flex-col">
          <WayItem
            icon="✅"
            title="SEE HOW CHOICES AFFECT THE FUTURE"
            subtitle="Small Decisions Today Can Have A Meaningful Effect Over Time. Plans Lets You Explore What Happens If:"
            items={["You Save A Little More", "Your Expenses Change", "Your Earning Period Shortens Or Extends"]}
            cta="Understand The Impact Of Your Decisions"
          />
          <WayItem
            icon="⏱️"
            title="PLAN WITH CONFIDENCE OVER TIME"
            subtitle="Most Long-Term Savings Are Not Built Through One Large Decision."
            items={["How Steady Monthly Investing Adds Up Over Time", "Why Time Often Matters More Than Timing", "How Consistency Can Change Long-Term Outcomes"]}
            cta="See How Regular Investing Supports Long-Term Goals"
          />
        </div>
      </div>
    </div>
  </section>
);

const WayItem = ({ icon, title, subtitle, items, cta }: {
  icon: string; title: string; subtitle: string; items: string[]; cta: string;
}) => (
  <div className="border border-border rounded-2xl p-6 flex-1">
    <div className="flex items-center gap-2 mb-3">
      <span className="text-green text-lg">{icon}</span>
      <span className="text-sm font-bold text-green uppercase tracking-wide">{title}</span>
    </div>
    <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>
    <ul className="text-sm text-muted-foreground space-y-1.5 mb-5 list-disc list-inside">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
    <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
      {cta}
    </button>
  </div>
);

export default WaysSection;
