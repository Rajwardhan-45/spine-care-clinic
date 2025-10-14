import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aniruddh Diwalkar",
    text: "I was suffering from severe back pain, but Dr. Aniruddha provided an exceptional diagnosis and the perfect treatment. After just 4 to 5 sessions, I felt completely better. The treatment and consultation were outstanding.",
    rating: 5
  },
  {
    name: "Vishal Polkam",
    text: "Amazing recovery with Dr. Vaidya. He is very encouraging and expert in his domain. He helped me to heal back and I gained my confidence. He personally observes and trains each patient.",
    rating: 5
  },
  {
    name: "Bhaskar Powar",
    text: "Dr. Anirudha Vaidya is excellent – professional, knowledgeable, and compassionate. Effective treatment, clear communication, and patient-centered care. Highly recommended!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real experiences from real patients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">
                  - {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;