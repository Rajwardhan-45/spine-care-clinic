import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Footprints, Zap, Activity, Dumbbell, TrendingDown, Users, Clock, Scale } from "lucide-react";

const KneePain = () => {
  return (
    <ServiceDetailLayout
      title="Knee Pain Treatment"
      description="Comprehensive knee rehabilitation and pain management"
      icon={<Footprints className="h-8 w-8 text-white" />}
      keyPoints={[
        "Osteoarthritis knee pain management",
        "Meniscus tear rehabilitation",
        "Patellar tracking disorder treatment",
        "Post-knee replacement therapy",
        "Runner's knee treatment",
        "Ligament injury rehabilitation",
        "Cartilage damage management",
        "Prevention of knee degeneration"
      ]}
      symptoms={[
        {
          name: "Sharp Pain",
          description: "Acute pain during movement or weight bearing",
          icon: <Zap className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Swelling & Stiffness",
          description: "Joint inflammation and reduced flexibility",
          icon: <Activity className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Weakness",
          description: "Difficulty bearing weight or climbing stairs",
          icon: <TrendingDown className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Grinding Sensation",
          description: "Crepitus or popping sound during movement",
          icon: <Dumbbell className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      causes={[
        {
          name: "Age-Related Wear",
          description: "Cartilage deterioration over time (osteoarthritis)",
          icon: <Clock className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Sports Injuries",
          description: "ACL/MCL tears, meniscus damage from athletics",
          icon: <Activity className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Obesity",
          description: "Excess weight increases stress on knee joints",
          icon: <Scale className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Poor Alignment",
          description: "Biomechanical issues or muscle imbalances",
          icon: <Users className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      equipment={[
        {
          name: "Interferential Therapy (IFT)",
          description: "Reduces knee pain and swelling"
        },
        {
          name: "PEMF Therapy",
          description: "Promotes cartilage healing and reduces inflammation"
        },
        {
          name: "Electric Muscle Stimulation",
          description: "Strengthens quadriceps and surrounding muscles"
        },
        {
          name: "T.E.N.S",
          description: "Continuous pain relief for chronic knee pain"
        },
        {
          name: "Laser Therapy",
          description: "Anti-inflammatory effects for knee joints"
        },
        {
          name: "Manual Therapy",
          description: "Joint mobilization and soft tissue techniques"
        },
        {
          name: "Exercise Therapy",
          description: "Strengthening and stretching program"
        },
        {
          name: "Taping Techniques",
          description: "Patellar taping for support and pain relief"
        }
      ]}
      exercises={[
        {
          name: "Quadriceps Strengthening",
          description: "Straight leg raises and knee extensions"
        },
        {
          name: "Hamstring Stretches",
          description: "Improves flexibility and reduces strain"
        },
        {
          name: "Wall Slides",
          description: "Functional strengthening with proper tracking"
        },
        {
          name: "Step-Up Exercises",
          description: "Builds strength for daily activities"
        },
        {
          name: "Balance Training",
          description: "Single leg stance for stability"
        },
        {
          name: "Calf Stretches",
          description: "Reduces stress on knee joint"
        }
      ]}
    />
  );
};

export default KneePain;
