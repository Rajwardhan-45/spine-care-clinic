import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { User, Zap, Frown, Eye, Wind, Activity, Brain, Shield, Snowflake } from "lucide-react";

const FacialPalsy = () => {
  return (
    <ServiceDetailLayout
      title="Facial Palsy (Bell's Palsy)"
      description="Specialized facial nerve rehabilitation and recovery therapy"
      icon={<User className="h-8 w-8 text-white" />}
      keyPoints={[
        "Bell's palsy treatment and rehabilitation",
        "Facial nerve paralysis recovery",
        "Facial muscle re-education",
        "Prevention of synkinesis (abnormal movements)",
        "Restoration of facial symmetry",
        "Eye protection and care",
        "Speech and eating function improvement",
        "Psychological support during recovery"
      ]}
      symptoms={[
        {
          name: "Facial Drooping",
          description: "One side of face droops or becomes weak suddenly",
          icon: <Frown className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Inability to Close Eye",
          description: "Difficulty closing eye on affected side completely",
          icon: <Eye className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Loss of Taste",
          description: "Reduced taste sensation on front of tongue",
          icon: <Wind className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Pain Around Jaw",
          description: "Pain or discomfort around jaw or behind ear",
          icon: <Zap className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      causes={[
        {
          name: "Viral Infection",
          description: "Herpes simplex virus is most common cause",
          icon: <Activity className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Nerve Inflammation",
          description: "Swelling and inflammation of facial nerve",
          icon: <Brain className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Weakened Immunity",
          description: "Diabetes, pregnancy, or respiratory illness",
          icon: <Shield className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Cold Exposure",
          description: "Extreme cold can trigger nerve dysfunction",
          icon: <Snowflake className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      equipment={[
        {
          name: "Facial Muscle Stimulation",
          description: "Gentle electrical stimulation to maintain muscle tone"
        },
        {
          name: "Laser Therapy",
          description: "Promotes facial nerve healing and regeneration"
        },
        {
          name: "PEMF Therapy",
          description: "Enhances nerve recovery and reduces inflammation"
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Improves blood circulation to facial area"
        },
        {
          name: "T.E.N.S",
          description: "Sensory stimulation for nerve recovery"
        },
        {
          name: "Manual Therapy",
          description: "Gentle facial massage and manipulation"
        },
        {
          name: "Mirror Therapy",
          description: "Visual feedback for facial muscle re-education"
        },
        {
          name: "Exercise Therapy",
          description: "Specific facial muscle exercises"
        }
      ]}
      exercises={[
        {
          name: "Eyebrow Raises",
          description: "Strengthens forehead muscles and improves symmetry"
        },
        {
          name: "Smile Exercises",
          description: "Retrains muscles for natural smiling"
        },
        {
          name: "Cheek Puffing",
          description: "Improves cheek muscle strength and control"
        },
        {
          name: "Lip Exercises",
          description: "Restores lip closure and movement"
        },
        {
          name: "Eye Closure Practice",
          description: "Prevents eye complications and improves closure"
        },
        {
          name: "Facial Massage",
          description: "Self-massage techniques to improve circulation"
        }
      ]}
    />
  );
};

export default FacialPalsy;
