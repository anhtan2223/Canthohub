import '@/app/ui/Master/global.css';
import { inter } from '@/app/ui/Master/fonts';
import { Metadata } from 'next';
import Header from '@/app/ui/Master/Header'
import Footer from '@/app/ui/Master/Footer'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ThemeProvider } from '@/app/themeProvider';
 
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
    <ThemeProvider>
        <html lang="en">
            <body className={`${inter.className} h-full relative text-base bg-body dark:text-dark-text dark:bg-dark transition-colors pb-12`}>
                <header className="border bg-white h-fit dark:bg-dark-secondary dark:border-dark">
                <AntdRegistry>
                    <Header></Header>
                </AntdRegistry>
                </header>
                <div className="container mx-auto w-11/12 lg:w-9/12 mb-12 lg:my-6 dark:text-dark-text dark:bg-dark">
                <AntdRegistry>{children}</AntdRegistry>
                </div>
                {/* <footer className="h-[486px] bg-white dark:text-dark-text dark:bg-dark-secondary">
                    <Footer></Footer>
                </footer> */}
            </body>
        </html>
    </ThemeProvider>
  );
}
