import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/ThemeContext';
import LoadingScreen from '../components/LoadingScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Société de Déménagement à Borj Cedria - Votre partenaire de confiance',
  description: 'Service de déménagement professionnel à Borj Cedria, Ben Arous. Nous combinons professionnalisme, efficacité et sécurité pour garantir une expérience sans stress en Tunisie.',
  keywords: 'déménagement, Borj Cedria, Ben Arous, Tunisie, transport, emballage, service déménagement Tunisie',
  authors: [{ name: 'Hayder Trabelsi' }],
  creator: 'Hayder Trabelsi',
  robots: 'index, follow',
  metadataBase: new URL('https://demenagement-borjcedria.tn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Société de Déménagement à Borj Cedria, Ben Arous',
    description: 'Service de déménagement professionnel en Tunisie. Nous combinons professionnalisme, efficacité et sécurité pour garantir une expérience sans stress.',
    url: 'https://demenagement-borjcedria.tn',
    siteName: 'Société de Déménagement Borj Cedria',
    locale: 'fr_FR',
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