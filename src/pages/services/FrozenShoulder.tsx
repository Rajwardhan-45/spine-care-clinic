import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Smile } from "lucide-react";
import exerciseTherapyImg from "@/assets/treatments/exercise-therapy.jpg";

const FrozenShoulder = () => {
  return (
    <ServiceDetailLayout
      title="Frozen Shoulder Treatment"
      description="Specialized treatment for adhesive capsulitis and shoulder mobility restoration"
      icon={<Smile className="h-8 w-8 text-white" />}
      treatmentImage={exerciseTherapyImg}
      keyPoints={[
        "Adhesive capsulitis (frozen shoulder) treatment",
        "Pain relief in all stages of freezing",
        "Range of motion restoration",
        "Capsular release techniques",
        "Rotator cuff rehabilitation",
        "Shoulder impingement management",
        "Post-operative shoulder care",
        "Prevention of recurrence"
      ]}
      equipment={[
        {
          name: "Interferential Therapy (IFT)",
          description: "Pain management and muscle relaxation for shoulder"
        },
        {
          name: "PEMF Therapy",
          description: "Promotes healing of shoulder joint capsule"
        },
        {
          name: "Electric Muscle Stimulation",
          description: "Prevents muscle atrophy during frozen stage"
        },
        {
          name: "T.E.N.S",
          description: "Continuous pain relief for home use"
        },
        {
          name: "Short Wave Diathermy",
          description: "Deep heat to loosen tight shoulder capsule"
        },
        {
          name: "Laser Therapy",
          description: "Reduces inflammation and promotes tissue healing"
        },
        {
          name: "Manual Therapy",
          description: "Joint mobilization and soft tissue techniques"
        },
        {
          name: "Exercise Therapy",
          description: "Progressive stretching and strengthening program"
        }
      ]}
      exercises={[
        {
          name: "Pendulum Exercises",
          description: "Gentle range of motion exercises in early stages"
        },
        {
          name: "Wall Walks",
          description: "Gradually increases shoulder elevation and flexion"
        },
        {
          name: "Towel Stretch",
          description: "Internal and external rotation stretching"
        },
        {
          name: "Shoulder Circles",
          description: "Improves overall shoulder mobility"
        },
        {
          name: "Cross-Body Stretch",
          description: "Stretches posterior shoulder capsule"
        },
        {
          name: "Resistance Band Exercises",
          description: "Strengthens rotator cuff muscles"
        }
      ]}
    />
  );
};

export default FrozenShoulder;
