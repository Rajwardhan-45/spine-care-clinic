import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Zap } from "lucide-react";

const TennisElbow = () => {
  return (
    <ServiceDetailLayout
      title="Tennis Elbow Treatment"
      description="Targeted therapy for elbow pain and repetitive strain injuries"
      icon={<Zap className="h-8 w-8 text-white" />}
      keyPoints={[
        "Lateral epicondylitis (tennis elbow) treatment",
        "Medial epicondylitis (golfer's elbow) care",
        "Repetitive strain injury management",
        "Tendinopathy healing protocols",
        "Pain-free grip strength restoration",
        "Prevention of chronic elbow pain",
        "Return to work and sport",
        "Ergonomic modifications"
      ]}
      equipment={[
        {
          name: "Interferential Therapy (IFT)",
          description: "Reduces elbow pain and promotes healing"
        },
        {
          name: "PEMF Therapy",
          description: "Accelerates tendon healing"
        },
        {
          name: "Laser Therapy",
          description: "Promotes collagen formation in tendons"
        },
        {
          name: "T.E.N.S",
          description: "Pain management during activities"
        },
        {
          name: "Electric Muscle Stimulation",
          description: "Maintains muscle strength during recovery"
        },
        {
          name: "Manual Therapy",
          description: "Friction massage and soft tissue mobilization"
        },
        {
          name: "Exercise Therapy",
          description: "Eccentric strengthening program"
        },
        {
          name: "Taping & Bracing",
          description: "Supportive techniques to reduce strain"
        }
      ]}
      exercises={[
        {
          name: "Eccentric Wrist Exercises",
          description: "Specifically targets tendon healing"
        },
        {
          name: "Forearm Stretches",
          description: "Maintains flexibility and reduces tension"
        },
        {
          name: "Grip Strengthening",
          description: "Progressive resistance with therapy putty or ball"
        },
        {
          name: "Wrist Extension Exercises",
          description: "Builds strength in affected muscles"
        },
        {
          name: "Pronation/Supination",
          description: "Restores full forearm rotation"
        },
        {
          name: "Neural Glides",
          description: "Improves nerve mobility in the arm"
        }
      ]}
    />
  );
};

export default TennisElbow;
