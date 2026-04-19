import { useEffect, useState, useRef } from "react";
import { ShoppingBag, X } from "lucide-react";

const firstNames = [
  "João", "Maria", "Pedro", "Ana", "Lucas", "Julia", "Gabriel", "Beatriz",
  "Rafael", "Fernanda", "Bruno", "Camila", "Diego", "Larissa", "Felipe",
  "Amanda", "Thiago", "Letícia", "Rodrigo", "Patricia", "Marcos", "Carla",
  "André", "Vanessa", "Gustavo", "Renata", "Leonardo", "Priscila", "Mateus",
  "Daniela", "Eduardo", "Mariana", "Vinicius", "Aline", "Carlos", "Bruna",
  "Fernando", "Natalia", "Ricardo", "Juliana", "Alexandre", "Carolina",
  "Henrique", "Tatiana", "Leandro", "Raquel", "Marcelo", "Luciana"
];

const cities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre",
  "Salvador", "Brasília", "Fortaleza", "Recife", "Manaus", "Goiânia",
  "Campinas", "São Luís", "Maceió", "Natal", "João Pessoa", "Florianópolis",
  "Vitória", "Belém", "Campo Grande", "Cuiabá", "Teresina", "Aracaju"
];

const getRandomName = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const initial = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return `${firstName} ${initial}.`;
};

const getRandomCity = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

const getRandomMinutes = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({
    name: "",
    city: "",
    minutes: 0
  });
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const playNotificationSound = async () => {
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        }
        
        const ctx = audioContextRef.current;
        
        if (ctx.state === 'suspended') {
          await ctx.resume();
        }
        
        const createTone = (frequency: number, startTime: number, duration: number, volume: number) => {
          const oscillator = ctx.createOscillator();
          const gainNode = ctx.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(ctx.destination);
          
          oscillator.frequency.value = frequency;
          oscillator.type = 'sine';
          
          gainNode.gain.setValueAtTime(0, ctx.currentTime + startTime);
          gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + startTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + startTime + duration);
          
          oscillator.start(ctx.currentTime + startTime);
          oscillator.stop(ctx.currentTime + startTime + duration);
        };
        
        createTone(800, 0, 0.1, 0.1);
        createTone(1000, 0.02, 0.08, 0.08);
        createTone(1400, 0.1, 0.15, 0.12);
        createTone(1800, 0.12, 0.12, 0.1);
        createTone(2200, 0.14, 0.18, 0.08);
        createTone(2600, 0.16, 0.2, 0.05);
        
      } catch (e) {
        // Silent fail
      }
    };
    
    const showNotification = () => {
      setNotification({
        name: getRandomName(),
        city: getRandomCity(),
        minutes: getRandomMinutes()
      });
      setIsVisible(true);
      
      playNotificationSound();

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialTimeout = setTimeout(showNotification, 5000);
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div
      className={`fixed bottom-24 left-4 z-50 transition-all duration-500 ${
        isVisible 
          ? "translate-x-0 opacity-100" 
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-card border border-primary/30 rounded-lg p-4 shadow-lg shadow-primary/20 max-w-xs">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-muted rounded-full p-1 hover:bg-muted/80 transition-colors"
        >
          <X className="w-3 h-3 text-muted-foreground" />
        </button>
        
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 rounded-full p-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {notification.name}
            </p>
            <p className="text-xs text-muted-foreground">
              de {notification.city}
            </p>
            <p className="text-xs text-primary font-medium mt-1">
              Comprou há {notification.minutes} min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
