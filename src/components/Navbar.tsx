import alMeezanLogo from "@/assets/al-meezan-logo.png";

const Navbar = () => (
  <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        <img src={alMeezanLogo} alt="Al Meezan Investments" className="w-10 h-10 object-contain" />
        <div>
          <div className="font-display font-bold text-foreground text-lg leading-tight">Al Meezan</div>
          <div className="text-[10px] text-muted-foreground">Investment Management Ltd.</div>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-foreground">
        {["Why Al Meezan", "First time Investor", "Regular Investor", "Customer Services", "Investor Education"].map(l => (
          <a key={l} className="hover:text-primary transition-colors cursor-pointer">{l}</a>
        ))}
      </div>
      <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
        Digital Account Opening
      </button>
    </div>
  </nav>
);

export default Navbar;
