import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Sparkles } from "lucide-react";

const DryNeedling = () => {
  return (
    <ServiceDetailLayout
      title="Dry Needling Therapy"
      description="Trigger point therapy for muscle pain, tension, and movement dysfunction"
      icon={<Sparkles className="h-8 w-8 text-white" />}
      keyPoints={[
        "Myofascial trigger point release",
        "Acute and chronic muscle pain relief",
        "Improved range of motion",
        "Reduced muscle tightness",
        "Enhanced muscle activation",
        "Sports injury recovery",
        "Headache and migraine relief",
        "Rapid pain reduction"
      ]}
      equipment={[
        {
          name: "Trigger Point Dry Needling",
          description: "Precise needling of muscle trigger points for pain relief"
        },
        {
          name: "Superficial Dry Needling",
          description: "Gentle surface needling for sensitive areas"
        },
        {
          name: "Deep Dry Needling",
          description: "Deeper tissue penetration for chronic muscle knots"
        },
        {
          name: "Electric Dry Needling",
          description: "E-stim combined with needles for enhanced muscle release"
        },
        {
          name: "Manual Therapy",
          description: "Hands-on techniques to complement needling treatment"
        },
        {
          name: "Exercise Therapy",
          description: "Movement patterns to maintain treatment benefits"
        }
      ]}
      exercises={[
        {
          name: "Muscle Activation",
          description: "Exercises to activate and strengthen treated muscles"
        },
        {
          name: "Stretching Protocol",
          description: "Specific stretches to maintain muscle length after needling"
        },
        {
          name: "Range of Motion",
          description: "Movements to improve joint flexibility and function"
        },
        {
          name: "Functional Movement",
          description: "Activity-specific exercises for daily tasks or sports"
        },
        {
          name: "Postural Training",
          description: "Corrective exercises to prevent trigger point recurrence"
        },
        {
          name: "Progressive Loading",
          description: "Gradual strengthening to restore full muscle function"
        }
      ]}
    />
  );
};

export default DryNeedling;
