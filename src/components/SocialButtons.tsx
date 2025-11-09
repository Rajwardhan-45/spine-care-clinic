import { Instagram, Facebook } from "lucide-react";

const SocialButtons = () => {
  return (
    <div className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 md:gap-4">
      <a
        href="https://www.instagram.com/dranirudhaprophysio/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] hover:from-[#e6683c] hover:via-[#dc2743] hover:to-[#bc1888] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center"
        style={{ 
          width: '50px', 
          height: '50px'
        }}
        aria-label="Follow on Instagram"
      >
        <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </a>
      
      <a
        href="https://www.facebook.com/share/19as8GU3Pa/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1877F2] hover:bg-[#0C63D4] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center"
        style={{ 
          width: '50px', 
          height: '50px'
        }}
        aria-label="Visit our Facebook Page"
      >
        <Facebook className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </a>
    </div>
  );
};

export default SocialButtons;
