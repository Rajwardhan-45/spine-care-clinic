import { Heart, Facebook } from "lucide-react";
import instagramIcon from "@/assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Dr. Anirudha Vaidya (PT) Physiotherapy & Chiropractic Clinic
          </h3>
          <p className="text-muted-foreground mb-6">
            Best Physiotherapist in PCMC | Expert Chiropractic Care
          </p>
          
          <div className="flex gap-4 justify-center mb-6">
            <a
              href="https://www.facebook.com/dranirudhaprophysio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center hover:scale-110 transition-transform shadow-soft"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-6 w-6 text-secondary-foreground" />
            </a>
            <a
              href="https://www.instagram.com/dranirudhaprophysio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] flex items-center justify-center hover:scale-110 transition-transform shadow-soft"
              aria-label="Visit our Instagram page"
            >
              <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-accent fill-accent" /> for better health
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Dr. Anirudha Vaidya (PT) Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;