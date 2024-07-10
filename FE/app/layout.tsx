import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: {
      template: '%s | CanThoHub',
      default: 'CanThoHub',
    },
    description: 'The official Next.js Learn Dashboard built with App Router.',
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-color text-base`}>
        <header className=" bg-slate-600">HEADER</header>
        <div className="container mx-auto w-9/12 my-6">
            {children}
        </div>
        <footer className="bg-slate-300 h-[120px]">FOOTER</footer>
      </body>
    </html>
  );
}
