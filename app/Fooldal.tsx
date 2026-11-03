'use client';

import Image from 'next/image';
import ContactForm from '@/app/components/ContactForm';
import { useSite } from '@/stores/main';
import { phoneHref } from '@/utils';

const stats = [
  { value: '1997', label: 'óta a vállalkozások mellett' },
  { value: '9 fő', label: 'összeszokott szakmai csapat' },
  { value: 'Szeged', label: 'helyi iroda, személyes ügyintézés' },
];

const services = [
  {
    icon: 'journal-text',
    title: 'Könyvelés',
    text: 'Egyéni vállalkozók, betéti társaságok és kft-k teljes körű könyvelése, a bizonylatoktól a beszámolóig.',
  },
  {
    icon: 'cash-coin',
    title: 'Bérszámfejtés',
    text: 'Pontos bérszámfejtés, munkaügyi adminisztráció és a kapcsolódó bevallások határidőre történő elkészítése.',
  },
  {
    icon: 'bar-chart-line',
    title: 'Adótanácsadás',
    text: 'Adóoptimalizálás, adózási kérdések szakértői megválaszolása és képviselet hatósági eljárásokban.',
  },
  {
    icon: 'briefcase',
    title: 'Cégügyintézés',
    text: 'Támogatás cégalapításnál, változásoknál és a vállalkozás mindennapi pénzügyi döntéseiben.',
  },
];

const grantData = [
  {
    label: 'Pályázati felhívás azonosítója és neve',
    value: 'DIMOP_PLUSZ-1.2.6-24 - KKV-k növekedési lehetőségeinek támogatása a digitális infrastruktúra és transzformáció elősegítésére',
  },
  { label: 'Projekt azonosítója', value: 'DIMOP_PLUSZ-1.2.6-24-2025-01848' },
  {
    label: 'Kedvezményezett neve',
    value: "LIDA ÉS TÁRSA 97' KÖNYVELŐ, ADÓTANÁCSADÓ ÉS SZOLGÁLTATÓ KORLÁTOLT FELELŐSSÉGŰ TÁRSASÁGA LIDA ÉS TÁRSA 97' KFT növekedési lehetőségeinek támogatása",
  },
  { label: 'A projekt címe', value: "A LIDA ÉS TÁRSA 97' KFT növekedési lehetőségeinek támogatása" },
  { label: 'Projekt tervezett kezdése', value: '2025. 11. 01.' },
  { label: 'Projekt tervezett befejezése', value: '2026. 10. 30.' },
  { label: 'Záró kifizetés átnyújtásának határideje', value: '2026. 12. 29.' },
  { label: 'Megítélt támogatás összege (Ft)', value: '5 991 593' },
  { label: 'Szerződésben megítélt támogatás összege (Ft)', value: '5 991 593' },
  { label: 'Projekt összköltsége (Ft)', value: '6 657 326' },
  { label: 'Támogatási arány (%)', value: '90' },
];

const grantParagraphs = [
  "A LIDA ÉS TÁRSA 97' KFT a DIMOP Plusz program keretében megvalósított projektjével jelentős lépést tett digitális felkészültségének fejlesztése, működési hatékonyságának növelése és hosszú távú versenyképességének erősítése érdekében.",
  'A projekt elsődleges célja a vállalkozás digitális felzárkóztatása, informatikai infrastruktúrájának korszerűsítése, valamint a mindennapi üzleti és adminisztratív folyamatok hatékonyabbá tétele volt.',
  'A fejlesztés keretében korszerű informatikai, hálózati és telekommunikációs eszközök beszerzése, digitális technológiák és felhőalapú szolgáltatások bevezetése, valamint a vállalkozás működését támogató szoftveres megoldások alkalmazása valósult meg.',
  'A beruházás részét képezték az informatikai biztonságot erősítő intézkedések, valamint a digitális rendszerek megfelelő és biztonságos használatához kapcsolódó oktatási és betanítási tevékenységek. A projekt szakértői és tanácsadási szolgáltatások igénybevételével segítette az új technológiák eredményes bevezetését és használatát.',
  'A projekt eredményeként a vállalkozás digitális infrastruktúrája korszerűbbé vált, és javultak a hatékonyabb működés technológiai feltételei. A megvalósított fejlesztések hozzájárulnak az adminisztrációs terhek csökkentéséhez, a munkafolyamatok egyszerűsítéséhez, az információk gyorsabb eléréséhez és a rendelkezésre álló erőforrások hatékonyabb kihasználásához.',
  "A beruházás hosszú távon támogatja a LIDA ÉS TÁRSA 97' KFT fenntartható fejlődését, jövedelemtermelő képességének javítását és piaci versenyképességének erősítését.",
];

