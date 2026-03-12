const PlanSection = () => (
  <section className="bg-background py-16">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Al Meezan <em className="text-primary">Retire Right</em> Plan
      </h2>
      <div className="gold-bar mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            The Al Meezan Retire Right Plan Calculator is designed to help you build a financially secure and Shariah-compliant future. By integrating key variables such as your current age, target retirement age, and monthly contribution capacity, the tool generates a detailed projection of your retirement corpus.
          </p>
          <p className="text-primary italic text-sm mb-4">Planning For Tomorrow, Rooted In The Values Of Today.</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Aligned strictly with Islamic banking principles, our calculator ensures that your path to retirement remains 100% Shariah-compliant. Whether you are at the dawn of your career, navigating mid-life milestones, or fine-tuning your final strategy, this tool serves as an essential guide.
          </p>
        </div>
        <div className="bg-primary-light rounded-2xl p-6 border border-primary-border/20">
          <h3 className="font-display text-xl font-bold text-foreground mb-3">
            Idea Behind <em className="text-primary">Retiring Right</em>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            You don't become financially independent at a specific age. You become financially independent when:{" "}
            <span className="text-primary font-semibold">
              Your savings and investments can support your expenses — without relying on regular income.
            </span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            That point depends on several factors, not just how much you earn or save. This tool helps you understand when that point may be reached, what it depends on, and how different choices affect the outcome.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default PlanSection;
