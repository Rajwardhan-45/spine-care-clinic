import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AppointmentForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email body
      const emailBody = `
New Appointment Request from Dr. Vaidya's ProPhysio Website

Patient Details:
----------------
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}

Appointment Details:
-------------------
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Message/Symptoms:
----------------
${formData.message || 'No message provided'}

---
This appointment request was submitted through the website booking form.
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:prophysio22@gmail.com?subject=New Appointment Request - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "Opening Email Client",
        description: "Please send the email from your email client to complete the booking.",
      });

      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: ""
        });
        setIsSubmitting(false);
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try calling us directly at +91 7517237255",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Book Your Appointment
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards pain-free living. Fill out the form below and we'll contact you within 24 hours.
          </p>
        </div>

        <Card className="shadow-elegant border-border backdrop-blur-sm bg-card/95">
          <CardHeader className="bg-gradient-hero text-primary-foreground rounded-t-xl">
            <CardTitle className="text-2xl md:text-3xl">Schedule a Consultation</CardTitle>
            <CardDescription className="text-primary-foreground/90 text-base">
              Complete the form and we'll reach out to confirm your appointment
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-base font-semibold">
                    <User className="h-4 w-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="border-input h-12 text-base focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-base font-semibold">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your contact number"
                    className="border-input h-12 text-base focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-base font-semibold">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border-input h-12 text-base focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2 text-base font-semibold">
                    <Calendar className="h-4 w-4 text-primary" />
                    Preferred Date *
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="border-input h-12 text-base focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="time" className="flex items-center gap-2 text-base font-semibold">
                    <Clock className="h-4 w-4 text-primary" />
                    Preferred Time *
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="border-input h-12 text-base focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-sm text-muted-foreground">
                    Clinic Hours: 9:30 AM - 2:00 PM, 4:00 PM - 9:00 PM
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2 text-base font-semibold">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Message / Symptoms
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your condition or symptoms..."
                  rows={5}
                  className="border-input resize-none text-base focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-elegant text-lg py-7 transition-all hover:scale-[1.02] disabled:opacity-50"
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? "Processing..." : "Book Appointment"}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Or call us directly at <a href="tel:+917517237255" className="text-primary font-semibold hover:underline">+91 7517237255</a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppointmentForm;