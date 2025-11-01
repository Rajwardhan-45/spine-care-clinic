import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Zap, AlertTriangle, Repeat, MousePointer, Dumbbell, Laptop, Clock, Activity } from "lucide-react";

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
      symptoms={[
        {
          name: "Elbow Pain",
          description: "Pain on outer elbow that worsens with gripping",
          icon: <Zap className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Weak Grip",
          description: "Difficulty holding objects or shaking hands",
          icon: <AlertTriangle className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Stiffness",
          description: "Reduced elbow and wrist flexibility",
          icon: <Activity className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Forearm Discomfort",
          description: "Pain radiating down the forearm",
          icon: <MousePointer className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      causes={[
        {
          name: "Repetitive Movements",
          description: "Frequent gripping, twisting, or lifting motions",
          icon: <Repeat className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Sports Activities",
          description: "Tennis, badminton, and racquet sports overuse",
          icon: <Dumbbell className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Manual Labor",
          description: "Carpentry, plumbing, painting, and typing",
          icon: <Laptop className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Age Factor",
          description: "Most common between ages 30-50 years",
          icon: <Clock className="h-5 w-5 text-secondary-foreground" />
        }
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
