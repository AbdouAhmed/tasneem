import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  return (
    <>
      <footer>
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}, Bahariya Oasis, Egypt. All rights reserved.</p>
      </footer>
      <a href={siteConfig.contact.whatsapp} className="whatsapp-float" target="_blank" rel="noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </>
  );
}