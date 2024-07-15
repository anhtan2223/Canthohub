import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer';
 
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
      <body className={`${inter.className} text-base bg-body`}>
        <header className="border-b-2 bg-white border-black h-[152px]">
            <Header></Header>
        </header>
        <div className="container mx-auto w-9/12 my-6">
            {children}
        </div>
        <footer className="h-[486px] bg-white">
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
