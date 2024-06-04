export default function getTimerValue(endDate: Date | null, startDate: Date | null, totalMinutes: number) {
  const testFinished = localStorage.getItem('testFinished');
  const timerIsSet = localStorage.getItem('timerLocal') === null;
  timerIsSet ? localStorage.setItem('timerLocal', JSON.stringify({ endDate, startDate })) : '';

  if (!testFinished) {
    if (!startDate && !endDate) {
      return {
        minutes: 0,
        seconds: 0,
      };
    }

    if (endDate === null) {
      endDate = new Date();
    }

    const diffInSecconds = startDate !== null ? Math.floor((endDate.getTime() - startDate.getTime()) / 1000) : '';
    const minutes = diffInSecconds ? totalMinutes - 1 - Math.floor(diffInSecconds / 60) : 0;
    const seconds = diffInSecconds ? (minutes !== -1 ? 60 - (diffInSecconds % 60) : 0) : 0;

    return {
      minutes,
      seconds,
    };
  }
  return {
    minutes: 0,
    seconds: 0,
  };
}
