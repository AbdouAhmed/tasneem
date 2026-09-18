import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'TASNEEM Boutique Hotel',
  description: 'The first boutique hotel in the Egyptian Oases designed with Bedouin and Arabic spirit.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}