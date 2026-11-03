import type { Metadata } from 'next';
import Fooldal from '@/app/Fooldal';

const title = "LIDA és Társa 97' Kft. - Könyvelés, bérszámfejtés és adótanácsadás Szegeden";
const description = '1997 óta működő szegedi könyvelő és adótanácsadó iroda. Könyvelés, bérszámfejtés, adótanácsadás és cégügyintézés vállalkozások és magánszemélyek részére.';

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title,
    description,
    url: '/',
  },
};

export default function FooldalPage() {
  return <Fooldal />;
}
