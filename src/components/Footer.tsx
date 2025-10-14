import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Dr. Anirudha Vaidya Physiotherapy & Chiropractic Clinic
          </h3>
          <p className="text-muted-foreground mb-4">
            Best Physiotherapist in PCMC | Expert Chiropractic Care
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-accent fill-accent" /> for better health
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Dr. Anirudha Vaidya Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;