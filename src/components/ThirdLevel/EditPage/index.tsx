'use client';

import { getaxioswh } from '@/lib/axios';
import { quizUpdateType } from '@/lib/type/quizdata';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';

async function getQuizEdit(id: string) {
  const token = window.localStorage.getItem('token');
  if(!token)return
  const axios = getaxioswh(token);
  const data = await axios.get(`/quiz/${id}`);
  return data.data as quizUpdateType;
}

const EditPage = () => {
  const { quizId } = useParams();
  const { data } = useQuery({
    queryKey: ['edit'],
    queryFn: async()=>{if(typeof quizId === 'string'){ return getQuizEdit(quizId)}},
  });
  return <div>{data?.title}</div>;
};

export default EditPage;
