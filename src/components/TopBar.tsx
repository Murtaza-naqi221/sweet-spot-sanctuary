const TopBar = () => (
  <div className="bg-primary text-primary-foreground text-xs py-2 px-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
      <span className="font-medium">0800 - 42525 (HALAL)</span>
      <div className="flex items-center gap-4 flex-wrap">
        {["About Us", "Fund Prices", "Fund Manager Reports", "Downloads", "Contact Us"].map(l => (
          <a key={l} className="hover:underline cursor-pointer opacity-90 hover:opacity-100 transition-opacity">{l}</a>
        ))}
        <button className="bg-primary-foreground/10 border border-primary-foreground/20 rounded px-3 py-1 hover:bg-primary-foreground/20 transition-colors font-medium">
          Meezan Funds Online
        </button>
        <button className="bg-secondary text-secondary-foreground rounded px-3 py-1 flex items-center gap-1.5 font-medium hover:opacity-90 transition-opacity">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          Financial Calculators
        </button>
      </div>
    </div>
  </div>
);

export default TopBar;
