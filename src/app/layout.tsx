import './globals.css';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'JAGANATH E-COMMERCE',
  description: 'Premium dropshipping and shopping experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
