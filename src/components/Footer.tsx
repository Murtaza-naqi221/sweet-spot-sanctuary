const footerLinks = {
  "Why Al Meezan": ["Company Overview", "Meet Our Leadership", "Sponsors", "Our Service Partners", "Shariah Compliance", "Careers"],
  "Customer Services": ["Separately Managed Accounts", "Investing with Us", "Value Added Services", "Get in Touch", "Branch Locator", "Complaint & Feedback"],
  "Downloads": ["Application Forms", "Constitutive Documents", "Financial Statements", "Fund Manager Reports", "GIPS Compliant Reports", "Miscellaneous"],
  "Investor Education": ["Mutual Funds Basics", "Shariah Methodology", "Magazines and Articles", "Tutorials and Videos", "Tax Credit", "FAQs"],
};

const Footer = () => (
  <footer className="bg-muted border-t border-border">
    {/* Links Grid */}
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-display text-sm font-bold text-foreground mb-4">{heading}</h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link}>
                  <a className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Contact Section */}
    <div className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand + Complaint */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">AM</div>
            <div>
              <div className="font-display font-bold text-foreground text-lg">Al Meezan</div>
              <div className="text-[10px] text-muted-foreground">Investment Management Ltd.</div>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-sm font-bold text-foreground mb-2">Complaint +</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              In case of complaint contact your Relationship Manager or call us at toll free 0800-42525 (HALAL) from anywhere in Pakistan. If your concerns are not satisfied to your satisfaction, please fill out the form and we will get back to you at the earliest.
            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-display text-sm font-bold text-foreground mb-4">Contact Us</h4>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div><span className="font-semibold text-foreground">Email:</span> info@almeezangroup.com</div>
            <div><span className="font-semibold text-foreground">Toll Free Number:</span> 0800 - 42525 (HALAL)</div>
            <div><span className="font-semibold text-foreground">SMS:</span> SMS "Invest" to 6655</div>
            <div className="pt-2">
              <span className="font-semibold text-foreground">Registered Office:</span>
              <br />Ground Floor, Block B, Finance and Trade Centre (FTC), Shahrah-e-Faisal, Karachi, 74400 - Pakistan
            </div>
          </div>
        </div>

        {/* Let us call you */}
        <div>
          <h4 className="font-display text-sm font-bold text-foreground mb-4">Let us call you</h4>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button className="w-full bg-green text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Click to Get Free Investment Advice
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-xs">
        <span>© Copyright 2025, Al Meezan Investments.</span>
        <div className="flex items-center gap-4">
          <a className="hover:underline cursor-pointer">Sitemap</a>
          <a className="hover:underline cursor-pointer">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
