import '@/app/ui/Master/global.css';
import { inter } from '@/app/ui/Master/fonts';
import { Metadata } from 'next';
import Header from '@/app/ui/Master/Header'
import Footer from '@/app/ui/Master/Footer'
import { AntdRegistry } from '@ant-design/nextjs-registry';
 
export const metadata: Metadata = {
    title: {
      template: '%s | CanThoHub',
      default: 'CanThoHub',
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-base bg-body`}>
        <header className="border bg-white h-fit">
        <AntdRegistry>
            <Header></Header>
        </AntdRegistry>
        </header>
        <div className="container mx-auto w-9/12 my-6">
          <AntdRegistry>{children}</AntdRegistry>
        </div>
        <footer className="h-[486px] bg-white">
            <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
