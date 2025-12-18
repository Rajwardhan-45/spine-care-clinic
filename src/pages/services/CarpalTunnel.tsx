import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Hand, AlertCircle, Activity, Clock, Laptop, Dumbbell, TrendingDown, Users } from "lucide-react";

const CarpalTunnel = () => {
  return (
    <ServiceDetailLayout
      title="Carpal Tunnel Syndrome Treatment"
      description="Expert physiotherapy for wrist pain, hand numbness, and carpal tunnel syndrome without surgery"
      icon={<Hand className="h-8 w-8 text-white" />}
      introduction="Waking up with numb, tingling hands or dropping objects because your grip has weakened can be frightening and frustrating. At Dr. Anirudha Vaidya's Physiotherapy Clinic in Pimpri-Chinchwad, Pune, we specialize in non-surgical treatment of carpal tunnel syndrome—a condition that affects millions of people, particularly those who work with computers or perform repetitive hand movements. Our evidence-based approach helps restore normal nerve function and hand strength.

Carpal tunnel syndrome occurs when the median nerve, which runs through a narrow passageway in your wrist, becomes compressed. This compression causes the characteristic symptoms of numbness, tingling, and weakness in your thumb, index, middle, and ring fingers. We treat patients from across Sambhajinagar and Pune who want to avoid surgery or have returned after surgery needing rehabilitation. Our comprehensive treatment addresses both the symptoms and the underlying causes of nerve compression. Call us at 075172 37255 to schedule your hand assessment and discover how we can help restore your hand function."
      understandingCondition="The carpal tunnel is a narrow passageway on the palm side of your wrist, surrounded by bones and ligaments. The median nerve and nine tendons pass through this tunnel. When the tunnel becomes narrowed—due to swelling, thickening of tendons, or other factors—the median nerve gets compressed, causing carpal tunnel syndrome symptoms.

In early stages, symptoms typically appear at night or first thing in the morning, then progress to daytime symptoms during hand activities. Without treatment, permanent nerve damage can occur, leading to persistent numbness and muscle wasting at the base of the thumb. Understanding the severity and stage of your condition is essential for appropriate treatment. Our assessment includes specific tests for carpal tunnel syndrome and may recommend nerve conduction studies to confirm the diagnosis and gauge severity."
      treatmentApproach="Our carpal tunnel treatment aims to reduce nerve compression and restore normal hand function without surgery. Treatment intensity and approach depend on your symptom severity and how long you've had the condition.

For mild to moderate cases, we focus on reducing inflammation within the carpal tunnel, improving nerve mobility, and modifying activities that aggravate symptoms. Wrist splinting, especially at night, keeps your wrist in a neutral position that maximizes tunnel space. Nerve gliding exercises improve the median nerve's ability to move within the tunnel. For more advanced cases, we combine these approaches with aggressive manual therapy and ergonomic modifications. Post-surgical rehabilitation follows a structured protocol to restore function and prevent symptom recurrence."
      treatmentTimeline={[
        {
          title: "Phase 1: Symptom Relief (Weeks 1-3)",
          description: "Night splinting, modality treatment for inflammation, and activity modifications to reduce nerve irritation. Ergonomic assessment of work and home activities."
        },
        {
          title: "Phase 2: Nerve Mobilization (Weeks 3-6)",
          description: "Introduction of nerve and tendon gliding exercises. Continued splinting and modalities as needed. Manual therapy to improve wrist mechanics."
        },
        {
          title: "Phase 3: Strength Restoration (Weeks 6-10)",
          description: "Progressive strengthening of grip and pinch strength. Continued nerve gliding exercises. Workplace modifications implemented."
        },
        {
          title: "Phase 4: Functional Training (Weeks 10-14)",
          description: "Return to full work and daily activities with proper technique. Fine motor skill exercises for dexterity restoration."
        },
        {
          title: "Phase 5: Prevention Program (Ongoing)",
          description: "Maintenance exercises, ergonomic habits, and strategies to prevent recurrence. Periodic reassessment as needed."
        }
      ]}
      recoveryPrevention="Preventing carpal tunnel syndrome recurrence requires ongoing attention to wrist position and hand use patterns. Keep your wrist in a neutral position during activities—avoid sustained bending or extending at the wrist. Take regular breaks during repetitive tasks, performing stretches and nerve glides every 30-60 minutes.

Ergonomic setup is essential: position your keyboard and mouse so your wrists remain straight, use a wrist rest during pauses (not while typing), and maintain good overall posture. If symptoms return, early intervention prevents progression. Avoid sleeping with wrists flexed—wearing splints at night can help. Keep hands warm, as cold increases stiffness and symptom severity. Our team provides personalized prevention strategies based on your specific work and activities."
      symptoms={[
        { name: "Hand Numbness", description: "Loss of sensation in thumb, index, and middle fingers", icon: <TrendingDown className="h-5 w-5 text-primary" /> },
        { name: "Tingling Sensation", description: "Pins-and-needles feeling in the hand", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Nighttime Symptoms", description: "Numbness that wakes you from sleep", icon: <Clock className="h-5 w-5 text-primary" /> },
        { name: "Weak Grip", description: "Difficulty holding objects, frequent dropping", icon: <Hand className="h-5 w-5 text-primary" /> },
        { name: "Pain in Wrist", description: "Aching or burning sensation in wrist and palm", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Thumb Weakness", description: "Difficulty with pinching and fine movements", icon: <Activity className="h-5 w-5 text-primary" /> }
      ]}
      causes={[
        { name: "Repetitive Hand Use", description: "Prolonged keyboard, mouse, or tool use", icon: <Laptop className="h-5 w-5 text-secondary" /> },
        { name: "Wrist Position", description: "Sustained flexion or extension of wrist", icon: <Hand className="h-5 w-5 text-secondary" /> },
        { name: "Pregnancy", description: "Fluid retention causing tunnel narrowing", icon: <Users className="h-5 w-5 text-secondary" /> },
        { name: "Medical Conditions", description: "Diabetes, thyroid disorders, arthritis", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "Wrist Injuries", description: "Previous fractures or sprains affecting tunnel", icon: <AlertCircle className="h-5 w-5 text-secondary" /> },
        { name: "Vibrating Tools", description: "Occupational exposure to vibration", icon: <Dumbbell className="h-5 w-5 text-secondary" /> }
      ]}
      keyPoints={[
        "Non-surgical carpal tunnel treatment",
        "Nerve gliding and mobilization techniques",
        "Night splinting for symptom relief",
        "Ergonomic assessment and modification",
        "Grip and pinch strength restoration",
        "Post-surgical rehabilitation",
        "Workplace modification guidance",
        "Prevention of symptom recurrence"
      ]}
      equipment={[
        {
          name: "Wrist Splints",
          description: "Custom-fitted or prefabricated splints that maintain your wrist in a neutral position, maximizing space within the carpal tunnel. Night splints are particularly effective as many people sleep with wrists flexed, compressing the nerve for hours."
        },
        {
          name: "Ultrasound Therapy",
          description: "Therapeutic ultrasound reduces inflammation within the carpal tunnel and promotes healing of irritated tissues. This treatment reaches deep structures that are difficult to treat with surface applications, reducing swelling around the median nerve."
        },
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy reduces nerve inflammation and promotes cellular healing in the median nerve. Laser treatment is particularly effective for nerve-related conditions, often providing relief when other treatments have not been successful."
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Electrical stimulation that reduces pain and swelling in the wrist and hand. IFT provides effective pain relief during treatment, making it easier to tolerate exercises and daily activities."
        },
        {
          name: "Paraffin Wax Bath",
          description: "Warm wax therapy that delivers soothing heat to the hands and wrists. The combination of warmth and gentle pressure reduces stiffness and improves circulation, preparing tissues for exercise and manual therapy."
        },
        {
          name: "Electric Muscle Stimulation",
          description: "Electrical stimulation to maintain and restore muscle strength in the hand, particularly the thenar muscles at the base of the thumb that often weaken with carpal tunnel syndrome."
        },
        {
          name: "Manual Therapy",
          description: "Specialized hands-on techniques including carpal bone mobilization, soft tissue release, and nerve mobilization. Our therapists use techniques specifically designed to reduce pressure within the carpal tunnel and improve nerve mobility."
        },
        {
          name: "Ergonomic Assessment Tools",
          description: "Equipment to analyze your workstation setup and hand positions during activities. Proper ergonomic setup is essential for carpal tunnel recovery and prevention of recurrence."
        }
      ]}
      exercises={[
        {
          name: "Median Nerve Glides",
          description: "Sequential movements that improve the median nerve's ability to glide through the carpal tunnel. These exercises reduce adhesions between the nerve and surrounding structures, improving nerve function and reducing symptoms."
        },
        {
          name: "Tendon Gliding Exercises",
          description: "Specific finger and hand positions that move the flexor tendons through the carpal tunnel. Regular tendon gliding reduces swelling and improves space within the tunnel for the median nerve."
        },
        {
          name: "Wrist Stretches",
          description: "Gentle stretching of wrist flexors and extensors to maintain flexibility and reduce muscle tension that contributes to nerve compression. Regular stretching helps prevent symptom aggravation during activities."
        },
        {
          name: "Grip Strengthening",
          description: "Progressive strengthening exercises using therapy putty or hand exercisers to restore grip strength. Strengthening is introduced gradually as symptoms improve to avoid aggravating the condition."
        },
        {
          name: "Thumb Opposition Exercises",
          description: "Exercises that restore the pinch strength and coordination often affected by carpal tunnel syndrome. These movements target the thenar muscles that control thumb function."
        },
        {
          name: "Finger Dexterity Activities",
          description: "Fine motor exercises that restore coordination and precision in finger movements. Activities like picking up small objects, buttoning, and writing help rebuild functional hand skills."
        }
      ]}
      faqs={[
        {
          question: "Can carpal tunnel syndrome be cured without surgery?",
          answer: "Yes, many cases of carpal tunnel syndrome respond well to conservative treatment, especially when caught early. Mild to moderate cases often achieve complete symptom resolution with splinting, exercises, and activity modifications. The success of non-surgical treatment depends on symptom severity and duration. We provide honest assessment of whether conservative treatment is appropriate for your specific case."
        },
        {
          question: "How long does carpal tunnel treatment take?",
          answer: "Treatment duration varies based on severity. Mild cases may improve significantly within 4-6 weeks, while moderate cases typically require 8-12 weeks of consistent treatment. Severe or long-standing cases may take longer and may ultimately require surgery. We track your progress carefully and adjust treatment as needed throughout your recovery."
        },
        {
          question: "Should I wear a wrist splint all the time?",
          answer: "Night splinting is usually recommended for all patients, as wrist position during sleep significantly affects symptoms. Daytime splinting depends on your activities—it may be helpful during aggravating tasks but shouldn't be worn continuously, as this can lead to muscle weakness. We provide guidance on when and how long to wear your splint."
        },
        {
          question: "Will changing my workstation help my carpal tunnel?",
          answer: "Ergonomic modifications are often essential for carpal tunnel recovery and prevention. Proper keyboard and mouse positioning, chair height adjustment, and regular breaks can significantly reduce wrist stress. We assess your work setup and provide specific recommendations for improvement. Many employers have ergonomic resources available."
        },
        {
          question: "Can carpal tunnel come back after successful treatment?",
          answer: "Recurrence is possible if the underlying causes aren't addressed. Returning to the same activities without modifications, poor ergonomics, or stopping maintenance exercises increases recurrence risk. We emphasize prevention strategies and provide long-term guidance to help you maintain your improvement."
        },
        {
          question: "Do you provide post-surgery rehabilitation for carpal tunnel?",
          answer: "Yes, we offer comprehensive post-surgical rehabilitation for carpal tunnel release surgery. Treatment typically begins 1-2 weeks after surgery, focusing on scar management, restoring mobility, and rebuilding strength. Post-surgical rehabilitation helps ensure you regain full hand function and reduces the risk of symptom recurrence."
        },
        {
          question: "Is carpal tunnel syndrome the same as wrist tendonitis?",
          answer: "No, they are different conditions, though they can coexist. Carpal tunnel syndrome involves compression of the median nerve, causing numbness and tingling in specific fingers. Wrist tendonitis involves inflammation of tendons, causing pain with movement. The treatment approaches differ, which is why accurate diagnosis is important. Our assessment distinguishes between these conditions."
        }
      ]}
      whyChooseUs={[
        "Specialized expertise in hand and nerve conditions",
        "Comprehensive non-surgical treatment approach",
        "Ergonomic assessment and workplace modification guidance",
        "Post-surgical rehabilitation expertise",
        "Custom splinting solutions for optimal fit",
        "Convenient location in Pimpri-Chinchwad serving Pune and Sambhajinagar",
        "High success rate with conservative carpal tunnel treatment"
      ]}
    />
  );
};

export default CarpalTunnel;
