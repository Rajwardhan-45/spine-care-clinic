import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BodyPartsSection from "@/components/BodyPartsSection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialButtons from "@/components/SocialButtons";


const Index = () => {
  const canonicalUrl = "https://dranirudhavaidya.com/";
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <BodyPartsSection />
        <About />
        <Testimonials />
        <AppointmentForm />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <SocialButtons />
      </div>
    </HelmetProvider>
  );
};

export default Index;