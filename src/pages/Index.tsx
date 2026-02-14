import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import LoveQuestion from "@/components/LoveQuestion";
import LoveReasons from "@/components/LoveReasons";
import LoveLetter from "@/components/LoveLetter";
import Countdown from "@/components/Countdown";

const questions = [
  {
    question: "Will you be my Valentine? 💝",
    options: ["Yes, absolutely!", "Of course yes!", "Yes forever!", "No (just kidding, YES!)"],
  },
  {
    question: "Do you love me as much as I love you? 🥺",
    options: ["Yes, even more!", "Always and forever!", "Definitely yes!", "Maybe not... YES!"],
  },
  {
    question: "Will you marry me someday? 💍",
    options: ["Yes, I will!", "Absolutely yes!", "Yes yes yes!", "Never... just kidding, YES!"],
  },
  {
    question: "Are you the most beautiful person ever? 🌹",
    options: ["Yes I am!", "Of course!", "Always have been!", "No... okay YES!"],
  },
];

const Index = () => {
  const [answers, setAnswers] = useState<boolean[]>(new Array(questions.length).fill(false));
  const allAnswered = answers.every(Boolean);

  const handleAnswer = (idx: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <FloatingHearts />
      <div className="relative z-10">
        <header className="pt-16 pb-8 px-4 text-center">
          <p className="font-handwriting text-accent text-2xl mb-2 animate-gentle-bounce inline-block">
            For my one and only
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4 italic">
            Elaiza
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary text-2xl animate-pulse-glow">❤️</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="font-body text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
            I made this little corner of the internet just for you, because you deserve the whole world and more.
          </p>
        </header>
        <Countdown />
        <LoveLetter />
        <section className="py-16 px-4 max-w-xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-3">
            A Few Little Questions
          </h2>
          <p className="text-center font-handwriting text-muted-foreground text-xl mb-10">
            answer honestly... or try to 😏
          </p>
          <div className="space-y-6">
            {questions.map((q, idx) => (
              <LoveQuestion
                key={idx}
                question={q.question}
                options={q.options}
                onAnswer={() => handleAnswer(idx)}
                answered={answers[idx]}
              />
            ))}
          </div>
          {allAnswered && (
            <div className="text-center mt-10 space-y-3">
              <p className="font-handwriting text-3xl text-primary animate-gentle-bounce">
                You said YES to everything! 🎉💍
              </p>
              <p className="font-body text-muted-foreground">
                As if there was ever another option 😘
              </p>
            </div>
          )}
        </section>
        <LoveReasons />
        <footer className="py-12 text-center px-4">
          <p className="font-handwriting text-2xl text-primary mb-2">
            I love you, Elaiza 💕
          </p>
          <p className="text-muted-foreground text-sm">
            Made with all my love • Happy Valentine's Day 2026
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

