import { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Clock, HelpCircle, Award, Calendar, Activity, Heart, Shield, Star } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface TreatmentTimelineStep {
  title: string;
  description: string;
}

interface ServiceDetailLayoutProps {
  title: string;
  description: string;
  keyPoints: string[];
  symptoms?: Array<{
    name: string;
    description: string;
    icon: ReactNode;
  }>;
  causes?: Array<{
    name: string;
    description: string;
    icon: ReactNode;
  }>;
  equipment: Array<{
    name: string;
    description: string;
  }>;
  exercises: Array<{
    name: string;
    description: string;
  }>;
  icon: ReactNode;
  // New expanded content props
  introduction?: string;
  understandingCondition?: string;
  treatmentApproach?: string;
  treatmentTimeline?: TreatmentTimelineStep[];
  recoveryPrevention?: string;
  faqs?: FAQ[];
  whyChooseUs?: string[];
}

const ServiceDetailLayout = ({
  title,
  description,
  keyPoints,
  symptoms,
  causes,
  equipment,
  exercises,
  icon,
  introduction,
  understandingCondition,
  treatmentApproach,
  treatmentTimeline,
  recoveryPrevention,
  faqs,
  whyChooseUs
}: ServiceDetailLayoutProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const baseUrl = "https://dranirudhavaidya.com";
  const canonicalUrl = `${baseUrl}${pathname}`;
  const pageTitle = `${title} Treatment in Pimpri-Chinchwad | Dr. Anirudha Vaidya`;
  const metaDescription = `Expert ${title.toLowerCase()} treatment at Dr. Anirudha Vaidya's clinic in Pimpri-Chinchwad, Pune. ${description} Advanced physiotherapy equipment, personalized care. Book appointment: 075172 37255`;
  const ogImage = `${baseUrl}/favicon.png`;

  // JSON-LD Structured Data
  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": pageTitle,
    "description": metaDescription,
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": title,
      "description": description
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Physiotherapy"
    },
    "provider": {
      "@type": "Physician",
      "name": "Dr. Anirudha Vaidya",
      "telephone": "+91-7517237255",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Amrute Hospital Building Premises, behind Bird Valley Garden, near Siddhivinayak Ganpati Mandir, Sambhajinagar",
        "addressLocality": "Pimpri-Chinchwad",
        "addressRegion": "Maharashtra",
        "postalCode": "411019",
        "addressCountry": "IN"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${baseUrl}/#services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": canonicalUrl
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    "name": "Dr. Anirudha Vaidya - Physiotherapy Clinic",
    "image": ogImage,
    "telephone": "+91-7517237255",
    "url": baseUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Amrute Hospital Building Premises, behind Bird Valley Garden, near Siddhivinayak Ganpati Mandir, Sambhajinagar",
      "addressLocality": "Pimpri-Chinchwad",
      "addressRegion": "Maharashtra",
      "postalCode": "411019",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.6298,
      "longitude": 73.7997
    },
    "priceRange": "$$"
  };

  // FAQ Schema for SEO
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const scrollToAppointment = () => {
    navigate('/');
    setTimeout(() => {
      const appointmentSection = document.getElementById('appointment');
      appointmentSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const timelineIcons = [Calendar, Activity, Heart, Clock, CheckCircle, Shield];

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Helmet>
          {/* Primary Meta Tags */}
          <title>{pageTitle}</title>
          <meta name="title" content={pageTitle} />
          <meta name="description" content={metaDescription} />
          
          {/* Indexing Meta Tags */}
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow" />
          
          {/* Canonical URL */}
          <link rel="canonical" href={canonicalUrl} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:site_name" content="Dr. Anirudha Vaidya - Physiotherapy Clinic" />
          <meta property="og:locale" content="en_IN" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={canonicalUrl} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={ogImage} />
          
          {/* Geo Location Tags */}
          <meta name="geo.region" content="IN-MH" />
          <meta name="geo.placename" content="Pimpri-Chinchwad" />
          <meta name="geo.position" content="18.6298;73.7997" />
          <meta name="ICBM" content="18.6298, 73.7997" />
          
          {/* Language and Revisit */}
          <meta httpEquiv="content-language" content="en-IN" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="Dr. Anirudha Vaidya" />
          
          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(medicalWebPageSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(localBusinessSchema)}
          </script>
          {faqSchema && (
            <script type="application/ld+json">
              {JSON.stringify(faqSchema)}
            </script>
          )}
        </Helmet>

        <Navbar />
        
        {/* Hero Section */}
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
                
                {/* Introduction Section */}
                {introduction && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">About {title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                        {introduction}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Understanding the Condition */}
                {understandingCondition && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">Understanding the Condition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                        {understandingCondition}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Key Points */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Key Benefits of Treatment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Symptoms */}
                {symptoms && symptoms.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">Common Symptoms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {symptoms.map((symptom, index) => (
                          <div key={index} className="p-4 border border-border rounded-lg bg-background flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                              {symptom.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground mb-1">{symptom.name}</h3>
                              <p className="text-sm text-muted-foreground">{symptom.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Causes */}
                {causes && causes.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">Common Causes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {causes.map((cause, index) => (
                          <div key={index} className="p-4 border border-border rounded-lg bg-background flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                              {cause.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground mb-1">{cause.name}</h3>
                              <p className="text-sm text-muted-foreground">{cause.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Treatment Approach */}
                {treatmentApproach && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">Our Treatment Approach</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                        {treatmentApproach}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Treatment Timeline */}
                {treatmentTimeline && treatmentTimeline.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">Treatment Process Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {treatmentTimeline.map((step, index) => {
                          const IconComponent = timelineIcons[index % timelineIcons.length];
                          return (
                            <div key={index} className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="w-5 h-5 text-primary-foreground" />
                                </div>
                                {index < treatmentTimeline.length - 1 && (
                                  <div className="w-0.5 h-full bg-border mt-2 min-h-[40px]" />
                                )}
                              </div>
                              <div className="pb-6">
                                <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Equipment & Therapies */}
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

                {/* Therapeutic Exercises */}
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

                {/* Recovery & Prevention */}
                {recoveryPrevention && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">Recovery & Prevention</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                        {recoveryPrevention}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* FAQs */}
                {faqs && faqs.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary flex items-center gap-2">
                        <HelpCircle className="w-6 h-6" />
                        Frequently Asked Questions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`faq-${index}`}>
                            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                )}

                {/* Why Choose Us */}
                {whyChooseUs && whyChooseUs.length > 0 && (
                  <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary flex items-center gap-2">
                        <Award className="w-6 h-6" />
                        Why Choose Dr. Anirudha Vaidya's Clinic
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {whyChooseUs.map((reason, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{reason}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24 bg-gradient-hero text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Get expert treatment from Dr. Anirudha Vaidya</p>
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
    </HelmetProvider>
  );
};

export default ServiceDetailLayout;
