import { DataElementType} from '../types/Types';

export const checkedCompare = (el: number, arrayEl: [el: number]) => {
  return arrayEl.includes(el);
};

export const textValueAnswer = (
  questNumber: number,
  currentAnswers: string | number[],
  testData: DataElementType[],
) => {
  return  String(currentAnswers?.length !== 0 ? currentAnswers : testData[questNumber]?.userAnswer[0])
      
};
