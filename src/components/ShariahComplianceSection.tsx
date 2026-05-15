const functions = [
  { title: "Selection of Investment Instruments", icon: "🧭" },
  { title: "Monitoring of Investment Management", icon: "🔍" },
  { title: "Portfolio Purification", icon: "✨" },
  { title: "Information Reporting", icon: "📄" },
];

const ShariahComplianceSection = () => (
  <section className="bg-background py-16">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Shariah <em className="text-primary not-italic">Compliance</em>
      </h2>
      <div className="gold-bar mb-8" />
      <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-12">
        We take pride to be the only asset management company in Pakistan with a sole mandate to provide Shariah compliant investment solutions to our investors. To achieve this objective, we invest in high quality Shariah compliant securities that are selected as per the guidelines laid down by the Shariah Advisor.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-primary-light rounded-2xl p-8 border border-primary-border/20">
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Shariah <em className="text-primary not-italic">Advisor</em>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            We are very particular about providing Halal and Riba-Free investment opportunities. For all our operations and investments, we draw guidance on matters related to Shariah from our Shariah Advisor{" "}
            <span className="text-primary font-semibold">Dr. Muhammad Imran Ashraf Usmani</span>, who has served as an advisor / member of Shariah Boards of several renowned institutions.
          </p>
          <p className="text-xs text-muted-foreground italic">
            Reg reference # SECP/IFD/SA/005
          </p>
        </div>

        <div className="bg-gray-section rounded-2xl p-8 border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            The <em className="text-primary not-italic">Functions</em>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            The primary role of the Shariah Advisor is to ensure compliance with Islamic Shariah principles, which includes:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {functions.map(f => (
              <li key={f.title} className="flex items-start gap-2 bg-background rounded-lg p-3 border border-border">
                <span className="text-lg">{f.icon}</span>
                <span className="text-xs font-medium text-foreground">{f.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-background border border-border rounded-2xl p-8">
        <h3 className="font-display text-2xl font-bold text-foreground mb-3">
          Corporate <em className="text-primary not-italic">Social Responsibility</em>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          At Al Meezan, we work in an ethical framework and as an entity we owe an obligation to act for the benefit of society at large. We endeavor to remain as a socially responsible institution to be considered as a reliable and trust worthy investment partner at all times.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Al Meezan promotes a culture of responsibility through its values, ethics, people, and practices — integrating business operations and values so that the interests of investors, employees and communities are reflected in everything we do.
        </p>
      </div>
    </div>
  </section>
);

export default ShariahComplianceSection;