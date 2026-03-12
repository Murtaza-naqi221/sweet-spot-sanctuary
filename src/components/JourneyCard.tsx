const stages = [
  { amt: "₨240K", label: "Starting Out", age: "Age 24", height: "25%" },
  { amt: "₨8.7M", label: "Growing", age: "Age 34", height: "55%" },
  { amt: "₨47M", label: "Accelerating", age: "Age 44", height: "85%" },
  { amt: "₨211M", label: "Freedom! 🎉", age: "Age 50", height: "100%", isFinal: true },
];

const JourneyCard = () => (
  <div className="bg-background rounded-2xl shadow-lg border border-border p-6 max-w-lg w-full">
    <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-semibold text-center mb-5">
      Your Journey to Financial Freedom
    </div>
    <div className="flex items-end justify-center gap-6 mb-4">
      {stages.map((s, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div className="w-10 h-16 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary-foreground" />
            </div>
          </div>
          <div className="text-xs font-bold text-foreground">{s.amt}</div>
          <div className="w-4 h-10 bg-muted rounded-full overflow-hidden relative">
            <div
              className={`absolute bottom-0 w-full rounded-full transition-all ${s.isFinal ? 'bg-gradient-to-t from-green-dark to-green' : 'bg-primary'}`}
              style={{ height: s.height }}
            />
          </div>
          <div className="text-[10px] text-muted-foreground">{s.label}</div>
          <div className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${s.isFinal ? 'bg-green text-secondary-foreground' : 'bg-primary text-primary-foreground'}`}>
            {s.age}
          </div>
        </div>
      ))}
    </div>
    <div className="bg-gradient-to-r from-green-dark to-green rounded-xl p-3 flex items-center justify-between mt-2">
      <div>
        <div className="text-[10px] text-green-light font-semibold tracking-wider uppercase">FIRE Achieved</div>
        <div className="text-secondary-foreground font-bold text-lg">₨211M Portfolio</div>
      </div>
      <div className="text-right">
        <div className="bg-secondary/20 text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">4% · ₨703K/mo</div>
        <div className="text-[10px] text-green-light mt-1">Withdrawn forever</div>
      </div>
    </div>
  </div>
);

export default JourneyCard;
