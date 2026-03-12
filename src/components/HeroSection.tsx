import JourneyCard from "./JourneyCard";

interface HeroSectionProps {
  onStartCalculator: () => void;
}

const HeroSection = ({ onStartCalculator }: HeroSectionProps) => (
  <section className="bg-background">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-16 items-center">
      <div className="animate-fade-in-up">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-2">
          Retire <em className="text-primary">Right</em>
        </h1>
        <p className="text-muted-foreground text-base mb-4">Aap ke Mustaqbil ki planning</p>
        <div className="gold-bar mb-6" />
        <p className="text-muted-foreground leading-relaxed text-sm max-w-lg mb-4">
          The Al Meezan Retire Right Plan Calculator is designed to help you build a financially secure and Shariah-compliant future. By integrating key variables such as your current age, target retirement age, and monthly contribution capacity, the tool generates a detailed projection of your retirement corpus.
        </p>
        <p className="text-primary italic text-sm mb-8">
          Planning for tomorrow, rooted in the values of today.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onStartCalculator}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Retire Right Calculator
            <span className="bg-primary-foreground/20 w-7 h-7 rounded flex items-center justify-center text-xs">→</span>
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
      </div>
      <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <JourneyCard />
      </div>
    </div>
  </section>
);

export default HeroSection;
