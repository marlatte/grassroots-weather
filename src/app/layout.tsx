import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Github } from 'react-bootstrap-icons';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather',
  description: 'A beautiful web app for checking the weather.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-blue-100 text-slate-950 dark:bg-slate-950 dark:text-slate-50"
    >
      <body className={`${inter.className} flex h-dvh flex-col antialiased`}>
        <main className="flex flex-1 flex-col p-5 pt-7">{children}</main>
        <footer className="p-1">
          <p className="flex items-center justify-center gap-3 text-lg">
            &copy; Walker Marlatt
            <Link
              href="https://www.github.com/marlatte"
              className="transition duration-500 hover:rotate-[360deg] hover:scale-125 hover:text-sky-500"
            >
              <Github className="size-5" />
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
