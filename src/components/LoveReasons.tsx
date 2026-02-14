import { useState } from "react";

const reasons = [
  { emoji: "😊", text: "Your beautiful smile lights up my entire world" },
  { emoji: "💬", text: "Every conversation with you feels like magic" },
  { emoji: "✨", text: "You brighten up my day even from miles away" },
  { emoji: "😂", text: "You make me laugh even on my worst days" },
  { emoji: "💪", text: "Your strength and kindness inspire me daily" },
  { emoji: "🌟", text: "You make ordinary moments extraordinary" },
  { emoji: "💝", text: "You chose me, and I'll spend forever choosing you" },
  { emoji: "🦋", text: "You still give me butterflies every single time" },
];

const LoveReasons = () => {
  const [revealed, setRevealed] = useState<boolean[]>(new Array(reasons.length).fill(false));

  const handleReveal = (idx: number) => {
    setRevealed((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <section className="py-16 px-4">
      <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-3">
        Reasons I Love You
      </h2>
      <p className="text-center font-handwriting text-muted-foreground text-xl mb-10">
        tap each one to reveal ✨
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {reasons.map((r, idx) => (
          <button
            key={idx}
            onClick={() => handleReveal(idx)}
            className={`
              rounded-xl p-5 text-left transition-all duration-500 border
              ${revealed[idx]
                ? "bg-card border-primary/20 shadow-md"
                : "bg-secondary/60 border-border hover:bg-secondary cursor-pointer hover:scale-[1.02]"
              }
            `}
          >
            {revealed[idx] ? (
              <div className="flex items-start gap-3">
                <span className="text-2xl">{r.emoji}</span>
                <p className="font-body text-foreground leading-relaxed">{r.text}</p>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 py-2">
                <span className="text-2xl">🎁</span>
                <span className="font-handwriting text-muted-foreground text-lg">Tap to open</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default LoveReasons;
