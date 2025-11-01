import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Bone, Zap, Radio, TrendingDown, Lock, Clock, Dumbbell, Briefcase, Users } from "lucide-react";

const SlipDisc = () => {
  return (
    <ServiceDetailLayout
      title="Slip Disc Treatment"
      description="Non-surgical treatment for herniated disc, disc bulge, and spinal disc problems"
      icon={<Bone className="h-8 w-8 text-white" />}
      keyPoints={[
        "Treatment without surgery or medication",
        "Disc herniation and bulge management",
        "Spinal decompression therapy",
        "Nerve root pressure relief",
        "Chronic lower back pain treatment",
        "Sciatica pain management",
        "Posture correction and spinal alignment",
        "Prevention of disc degeneration"
      ]}
      symptoms={[
        {
          name: "Severe Back Pain",
          description: "Intense pain in lower back that may worsen with movement",
          icon: <Zap className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Leg Pain (Sciatica)",
          description: "Sharp, shooting pain down one or both legs",
          icon: <Radio className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Numbness",
          description: "Loss of sensation in legs, feet, or toes",
          icon: <TrendingDown className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Muscle Weakness",
          description: "Difficulty walking or standing for long periods",
          icon: <Lock className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      causes={[
        {
          name: "Aging & Degeneration",
          description: "Natural disc wear and tear over time",
          icon: <Clock className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Heavy Lifting",
          description: "Improper lifting technique causing disc herniation",
          icon: <Dumbbell className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Prolonged Sitting",
          description: "Extended periods of sitting putting pressure on discs",
          icon: <Briefcase className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Sudden Injury",
          description: "Trauma or sudden twisting movements",
          icon: <Users className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      equipment={[
        {
          name: "Spinal Traction Therapy",
          description: "Mechanical decompression to relieve disc pressure and nerve compression"
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Deep tissue pain relief and muscle relaxation"
        },
        {
          name: "PEMF Therapy",
          description: "Promotes disc healing and reduces inflammation"
        },
        {
          name: "T.E.N.S",
          description: "Effective pain management for nerve-related discomfort"
        },
        {
          name: "Short Wave Diathermy",
          description: "Deep heat therapy to improve blood circulation and healing"
        },
        {
          name: "Laser Therapy",
          description: "Reduces inflammation and accelerates tissue repair"
        },
        {
          name: "Chiropractic Therapy",
          description: "Spinal manipulation to restore proper alignment"
        },
        {
          name: "Manual Therapy",
          description: "Specialized hands-on techniques for disc problems"
        }
      ]}
      exercises={[
        {
          name: "McKenzie Extension Exercises",
          description: "Specific movements to centralize disc material and reduce pain"
        },
        {
          name: "Core Strengthening",
          description: "Building deep spinal stabilizers to support the spine"
        },
        {
          name: "Lumbar Stabilization",
          description: "Exercises to maintain proper spinal position"
        },
        {
          name: "Nerve Gliding Exercises",
          description: "Gentle movements to improve nerve mobility"
        },
        {
          name: "Postural Training",
          description: "Learning proper body mechanics to prevent aggravation"
        },
        {
          name: "Flexibility Exercises",
          description: "Stretching tight muscles that contribute to disc problems"
        }
      ]}
    />
  );
};

export default SlipDisc;
