import { Instagram, Facebook } from "lucide-react";

const SocialButtons = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      <a
        href="https://www.instagram.com/dranirudhaprophysio/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] hover:from-[#e6683c] hover:via-[#dc2743] hover:to-[#bc1888] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center"
        style={{ 
          width: '75px', 
          height: '75px'
        }}
        aria-label="Follow on Instagram"
      >
        <Instagram className="w-7 h-7 text-white" />
        <span className="text-[9px] font-semibold text-white leading-tight mt-1">Follow on<br/>Instagram</span>
      </a>
      
      <a
        href="https://www.facebook.com/people/Dr-Anirudha-Vaidya-ProPhysio-Advance-Physiotherapy-Clinic/100092989384116/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1877F2] hover:bg-[#0C63D4] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center"
        style={{ 
          width: '75px', 
          height: '75px'
        }}
        aria-label="Visit our Facebook Page"
      >
        <Facebook className="w-7 h-7 text-white" />
        <span className="text-[9px] font-semibold text-white leading-tight mt-1">Visit our<br/>Facebook</span>
      </a>
    </div>
  );
};

export default SocialButtons;
