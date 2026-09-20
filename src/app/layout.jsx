import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import Navbar from '../components/Navbar';
import './globals.css';

// Configure Google Fonts
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600', '700'],
  variable: '--font-cormorant'
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat'
});

export const metadata = {
  title: 'TASNEEM Boutique Hotel | Bahariya Oasis',
  description: 'A boutique hotel in the Egyptian Oases designed with Bedouin and Arabic spirit.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#FDFBF7' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}