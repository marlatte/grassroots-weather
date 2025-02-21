import { Button } from '@/components/tremor/Button';
import { Card } from '@/components/tremor/Card';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="grid flex-1 place-content-center">
      <Card className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-medium">Not Found</h1>
        <p className="text-pretty text-center text-lg">
          The city you searched for could not be found.
        </p>
        <Button asChild variant="secondary">
          <Link href="/" className="text-lg">
            Return Home
          </Link>
        </Button>
      </Card>
    </div>
  );
}
