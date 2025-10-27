import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HandMetal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Acupressure = () => {
  const navigate = useNavigate();

  const scrollToAppointment = () => {
    navigate('/');
    setTimeout(() => {
      const appointmentSection = document.getElementById('appointment');
      appointmentSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const keyPoints = [
    "Non-invasive pain management",
    "Stress and anxiety reduction",
    "Improved energy flow (Qi)",
    "Headache and migraine relief",
    "Digestive system balance",
    "Sleep quality improvement",
    "Immune system support",
    "Natural healing activation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container px-4 mx-auto">
          <Button
            variant="ghost"
            className="mb-6 text-white hover:bg-white/10"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
              <HandMetal className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Acupressure Therapy</h1>
              <p className="text-xl text-white/90 mt-2">Traditional pressure point therapy for pain relief and holistic wellness</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Key Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 bg-gradient-hero text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Get expert treatment from Dr. Anirudha Vaidya (PT)</p>
                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={scrollToAppointment}
                  >
                    Book Appointment
                  </Button>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a href="tel:07517237255">Call: 075172 37255</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Acupressure;
