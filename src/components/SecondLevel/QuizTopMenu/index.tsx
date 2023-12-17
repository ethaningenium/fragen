import React from 'react';
import { MoreVertical, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuizTopMenu = () => {
  return (
    <div className="py-4 w-full bg-white flex pl-6 pr-12 justify-between items-center text-slate-700">
      <span className="text-lg text-zinc-700">My quizes</span>
      <Button className="flex justify-center items-center">Create new quiz</Button>
    </div>
  );
};

export default QuizTopMenu;
