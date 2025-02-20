import { Button } from '@/components/tremor/button';
import { Card } from '@/components/tremor/card';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="grid flex-1 place-content-center">
      <Card className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <p className="text-3xl font-light sm:text-4xl">404</p>
          <div className="h-5/6 w-px shrink-0 bg-current" />
          <p className="text-lg sm:text-xl">Page not found</p>
        </div>
        <Button asChild variant="secondary">
          <Link href="/">Go Home</Link>
        </Button>
      </Card>
    </div>
  );
}
