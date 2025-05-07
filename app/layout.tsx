import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/ThemeContext';
import LoadingScreen from '../components/LoadingScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jaouadi Transport - Société de déménagement en Tunisie',
  description: 'Entreprise de déménagement professionnelle à Tunis. Services de déménagement résidentiel et commercial, emballage, transport et garde-meubles. Devis gratuit au 51 722 115.',
  keywords: [
    'Société de déménagement',
    'Entreprise de déménagement en Tunisie',
    'Déménageurs professionnels à Tunis',
    'Services de déménagement local',
    'Déménagement résidentiel',
    'Déménagement commercial',
    'Société de déménagement pas cher',
    'Services d\'emballage et de déménagement',
    'Meilleure société de déménagement en Tunisie',
    'Devis déménagement Tunis',
    'Déménagement de meubles',
    'Transport d\'électroménagers',
    'Déménagement longue distance',
    'Déménagement urgent',
    'Emballage et déballage',
    'Aide au déménagement',
    'Déménagement avec garde-meubles',
    'Société de déménagement fiable et rapide',
    'Déménageurs de confiance',
    'Société de déménagement agréée',
    'Équipe de déménageurs professionnels',
    'Déménagement sans stress',
    'Avis sur société de déménagement Tunisie'
  ].join(', '),
  authors: [{ name: 'Jaouadi Transport' }],
  creator: 'Hayder Trabelsi',
  robots: 'index, follow',
  metadataBase: new URL('https://demenagement-borjcedria.tn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jaouadi Transport - Société de déménagement en Tunisie',
    description: 'Entreprise de déménagement professionnelle à Tunis. Services de déménagement résidentiel et commercial, emballage, transport et garde-meubles. Devis gratuit au 51 722 115.',
    url: 'https://jaouadi-transport.com',
    siteName: 'Jaouadi Transport',
    locale: 'fr_TN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 