import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Shield, Zap, AlertCircle, Radio, Smartphone, Users, Clock, Briefcase } from "lucide-react";

const CervicalSpondylosis = () => {
  return (
    <ServiceDetailLayout
      title="Cervical Spondylosis"
      description="Effective neck pain treatment and cervical spine care"
      icon={<Shield className="h-8 w-8 text-white" />}
      keyPoints={[
        "Cervical disc degeneration treatment",
        "Neck pain and stiffness relief",
        "Radiating arm pain management",
        "Headache relief from cervical origin",
        "Nerve compression treatment",
        "Postural neck pain correction",
        "Prevention of progression",
        "Improvement in neck mobility"
      ]}
      symptoms={[
        {
          name: "Neck Stiffness",
          description: "Reduced range of motion and muscle tightness",
          icon: <AlertCircle className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Radiating Pain",
          description: "Pain spreading to shoulders, arms, or hands",
          icon: <Radio className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Numbness & Tingling",
          description: "Pins and needles sensation in arms or fingers",
          icon: <Zap className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Headaches",
          description: "Tension headaches originating from neck",
          icon: <AlertCircle className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      causes={[
        {
          name: "Age & Degeneration",
          description: "Natural wear and tear of cervical discs and joints",
          icon: <Clock className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Poor Posture",
          description: "Extended periods of screen time and desk work",
          icon: <Smartphone className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Occupational Stress",
          description: "Jobs requiring repetitive neck movements",
          icon: <Briefcase className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Previous Injury",
          description: "Whiplash or neck trauma history",
          icon: <Users className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      equipment={[
        {
          name: "Cervical Traction",
          description: "Gentle decompression of cervical spine"
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Deep pain relief for neck muscles"
        },
        {
          name: "PEMF Therapy",
          description: "Promotes disc healing and reduces inflammation"
        },
        {
          name: "T.E.N.S",
          description: "Portable neck pain relief"
        },
        {
          name: "Short Wave Diathermy",
          description: "Deep heat therapy for chronic neck pain"
        },
        {
          name: "Laser Therapy",
          description: "Anti-inflammatory treatment for cervical spine"
        },
        {
          name: "Manual Therapy",
          description: "Gentle mobilization of cervical joints"
        },
        {
          name: "Exercise Therapy",
          description: "Strengthening and stretching for neck"
        }
      ]}
      exercises={[
        {
          name: "Chin Tucks",
          description: "Strengthens deep neck flexors and improves posture"
        },
        {
          name: "Neck Isometrics",
          description: "Builds strength without aggravating pain"
        },
        {
          name: "Shoulder Blade Squeezes",
          description: "Improves upper back posture"
        },
        {
          name: "Gentle Neck Stretches",
          description: "Maintains flexibility and reduces stiffness"
        },
        {
          name: "Upper Trapezius Stretch",
          description: "Relieves tension in neck and shoulders"
        },
        {
          name: "Postural Training",
          description: "Prevents aggravation from poor posture"
        }
      ]}
    />
  );
};

export default CervicalSpondylosis;
