import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Jaouadi Transport - Services professionnels à Ben Arous, Tunisie",
  description:
    "Société de déménagement basée à Charguia 1 offrant des services professionnels dans toute la Tunisie. Devis gratuits et service de qualité.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </main>
  );
} 