import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { HandMetal } from "lucide-react";

const Acupressure = () => {
  return (
    <ServiceDetailLayout
      title="Acupressure Therapy"
      description="Traditional pressure point therapy for pain relief and holistic wellness"
      icon={<HandMetal className="h-8 w-8 text-white" />}
      keyPoints={[
        "Non-invasive pain management",
        "Stress and anxiety reduction",
        "Improved energy flow (Qi)",
        "Headache and migraine relief",
        "Digestive system balance",
        "Sleep quality improvement",
        "Immune system support",
        "Natural healing activation"
      ]}
      equipment={[
        {
          name: "Manual Acupressure",
          description: "Finger and hand pressure on specific meridian points"
        },
        {
          name: "Shiatsu Techniques",
          description: "Japanese pressure therapy for holistic wellness"
        },
        {
          name: "Meridian Therapy",
          description: "Energy pathway stimulation for balanced health"
        },
        {
          name: "Reflexology Integration",
          description: "Foot and hand reflex points for whole body healing"
        },
        {
          name: "Hot Stone Acupressure",
          description: "Heated stones on pressure points for deep relaxation"
        },
        {
          name: "Guided Breathing",
          description: "Breathwork combined with pressure point therapy"
        }
      ]}
      exercises={[
        {
          name: "Self-Acupressure Points",
          description: "Learn key pressure points for daily self-care"
        },
        {
          name: "Breathing Techniques",
          description: "Coordinate breath with pressure point stimulation"
        },
        {
          name: "Hand Reflexology",
          description: "Simple hand pressure points you can do anywhere"
        },
        {
          name: "Stress Relief Protocol",
          description: "Quick acupressure routine for anxiety management"
        },
        {
          name: "Energy Circulation",
          description: "Movements to enhance Qi flow through meridians"
        },
        {
          name: "Daily Wellness Routine",
          description: "Morning and evening acupressure for preventive care"
        }
      ]}
    />
  );
};

export default Acupressure;
