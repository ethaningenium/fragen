'use client';

import React from 'react';
import QuizTopMenu from '@/components/SecondLevel/QuizTopMenu';
import { useQuery } from '@tanstack/react-query';
import { fetchQuiz } from './fetch';
import ErrorAlert from '@/components/SecondLevel/ErrorAlert';
import LoadingAlert from '@/components/SecondLevel/LoadingAlert';
import QuizCard from '@/components/SecondLevel/QuizCard';

const QuizPage = () => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['quiz'],
    queryFn: fetchQuiz,
  });
  console.log(data);

  return (
    <div className="w-full bg-slate-100 max-h-screen overflow-hidden">
      <LoadingAlert isLoading={isLoading} />
      <ErrorAlert
        isError={isError}
        Title="Error to fetching quiz"
        Desc="Please, refresh page again"
      />
      <QuizTopMenu />
      <div className="overflow-y-scroll h-full">
        <div className="w-full flex flex-wrap gap-8 p-8">
          {data?.map((elem) => {
            return <QuizCard key={elem.id} quiz={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
