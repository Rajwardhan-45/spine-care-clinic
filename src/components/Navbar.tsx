import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Dr. Vaidya's ProPhysio - Advanced Physiotherapy Clinic & Paralysis Rehab Center" className="h-16 md:h-20 w-auto" />
            <div className="hidden md:block">
              <div className="bg-gradient-accent px-4 py-2 rounded-full">
                <p className="text-sm font-bold text-secondary-foreground whitespace-nowrap">
                  ✨ Without Medicine. Without Surgery ✨
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("appointment")}
              className={`transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Appointment
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Contact
            </button>
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href="tel:+919561260964">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-card/95 backdrop-blur-md rounded-b-2xl">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("appointment")}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Appointment
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button
                size="sm"
                className="mx-4 bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <a href="tel:+919561260964">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;