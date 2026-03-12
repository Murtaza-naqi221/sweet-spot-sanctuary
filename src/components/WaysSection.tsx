const WaysSection = () => (
  <section className="bg-background py-16">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Ways People Use <em className="text-primary">Retire Right</em>
      </h2>
      <div className="gold-bar mb-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl p-8 flex items-center justify-center" style={{ background: "linear-gradient(155deg, hsl(270 60% 96%), hsl(145 55% 94%))" }}>
          <div className="bg-background rounded-2xl shadow-lg border border-border p-6 max-w-sm w-full">
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-semibold text-center mb-4">
              Your Retirement Journey
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-primary mx-auto mb-1" />
                <div className="text-[9px] text-muted-foreground">Age 24</div>
              </div>
              <span className="text-primary-border text-sm">→</span>
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-primary mx-auto mb-1" />
                <div className="text-[9px] text-muted-foreground">Age 44</div>
              </div>
              <span className="text-primary-border text-sm">→</span>
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-green mx-auto mb-1" />
                <div className="text-[9px] text-green font-bold">Age 50 🎉</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-dark to-green rounded-xl p-3 flex items-center justify-between">
              <div>
                <div className="text-[9px] text-green-light font-semibold uppercase">FIRE Achieved</div>
                <div className="text-secondary-foreground font-bold">₨211M</div>
              </div>
              <div className="bg-secondary/20 text-secondary-foreground text-[10px] font-semibold px-3 py-1 rounded-full">
                Retire at 50
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <WayItem
            title="See How Choices Affect The Future"
            subtitle="Small decisions today can have a meaningful effect over time."
            description="Plans lets you explore what happens if:"
            items={["You save a little more", "Your expenses change", "Your earning period shortens or extends"]}
            cta="Understand the Impact of your decisions →"
          />
          <WayItem
            title="Plan With Confidence Over Time"
            subtitle="Most long-term savings are not built through one large decision."
            items={["How steady monthly investing adds up over time", "Why time often matters more than timing", "How consistency can change long-term outcomes"]}
            cta="See How Regular Investing Supports Long-Term Goals →"
          />
        </div>
      </div>
    </div>
  </section>
);

const WayItem = ({ title, subtitle, description, items, cta }: {
  title: string; subtitle: string; description?: string; items: string[]; cta: string;
}) => (
  <div className="border border-border rounded-2xl p-6">
    <div className="flex items-center gap-2 mb-3">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="hsl(var(--green-light))" stroke="hsl(var(--green))" strokeWidth="1.5" />
        <polyline points="8 12 11 15 16 9" stroke="hsl(var(--green))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-sm font-semibold text-green">{title}</span>
    </div>
    <div className="font-display text-lg font-bold text-foreground mb-2">{subtitle}</div>
    {description && <p className="text-sm text-muted-foreground mb-2">{description}</p>}
    <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
    <button className="text-primary text-sm font-semibold hover:underline">{cta}</button>
  </div>
);

export default WaysSection;
