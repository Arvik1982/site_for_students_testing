import ButtonAnswer from '../Buttons/ButtonAnswer';
import ButtonBack from '../Buttons/ButtonBack';
import ButtonReset from '../Buttons/ButtonReset';
import styles from './footer.module.css';

export default function Footer() {
  return <div className={styles.footer__container}>
    <ButtonBack/>
    <ButtonAnswer/>
    <ButtonReset/>
  </div>;
}