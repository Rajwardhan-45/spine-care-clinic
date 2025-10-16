import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919561260964";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      style={{ width: '56px', height: '56px' }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
