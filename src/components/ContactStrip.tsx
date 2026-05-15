const items = [
  { icon: "📞", title: "Toll Free Number  0800 - 42525 (HALAL)", sub: "For Free Investment Advice" },
  { icon: "💬", title: 'SMS "Invest" to 6655', sub: "For Our Investment Advisor To Connect With You" },
  { icon: "📍", title: "Find Your Nearest Branch", sub: "And Visit Us For A Quick Investment Discussion" },
];

const ContactStrip = () => (
  <div className="bg-background border-y border-border">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
      {items.map((c, i) => (
        <div key={i} className="flex items-start gap-4 group">
          <span className="w-12 h-12 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors flex items-center justify-center text-2xl shrink-0">{c.icon}</span>
          <div>
            <div className="text-sm font-semibold text-foreground mb-1">{c.title}</div>
            <div className="text-xs text-muted-foreground leading-relaxed">{c.sub}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ContactStrip;