export default function Fooldal() {
  const site = useSite();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main>
        <section id="hero" className="hero-section">
          <div className="container hero-container">
            <span className="hero-eyebrow">Szeged · 1997 óta</span>

            <blockquote className="hero-quote">
              <p>„Amit mérni tudunk, azt <em>irányítani</em> is tudjuk.”</p>
              <cite>Peter Drucker</cite>
            </blockquote>

            <h1 className="hero-title">LIDA ÉS TÁRSA 97' Könyvelő, Adótanácsadó és Szolgáltató Kft.</h1>

            <div className="hero-actions">
              <a href="#kapcsolat" className="btn btn-primary">
                Kapcsolatfelvétel <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#rolunk" className="btn btn-outline-light">
                Ismerjen meg minket
              </a>
            </div>
          </div>

          <a href="#rolunk" className="hero-scroll" aria-label="Görgetés lefelé">
            <i className="bi bi-chevron-down"></i>
          </a>
        </section>

        <section id="rolunk" className="content-section about-section">
          <div className="container">
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-lg-6">
                <div className="about-images">
                  <Image
                    src="/pic_1.webp"
                    alt="Könyvelő munka közben számológéppel és bizonylatokkal"
                    width={1920}
                    height={1280}
                    sizes="(max-width: 992px) 100vw, 40vw"
                    className="about-image about-image-main"
                  />
                  <Image
                    src="/pic_3.webp"
                    alt="Ügyfél és tanácsadó egyeztetése adóbevallásról"
                    width={1920}
                    height={1280}
                    sizes="(max-width: 992px) 60vw, 25vw"
                    className="about-image about-image-secondary"
                  />
                  <div className="about-badge">
                    <strong>{currentYear - 1997}+</strong>
                    <span>év tapasztalat</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <span className="section-eyebrow">Rólunk</span>
                <h2 className="section-title">Megbízható szakértelem, személyes figyelem</h2>
                <p className="about-lead">
                  A <strong>LIDA ÉS TÁRSA 97' Könyvelő, Adótanácsadó és Szolgáltató Kft.</strong> (röviden LIDA és Társa 97' Kft.) egy 1997-ben alapított,
                  szegedi székhelyű számviteli és adószakértői iroda.
                </p>
                <p>
                  Közel három évtizede segítjük ügyfeleinket abban, hogy a könyvelés, az adózás és a bérszámfejtés ne
                  teher, hanem biztos alap legyen vállalkozásuk működéséhez. 9 fős, összeszokott csapatunk minden
                  tagja jól ismeri ügyfeleit – nálunk nem egy ügyszám, hanem egy ismerős arc várja Önt.
                </p>
                <p>
                  Kis irodaként rugalmasan, gyorsan reagálunk, miközben a jogszabályi változásokat folyamatosan követve
                  naprakész, pontos és felelős szakmai munkát végzünk. Hiszünk abban, hogy a jó könyvelő nem csupán
                  adminisztrál, hanem partnerként gondolkodik együtt ügyfeleivel.
                </p>

                <ul className="about-list">
                  <li><i className="bi bi-check2-circle"></i> Személyes kapcsolattartó minden ügyfélnek</li>
                  <li><i className="bi bi-check2-circle"></i> Naprakész szakmai tudás, pontos határidők</li>
                  <li><i className="bi bi-check2-circle"></i> Korszerű, biztonságos digitális ügyintézés</li>
                </ul>
              </div>
            </div>

            <div className="row g-4 about-stats">
              {stats.map((stat) => (
                <div className="col-md-4" key={stat.label}>
                  <div className="stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div id="szolgaltatasok" className="services-container">
              <span className="section-eyebrow">Szolgáltatásaink</span>
              <h2 className="section-title">Miben segíthetünk?</h2>

              <div className="row g-4">
                {services.map((service) => (
                  <div className="col-sm-6 col-lg-3" key={service.title}>
                    <div className="service-card">
                      <span className="service-icon">
                        <i className={`bi bi-${service.icon}`}></i>
                      </span>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="kapcsolat" className="content-section contact-section">
          <div className="container">
            <span className="section-eyebrow">Kapcsolat</span>
            <h2 className="section-title">Vegye fel velünk a kapcsolatot</h2>

            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-card">
                  <ContactForm />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-card contact-map-card">
                  {site.address && (
                    <iframe
                      className="contact-map"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&z=16&output=embed`}
                      title={`Térkép: ${site.address}`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  )}

                  <ul className="contact-info">
                    {site.address && (
                      <li>
                        <i className="bi bi-geo-alt"></i>
                        <span>{site.address}</span>
                      </li>
                    )}
                    {site.phone && (
                      <li>
                        <i className="bi bi-telephone"></i>
                        <span>
                          <a href={phoneHref(site.phone)}>{site.phone}</a>
                          {site.phone2 && (
                            <>
                              {' vagy '}
                              <a href={phoneHref(site.phone2)}>{site.phone2}</a>
                            </>
                          )}
                        </span>
                      </li>
                    )}
                    {site.email && (
                      <li>
                        <i className="bi bi-envelope"></i>
                        <a href={`mailto:${site.email}`}>{site.email}</a>
                      </li>
                    )}
                    {site.openingTime && (
                      <li>
                        <i className="bi bi-clock"></i>
                        <span>{site.openingTime}</span>
                      </li>
                    )}
                    <li>
                      <i className="bi bi-person-badge"></i>
                      <span>Ügyvezető: Komjátiné dr. Harmati Ildikó</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="palyazat" className="content-section grant-section">
          <div className="container">
            <span className="section-eyebrow">Pályázat</span>
            <h2 className="section-title">A LIDA ÉS TÁRSA 97' KFT növekedési lehetőségeinek támogatása</h2>

            <div className="row g-4">
              <div className="col-lg-5">
                <dl className="grant-data">
                  {grantData.map((item) => (
                    <div className="grant-data-row" key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="col-lg-7">
                <div className="grant-text">
                  {grantParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p className="grant-eu">
                    <i className="bi bi-award"></i>
                    A projekt az Európai Unió támogatásával, a DIMOP Plusz program keretében valósult meg.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href="/#palyazat" className="grant-banner" aria-label="Pályázati információk">
        <Image
          src="/palyazat.webp"
          alt="Széchenyi Terv Plusz – DIMOP Plusz pályázat"
          width={400}
          height={104}
          className="grant-banner-image"
        />
      </a>

    </>
  );
}
