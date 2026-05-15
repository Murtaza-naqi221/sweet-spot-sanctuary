import alMeezanLogo from "@/assets/al-meezan-logo.png";

const Navbar = () => (
  <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
      <div className="flex items-center gap-3">
        <img src={alMeezanLogo} alt="Al Meezan Investments" className="w-12 h-12 object-contain" />
        <div>
          <div className="font-display font-bold text-foreground text-lg leading-tight">Al Meezan</div>
          <div className="text-[10px] text-muted-foreground tracking-wide">Investment Management Ltd.</div>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground">
        {["Why Al Meezan", "First time Investor", "Regular Investor", "Customer Services", "Investor Education"].map(l => (
          <a key={l} className="hover:text-primary transition-colors cursor-pointer">{l}</a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button aria-label="Search" className="w-11 h-11 rounded-lg border border-border flex items-center justify-center hover:border-primary transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
          Digital Account Opening
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
