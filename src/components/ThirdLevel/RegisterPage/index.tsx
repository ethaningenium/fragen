'use client';

import React, { useEffect, useState } from 'react';
import Picture from 'public/123.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import InputAuth from '@/components/SecondLevel/InputAuth';
import { getaxios, getaxioswh } from '@/lib/axios';
import { userType } from '@/lib/type/userdata';
import { useUserStore } from '@/lib/zustand';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import ErrorAlert from '@/components/SecondLevel/ErrorAlert';

const RegisterPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const setUser = useUserStore((state) => state.setUser);
  const loginfn = useMutation({
    mutationFn: ({
      email,
      password,
      fullname,
    }: {
      email: string;
      password: string;
      fullname: string;
    }) => {
      const axios = getaxios();
      return axios.post('/register', { email, password, fullname });
    },
    onSuccess: (data) => {
      const elem: userType = data.data;
      setUser(elem);
      router.push('/');
    },
    onError(error) {
      console.log(error);
      setEmail('');
      setPassword('');
      setFullname('');
    },
  });

  const sendLogin = () => {
    loginfn.mutate({ email, password, fullname });
  };

  return (
    <div className="w-screen h-screen bg-zinc-900 fixed grid place-items-center">
      <ErrorAlert isError={loginfn.isError} />
      <div className=" w-full sm:w-4/5 h-4/5 rounded-3xl bg-[#E9E9E9] p-4 flex justify-center items-center">
        <div className="w-4/5 hidden lg:flex">
          <Image src={Picture} alt="Picture" priority width={1600} />
        </div>
        <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col justify-between items-center">
          <div className="bg-slate-100">X</div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-3xl font-bold text-zinc-800">Welcome to Frager!</h1>
            <span className="text-sm text-zinc-500">Please enter your details</span>
          </div>
          <form
            className="w-full px-2 sm:px-16 flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              sendLogin();
            }}>
            <InputAuth name="text" label="Full name" value={fullname} setValue={setFullname} />
            <InputAuth name="email" label="Email" value={email} setValue={setEmail} />
            <InputAuth name="password" label="Password" value={password} setValue={setPassword} />
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="peer checked:bg-zinc-600 appearance-none bg-zinc-100 w-4 rounded-md"
                />
                <span className="text-xs text-zinc-600">Remember for 30 days</span>
              </div>
              <span className="text-xs text-zinc-400">Forgot password?</span>
            </div>
            <Button className="mt-6" onClick={sendLogin}>
              {loginfn.isPending ? 'Logining...' : 'Login'}
            </Button>
          </form>
          <div className="flex gap-2">
            <span className="text-sm text-zinc-600">{"Don't have a account?"}</span>
            <span className="text-sm font-medium text-zinc-600">Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
