import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/sidebar';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Spotiuai',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <div className="grid grid-cols-[minmax(250px,_25%)_1fr]">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
