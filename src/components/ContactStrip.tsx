const items = [
  { icon: "📞", title: "Toll Free Number  0800 - 42525 (HALAL)", sub: "For Free Investment Advice" },
  { icon: "💬", title: 'SMS "Invest" to 6655', sub: "For Our Investment Advisor To Connect With You" },
  { icon: "📍", title: "Find Your Nearest Branch", sub: "And Visit Us For A Quick Investment Discussion" },
];

const ContactStrip = () => (
  <div className="bg-muted">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
      {items.map((c, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="text-2xl">{c.icon}</span>
          <div>
            <div className="text-sm font-semibold text-foreground">{c.title}</div>
            <div className="text-xs text-muted-foreground">{c.sub}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ContactStrip;
