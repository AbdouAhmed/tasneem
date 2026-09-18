import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';

// 1. Configure the elegant heading font
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

// 2. Configure the clean body font
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'TASNEEM Boutique Hotel',
  description: 'The first boutique hotel in the Egyptian Oases designed with Bedouin and Arabic spirit.',
};

export default function RootLayout({ children }) {
  return (
    // 3. Apply the font variables to the HTML tag
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}