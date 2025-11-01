import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Bone, Zap, Radio, TrendingDown, AlertCircle, Users, Clock, Dumbbell, Briefcase } from "lucide-react";

const BackPain = () => {
  return (
    <ServiceDetailLayout
      title="Back Pain & Sciatica"
      description="Comprehensive treatment for chronic back pain and sciatica without surgery"
      icon={<Bone className="h-8 w-8 text-white" />}
      keyPoints={[
        "Chronic lower back pain management",
        "Acute back pain relief",
        "Sciatica and radiating leg pain treatment",
        "Muscle spasm relief",
        "Nerve pain management",
        "Postural correction",
        "Long-term pain prevention",
        "Return to daily activities"
      ]}
      symptoms={[
        {
          name: "Sharp Back Pain",
          description: "Sudden, intense pain in lower or upper back",
          icon: <Zap className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Radiating Pain",
          description: "Pain shooting down legs (sciatica)",
          icon: <Radio className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Stiffness",
          description: "Difficulty bending or straightening back",
          icon: <TrendingDown className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Numbness",
          description: "Tingling or numbness in legs or feet",
          icon: <AlertCircle className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      causes={[
        {
          name: "Poor Posture",
          description: "Prolonged sitting or incorrect standing alignment",
          icon: <Users className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Age-Related Wear",
          description: "Degenerative disc disease and arthritis",
          icon: <Clock className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Muscle Strain",
          description: "Heavy lifting or sudden awkward movements",
          icon: <Dumbbell className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Sedentary Work",
          description: "Desk jobs causing weak core muscles",
          icon: <Briefcase className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      equipment={[
        {
          name: "Traction Therapy",
          description: "Spinal decompression to relieve nerve pressure and pain"
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Deep pain relief and muscle relaxation"
        },
        {
          name: "PEMF Therapy",
          description: "Electromagnetic therapy for tissue healing"
        },
        {
          name: "Electric Muscle Stimulation",
          description: "Reduces muscle spasm and improves circulation"
        },
        {
          name: "T.E.N.S",
          description: "Portable pain relief for ongoing management"
        },
        {
          name: "Short Wave Diathermy",
          description: "Deep heat for chronic pain conditions"
        },
        {
          name: "Laser Therapy",
          description: "Anti-inflammatory and pain-relieving effects"
        },
        {
          name: "Manual & Exercise Therapy",
          description: "Combination approach for optimal results"
        }
      ]}
      exercises={[
        {
          name: "Pelvic Tilts",
          description: "Gentle exercises to improve lower back flexibility"
        },
        {
          name: "Bridge Exercise",
          description: "Strengthens glutes and lower back muscles"
        },
        {
          name: "Cat-Cow Stretch",
          description: "Improves spinal mobility and reduces stiffness"
        },
        {
          name: "Knee to Chest",
          description: "Stretches lower back and relieves tension"
        },
        {
          name: "Piriformis Stretch",
          description: "Specific for sciatic nerve pain relief"
        },
        {
          name: "Core Stabilization",
          description: "Builds strength to support the spine"
        }
      ]}
    />
  );
};

export default BackPain;
