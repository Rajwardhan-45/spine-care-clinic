import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Bone, Footprints, Smile, Zap, Shield, Target } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Sports Injury Treatment",
    description: "ACL, ligament injuries, meniscus tears, and complete sports rehabilitation",
    category: "Sports Medicine"
  },
  {
    icon: Bone,
    title: "Back Pain & Sciatica",
    description: "Advanced treatment for chronic back pain, slip disc, and sciatica without surgery",
    category: "Spine Care"
  },
  {
    icon: Target,
    title: "Chiropractic Care",
    description: "Spinal adjustments and manipulations for optimal alignment and pain relief",
    category: "Chiropractic"
  },
  {
    icon: Shield,
    title: "Cervical Spondylosis",
    description: "Effective neck pain treatment and cervical spine care",
    category: "Neck Care"
  },
  {
    icon: Footprints,
    title: "Knee Pain Treatment",
    description: "Comprehensive knee rehabilitation and pain management",
    category: "Joint Care"
  },
  {
    icon: Smile,
    title: "Shoulder & Frozen Shoulder",
    description: "Specialized treatment for shoulder pain and mobility issues",
    category: "Shoulder Care"
  },
  {
    icon: Heart,
    title: "Paralysis Rehabilitation",
    description: "Post-stroke physiotherapy and neurological rehabilitation",
    category: "Neuro Rehab"
  },
  {
    icon: Zap,
    title: "Tennis Elbow Treatment",
    description: "Targeted therapy for elbow pain and repetitive strain injuries",
    category: "Elbow Care"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Our Specialized Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive physiotherapy and chiropractic treatments tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border-border bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-accent font-medium">
                    {service.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;