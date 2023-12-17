' use client';
import { getaxioswh } from '@/lib/axios';
import { QuizResponseType } from './type';

export async function fetchQuiz() {
  const token = window.localStorage.getItem('token');
  if (!token) {
    throw new Error('No token');
  }
  const axios = getaxioswh(token);
  const data = await axios.get('/quiz');
  return data.data as QuizResponseType[];
}
