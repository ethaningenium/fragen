import React from 'react';
import { menuTabsType } from './type';
import { cn } from '@/lib/utils';

const Tabs: React.FC<{ elem: menuTabsType }> = ({ elem }) => {
  return (
    <div
      key={elem.id}
      className={cn(
        'flex gap-4 rounded-lg w-full py-3 pl-6 text-gray-700 cursor-pointer hover:bg-gray-100 duration-200 items-center',
      )}>
      {<elem.icon />}
      <span className="text-sm font-light">{elem.title}</span>
    </div>
  );
};

export default Tabs;
