import Link from 'next/link';

export default function HomeLink() {
  return (
    <Link
      href="/"
      className="block bg-gradient-to-t from-blue-300 to-blue-50 bg-clip-text text-3xl font-semibold text-transparent hover:opacity-90 sm:text-4xl"
    >
      ClimaCast
    </Link>
  );
}
