import Link from 'next/link';
import { siteConfig } from '../config/siteConfig';

export default function Navbar() {
  return (
    <header>
      <div className="logo">{siteConfig.name}</div>
      <nav>
        <ul>
          {siteConfig.navLinks.map((link) => (
            <li key={link.name}><Link href={link.href}>{link.name}</Link></li>
          ))}
        </ul>
      </nav>
      <div className="header-phone">
        <a href={`tel:${siteConfig.contact.phone}`}>📞 {siteConfig.contact.phone}</a>
      </div>
    </header>
  );
}