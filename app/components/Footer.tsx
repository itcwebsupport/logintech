'use client';

import { useSite } from '@/stores/main';
import { menuItems } from '@/app/components/Menu';
import { phoneHref } from '@/utils';

export default function Footer() {
  const site = useSite();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { url: site.facebookUrl, icon: 'facebook', label: 'Facebook' },
    { url: site.instagramUrl, icon: 'instagram', label: 'Instagram' },
    { url: site.linkedinUrl, icon: 'linkedin', label: 'LinkedIn' },
    { url: site.threadsUrl, icon: 'threads', label: 'Threads' },
    { url: site.tiktokUrl, icon: 'tiktok', label: 'TikTok' },
    { url: site.youtubeUrl, icon: 'youtube', label: 'YouTube' },
  ].filter((link) => link.url);

  return (
    <footer className="main-footer">
      <div className="container footer-container">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-4">
            <div className="footer-brand">LIDA és Társa 97' Kft.</div>
            <p className="footer-text">
              Könyvelés, bérszámfejtés és adótanácsadás Szegeden, 1997 óta. Személyes, megbízható
              szakmai támogatás vállalkozások és magánszemélyek számára.
            </p>

            {socialLinks.length > 0 && (
              <ul className="footer-social">
                {socialLinks.map((link) => (
                  <li key={link.icon}>
                    <a href={link.url!} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      <i className={`bi bi-${link.icon}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="col-sm-6 col-lg-2">
            <h3 className="footer-title">Menü</h3>
            <ul className="footer-list">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3">
            <h3 className="footer-title">Elérhetőség</h3>
            <ul className="footer-list">
              {site.address && (
                <li>
                  <i className="bi bi-geo-alt"></i> {site.address}
                </li>
              )}
              {site.phone && (
                <li>
                  <i className="bi bi-telephone"></i> <a href={phoneHref(site.phone)}>{site.phone}</a>
                </li>
              )}
              {site.phone2 && (
                <li>
                  <i className="bi bi-telephone"></i> <a href={phoneHref(site.phone2)}>{site.phone2}</a>
                </li>
              )}
              {site.email && (
                <li>
                  <i className="bi bi-envelope"></i> <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              )}
              {site.openingTime && (
                <li>
                  <i className="bi bi-clock"></i> {site.openingTime}
                </li>
              )}
            </ul>
          </div>

          <div className="col-lg-3">
            <h3 className="footer-title">Cégadatok</h3>
            <ul className="footer-list">
              <li>Adószám: 11594303-2-06</li>
              <li>Cégjegyzékszám: 06-09-005605</li>
              <li>Ügyvezető: Komjátiné dr. Harmati Ildikó</li>
              <li>
                <a href="/adatkezelesi-tajekoztato">Adatkezelési tájékoztató</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} LIDA ÉS TÁRSA 97' Könyvelő, Adótanácsadó és Szolgáltató Kft.</span>
          <span>Minden jog fenntartva.</span>
        </div>
      </div>
    </footer>
  );
}
