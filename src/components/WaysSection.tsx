import waysStacked from "@/assets/ways-stacked.jpg";
import Reveal from "@/components/Reveal";

const WaysSection = () => (
  <section className="gradient-soft py-24">
    <div className="max-w-7xl mx-auto px-6">
      <Reveal>
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-primary mb-3 block">— Use Cases</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
            Ways People Use <em className="heading-accent">Retire Right</em>
          </h2>
          <div className="gold-bar" />
        </div>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-3xl overflow-hidden group h-full" style={{ boxShadow: "var(--shadow-card)" }}>
            <img 
              src={waysStacked} 
              alt="Senior man walking with friends in a park" 
              className="w-full h-full object-cover object-center max-h-[560px] group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </Reveal>
        <div className="space-y-4 flex flex-col">
          <Reveal delay={120}>
            <WayItem
              icon="✅"
              title="SEE HOW CHOICES AFFECT THE FUTURE"
              subtitle="Small Decisions Today Can Have A Meaningful Effect Over Time. Plans Lets You Explore What Happens If:"
              items={["You Save A Little More", "Your Expenses Change", "Your Earning Period Shortens Or Extends"]}
              cta="Understand The Impact Of Your Decisions"
            />
          </Reveal>
          <Reveal delay={220}>
            <WayItem
              icon="⏱️"
              title="PLAN WITH CONFIDENCE OVER TIME"
              subtitle="Most Long-Term Savings Are Not Built Through One Large Decision."
              items={["How Steady Monthly Investing Adds Up Over Time", "Why Time Often Matters More Than Timing", "How Consistency Can Change Long-Term Outcomes"]}
              cta="See How Regular Investing Supports Long-Term Goals"
            />
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

const WayItem = ({ icon, title, subtitle, items, cta }: {
  icon: string; title: string; subtitle: string; items: string[]; cta: string;
}) => (
  <div className="premium-card p-7 flex-1 bg-background">
    <div className="flex items-center gap-3 mb-4">
      <span className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center text-lg">{icon}</span>
      <span className="text-xs font-bold text-green uppercase tracking-[0.15em]">{title}</span>
    </div>
    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{subtitle}</p>
    <ul className="text-sm text-foreground/80 space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-primary mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
      {cta}
    </button>
  </div>
);

export default WaysSection;
