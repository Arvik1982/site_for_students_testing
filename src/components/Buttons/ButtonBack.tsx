import { useDispatch } from 'react-redux';
import { setPrevNumber } from '../../store/slices/allDataSlice';

export default function ButtonBack() {
  const dispatch = useDispatch();
  const answerHandleClick = () => {
    dispatch(setPrevNumber());
  };
  return <button onClick={answerHandleClick}> Назад </button>;
}
