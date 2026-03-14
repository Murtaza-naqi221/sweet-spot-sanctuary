import { useState, useCallback } from "react";
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
const LIFESTYLES = [
  { id: "modest", label: "Modest", mult: 18, desc: "Live comfortably with the basics and keep things simple." },
  { id: "comfortable", label: "Comfortable", mult: 25, desc: "Enjoy a balanced lifestyle with room for leisure and comfort." },
  { id: "luxurious", label: "Luxurious", mult: 35, desc: "Live life to the fullest with premium experiences and luxuries." },
];

const CAGR = 0.15; // 15% assumed CAGR

interface WizardProps {
  onGoHome: () => void;
}

const RetirementWizard = ({ onGoHome }: WizardProps) => {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState(24);
  const [retireAge, setRetireAge] = useState(50);
  const [saved, setSaved] = useState(0);
  const [monthly, setMonthly] = useState(20000);
  const [increment, setIncrement] = useState(10);
  const [expense, setExpense] = useState(50000);
  const [lifestyle, setLifestyle] = useState("modest");
  const [volatility, setVolatility] = useState("medium");

  const SCHEMES = [
    { id: "high", label: "High", cagr: 0.1577, desc: "Higher returns with higher volatility" },
    { id: "medium", label: "Medium", cagr: 0.1352, desc: "Balanced returns with moderate volatility" },
    { id: "low", label: "Low", cagr: 0.1167, desc: "Lower returns with lower volatility" },
    { id: "vas-debt", label: "VAS Debt", cagr: 0.0987, desc: "VAS Debt fund returns" },
    { id: "vas-equity", label: "VAS Equity", cagr: 0.1724, desc: "VAS Equity fund returns" },
    { id: "vas-money", label: "VAS Money Market", cagr: 0.0956, desc: "VAS Money Market fund returns" },
  ];

  const selectedScheme = SCHEMES.find(s => s.id === volatility)!;

  const selectedLifestyle = LIFESTYLES.find(l => l.id === lifestyle)!;

  const computeResults = useCallback(() => {
    const years = retireAge - age;
    let portfolio = saved;
    let totalContributions = saved;
    let monthlyContrib = monthly;
    const selectedCAGR = selectedScheme.cagr;
    const rows: { age: number; annual: number; cumSaved: number; profit: number; portfolio: number; fire: number }[] = [];

    for (let y = 0; y < years; y++) {
      const annualContrib = monthlyContrib * 12;
      portfolio = (portfolio + annualContrib) * (1 + selectedCAGR);
      totalContributions += annualContrib;
      const profit = portfolio - totalContributions;
      const inflatedExpense = expense * Math.pow(1.08, y + 1);
      const fireTarget = inflatedExpense * 12 * selectedLifestyle.mult;
      rows.push({
        age: age + y + 1,
        annual: annualContrib,
        cumSaved: totalContributions,
        profit,
        portfolio,
        fire: fireTarget,
      });
      monthlyContrib *= (1 + increment / 100);
    }

    const inflatedMonthlyExpense = expense * Math.pow(1.08, years);
    const fireRequired = inflatedMonthlyExpense * 12 * selectedLifestyle.mult;
    const totalProfit = portfolio - totalContributions;
    const durationYears = portfolio > 0 ? Math.floor(portfolio / (inflatedMonthlyExpense * 12)) : 0;

    // Post-retirement withdrawal simulation
    const withdrawalRows: { age: number; balance: number; withdrawal: number }[] = [];
    let postPortfolio = portfolio;
    let annualWithdrawal = inflatedMonthlyExpense * 12;
    const postReturnRate = 0.08; // conservative 8% return post-retirement
    for (let y = 0; y < 40 && postPortfolio > 0; y++) {
      withdrawalRows.push({
        age: retireAge + y,
        balance: Math.round(postPortfolio),
        withdrawal: Math.round(Math.min(annualWithdrawal, postPortfolio)),
      });
      postPortfolio = (postPortfolio - annualWithdrawal) * (1 + postReturnRate);
      annualWithdrawal *= 1.08; // inflation adjustment
      if (postPortfolio < 0) postPortfolio = 0;
    }

    return { portfolio, fireRequired, inflatedMonthlyExpense, totalContributions, totalProfit, durationYears, rows, withdrawalRows };
  }, [age, retireAge, saved, monthly, increment, expense, selectedLifestyle, selectedScheme]);

  const fmt = (n: number) => {
    if (n >= 1e9) return `₨${(n / 1e9).toFixed(1)}B`;
    if (n >= 1e6) return `₨${(n / 1e6).toFixed(1)}M`;
    if (n >= 1e3) return `₨${(n / 1e3).toFixed(0)}K`;
    return `₨${n.toFixed(0)}`;
  };

  const fmtFull = (n: number) => `PKR ${n.toLocaleString("en-PK", { maximumFractionDigits: 0 })}`;

  const next = () => setStep(s => Math.min(s + 1, 9));
  const back = () => step === 0 ? onGoHome() : setStep(s => Math.max(s - 1, 0));
  const reset = () => { setStep(0); setAge(24); setRetireAge(50); setSaved(0); setMonthly(20000); setIncrement(10); setExpense(50000); setLifestyle("modest"); setVolatility("medium"); };

  const results = step === 9 ? computeResults() : null;

  const stepLabels = ["Primary", "Scheme", "Lifestyle", "Summary"];
  const activeSection = step <= 6 ? 0 : step === 7 ? 1 : step === 8 ? 2 : 3;

  return (
    <div className="min-h-screen bg-gray-section">
      {/* Stepper */}
      <div className="bg-background border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-2">
            {stepLabels.map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    activeSection === i ? "bg-primary text-primary-foreground" :
                    activeSection > i ? "bg-green text-secondary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {activeSection > i ? "●" : i + 1}
                  </div>
                  <span className={`text-sm font-medium ${activeSection === i ? "text-foreground" : "text-muted-foreground"}`}>
                    {label}
                  </span>
                </div>
                {i < 2 && <div className={`w-16 h-0.5 mx-2 ${activeSection > i ? "bg-green" : "bg-border"}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Step 0: Disclaimer */}
        {step === 0 && (
          <WizCard>
            <div className="font-display text-2xl font-bold text-foreground mb-6">Before you start</div>
            {[
              ["This is for informational purposes:", "Keep in mind that this Illustrator is being provided for informational purposes only. It is educational in nature and not designed to be a recommendation."],
              ["You should understand your options:", "Prior to making any investment or financial decisions, an investor should seek individualized advice from personal financial, legal, tax and other professionals."],
              ["How the sample withdrawal is determined:", "On an annual basis the sample withdrawal amount is determined by the Adviser taking into account various factors, such as data on real spending behavior of retirees."],
              ["Markets will fluctuate:", "The sample withdrawal amount does not reflect changes to the Fund's net asset value after the beginning of the year."],
            ].map(([t, d], i) => (
              <div key={i} className="mb-4">
                <div className="text-sm font-bold text-foreground mb-1">{t}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
            <NavButtons back={back} next={next} nextLabel="Continue to Calculator" />
          </WizCard>
        )}

        {/* Step 1: Age */}
        {step === 1 && (
          <WizCard>
            <div className="font-display text-2xl font-bold text-foreground mb-8 text-center">How Old Are You?</div>
            <div className="flex justify-center mb-8">
              <input type="number" value={age} onChange={e => setAge(+e.target.value)} min={10} max={80}
                className="w-32 text-center text-3xl font-bold border-2 border-primary rounded-xl py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <NavButtons back={back} next={next} />
          </WizCard>
        )}

        {/* Step 2: Retire Age */}
        {step === 2 && (
          <WizCard>
            <div className="font-display text-2xl font-bold text-foreground mb-8 text-center">At What Age Would You Like To Retire?</div>
            <div className="flex justify-center mb-8">
              <input type="number" value={retireAge} onChange={e => setRetireAge(+e.target.value)} min={30} max={80}
                className="w-32 text-center text-3xl font-bold border-2 border-primary rounded-xl py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <NavButtons back={back} next={next} />
          </WizCard>
        )}

        {/* Step 3: Saved */}
        {step === 3 && (
          <WizCard>
            <div className="font-display text-2xl font-bold text-foreground mb-8 text-center">How Much Money Have You Already Saved Or Invested?</div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-lg font-semibold text-muted-foreground">PKR</span>
              <input type="number" value={saved} onChange={e => setSaved(+e.target.value)} min={0}
                className="w-48 text-2xl font-bold border-2 border-primary rounded-xl py-3 px-4 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <NavButtons back={back} next={next} />
          </WizCard>
        )}

        {/* Step 4: Monthly */}
        {step === 4 && (
          <WizCard>
            <div className="font-display text-2xl font-bold text-foreground mb-8 text-center">How Much Can You Save Or Invest Each Month?</div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-lg font-semibold text-muted-foreground">PKR</span>
              <input type="number" value={monthly} onChange={e => setMonthly(+e.target.value)} min={0}
                className="w-48 text-2xl font-bold border-2 border-primary rounded-xl py-3 px-4 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <NavButtons back={back} next={next} />
          </WizCard>
        )}

        {/* Step 5: Increment */}
        {step === 5 && (
          <WizCard>
            <div className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Do You Plan To Increase Your Monthly<br />Savings Each Year? If Yes, By How Much?
            </div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <input type="number" value={increment} onChange={e => setIncrement(+e.target.value)} min={0} max={100}
                className="w-32 text-center text-3xl font-bold border-2 border-primary rounded-xl py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <span className="text-2xl font-bold text-muted-foreground">%</span>
            </div>
            <NavButtons back={back} next={next} />
          </WizCard>
        )}

        {/* Step 6: Expenses */}
        {step === 6 && (
          <WizCard>
            <div className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              How Much Do You Spend On Average<br />Each Month Right Now?
            </div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-lg font-semibold text-muted-foreground">PKR</span>
              <input type="number" value={expense} onChange={e => setExpense(+e.target.value)} min={0}
                className="w-48 text-2xl font-bold border-2 border-primary rounded-xl py-3 px-4 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <NavButtons back={back} next={next} nextLabel="Continue To Lifestyle" />
          </WizCard>
        )}

        {/* Step 7: Volatility Scheme */}
        {step === 7 && (
          <WizCard>
            <div className="font-display text-xl font-bold text-foreground mb-6">Choose Volatility Scheme</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                {SCHEMES.map(s => (
                  <button key={s.id} onClick={() => setVolatility(s.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all flex items-center justify-between ${
                      volatility === s.id ? "border-primary bg-primary-light" : "border-border hover:border-primary-border"
                    }`}>
                    <div>
                      <span className="font-semibold text-foreground block">{s.label}</span>
                      <span className="text-sm text-muted-foreground">{(s.cagr * 100).toFixed(2)}% CAGR</span>
                    </div>
                    <span className="text-primary">→</span>
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-primary-light rounded-xl p-4 border border-primary-border/20">
                  <div className="text-sm font-medium text-foreground mb-1">{selectedScheme.label}</div>
                  <div className="text-sm text-muted-foreground">{selectedScheme.desc}</div>
                </div>
                {/* Returns Table */}
                <div className="bg-background rounded-xl border border-border overflow-hidden">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-muted">
                        <th colSpan={2} className="py-2 px-3 text-center text-foreground font-bold border-b border-border">Returns</th>
                      </tr>
                      <tr className="bg-muted">
                        <th className="py-1.5 px-3 text-left text-muted-foreground font-semibold border-b border-border">Instrument</th>
                        <th className="py-1.5 px-3 text-right text-muted-foreground font-semibold border-b border-border">CAGR*</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-2 px-3 text-foreground">Equity</td>
                        <td className="py-2 px-3 text-right text-green font-semibold">17.24%</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-3 text-foreground">Debt</td>
                        <td className="py-2 px-3 text-right text-green font-semibold">9.87%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-foreground">Money Market</td>
                        <td className="py-2 px-3 text-right text-green font-semibold">9.56%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <NavButtons back={back} next={next} nextLabel="Choose Lifestyle" />
          </WizCard>
        )}

        {/* Step 8: Lifestyle */}
        {step === 8 && (
          <WizCard>
            <div className="font-display text-xl font-bold text-foreground mb-6">Choose your lifestyle</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                {LIFESTYLES.map(l => (
                  <button key={l.id} onClick={() => setLifestyle(l.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all flex items-center justify-between ${
                      lifestyle === l.id ? "border-primary bg-primary-light" : "border-border hover:border-primary-border"
                    }`}>
                    <span className="font-semibold text-foreground">{l.label}</span>
                    <span className="text-primary">→</span>
                  </button>
                ))}
                <div className="bg-gold/10 border border-gold/20 rounded-xl p-4 mt-4">
                  <div className="text-xs font-bold text-gold-dark mb-1">Tip:</div>
                  <div className="text-xs text-muted-foreground">Pick the lifestyle you want, and we'll help you figure out the savings to get there.</div>
                </div>
              </div>
              <div className="bg-primary-light rounded-2xl p-6 border border-primary-border/20 flex flex-col">
                <div className="text-sm text-foreground mb-4 font-medium">{selectedLifestyle.desc}</div>
                <div className="text-sm text-muted-foreground">
                  You'll need about <strong className="text-foreground">{selectedLifestyle.mult}</strong> times your yearly spending to retire safely
                </div>
              </div>
            </div>
            <NavButtons back={back} next={next} nextLabel="Continue To Summary" />
          </WizCard>
        )}

        {/* Step 8: Summary */}
        {step === 8 && results && (
          <div className="bg-background rounded-2xl border border-border shadow-lg p-6 md:p-8">
            <div className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Al Meezan Smart Retirement Income Fund
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <SumStat label="Account Balance / Initial Investment" value={fmtFull(results.portfolio)} />
              <SumStat label="FIRE Amount Required" value={fmtFull(results.fireRequired)} />
              <SumStat label="Monthly Expense at Retirement" value={fmtFull(results.inflatedMonthlyExpense)} green />
              <SumStat label="Total Contributions" value={fmtFull(results.totalContributions)} />
              <SumStat label="Investment Profit" value={fmtFull(results.totalProfit)} green />
              <SumStat label="Savings Duration Post-Retirement" value={`${results.durationYears} years`} />
            </div>

            {results.portfolio >= results.fireRequired ? (
              <div className="bg-green-light border border-green/20 rounded-xl p-4 mb-6 text-center">
                <span className="text-green font-semibold text-sm">🎉 Congratulations! Your projected portfolio exceeds your FIRE target!</span>
              </div>
            ) : (
              <div className="bg-gold/10 border border-gold/20 rounded-xl p-4 mb-6 text-center">
                <span className="text-gold-dark font-semibold text-sm">Your portfolio may fall short of your FIRE target. Consider increasing contributions.</span>
              </div>
            )}

            {/* Portfolio Growth Chart */}
            <div className="mb-8">
              <div className="font-display text-lg font-bold text-foreground mb-4">Portfolio Growth</div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={results.rows.filter((_, i) => i % Math.max(1, Math.floor(results.rows.length / 20)) === 0).map(r => ({
                  age: r.age,
                  portfolio: Math.round(r.portfolio),
                  fire: Math.round(r.fire),
                }))}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="age" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tickFormatter={(v: number) => v >= 1e9 ? `${(v/1e9).toFixed(0)}B` : v >= 1e6 ? `${(v/1e6).toFixed(0)}M` : `${(v/1e3).toFixed(0)}K`} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} width={50} />
                  <Tooltip formatter={(value: number) => fmtFull(value)} labelFormatter={(label) => `Age ${label}`} />
                  <Bar dataKey="portfolio" name="Portfolio" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="fire" name="FIRE Target" fill="hsl(var(--green))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Savings & Withdrawal Chart */}
            <div className="mb-8">
              <div className="font-display text-lg font-bold text-foreground mb-1">Expected Savings & Portfolio Withdrawal</div>
              <p className="text-xs text-muted-foreground mb-4">Accumulation phase (saving) vs. decumulation phase (withdrawal in retirement)</p>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={[
                  ...results.rows.filter((_, i) => i % Math.max(1, Math.floor(results.rows.length / 15)) === 0).map(r => ({
                    age: r.age,
                    savings: Math.round(r.cumSaved),
                    portfolio: Math.round(r.portfolio),
                    phase: "Saving",
                  })),
                  ...results.withdrawalRows.filter((_, i) => i % Math.max(1, Math.floor(results.withdrawalRows.length / 15)) === 0).map(r => ({
                    age: r.age,
                    withdrawal: r.withdrawal,
                    portfolio: r.balance,
                    phase: "Withdrawal",
                  })),
                ]}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="age" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tickFormatter={(v: number) => v >= 1e9 ? `${(v/1e9).toFixed(0)}B` : v >= 1e6 ? `${(v/1e6).toFixed(0)}M` : `${(v/1e3).toFixed(0)}K`} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} width={50} />
                  <Tooltip formatter={(value: number) => fmtFull(value)} labelFormatter={(label) => `Age ${label}`} />
                  <Legend />
                  <Area type="monotone" dataKey="portfolio" name="Portfolio Balance" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.15} strokeWidth={2} />
                  <Area type="monotone" dataKey="savings" name="Total Savings" stroke="hsl(var(--green))" fill="hsl(var(--green))" fillOpacity={0.1} strokeWidth={2} />
                  <Area type="monotone" dataKey="withdrawal" name="Annual Withdrawal" stroke="hsl(var(--gold))" fill="hsl(var(--gold))" fillOpacity={0.15} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    {["Age", "Annual Contribution", "Cumulative Saved", "Investment Profit", "Portfolio Value", "FIRE Target"].map(h => (
                      <th key={h} className="text-left py-2 px-2 text-muted-foreground font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {results.rows.map((r, i) => (
                    <tr key={i} className={`border-b border-border ${r.portfolio >= r.fire ? "bg-green-light/50" : ""}`}>
                      <td className="py-1.5 px-2 font-medium text-foreground">{r.age}</td>
                      <td className="py-1.5 px-2 text-muted-foreground">{fmt(r.annual)}</td>
                      <td className="py-1.5 px-2 text-muted-foreground">{fmt(r.cumSaved)}</td>
                      <td className="py-1.5 px-2 text-green">{fmt(r.profit)}</td>
                      <td className="py-1.5 px-2 font-semibold text-foreground">{fmt(r.portfolio)}</td>
                      <td className="py-1.5 px-2 text-primary">{fmt(r.fire)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mb-4">
              <button onClick={reset} className="border border-border text-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-muted transition-colors">
                ↺ Reset
              </button>
              <button onClick={onGoHome} className="border border-border text-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-muted transition-colors">
                ⌂ Go to home
              </button>
            </div>
            <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
              *CAGR figures are based on historical performance of Al Meezan funds. Past performance does not guarantee future results. This calculator is for illustrative purposes only and does not constitute investment advice.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const WizCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-background rounded-2xl border border-border shadow-lg p-6 md:p-8">
    {children}
  </div>
);

const NavButtons = ({ back, next, nextLabel = "Next" }: { back: () => void; next: () => void; nextLabel?: string }) => (
  <div className="flex items-center justify-between mt-8">
    <button onClick={back} className="border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-muted transition-colors">
      <span className="bg-muted w-7 h-7 rounded flex items-center justify-center text-xs">←</span>
      Back
    </button>
    <button onClick={next} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
      {nextLabel}
      <span className="bg-primary-foreground/20 w-7 h-7 rounded flex items-center justify-center text-xs">→</span>
    </button>
  </div>
);

const SumStat = ({ label, value, green }: { label: string; value: string; green?: boolean }) => (
  <div className="bg-muted rounded-xl p-3">
    <div className="text-[10px] text-muted-foreground mb-1">{label}</div>
    <div className={`text-sm font-bold ${green ? "text-green" : "text-foreground"}`}>{value}</div>
  </div>
);

export default RetirementWizard;
