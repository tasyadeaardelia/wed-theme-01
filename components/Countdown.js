import { useEffect, useState } from 'react';

export default function Countdown() {
  const weddingDate = new Date('2025-05-31T00:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 mb-6">
      <CountdownItem value={timeLeft.days} label="Hari" />
      <CountdownItem value={timeLeft.hours} label="Jam" />
      <CountdownItem value={timeLeft.minutes} label="Menit" />
      <CountdownItem value={timeLeft.seconds} label="Detik" />
    </div>
  );
}

function CountdownItem({ value, label }) {
  return (
    <div className="flex flex-col items-center bg-[#685952] text-[#fff] rounded-md px-4 py-2 w-16">
      <span className="text-lg font-bold">{value}</span>
      <span className="text-xs">{label}</span>
    </div>
  );
}
