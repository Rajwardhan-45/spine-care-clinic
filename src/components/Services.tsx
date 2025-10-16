import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Bone, Footprints, Smile, Zap, Shield, Target, User, Droplet } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Activity,
    title: "Sports Injury Treatment",
    description: "ACL, ligament injuries, meniscus tears, and complete sports rehabilitation",
    category: "Sports Medicine",
    slug: "sports-injury"
  },
  {
    icon: Bone,
    title: "Slip Disc Treatment",
    description: "Advanced non-surgical treatment for herniated disc, disc bulge, and spinal disc problems",
    category: "Spine Care",
    slug: "slip-disc"
  },
  {
    icon: Bone,
    title: "Back Pain & Sciatica",
    description: "Comprehensive treatment for chronic back pain and sciatica without surgery",
    category: "Spine Care",
    slug: "back-pain"
  },
  {
    icon: Target,
    title: "Chiropractic Care",
    description: "Spinal adjustments and manipulations for optimal alignment and pain relief",
    category: "Chiropractic",
    slug: "chiropractic"
  },
  {
    icon: Shield,
    title: "Cervical Spondylosis",
    description: "Effective neck pain treatment and cervical spine care",
    category: "Neck Care",
    slug: "cervical-spondylosis"
  },
  {
    icon: Footprints,
    title: "Knee Pain Treatment",
    description: "Comprehensive knee rehabilitation and pain management",
    category: "Joint Care",
    slug: "knee-pain"
  },
  {
    icon: Smile,
    title: "Frozen Shoulder",
    description: "Specialized treatment for shoulder pain and mobility issues",
    category: "Shoulder Care",
    slug: "frozen-shoulder"
  },
  {
    icon: Heart,
    title: "Paralysis Rehabilitation",
    description: "Post-stroke physiotherapy and neurological rehabilitation",
    category: "Neuro Rehab",
    slug: "paralysis"
  },
  {
    icon: Zap,
    title: "Tennis Elbow Treatment",
    description: "Targeted therapy for elbow pain and repetitive strain injuries",
    category: "Elbow Care",
    slug: "tennis-elbow"
  },
  {
    icon: User,
    title: "Facial Palsy (Bell's Palsy)",
    description: "Specialized facial nerve rehabilitation and recovery therapy",
    category: "Neuro Rehab",
    slug: "facial-palsy"
  },
  {
    icon: Droplet,
    title: "Ligament Treatment",
    description: "Expert care for ligament tears, sprains, and reconstruction rehabilitation",
    category: "Sports Medicine",
    slug: "ligament-treatment"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (slug: string) => {
    navigate(`/services/${slug}`);
  };

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
                className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border-border bg-card cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleServiceClick(service.slug)}
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
