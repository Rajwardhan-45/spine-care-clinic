import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Heart, Brain, Zap, Hand, Footprints, Activity, Clock, AlertTriangle } from "lucide-react";

const Paralysis = () => {
  return (
    <ServiceDetailLayout
      title="Paralysis & Stroke Rehabilitation"
      description="Comprehensive post-stroke physiotherapy and neurological rehabilitation for paralysis recovery in Pimpri-Chinchwad, Pune"
      icon={<Heart className="h-8 w-8 text-white" />}
      introduction="At Dr. Anirudha Vaidya's Physiotherapy Clinic in Pimpri-Chinchwad, we provide specialized paralysis and stroke rehabilitation services designed to help you regain independence and improve your quality of life. Stroke and paralysis can be life-changing events, affecting not just physical abilities but also emotional well-being and daily functioning. Our comprehensive neurological rehabilitation program addresses all aspects of recovery, from basic movement patterns to complex functional activities. Whether you're dealing with hemiplegia (paralysis on one side), hemiparesis (weakness on one side), or other neurological conditions, our expert physiotherapists create individualized treatment plans that focus on your specific needs and goals. We understand that every stroke survivor's journey is unique, and we're committed to supporting you and your family throughout the rehabilitation process. Our clinic in Pune offers the latest evidence-based techniques and advanced equipment to maximize your recovery potential and help you achieve the best possible outcomes."
      understandingCondition="Stroke occurs when blood supply to part of the brain is interrupted, causing brain cells to die and leading to various neurological deficits. Paralysis, or the loss of muscle function, is one of the most common consequences of stroke, affecting approximately 80% of survivors. The severity and location of paralysis depend on which area of the brain was affected and the extent of damage. Hemiplegia refers to complete paralysis on one side of the body, while hemiparesis involves partial weakness. These conditions affect not only movement but also sensation, balance, coordination, speech, and cognitive function. The brain has remarkable plasticity—the ability to form new neural connections and reorganize itself. This neuroplasticity is the foundation of stroke rehabilitation. With intensive, targeted therapy, especially in the early months following a stroke, significant recovery is possible. Our rehabilitation program takes advantage of this neuroplasticity window to help you regain as much function as possible through repetitive, task-specific training."
      treatmentApproach="Our paralysis and stroke rehabilitation program is based on the principles of neuroplasticity and motor learning. We begin with a comprehensive assessment of your neurological status, including muscle strength, tone, sensation, balance, coordination, and functional abilities. Based on this evaluation, we develop a personalized rehabilitation plan that addresses your specific deficits and aligns with your recovery goals. Our treatment combines multiple therapeutic approaches: neurodevelopmental techniques to normalize movement patterns, task-specific training to improve functional abilities, strengthening exercises for weakened muscles, and balance and coordination training to prevent falls. We also address secondary complications like spasticity, contractures, and shoulder problems that can develop after stroke. Our therapists work closely with you and your family, providing education and home exercise programs to ensure continuous progress between sessions. We celebrate every milestone, no matter how small, because we know that recovery is a journey of many steps."
      treatmentTimeline={[
        {
          title: "Initial Assessment & Planning",
          description: "Comprehensive neurological evaluation to assess motor function, sensation, balance, cognition, and functional abilities. We establish baseline measurements and set realistic, achievable goals together with you and your family."
        },
        {
          title: "Acute Rehabilitation Phase",
          description: "Intensive therapy focusing on preventing complications like contractures and bedsores, initiating early mobilization, and beginning basic movement training. We work on bed mobility, sitting balance, and transfers."
        },
        {
          title: "Active Recovery Phase",
          description: "Progressive strengthening and functional training including standing balance, weight-bearing exercises, and walking re-education. We introduce task-specific activities to improve daily living skills."
        },
        {
          title: "Advanced Functional Training",
          description: "Refinement of movement quality, advanced balance training, and community reintegration activities. Focus on improving walking speed, endurance, and confidence for independent living."
        }
      ]}
      recoveryPrevention="Stroke recovery is a lifelong journey, and the skills you develop during rehabilitation will serve you well beyond your formal therapy. We emphasize secondary stroke prevention by educating you about risk factor management, including blood pressure control, diabetes management, and lifestyle modifications. Continuing your home exercise program is essential for maintaining and improving upon the gains you've made. Regular physical activity, even modified versions of exercises, helps maintain strength, flexibility, and cardiovascular health. We also address fall prevention strategies, as stroke survivors have an increased risk of falls. Managing spasticity and maintaining joint mobility through daily stretching prevents long-term complications. Your family plays a crucial role in your ongoing recovery, and we provide training and resources to help them support you effectively at home."
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
      symptoms={[
        {
          name: "One-Sided Weakness",
          description: "Difficulty moving arm, leg, or face on one side of the body",
          icon: <Hand className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Balance Problems",
          description: "Difficulty sitting, standing, or walking without support",
          icon: <Activity className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Muscle Stiffness",
          description: "Increased muscle tone (spasticity) causing rigid limbs",
          icon: <Zap className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Difficulty Walking",
          description: "Altered gait pattern, foot drop, or inability to walk",
          icon: <Footprints className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      causes={[
        {
          name: "Ischemic Stroke",
          description: "Blood clot blocking blood flow to the brain (most common)",
          icon: <Brain className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Hemorrhagic Stroke",
          description: "Bleeding in the brain due to ruptured blood vessel",
          icon: <AlertTriangle className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Traumatic Brain Injury",
          description: "Head injury causing brain damage and paralysis",
          icon: <Zap className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Spinal Cord Injury",
          description: "Damage to the spinal cord affecting nerve signals",
          icon: <Clock className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      equipment={[
        {
          name: "Electric Muscle Stimulation (EMS)",
          description: "EMS therapy is essential for paralysis rehabilitation, delivering electrical impulses to weakened or paralyzed muscles to prevent atrophy and maintain muscle mass. This technology helps reactivate dormant neural pathways and improves muscle response, even when voluntary movement is limited."
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed Electromagnetic Field therapy enhances neuroplasticity and promotes healing at the cellular level. This non-invasive treatment improves blood circulation to damaged brain areas, reduces inflammation, and supports nerve regeneration, contributing to better functional outcomes."
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "IFT provides effective pain management for the secondary complications often experienced after stroke, such as shoulder pain and muscle spasms. It improves circulation to affected limbs and helps reduce swelling that can limit mobility and recovery."
        },
        {
          name: "T.E.N.S",
          description: "Transcutaneous Electrical Nerve Stimulation provides sensory input to affected limbs, helping to improve awareness and proprioception. It's also effective for managing pain and reducing spasticity in affected muscles."
        },
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy promotes nerve regeneration and tissue healing. It's particularly helpful for managing soft tissue complications, reducing inflammation around joints, and accelerating recovery of damaged tissues."
        },
        {
          name: "Manual Therapy",
          description: "Hands-on techniques including passive range of motion exercises, joint mobilization, and soft tissue work are fundamental to paralysis rehabilitation. These techniques prevent contractures, maintain joint health, and prepare muscles for active movement."
        },
        {
          name: "Exercise Therapy",
          description: "Comprehensive exercise programs including strengthening, balance training, and functional activities form the core of neurological rehabilitation. Our graded exercise approach progressively challenges your abilities while ensuring safety and building confidence."
        },
        {
          name: "Gait Training Equipment",
          description: "Parallel bars, walkers, and other assistive devices support safe walking re-education. We use body weight support systems and specialized equipment to help you practice walking with proper form while minimizing fall risk."
        }
      ]}
      exercises={[
        {
          name: "Range of Motion Exercises",
          description: "Both passive (therapist-assisted) and active range of motion exercises prevent joint contractures and maintain flexibility. These exercises are performed daily, moving each joint through its full range to preserve mobility and prevent the development of painful joint limitations."
        },
        {
          name: "Strengthening Exercises",
          description: "Progressive resistance training targets weakened muscles on the affected side. We start with gravity-eliminated positions and gradually increase resistance as strength improves, using weights, resistance bands, and functional activities."
        },
        {
          name: "Balance Training",
          description: "Balance exercises progress from sitting balance to standing and dynamic balance activities. We use various surfaces, visual challenges, and reaching activities to improve your stability and reduce fall risk in everyday situations."
        },
        {
          name: "Gait Training",
          description: "Walking re-education focuses on developing a safe, efficient gait pattern. We work on weight shifting, step timing, foot placement, and arm swing, gradually reducing support as your confidence and ability improve."
        },
        {
          name: "Functional Reaching",
          description: "Task-specific reaching exercises improve arm and hand function for daily activities like eating, dressing, and grooming. We practice reaching in multiple directions with varying weights to enhance both strength and coordination."
        },
        {
          name: "Transfer Training",
          description: "Learning to safely move from bed to wheelchair, wheelchair to toilet, and other transfers is essential for independence. We teach proper techniques that protect both you and your caregivers while building the strength and skills needed for safe transfers."
        }
      ]}
      faqs={[
        {
          question: "How soon after a stroke should physiotherapy begin?",
          answer: "Physiotherapy should ideally begin within 24-48 hours after a stroke, once the patient is medically stable. Early rehabilitation takes advantage of the brain's heightened neuroplasticity in the acute phase and helps prevent complications like contractures, blood clots, and pneumonia. At our Pimpri-Chinchwad clinic, we work with stroke survivors at all stages of recovery, from acute hospital referrals to long-term rehabilitation."
        },
        {
          question: "Can paralyzed limbs regain movement with physiotherapy?",
          answer: "Yes, many stroke survivors regain significant movement and function through consistent physiotherapy. The brain has remarkable ability to reorganize itself (neuroplasticity), allowing healthy brain areas to take over functions of damaged areas. While complete recovery isn't always possible, most patients see meaningful improvements in strength, coordination, and functional abilities with dedicated rehabilitation."
        },
        {
          question: "How long does stroke rehabilitation take?",
          answer: "Stroke rehabilitation duration varies greatly depending on stroke severity, affected areas, and individual factors. The most rapid recovery typically occurs in the first 3-6 months, but improvements can continue for years. Many patients benefit from ongoing maintenance therapy. We create personalized treatment plans and adjust goals based on your progress throughout your recovery journey."
        },
        {
          question: "What is spasticity and how do you treat it?",
          answer: "Spasticity is increased muscle stiffness and tightness that commonly occurs after stroke, causing affected limbs to feel rigid or \"locked.\" We manage spasticity through regular stretching, positioning techniques, electrical stimulation, and specific exercises that reduce muscle tension while preserving useful tone for movement. Proper spasticity management improves comfort, function, and prevents contractures."
        },
        {
          question: "Can stroke survivors learn to walk again?",
          answer: "Many stroke survivors can relearn to walk with proper rehabilitation, though the degree of recovery varies. We use a progressive approach starting with standing balance, weight shifting, and supported stepping, gradually advancing to independent walking. Assistive devices like canes or walkers may be used initially and can often be reduced or eliminated as ability improves."
        },
        {
          question: "How can family members help in stroke recovery?",
          answer: "Family support is crucial for stroke recovery. We provide comprehensive training for family members on safe transfer techniques, assisting with exercises, encouraging independence while providing necessary support, and understanding the emotional aspects of recovery. Consistent practice of home exercises between therapy sessions significantly improves outcomes."
        },
        {
          question: "Do you provide home-based stroke rehabilitation?",
          answer: "Yes, we offer home-based rehabilitation services for stroke patients who have difficulty traveling to our Pimpri-Chinchwad clinic. Home therapy is particularly valuable for patients with mobility limitations and allows us to work on functional activities in the actual environment where they'll be performed, making training more relevant and effective."
        }
      ]}
      whyChooseUs={[
        "Specialized neurological rehabilitation team with extensive stroke recovery experience",
        "Advanced equipment including EMS, PEMF therapy, and gait training systems",
        "Comprehensive approach addressing physical, functional, and emotional recovery",
        "Family training and education for continued progress at home",
        "Proven track record helping stroke survivors in Pimpri-Chinchwad and Pune regain independence",
        "Call 075172 37255 to begin your recovery journey today"
      ]}
    />
  );
};

export default Paralysis;
