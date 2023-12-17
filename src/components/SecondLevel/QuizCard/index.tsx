import React from 'react';
import { QuizResponseType } from '@/components/ThirdLevel/QuizPage/type';
import { Button } from '@/components/ui/button';
import { Inbox, Eye, FileEdit } from 'lucide-react';

const QuizCard: React.FC<{ quiz: QuizResponseType }> = ({ quiz }) => {
  return (
    <div
      key={quiz.id}
      className="p-6 flex-1 flex flex-col gap-8 bg-white shadow-2xl shadow-black/20 rounded-2xl">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium text-gray-700">{quiz.title}</h3>
        <span className="text-xs font-light text-gray-400">{quiz.createdat}</span>
        <p className="text-sm text-gray-600">{quiz.description}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <span className="flex gap-1 items-center text-sm font-light">
            {100}
            <Inbox size={16} strokeWidth={1.5} />
          </span>
          <span className="flex gap-1 items-center text-sm font-light">
            {300}
            <Eye size={16} strokeWidth={1.5} />
          </span>
        </div>
        <Button className="flex gap-2">
          Редактировать
          <FileEdit size={20} strokeWidth={2} />
        </Button>
      </div>
    </div>
  );
};

export default QuizCard;
