import { useDispatch } from 'react-redux';
import { setNextNumber } from '../../store/slices/allDataSlice';
import styles from './buttons.module.css';

export default function ButtonAnswer() {
  const dispatch = useDispatch();
  const answerHandleClick = () => {
    dispatch(setNextNumber());
  };
  return (
    <button className={styles.button} onClick={answerHandleClick}>
      {' '}
      Ответить{' '}
    </button>
  );
}
