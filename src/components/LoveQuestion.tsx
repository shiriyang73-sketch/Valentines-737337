import { useState } from "react";

interface LoveQuestionProps {
  question: string;
  options: string[];
  onAnswer: () => void;
  answered: boolean;
}

const LoveQuestion = ({ question, options, onAnswer, answered }: LoveQuestionProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const handleSelect = (idx: number) => {
    setSelected(idx);
    onAnswer();
  };

  const handleNoHover = () => {
    setNoPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 100,
    });
  };

  return (
    <div className={`bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border transition-all duration-500 ${answered ? "ring-2 ring-primary/30" : ""}`}>
      <h3 className="font-display text-xl md:text-2xl text-foreground mb-6 text-center italic">
        {question}
      </h3>
      <div className="flex flex-wrap gap-3 justify-center items-center relative min-h-[60px]">
        {options.map((opt, idx) => {
          const isYes = opt.toLowerCase().includes("yes") || opt.toLowerCase().includes("of course") || opt.toLowerCase().includes("absolutely") || opt.toLowerCase().includes("forever") || opt.toLowerCase().includes("always") || opt.toLowerCase().includes("definitely");
          const isNo = opt.toLowerCase().includes("no") || opt.toLowerCase().includes("never") || opt.toLowerCase().includes("maybe not");

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              onMouseEnter={isNo ? handleNoHover : undefined}
              className={`
                px-6 py-3 rounded-full font-handwriting text-lg transition-all duration-300
                ${selected === idx
                  ? "bg-primary text-primary-foreground scale-110 shadow-xl"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                }
                ${answered && selected !== idx ? "opacity-40" : ""}
              `}
              style={
                isNo && !selected
                  ? {
                      transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                      transition: "transform 0.3s ease",
                    }
                  : undefined
              }
              disabled={answered}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <p className="text-center mt-4 font-handwriting text-accent text-xl animate-gentle-bounce">
          I knew it! 💕
        </p>
      )}
    </div>
  );
};

export default LoveQuestion;

