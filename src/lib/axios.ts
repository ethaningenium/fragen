'use client';

import axios from 'axios';

export const getaxioswh = (token: string) => {
  const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: { authorization: token },
  });
  return instance;
};

export const getaxios = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8000/',
  });
  return instance;
};
