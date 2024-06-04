import styles from '../question.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../../../store/slices/allDataSlice';
import { checkedCompare, textValueAnswer } from '../../../functions/helpers';
import { EventType, IRootStoreType, QuestionPropType, VariantsType } from '../../../types/Types';

export default function QuestionElement({ type }: QuestionPropType) {
  const dispatch = useDispatch();
  const questNumber = useSelector((state: IRootStoreType) => state.allDataReducer.questNumber);
  const currentData = useSelector((state: IRootStoreType) => state.allDataReducer.data);
  const currentAnswers = useSelector((state: IRootStoreType) => state.allDataReducer.data)[questNumber]?.userAnswer;
  const localData = localStorage.getItem('testData') ? JSON.parse(localStorage.getItem('testData') || '') : '';
  const testData = localData ? localData : currentData;
  const variants = testData[questNumber]?.answers;

  const typeSelect = (type: string) => {
    let result;
    if (type === 'single') {
      result = 'radio';
    }
    if (type === 'many') {
      result = 'checkbox';
    }
    if (type === 'short') {
      result = 'text';
    }
    if (type === 'detailed') {
      result = 'textarea';
    }
    return result;
  };
  const typeSelectInput = (type: string) => {
    let result;
    if (type === 'single' || type === 'many') {
      result = 'select';
    }
    if (type === 'short') {
      result = 'text';
    }
    if (type === 'detailed') {
      result = 'textarea';
    }
    return result;
  };

  const typeAnswer = (el_id?: number, e?: EventType) => {
    if (typeSelect(type) === 'radio') {
      dispatch(updateData([el_id]));
    }
    if (typeSelect(type) === 'checkbox') {
      dispatch(updateData([...currentAnswers, el_id]));
    }
    if (typeSelect(type) === 'text') {
      dispatch(updateData([e?.target.value]));
    }
    if (typeSelect(type) === 'textarea') {
      dispatch(updateData([e?.target.value]));
    }
  };

  return (
    <div className={styles.content__container_answers}>
      {variants
        ? variants.map((el: VariantsType, index: number) => {
            return (
              <div key={index} className={styles.container__answers_content}>
                <span className={styles.container__answers_id}>{el.id}</span>

                {typeSelectInput(type) === 'select' && (
                  <input
                    checked={checkedCompare(el.id, testData[questNumber].userAnswer)}
                    onChange={() => {
                      typeAnswer(el.id);
                    }}
                    type={typeSelect(type)}
                    className={styles.container__answers_input}
                  />
                )}

                <span className={styles.container__answers_text}>{el.answer}</span>
              </div>
            );
          })
        : ''}
      {typeSelectInput(type) === 'text' && (
        <input
          value={
            textValueAnswer(questNumber, currentAnswers, testData)!=='undefined'
              ? textValueAnswer(questNumber, currentAnswers, testData)
              : ''
          }
          onChange={(e) => {
            typeAnswer(undefined, e);
          }}
          type={typeSelect(type)}
          className={styles.container__answers_input}
        />
      )}
      {typeSelectInput(type) === 'textarea' && (
        <textarea
          value={
            textValueAnswer(questNumber, currentAnswers, testData)!=='undefined'
              ? textValueAnswer(questNumber, currentAnswers, testData)
              : ''
          }
          onChange={(e) => {
            typeAnswer(undefined, e);
          }}
          className={styles.container__answers_input}
        />
      )}
    </div>
  );
}
