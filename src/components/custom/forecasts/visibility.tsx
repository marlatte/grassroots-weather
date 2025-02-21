import { Card } from '@/components/tremor/Card';
import { Eye } from 'react-bootstrap-icons';

export default function Visibility({
  visibilityMeters,
}: {
  visibilityMeters: number;
}) {
  return (
    <Card className="flex flex-col p-4">
      <div className="flex items-center justify-between dark:text-gray-300">
        <h2 className="text-lg">Visibility</h2>
        <Eye className="hidden size-5 min-[360px]:block" />
      </div>
      <div className="flex flex-1 items-center text-4xl font-semibold">
        <p className="flex items-end gap-2">
          {Math.round((0.621371 * visibilityMeters) / 1000)}
          <span className="text-3xl font-light">mi</span>
        </p>
      </div>
    </Card>
  );
}
