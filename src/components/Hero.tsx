import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";
import spineBg from "@/assets/spine-glow-bg.jpg";

const Hero = () => {
  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('appointment');
    appointmentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: `url(${spineBg})` }}
      />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
          Dr. Anirudha Vaidya (PT)<br />
          <span className="block mt-2">Physiotherapy</span>
          <span className="block">Chiropractic</span>
          <span className="block">Rehab</span>
          <span className="block mt-2 text-3xl md:text-4xl text-accent">Result Oriented Treatment</span>
        </h1>
        <p className="mb-8 text-xl text-white/90 max-w-2xl mx-auto md:text-2xl">
          Advanced treatment for back pain, sports injuries, and rehabilitation.<br />
          <span className="font-bold text-2xl md:text-3xl animate-pulse" style={{ color: '#00FF00' }}>✨ Without Medicine. Without Surgery. ✨</span><br />
          <span className="font-semibold">Just results.</span>
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToAppointment}
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft text-lg px-8 py-6 rounded-xl transition-all hover:scale-105"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 rounded-xl transition-all hover:scale-105"
            asChild
          >
            <a href="tel:+917517237255">
              <Phone className="mr-2 h-5 w-5" />
              +91 7517237255
            </a>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">20000+</div>
            <div className="text-white/80">Patients Treated</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">10000+</div>
            <div className="text-white/80">Surgeries Avoided</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-white/80">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;