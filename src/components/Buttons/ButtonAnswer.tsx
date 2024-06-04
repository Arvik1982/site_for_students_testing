import { useDispatch } from 'react-redux';
import { setNextNumber } from '../../store/slices/allDataSlice';

export default function ButtonAnswer() {
  const dispatch = useDispatch();
  const answerHandleClick = () => {
    dispatch(setNextNumber());
  };
  return <button onClick={answerHandleClick}> Ответить </button>;
}
