import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Droplet } from "lucide-react";

const LigamentTreatment = () => {
  return (
    <ServiceDetailLayout
      title="Ligament Treatment"
      description="Expert care for ligament tears, sprains, and reconstruction rehabilitation"
      icon={<Droplet className="h-8 w-8 text-white" />}
      keyPoints={[
        "ACL, PCL, MCL, LCL tear management",
        "Grade I, II, III sprain treatment",
        "Post-surgical ligament reconstruction rehab",
        "Non-surgical ligament healing protocols",
        "Joint stability restoration",
        "Prevention of chronic instability",
        "Return to sport programs",
        "Proprioception and balance training"
      ]}
      equipment={[
        {
          name: "Traction Therapy",
          description: "Gentle joint decompression during healing"
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Pain relief and swelling reduction"
        },
        {
          name: "PEMF Therapy",
          description: "Accelerates ligament healing process"
        },
        {
          name: "Electric Muscle Stimulation",
          description: "Prevents muscle atrophy during immobilization"
        },
        {
          name: "T.E.N.S",
          description: "Pain management during recovery"
        },
        {
          name: "Laser Therapy",
          description: "Promotes collagen formation in ligaments"
        },
        {
          name: "Manual Therapy",
          description: "Joint mobilization and soft tissue work"
        },
        {
          name: "Exercise Therapy",
          description: "Progressive strengthening and stability"
        }
      ]}
      exercises={[
        {
          name: "Range of Motion Exercises",
          description: "Gentle movements to restore joint mobility"
        },
        {
          name: "Isometric Strengthening",
          description: "Static muscle contractions without joint movement"
        },
        {
          name: "Proprioceptive Training",
          description: "Balance board and stability exercises"
        },
        {
          name: "Progressive Resistance",
          description: "Gradual strengthening of surrounding muscles"
        },
        {
          name: "Functional Movement",
          description: "Sport-specific movements for return to activity"
        },
        {
          name: "Plyometric Training",
          description: "Advanced exercises for complete recovery"
        }
      ]}
    />
  );
};

export default LigamentTreatment;
