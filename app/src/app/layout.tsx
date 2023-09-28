import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Providers from '@/redux/Providers';
import { MaterialUIControllerProvider } from '@/context';
import ThemeRegistry from '@/organisms/ThemeRegistry/ThemeRegistry';

const inter = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'BWMS',
  description: 'BigBlue warehouse management system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MaterialUIControllerProvider>
            <ThemeRegistry>{children}</ThemeRegistry>
          </MaterialUIControllerProvider>
        </Providers>
      </body>
    </html>
  );
}
