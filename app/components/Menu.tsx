'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// aloldalakról is a főoldal szekcióira kell vinnie, ezért / előtaggal
export const menuItems = [
  { href: '/#hero', label: 'Kezdőlap' },
  { href: '/#rolunk', label: 'Rólunk' },
  { href: '/#szolgaltatasok', label: 'Szolgáltatások' },
  { href: '/#kapcsolat', label: 'Kapcsolat' },
  { href: '/#palyazat', label: 'Pályázat' },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // csak a főoldalon átlátszó a menü a hero fölött, minden más oldalon van háttere
  const isSolid = usePathname() !== '/';

  const classNames = ['main-menu', isScrolled && 'is-scrolled', isOpen && 'is-open', isSolid && 'is-solid'].filter(Boolean).join(' ');

  return (
    <header className={classNames}>
      <nav className="container menu-container">
        <a href="/#hero" className="menu-brand" onClick={() => setIsOpen(false)}>
          <span className="menu-brand-mark">L</span>
          <span className="menu-brand-text">
            LIDA és Társa 97' Kft.
            <small>Könyvelés · Adótanácsadás</small>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? 'Menü bezárása' : 'Menü megnyitása'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={isOpen ? 'bi bi-x-lg' : 'bi bi-list'}></i>
        </button>

        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="menu-link" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
