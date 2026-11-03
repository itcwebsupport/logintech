import type { Metadata } from 'next';
import { apiGet } from '@/lib/api';
import AdatkezelesiTajekoztato from '@/app/adatkezelesi-tajekoztato/AdatkezelesiTajekoztato';

const title = 'Adatkezelési tájékoztató';
const description = "A LIDA és Társa 97' Kft. adatkezelési tájékoztatója: hogyan gyűjtjük, kezeljük és védjük az Ön személyes adatait.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/adatkezelesi-tajekoztato' },
  openGraph: { title, description, url: '/adatkezelesi-tajekoztato' },
};

export default async function AdatkezelesiTajekoztatoPage() {
  const response = await apiGet('/api/v1/gdpr');

  const gdprData = await response.json();

  return (
    <AdatkezelesiTajekoztato gdprData={gdprData} />
  );
}
