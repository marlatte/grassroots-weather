import Link from 'next/link';

export default function HomeLink() {
  return (
    <Link
      href="/"
      className="block bg-gradient-to-t from-blue-400 to-blue-950 bg-clip-text text-3xl font-semibold text-transparent hover:opacity-90 sm:text-4xl dark:from-blue-400 dark:to-blue-100"
    >
      ClimaCast
    </Link>
  );
}
