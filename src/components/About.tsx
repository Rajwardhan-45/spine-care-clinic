import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";
import doctorProfile from "@/assets/doctor-profile.jpg";
import bodyPartsBg from "@/assets/body-parts-background.jpg";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Expert Care",
      description: "Dr. Anirudha Vaidya brings years of specialized expertise"
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "Individual treatment plans for every patient"
    },
    {
      icon: TrendingUp,
      title: "Result-Oriented",
      description: "Focused on achieving measurable outcomes"
    },
    {
      icon: BookOpen,
      title: "Advanced Techniques",
      description: "Latest physiotherapy and chiropractic methods"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 md:opacity-15"
        style={{ backgroundImage: `url(${bodyPartsBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-card/95 via-card/90 to-card/95" />
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in space-y-6">
            <div className="flex items-center gap-6 mb-6">
              <img 
                src={doctorProfile} 
                alt="Dr. Anirudha Vaidya - Consultant Physiotherapist" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-elegant border-4 border-accent"
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Dr. Anirudha Vaidya
                </h2>
                <p className="text-lg text-muted-foreground mt-2">
                  <span className="font-semibold text-foreground">B.P.Th, MPT (Ortho-Hand)</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Reg. No. 2013/01/PT/2679</span>
                </p>
              </div>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Dr. Anirudha Vaidya is a highly skilled physiotherapist and chiropractor with extensive 
                experience in treating complex musculoskeletal conditions. His clinic in Pune and Pimpri Chinchwad 
                is recognized as one of the best physiotherapy centers in the area.
              </p>
              <p>
                With a philosophy of <span className="font-bold text-xl text-accent">✨ Without Medicine. Without Surgery. ✨</span>, 
                Dr. Anirudha Vaidya has successfully treated thousands of patients 
                suffering from chronic pain, sports injuries, and neurological conditions.
              </p>
              <p>
                Each patient receives personalized attention and a customized treatment plan designed 
                to achieve optimal results. The clinic combines advanced physiotherapy techniques with 
                modern chiropractic methods to provide comprehensive care.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-fade-in">
            <Card className="bg-gradient-hero text-primary-foreground shadow-soft border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                    <span>Best physiotherapy and chiropractic clinic in Pune and Pimpri Chinchwad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                    <span>Advanced treatment methods without medication or surgery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                    <span>Expert care for sports injuries and spine problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                    <span>Personalized treatment plans with proven results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                    <span>Convenient location in Sambhajinagar, Pune and Pimpri Chinchwad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                    <span>Comprehensive rehabilitation for paralysis and stroke patients</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;