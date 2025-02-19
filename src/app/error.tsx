'use client';

import { Button } from '@/components/tremor/button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3">
      <h1 className="text-4xl">Oops!</h1>
      <h2 className="text-xl">Something went wrong</h2>
      <Button type="button" variant="secondary" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
