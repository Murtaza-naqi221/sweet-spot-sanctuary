import alMeezanLogo from "@/assets/al-meezan-logo.png";

const footerLinks = {
  "Why Al Meezan": ["Company Overview", "Meet Our Leadership", "Sponsors", "Our Service Partners", "Shariah Compliance", "Careers"],
  "Customer Services": ["Separately Managed Accounts", "Investing with Us", "Value Added Services", "Get in Touch", "Branch Locator", "Complaint & Feedback"],
  "Downloads": ["Application Forms", "Constitutive Documents", "Financial Statements", "Fund Manager Reports", "GIPS Compliant Reports", "Miscellaneous"],
  "Investor Education": ["Mutual Funds Basics", "Shariah Methodology", "Magazines and Articles", "Tutorials and Videos", "Tax Credit", "FAQs"],
};

const Footer = () => (
  <footer className="text-primary-foreground" style={{ background: "linear-gradient(180deg, hsl(var(--primary-deep)) 0%, hsl(285 80% 16%) 100%)" }}>
    {/* Links Grid */}
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-display text-sm font-bold text-accent mb-4 uppercase tracking-wider">{heading}</h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link}>
                  <a className="text-xs text-primary-foreground/70 hover:text-primary-foreground cursor-pointer transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Contact Section */}
    <div className="border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand + Complaint */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={alMeezanLogo} alt="Al Meezan Investments" className="w-12 h-12 object-contain bg-primary-foreground rounded-lg p-1" />
            <div>
              <div className="font-display font-bold text-primary-foreground text-lg">Al Meezan</div>
              <div className="text-[10px] text-primary-foreground/60">Investment Management Ltd.</div>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-sm font-bold text-accent mb-2">Complaint +</h5>
            <p className="text-xs text-primary-foreground/70 leading-relaxed">
              In case of complaint contact your Relationship Manager or call us at toll free 0800-42525 (HALAL) from anywhere in Pakistan. If your concerns are not satisfied to your satisfaction, please fill out the form and we will get back to you at the earliest.
            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-display text-sm font-bold text-accent mb-4 uppercase tracking-wider">Contact Us</h4>
          <div className="space-y-2 text-xs text-primary-foreground/70">
            <div><span className="font-semibold text-primary-foreground">Email:</span> info@almeezangroup.com</div>
            <div><span className="font-semibold text-primary-foreground">Toll Free:</span> 0800 - 42525 (HALAL)</div>
            <div><span className="font-semibold text-primary-foreground">SMS:</span> SMS "Invest" to 6655</div>
            <div className="pt-2">
              <span className="font-semibold text-primary-foreground">Registered Office:</span>
              <br />Ground Floor, Block B, Finance and Trade Centre (FTC), Shahrah-e-Faisal, Karachi, 74400 - Pakistan
            </div>
          </div>
        </div>

        {/* Let us call you */}
        <div>
          <h4 className="font-display text-sm font-bold text-accent mb-4 uppercase tracking-wider">Let us call you</h4>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-primary-foreground/20 rounded-full px-5 py-3 text-sm bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full border border-primary-foreground/20 rounded-full px-5 py-3 text-sm bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            <button className="w-full bg-accent text-accent-foreground px-5 py-3 rounded-full text-sm font-semibold hover:scale-[1.02] transition-transform">
              Click to Get Free Investment Advice
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-xs text-primary-foreground/70 flex-wrap gap-2">
        <span>© Copyright 2025, Al Meezan Investments.</span>
        <div className="flex items-center gap-4">
          <a className="hover:text-primary-foreground cursor-pointer transition-colors">Sitemap</a>
          <a className="hover:text-primary-foreground cursor-pointer transition-colors">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
