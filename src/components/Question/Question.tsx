import styles from './question.module.css';
import { useSelector } from 'react-redux';
import QuestionElement from './QuestionElement/QuestionElement';
import { IRootStoreType } from '../../types/Types';

export default function Question() {
  const currentData = useSelector((state: IRootStoreType) => state.allDataReducer.data);
  const questNumber = useSelector((state: IRootStoreType) => state.allDataReducer.questNumber);
  const localData = localStorage.getItem('testData') ? JSON.parse(localStorage.getItem('testData') || '') : '';
  const testData = localData ? localData : currentData;
  const type = testData[questNumber]?.type;

  return (
    <div className={styles.content__container}>
      <QuestionElement type={type} />
    </div>
  );
}
