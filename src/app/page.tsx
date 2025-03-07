import HomeLink from '@/components/custom/home-link';
import CitiesList from '../components/custom/cities-list';
import SearchBar from '../components/custom/search-bar';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="flex w-[min(100%,_750px)] flex-1 flex-col gap-5 self-center">
      <div className="mx-auto mb-2">
        <HomeLink />
      </div>
      <div>
        <Suspense>
          <SearchBar />
        </Suspense>
        <div className="mt-2 flex justify-end">
          <Link
            href="/compare"
            className="underline-offset-2 hover:underline hover:opacity-90"
          >
            Compare Cities
          </Link>
        </div>
      </div>
      <CitiesList />
    </div>
  );
}
