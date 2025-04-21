import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Déménagement Borj Cedria - Services professionnels à Ben Arous, Tunisie",
  description:
    "Société de déménagement basée à Borj Cedria offrant des services professionnels dans toute la Tunisie. Devis gratuits et service de qualité.",
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
} 