import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Visit Our Clinic
          </h2>
          <p className="text-xl text-muted-foreground">
            Conveniently located in Pune and Pimpri Chinchwad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-card border-border shadow-card hover:shadow-soft transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Amrute Hospital Building Premises<br />
                      Behind Bird Valley Garden<br />
                      Near Siddhivinayak Ganpati Mandir<br />
                      Sambhajinagar, East<br />
                      Pimpri-Chinchwad, Maharashtra 411019
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card hover:shadow-soft transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Phone</h3>
                    <a 
                      href="tel:+917517237255" 
                      className="text-primary hover:underline text-lg font-semibold"
                    >
                      +91 7517237255
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card hover:shadow-soft transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Clinic Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Saturday</p>
                      <p className="font-semibold">9:30 AM - 2:00 PM, 4:00 PM - 9:00 PM</p>
                      <p>Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card hover:shadow-soft transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:prophysio22@gmail.com" 
                      className="text-primary hover:underline"
                    >
                      prophysio22@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-[500px] rounded-2xl overflow-hidden shadow-soft">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5424!2d73.7950!3d18.6350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM4JzA2LjAiTiA3M8KwNDcnNDIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;