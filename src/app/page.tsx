import CitiesList from '../components/custom/cities-list';
import SearchBar from '../components/custom/search-bar';

export default function Home() {
  return (
    <div className="flex w-[min(100%,_750px)] flex-1 flex-col gap-4 self-center">
      <h1 className="text-5xl font-semibold">Weather</h1>
      <SearchBar />
      <CitiesList />
    </div>
  );
}
