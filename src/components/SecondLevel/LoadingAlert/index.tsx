'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function LoadingAlert({
  isLoading,
  Title = 'Loading',
  Desc = 'Please wait, it will take a few seconds.',
}: {
  isLoading: boolean;
  Title?: string;
  Desc?: string;
}) {
  const [mount, setMount] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setMount(true);
      setTimeout(() => {
        setAnimation(true);
      }, 10);
    } else {
      setAnimation(false);
      setTimeout(() => {
        setMount(false);
      }, 300);
    }
  }, [isLoading]);

  return mount ? (
    <Alert
      variant="default"
      className={cn('absolute w-72 bg-white -top-32 duration-300 left-1/2 -translate-x-1/2', {
        'top-6': animation,
      })}>
      <AlertTitle>{Title}</AlertTitle>
      <AlertDescription>{Desc}</AlertDescription>
    </Alert>
  ) : null;
}
