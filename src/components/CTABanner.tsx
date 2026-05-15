const CTABanner = () => (
  <div className="relative overflow-hidden gradient-hero">
    <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 80% 50%, hsl(var(--accent)/0.4), transparent 60%)" }} />
    <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-6 flex-wrap gap-4">
      <div className="flex items-center gap-4">
        <span className="w-12 h-12 rounded-full bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center text-2xl">🔑</span>
        <span className="text-base text-primary-foreground">
          Open Your <strong className="text-accent">'Investment Account'</strong> Wherever You Are, Whenever You Want!
        </span>
      </div>
      <button className="bg-primary-foreground text-primary px-7 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-lg">
        Open Your Digital Account →
      </button>
    </div>
  </div>
);

export default CTABanner;
