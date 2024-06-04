import Progress from '../Progress/Progress';
import Timer from '../Timer/Timer';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__container_top}>
        <h2>Тестирование</h2>
        <Timer />
      </div>
      <div className={styles.header__container_progress}>
        <Progress />
      </div>
    </div>
  );
}
