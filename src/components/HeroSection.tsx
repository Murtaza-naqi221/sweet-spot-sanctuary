import heroImg from "@/assets/hero-sunset.jpg";

interface HeroSectionProps {
  onStartCalculator: () => void;
}

const HeroSection = ({ onStartCalculator }: HeroSectionProps) => (
  <section className="bg-background">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
      <div className="px-6 lg:px-12 py-16 flex flex-col justify-center animate-fade-in-up">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-2">
          Retire <em className="text-primary not-italic">Right</em>
        </h1>
        <p className="text-muted-foreground text-base mb-8">Aap ke Mustaqbil ki planning</p>
      </div>
      <div className="relative min-h-[300px] lg:min-h-[400px] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <img
          src={heroImg}
          alt="Retired man enjoying sunset on beach"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
