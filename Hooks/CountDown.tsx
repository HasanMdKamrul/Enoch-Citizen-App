import { useEffect, useState } from "react";

interface Props {}

const CountDown = (props: Props) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const startTimmer = (): void => {
    const countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

    const x = setInterval((): void => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimmer();
  }, []);

  return <div>CountDown</div>;
};

export default CountDown;
