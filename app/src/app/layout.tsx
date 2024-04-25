import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Providers from '@/redux/Providers';
import { MaterialUIControllerProvider } from '@/context';
import { SWRProvider } from '@/components/molecules/SWRProvider';
import ThemeRegistry from '@/components/organisms/ThemeRegistry/ThemeRegistry';
import '@/core/dependencies';
import './style.css';

const inter = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Van monitoring',
  description: 'BigBlue cold storage warehouse',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MaterialUIControllerProvider>
            <ThemeRegistry>
              <SWRProvider>{children}</SWRProvider>
            </ThemeRegistry>
          </MaterialUIControllerProvider>
        </Providers>
      </body>
    </html>
  );
}
