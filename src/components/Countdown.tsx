import { useState, useEffect } from "react";

const Countdown = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const valentines = new Date(now.getFullYear(), 1, 14);
  if (valentines < now) {
    return (
      <div className="text-center py-8">
        <p className="font-handwriting text-3xl text-primary animate-pulse-glow inline-block">
          🌹 Happy Valentine's Day, Elaiza! 🌹
        </p>
      </div>
    );
  }

  const diff = valentines.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <div className="text-center py-8">
      <p className="font-handwriting text-xl text-muted-foreground mb-3">Countdown to Valentine's Day</p>
      <div className="flex gap-4 justify-center">
        {[
          { val: days, label: "Days" },
          { val: hours, label: "Hours" },
          { val: minutes, label: "Min" },
          { val: seconds, label: "Sec" },
        ].map((item) => (
          <div key={item.label} className="bg-card border border-border rounded-xl p-3 min-w-[70px] shadow-md">
            <span className="font-display text-2xl md:text-3xl text-primary block">{item.val}</span>
            <span className="font-handwriting text-sm text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

