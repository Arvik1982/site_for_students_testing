import { useEffect } from 'react';
import styles from './content.module.css';
import getDataApi from '../../functions/getDataApi';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../store/slices/allDataSlice';
import Question from '../Question/Question';
import { IRootStoreType } from '../../types/Types';

export default function ContentBox() {
  const currentData = useSelector((state: IRootStoreType) => state.allDataReducer.data);
  const localData = localStorage.getItem('testData') ? JSON.parse(localStorage.getItem('testData') || '') : '';
  const testData = localData ? localData : currentData;
  const questNumber = useSelector((state: IRootStoreType) => state.allDataReducer.questNumber);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData(getDataApi()));
  }, []);

  return (
    <div className={styles.content__container}>
      <span className={styles.content__container_title}>{testData ? testData[questNumber]?.title : ''}</span>
      <Question />
    </div>
  );
}
