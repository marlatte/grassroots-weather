import Link from 'next/link';

export default function HomeLink() {
  return (
    <Link
      href="/"
      className="block text-3xl font-semibold hover:opacity-90 sm:text-4xl"
    >
      Weather
    </Link>
  );
}
