import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { User } from "lucide-react";
import laserTherapyImg from "@/assets/treatments/laser-therapy.jpg";

const FacialPalsy = () => {
  return (
    <ServiceDetailLayout
      title="Facial Palsy (Bell's Palsy)"
      description="Specialized facial nerve rehabilitation and recovery therapy"
      icon={<User className="h-8 w-8 text-white" />}
      treatmentImage={laserTherapyImg}
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
