import { ChangeEvent } from 'react';
import store from '../store';

export type DataElementType = {
  _id: number;
  isReady: boolean;
  title: string;
  type: string;
  answers?: Array<{ id: number; answer: string }>;
  right?: Array<number> | string;
  userAnswer: Array<number>
};

export type VariantsType = {
  answer: string;
  id: number;
};

export type IRootStoreType = ReturnType<typeof store.getState>;
export type QuestionPropType = {
  type: string;
};
export type EventType = {
  e?: ChangeEvent<HTMLInputElement>;
  target: (EventTarget & HTMLInputElement) | (EventTarget & HTMLTextAreaElement);
};
