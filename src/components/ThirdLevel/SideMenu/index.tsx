'use client';

import React, { useEffect } from 'react';
import Tabs from '@/components/FirstLevel/SideMenuTabs';
import { LogOut } from 'lucide-react';
import { data } from './data';
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/lib/zustand';
import { userType } from '@/lib/type/userdata';
import { useRouter } from 'next/navigation';
import { getaxioswh } from '@/lib/axios';

const UserInfo: React.FC<{ user: userType | null }> = ({ user }) => {
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

  if (!user) {
    return <div className="flex w-72 justify-between items-center h-10"></div>;
  }

  return (
    <div className="flex w-72 justify-between items-center">
      <div className="flex gap-3">
        <div className="w-14 h-14 bg-zinc-400 rounded-full"></div>
        <div className="flex flex-col justify-center">
          <span className="text-lg text-gray-700">{user?.fullname}</span>
          <span className="text-sm text-gray-400">{user?.email}</span>
        </div>
      </div>
      <Button
        size={'icon'}
        variant={'outline'}
        onClick={() => {
          setUser(null);
          router.replace('/auth/login');
        }}>
        <LogOut />
      </Button>
    </div>
  );
};

const SideMenu = () => {
  const router = useRouter();
  const navList = data;
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (!user) {
      const token = window.localStorage.getItem('token');
      if (token) {
        const axios = getaxioswh(token);
        axios.get('/me').then((res) => {
          const data: userType = res.data;
          setUser(data);
        });
      } else {
        router.replace('/auth/login');
      }
    }
  }, [user,router,setUser]);

  return (
    <div className="h-screen flex flex-col py-4 px-6 justify-between shadow-2xl shadow-slate-950/10 z-10">
      <div className="flex flex-col gap-4">
        <div className="bg-slate-100 w-full py-2 text-2xl text-slate-800 font-bold pl-6 rounded-md">
          Logo
        </div>
        <div className=" flex flex-col gap-2 ">
          {navList.map((elem) => {
            return <Tabs key={elem.id} elem={elem} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <UserInfo user={user} />
        <Button variant={'default'} size={'lg'}>
          получить премиум
        </Button>
      </div>
    </div>
  );
};

export default SideMenu;
