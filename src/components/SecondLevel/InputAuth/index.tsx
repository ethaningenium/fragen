'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type InputType = {
  name: 'email' | 'password' | 'text';
  label: string;
  value: string;
  setValue: (value: string) => void;
};

const InputAuth: React.FC<InputType> = ({ label, name, value, setValue }) => {
  const [isfocus, setFocus] = useState(false);
  return (
    <div className="flex flex-col w-full  h-12 justify-end relative">
      <label
        htmlFor={name}
        className={cn('text-gray-400 duration-300 absolute top-3 left-2 select-none', {
          'text-balck text-xs -top-0 left-0': isfocus || !!value,
        })}>
        {label}
      </label>
      <input
        type={name}
        name={name}
        className="border-b-[1.5px] border-b-zinc-400 focus:outline-none w-full bg-transparent focus:border-b-zinc-800 z-10"
        value={value}
        onBlur={() => {
          setFocus(false);
        }}
        onFocus={() => {
          setFocus(true);
        }}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputAuth;
