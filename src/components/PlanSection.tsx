import ideaFamily from "@/assets/idea-family.png";
import Reveal from "@/components/Reveal";

interface PlanSectionProps {
  onStartCalculator: () => void;
}

const PlanSection = ({ onStartCalculator }: PlanSectionProps) => (
  <section className="gradient-soft py-24">
    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.4), transparent 70%)" }} />

      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-primary" />
              <span className="text-[11px] tracking-[0.35em] uppercase font-semibold text-primary">The Plan</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05]">
              Al Meezan
              <br />
              <em className="heading-accent">Retire Right</em>
              <span className="text-foreground"> Plan</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-foreground/70 text-lg leading-relaxed">
              The Al Meezan Retire Right Plan Calculator is designed to help you build a financially secure and Shariah-compliant future. By integrating key variables such as your current age, target retirement age, and monthly contribution capacity, the tool generates a detailed projection of your retirement corpus.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-14 mb-12 relative overflow-hidden"
          style={{ boxShadow: "var(--shadow-elegant)" }}>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, hsl(var(--accent)/0.6), transparent 70%)" }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
                Planning For Tomorrow, <em className="not-italic text-accent">Rooted In The Values Of Today.</em>
              </h3>
              <p className="text-primary-foreground/85 text-base leading-relaxed max-w-2xl">
                Aligned strictly with Islamic banking principles, our calculator ensures that your path to retirement remains 100% Shariah-compliant. Whether you are at the dawn of your career, navigating mid-life milestones, or fine-tuning your final strategy, this tool serves as an essential guide.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <button
                onClick={onStartCalculator}
                className="bg-primary-foreground text-primary px-7 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Retire Right Calculator
                <span className="bg-primary/10 w-7 h-7 rounded-full flex items-center justify-center text-xs">🔢</span>
              </button>
              <button className="bg-accent text-accent-foreground px-7 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
                Retirement Guide
                <span className="bg-accent-foreground/20 w-7 h-7 rounded-full flex items-center justify-center text-xs">↓</span>
              </button>
              <button className="border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-primary-foreground/10 transition-colors">
                Retirement Plans
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs">↗</span>
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        {/* Idea Behind Retiring Right */}
        <div className="bg-card rounded-3xl overflow-hidden border border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-primary mb-3">— Philosophy</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Idea Behind <em className="heading-accent">Retiring Right</em>
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-3">
              You don't become financially independent at a specific age. You become financially independent when{" "}
              <span className="text-primary font-bold">
                Your savings and Investments can support your expenses — without relying on regular income.
              </span>
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              That point depends on several factors, not just how much you earn or save.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              This tool helps you understand when that point may be reached, what it depends on, and how different choices affect the outcome.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden">
            <img
              src={ideaFamily}
              alt="Father and son playing"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default PlanSection;
