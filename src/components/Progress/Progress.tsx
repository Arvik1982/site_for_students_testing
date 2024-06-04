import { useSelector } from 'react-redux';
import { DataElementType, IRootStoreType } from '../../types/Types';
import styles from './progress.module.css';

export default function Progress() {
  const currentData = useSelector((state: IRootStoreType) => state.allDataReducer.data);
  const localData = localStorage.getItem('testData') ? JSON.parse(localStorage.getItem('testData') || '') : '';
  const testData = localData ? localData : currentData;
  const questNumber = useSelector((state: IRootStoreType) => state.allDataReducer.questNumber);

  return (
    <div className={styles.content}>
      {testData.map((el: DataElementType) => {
        return (
          <div
            key={el._id}
            style={
              questNumber === el._id
                ? { backgroundColor: 'red' }
                : el.isReady
                  ? { backgroundColor: '#37e237' }
                  : { backgroundColor: 'grey' }
            }
            className={styles.content_element}
          ></div>
        );
      })}
    </div>
  );
}
