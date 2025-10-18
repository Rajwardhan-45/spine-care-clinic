import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Activity } from "lucide-react";
import sportsInjuryImg from "@/assets/treatments/sports-injury.jpg";

const SportsInjury = () => {
  return (
    <ServiceDetailLayout
      title="Sports Injury Treatment"
      description="Comprehensive rehabilitation for ACL, ligament injuries, and sports-related conditions"
      icon={<Activity className="h-8 w-8 text-white" />}
      treatmentImage={sportsInjuryImg}
      keyPoints={[
        "ACL reconstruction rehabilitation with progressive strengthening",
        "Meniscus tear treatment and functional recovery",
        "Ligament sprain and strain management",
        "Muscle tear rehabilitation protocols",
        "Return to sport training programs",
        "Injury prevention strategies",
        "Performance enhancement techniques",
        "Sport-specific conditioning"
      ]}
      equipment={[
        {
          name: "Traction Therapy",
          description: "Mechanical traction to relieve pressure on joints and spine during recovery"
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Pain relief and tissue healing through electrical currents"
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed electromagnetic field therapy for accelerated healing"
        },
        {
          name: "Electric Muscle Stimulation (EMS)",
          description: "Muscle re-education and strength building"
        },
        {
          name: "T.E.N.S",
          description: "Transcutaneous electrical nerve stimulation for pain management"
        },
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy for tissue repair and inflammation reduction"
        },
        {
          name: "Chiropractic Therapy",
          description: "Joint mobilization and alignment for optimal biomechanics"
        },
        {
          name: "Manual Therapy",
          description: "Hands-on techniques for mobility and pain relief"
        }
      ]}
      exercises={[
        {
          name: "Progressive Resistance Training",
          description: "Gradual strength building exercises specific to the injured area"
        },
        {
          name: "Proprioceptive Training",
          description: "Balance and coordination exercises to prevent re-injury"
        },
        {
          name: "Plyometric Exercises",
          description: "Explosive movement training for athletes returning to sport"
        },
        {
          name: "Functional Movement Patterns",
          description: "Sport-specific movements to restore full athletic capability"
        },
        {
          name: "Flexibility Training",
          description: "Stretching protocols to restore and maintain range of motion"
        },
        {
          name: "Core Stabilization",
          description: "Exercises to build foundational strength and prevent future injuries"
        }
      ]}
    />
  );
};

export default SportsInjury;
