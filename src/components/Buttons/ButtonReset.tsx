import { useDispatch } from 'react-redux';
import { resetNumber } from '../../store/slices/allDataSlice';

export default function ButtonReset() {
  const dispatch = useDispatch();
  const removeHandleClick = () => {
    dispatch(resetNumber(0));
  };
  return <button onClick={removeHandleClick}> В начало</button>;
}
