import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Heart } from "lucide-react";

const Paralysis = () => {
  return (
    <ServiceDetailLayout
      title="Paralysis Rehabilitation"
      description="Comprehensive post-stroke physiotherapy and neurological rehabilitation"
      icon={<Heart className="h-8 w-8 text-white" />}
      keyPoints={[
        "Post-stroke rehabilitation program",
        "Hemiplegia and hemiparesis treatment",
        "Muscle strength and tone restoration",
        "Balance and coordination training",
        "Gait training and walking re-education",
        "Activities of daily living (ADL) training",
        "Spasticity management",
        "Functional independence improvement"
      ]}
      equipment={[
        {
          name: "Electric Muscle Stimulation (EMS)",
          description: "Prevents muscle atrophy and maintains muscle tone"
        },
        {
          name: "PEMF Therapy",
          description: "Enhances neuroplasticity and healing"
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Pain management and circulation improvement"
        },
        {
          name: "T.E.N.S",
          description: "Sensory stimulation and pain relief"
        },
        {
          name: "Laser Therapy",
          description: "Promotes nerve regeneration and healing"
        },
        {
          name: "Manual Therapy",
          description: "Passive range of motion and joint mobilization"
        },
        {
          name: "Exercise Therapy",
          description: "Progressive strengthening and functional training"
        },
        {
          name: "Gait Training Equipment",
          description: "Parallel bars and assistive devices for walking"
        }
      ]}
      exercises={[
        {
          name: "Range of Motion Exercises",
          description: "Prevents contractures and maintains joint flexibility"
        },
        {
          name: "Strengthening Exercises",
          description: "Progressive resistance training for affected limbs"
        },
        {
          name: "Balance Training",
          description: "Sitting and standing balance exercises"
        },
        {
          name: "Gait Training",
          description: "Walking re-education with proper pattern"
        },
        {
          name: "Functional Reaching",
          description: "Improves arm and hand function for daily tasks"
        },
        {
          name: "Transfer Training",
          description: "Safe bed to chair and chair to standing movements"
        }
      ]}
    />
  );
};

export default Paralysis;
