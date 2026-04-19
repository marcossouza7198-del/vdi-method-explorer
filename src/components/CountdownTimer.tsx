import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 2, minutes: 47, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
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

  return (
    <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-3 rounded-full animate-pulse hover:scale-110 transition-transform duration-300">
      <Clock className="w-5 h-5" />
      <span className="font-bold">
        OFERTA EXPIRA EM: {time.hours}h {time.minutes}m {time.seconds}s
      </span>
    </div>
  );
};
