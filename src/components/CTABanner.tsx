const CTABanner = () => (
  <div className="border-y border-border bg-background">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 flex-wrap gap-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🔑</span>
        <span className="text-sm text-foreground">
          Open Your <strong className="text-foreground">'Investment Account'</strong> Wherever You Are, Whenever You Want!
        </span>
      </div>
      <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
        Open Your Digital Account
      </button>
    </div>
  </div>
);

export default CTABanner;
