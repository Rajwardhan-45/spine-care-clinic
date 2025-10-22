import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Gem } from "lucide-react";

const CuppingTherapy = () => {
  return (
    <ServiceDetailLayout
      title="Cupping Therapy"
      description="Traditional cupping for pain relief, muscle relaxation, and improved blood flow"
      icon={<Gem className="h-8 w-8 text-white" />}
      keyPoints={[
        "Chronic pain management",
        "Muscle tension relief",
        "Improved blood circulation",
        "Toxin removal and detoxification",
        "Reduced inflammation",
        "Stress and anxiety relief",
        "Enhanced athletic recovery",
        "Traditional healing approach"
      ]}
      equipment={[
        {
          name: "Dry Cupping",
          description: "Suction therapy without bloodletting for muscle relaxation"
        },
        {
          name: "Wet Cupping (Hijama)",
          description: "Therapeutic bloodletting for detoxification and healing"
        },
        {
          name: "Moving Cupping",
          description: "Gliding cups with oil for myofascial release"
        },
        {
          name: "Flash Cupping",
          description: "Rapid application for stimulating circulation"
        },
        {
          name: "Hot/Cold Therapy",
          description: "Temperature variations for enhanced therapeutic effects"
        },
        {
          name: "Manual Therapy Integration",
          description: "Combined with massage for comprehensive treatment"
        }
      ]}
      exercises={[
        {
          name: "Post-Treatment Stretching",
          description: "Gentle stretches to maintain muscle flexibility after cupping"
        },
        {
          name: "Deep Breathing",
          description: "Enhances circulation and promotes relaxation"
        },
        {
          name: "Hydration Protocol",
          description: "Proper water intake to support detoxification"
        },
        {
          name: "Light Movement",
          description: "Gentle activity to circulate fresh blood to treated areas"
        },
        {
          name: "Rest and Recovery",
          description: "Adequate rest for optimal healing response"
        },
        {
          name: "Self-Care Routine",
          description: "Maintaining benefits between cupping sessions"
        }
      ]}
    />
  );
};

export default CuppingTherapy;
