import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { apiGet } from '@/lib/api';
import StoreProvider from '@/app/components/StoreProvider';
import Menu from '@/app/components/Menu';
import Footer from '@/app/components/Footer';
import LocalBusinessJsonLd from '@/app/components/LocalBusinessJsonLd';
import { ToastContainer } from 'react-toastify';
import '@/assets/index.scss';

const sansFont = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-sans' });
const serifFont = Playfair_Display({ subsets: ['latin', 'latin-ext'], variable: '--font-serif' });

const defaultTitle = "LIDA és Társa 97' Kft.";
const defaultDescription = '1997 óta működő szegedi könyvelő és adótanácsadó iroda. Könyvelés, bérszámfejtés, adótanácsadás személyesen, megbízhatóan.';
const siteUrl = `https://${process.env.DOMAIN}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${defaultTitle}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    siteName: defaultTitle,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let siteData;

  try {
    const siteResponse = await apiGet('/api/v1/site');

    siteData = await siteResponse.json();
  } catch (e) {
    siteData = {
      statur: 'error',
      message: 'Hiba történt az adatok betöltése közben.'
    };
  }

  return (
    <html lang="hu" className={`${sansFont.variable} ${serifFont.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {siteData.status === 'ok' && <LocalBusinessJsonLd site={siteData.data} />}
      </head>
      <body>
        <div className="page-container">
          <StoreProvider site={siteData.data}>
            <ToastContainer position="top-right" autoClose={4000} />
            <Menu />
              {children}
            <Footer />
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
