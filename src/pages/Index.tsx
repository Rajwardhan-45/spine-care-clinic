import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialButtons from "@/components/SocialButtons";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <AppointmentForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <SocialButtons />
    </div>
  );
};

export default Index;