const TopBar = () => (
  <div className="bg-background text-foreground text-xs py-3 px-4 border-b border-border">
    <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
      <span className="font-medium text-foreground">0800 - 42525 (HALAL)</span>
      <div className="flex items-center gap-5 flex-wrap">
        {["About Us", "Fund Prices", "Fund Manager Reports", "Downloads", "Contact Us"].map((l, i) => (
          <span key={l} className="flex items-center gap-5">
            {i > 0 && <span className="text-border">|</span>}
            <a className="hover:text-primary cursor-pointer transition-colors text-foreground/80">{l}</a>
          </span>
        ))}
        <button className="bg-primary text-primary-foreground rounded-full px-5 py-2 font-semibold hover:opacity-90 transition-opacity">
          Meezan Funds Online
        </button>
        <button className="bg-green text-primary-foreground rounded-full px-5 py-2 flex items-center gap-1.5 font-semibold hover:opacity-90 transition-opacity">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          Financial Calculators
        </button>
      </div>
    </div>
  </div>
);

export default TopBar;
