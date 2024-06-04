import { SetStateAction, useEffect, useState } from 'react';
import styles from './timer.module.css';
import getTimerValue from '../../functions/getTimerValue';

export default function Timer() {

  
  const testFinished = localStorage.getItem('testFinished');
  const [localStart] = useState<Date | null>(
    localStorage.getItem('start') ? new Date(Number(localStorage.getItem('start'))) : new Date(),
  );

  const [totalMinutes] = useState(1);
  const [endDate] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(localStart !== null ? localStart : new Date());
  const [timer, setTimer] = useState(getTimerValue(endDate, startDate, totalMinutes));

  useEffect(() => {
    localStorage.getItem('start') === null ? localStorage.setItem('start', String(new Date().getTime())) : '';

    Number(localStorage.getItem('start')) < new Date().getTime()
      ? ''
      : localStorage.setItem('start', String(new Date().getTime()));
  }, [timer?.seconds]);

  useEffect(() => {
    if (!testFinished) {
      const intervalId = setInterval(() => {
        setTimer(getTimerValue(endDate, startDate, totalMinutes));
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [endDate, startDate]);

  useEffect(() => {
    if (timer?.minutes === 0 && timer.seconds === 1) {
      setStartDate(null);
    }
    if (timer?.minutes === 0 && timer.seconds === 0) {
      localStorage.removeItem('start');
      localStorage.setItem('testFinished', 'true');
      localStorage.removeItem('timerLocal');
      localStorage.removeItem('start');
      localStorage.removeItem('testFinished');
    }
  }, [timer?.seconds]);

  return (
    <div className={styles.timer__container}>
      <h3 className={styles.timer__container_text}>
        {timer?.minutes}:{timer?.seconds < 10 ? '0' : ''}
        {timer?.seconds}
      </h3>
    </div>
  );
}
