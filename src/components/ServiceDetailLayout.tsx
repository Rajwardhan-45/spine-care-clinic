import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServiceDetailLayoutProps {
  title: string;
  description: string;
  keyPoints: string[];
  equipment: Array<{
    name: string;
    description: string;
  }>;
  exercises: Array<{
    name: string;
    description: string;
  }>;
  icon: ReactNode;
}

const ServiceDetailLayout = ({
  title,
  description,
  keyPoints,
  equipment,
  exercises,
  icon
}: ServiceDetailLayoutProps) => {
  const navigate = useNavigate();

  const scrollToAppointment = () => {
    navigate('/');
    setTimeout(() => {
      const appointmentSection = document.getElementById('appointment');
      appointmentSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
              {icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
              <p className="text-xl text-white/90 mt-2">{description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Advanced Equipment & Therapies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {equipment.map((item, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg bg-background">
                        <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Therapeutic Exercises</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {exercises.map((exercise, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg bg-background">
                        <h3 className="font-semibold text-foreground mb-2">{exercise.name}</h3>
                        <p className="text-sm text-muted-foreground">{exercise.description}</p>
                      </div>
                    ))}
                  </div>
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

export default ServiceDetailLayout;
