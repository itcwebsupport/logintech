import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oldal nem található',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="page-content error-page-container">
      <div className="error-page-content">
        <h1 className="error-page-code">404</h1>
        <p className="error-page-text">A keresett oldal nem található vagy már nem elérhető.</p>
        <Link href="/" className="btn btn-primary">
          Vissza a főoldalra <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </main>
  );
}
