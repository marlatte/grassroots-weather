'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'react-bootstrap-icons';

export default function BackBtn() {
  const router = useRouter();
  return (
    <button
      type="button"
      className="flex items-center rounded-full p-1 hover:text-gray-300"
      onClick={() => {
        router.back();
      }}
    >
      <span className="sr-only">Home</span>
      <ChevronLeft className="relative -left-0.5 size-7" />
    </button>
  );
}
