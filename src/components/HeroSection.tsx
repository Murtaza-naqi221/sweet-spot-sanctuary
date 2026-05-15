import heroImg from "@/assets/hero-sunset.jpg";

interface HeroSectionProps {
  onStartCalculator: () => void;
}

const HeroSection = ({ onStartCalculator }: HeroSectionProps) => (
  <section className="relative w-full overflow-hidden bg-background">
    <div className="relative min-h-[560px] lg:min-h-[640px] flex items-center">
      <img
        src={heroImg}
        alt="Retired man enjoying sunset on beach"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-primary-foreground/90 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            Shariah Compliant Planning
          </span>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-4">
            Retire
            <br />
            <em className="not-italic text-accent">Right.</em>
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl font-light mb-10 max-w-lg">
            Aap ke <span className="font-semibold">Mustaqbil</span> ki planning — built on the values of today, secured for tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onStartCalculator}
              className="bg-primary-foreground text-primary px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Start Your Plan →
            </button>
            <button className="border border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
