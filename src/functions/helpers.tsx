import { DataElementType } from '../types/Types';

export const checkedCompare = (el: DataElementType, arrayEl: DataElementType[]) => {
  return arrayEl.includes(el);
};

export const textValueAnswer = (questNumber: number, currentAnswers: [], testData: DataElementType[]) => {
  return currentAnswers?.length !== 0 ? currentAnswers : testData[questNumber]?.userAnswer[0];
};
