import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    // Persistent timer: target 2h 47m from first visit
    const STORAGE_KEY = 'offer_timer_expiry';
    const INITIAL_TIME_MS = (2 * 60 * 60 + 47 * 60 + 30) * 1000;
    
    let expiry = localStorage.getItem(STORAGE_KEY);
    
    if (!expiry) {
      const newExpiry = Date.now() + INITIAL_TIME_MS;
      localStorage.setItem(STORAGE_KEY, newExpiry.toString());
      expiry = newExpiry.toString();
    }

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = parseInt(expiry!) - now;
      return Math.max(0, difference);
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const left = calculateTimeLeft();
      setTimeLeft(left);
      if (left <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-3 rounded-full animate-pulse hover:scale-110 transition-transform duration-300 shadow-lg shadow-destructive/20 border border-destructive-foreground/20">
      <Clock className="w-5 h-5" />
      <span className="font-bold tabular-nums">
        OFERTA EXPIRA EM: {formatNumber(hours)}h {formatNumber(minutes)}m {formatNumber(seconds)}s
      </span>
    </div>
  );
};
