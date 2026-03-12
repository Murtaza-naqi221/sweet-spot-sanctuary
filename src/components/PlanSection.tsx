import ideaFamily from "@/assets/idea-family.png";

interface PlanSectionProps {
  onStartCalculator: () => void;
}

const PlanSection = ({ onStartCalculator }: PlanSectionProps) => (
  <section className="bg-background py-16">
    <div className="max-w-7xl mx-auto px-6">
      {/* Al Meezan Retire Right Plan */}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Al Meezan <em className="text-primary not-italic">Retire Right</em> Plan
      </h2>
      <div className="gold-bar mb-8" />
      <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-4">
        The Al Meezan Retire Right Plan Calculator is designed to help you build a financially secure and Shariah-compliant future. By integrating key variables such as your current age, target retirement age, and monthly contribution capacity, the tool generates a detailed projection of your retirement corpus.
      </p>

      <h3 className="font-display text-2xl font-bold text-foreground mb-2 mt-10">
        Planning For Tomorrow, <em className="text-primary not-italic">Rooted In The Values Of Today.</em>
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-8">
        Aligned strictly with Islamic banking principles, our calculator ensures that your path to retirement remains 100% Shariah-compliant. Whether you are at the dawn of your career, navigating mid-life milestones, or fine-tuning your final strategy, this tool serves as an essential guide.
      </p>

      <div className="flex flex-wrap gap-3 mb-16">
        <button
          onClick={onStartCalculator}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          Retire Right Calculator
          <span className="bg-primary-foreground/20 w-7 h-7 rounded flex items-center justify-center text-xs">🔢</span>
        </button>
        <button className="border border-border text-foreground px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-muted transition-colors">
          Retirement Guide
          <span className="bg-muted w-7 h-7 rounded flex items-center justify-center text-xs">↓</span>
        </button>
        <button className="border border-border text-foreground px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-muted transition-colors">
          Retirement Plans
          <span className="bg-muted w-7 h-7 rounded flex items-center justify-center text-xs">↗</span>
        </button>
      </div>

      {/* Idea Behind Retiring Right */}
      <div className="bg-primary-light rounded-2xl overflow-hidden border border-primary-border/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Idea Behind <em className="text-primary not-italic">Retiring Right</em>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              You don't become financially independent at a specific age. You become financially independent when{" "}
              <span className="text-primary font-bold">
                Your savings and Investments can support your expenses — without relying on regular income.
              </span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              That point depends on several factors, not just how much you earn or save.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This tool helps you understand when that point may be reached, what it depends on, and how different choices affect the outcome.
            </p>
          </div>
          <div className="relative min-h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop"
              alt="Financial discussion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PlanSection;
