'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function ErrorAlert({
  isError,
  Title = 'Error fetching',
  Desc = 'Please, try again some minutes after',
}: {
  isError: boolean;
  Title?: string;
  Desc?: string;
}) {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setMount(true);
      }, 10);
      setTimeout(() => {
        setMount(false);
      }, 3000);
    }
  }, [isError]);

  return isError ? (
    <Alert
      variant="destructive"
      className={cn('absolute w-72 bg-white -top-32 duration-300 left-1/2 -translate-x-1/2', {
        'top-6': mount,
      })}>
      <AlertTitle>{Title}</AlertTitle>
      <AlertDescription>{Desc}</AlertDescription>
    </Alert>
  ) : null;
}
