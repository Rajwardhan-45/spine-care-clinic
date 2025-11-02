import bodyPartsImage from "@/assets/body-parts-icons.jpg";

const BodyPartsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Animated glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            
            {/* Image container with effects */}
            <div className="relative rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 transform hover:scale-[1.02]">
              <img
                src={bodyPartsImage}
                alt="Physiotherapy treatment areas - comprehensive care for spine, joints, muscles, and body rehabilitation"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating decoration elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyPartsSection;
