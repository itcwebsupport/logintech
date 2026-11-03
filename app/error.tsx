'use client';

import Link from 'next/link';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="page-content error-page-container">
      <div className="error-page-content">
        <h1 className="error-page-code">Hiba</h1>
        <p className="error-page-text">Váratlan hiba történt. Kérjük, próbálja újra később.</p>
        <div className="error-page-actions">
          <button type="button" className="btn btn-primary" onClick={reset}>
            Újrapróbálás <i className="bi bi-arrow-clockwise"></i>
          </button>
          <Link href="/" className="btn btn-outline-light">
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </main>
  );
}
