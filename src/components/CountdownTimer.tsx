import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 2, minutes: 47, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-3 rounded-full animate-pulse hover:scale-110 transition-transform duration-300 shadow-lg shadow-destructive/20 border border-destructive-foreground/20">
      <Clock className="w-5 h-5" />
      <span className="font-bold tabular-nums">
        OFERTA EXPIRA EM: {formatNumber(time.hours)}h {formatNumber(time.minutes)}m {formatNumber(time.seconds)}s
      </span>
    </div>
  );
};
