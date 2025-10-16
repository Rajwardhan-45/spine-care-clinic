import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Target } from "lucide-react";

const Chiropractic = () => {
  return (
    <ServiceDetailLayout
      title="Chiropractic Care"
      description="Spinal adjustments and manipulations for optimal alignment and pain relief"
      icon={<Target className="h-8 w-8 text-white" />}
      keyPoints={[
        "Spinal manipulation and adjustment",
        "Joint mobilization techniques",
        "Postural correction and alignment",
        "Headache and migraine relief",
        "TMJ disorder treatment",
        "Extremity joint adjustments",
        "Holistic pain management",
        "Preventive care and wellness"
      ]}
      equipment={[
        {
          name: "Chiropractic Adjustment Table",
          description: "Specialized table for safe and effective spinal manipulation"
        },
        {
          name: "Manual Therapy Techniques",
          description: "Hands-on spinal and joint adjustments"
        },
        {
          name: "Soft Tissue Therapy",
          description: "Muscle release and trigger point therapy"
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Complements adjustments with pain relief"
        },
        {
          name: "T.E.N.S",
          description: "Manages pain before and after adjustments"
        },
        {
          name: "Laser Therapy",
          description: "Reduces inflammation post-adjustment"
        },
        {
          name: "Exercise Therapy",
          description: "Maintains alignment between sessions"
        },
        {
          name: "Postural Assessment",
          description: "Identifies and corrects alignment issues"
        }
      ]}
      exercises={[
        {
          name: "Posture Correction Exercises",
          description: "Maintains proper alignment throughout the day"
        },
        {
          name: "Core Strengthening",
          description: "Supports spinal adjustments with strong muscles"
        },
        {
          name: "Stretching Routines",
          description: "Maintains flexibility and range of motion"
        },
        {
          name: "Ergonomic Training",
          description: "Proper body mechanics for work and daily life"
        },
        {
          name: "Spinal Stabilization",
          description: "Exercises to maintain chiropractic corrections"
        },
        {
          name: "Neck Retraction",
          description: "Reduces forward head posture"
        }
      ]}
    />
  );
};

export default Chiropractic;
