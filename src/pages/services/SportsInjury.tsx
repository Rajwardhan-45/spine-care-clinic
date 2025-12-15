import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Activity, Bone, AlertCircle, Clock, UserCheck } from "lucide-react";

const SportsInjury = () => {
  return (
    <ServiceDetailLayout
      title="Sports Injury Rehabilitation"
      description="Expert physiotherapy for ACL injuries, ligament tears, muscle strains, and complete return-to-sport recovery in Pimpri-Chinchwad"
      icon={<Activity className="h-8 w-8 text-white" />}
      introduction="Sports injuries can sideline athletes and active individuals from the activities they love, but with proper rehabilitation, full recovery and return to peak performance is achievable. At Dr. Anirudha Vaidya's clinic in Pimpri-Chinchwad, we specialize in treating the full spectrum of sports-related injuries—from ACL and meniscus tears to muscle strains, ligament sprains, and overuse injuries. Whether you're a competitive athlete, weekend warrior, or fitness enthusiast, our evidence-based rehabilitation protocols are designed to not only heal your injury but also make you stronger and more resilient than before. We understand that every sport demands different physical capabilities, which is why our treatment plans are customized to your specific sport, position, and performance goals. Our comprehensive approach addresses the root cause of injury, restores optimal function, and implements injury prevention strategies to keep you performing at your best without recurring problems."
      understandingCondition="Sports injuries occur when physical demands exceed the body's ability to cope, whether from acute trauma or repetitive stress. Common injuries include ACL tears (often from sudden direction changes), meniscus injuries, hamstring and quadriceps strains, ankle sprains, rotator cuff tears, and tennis/golfer's elbow. What many athletes don't realize is that incomplete rehabilitation is the leading cause of re-injury and chronic problems. Returning to sport too quickly or without addressing underlying weaknesses often leads to compensatory movement patterns that cause secondary injuries. The healing process involves distinct phases—inflammation, repair, and remodeling—each requiring specific treatment approaches. Understanding your injury's severity, the tissues involved, and realistic healing timelines is essential for setting appropriate recovery expectations and achieving sustainable return to sport."
      treatmentApproach="Our sports injury rehabilitation follows a systematic, phase-based approach that respects tissue healing while progressively challenging your body to rebuild strength and function. We begin with accurate diagnosis and pain management, then progress through mobility restoration, strength rebuilding, sport-specific conditioning, and finally return-to-play testing. Unlike generic rehabilitation, our protocols incorporate the latest sports medicine research and are tailored to your sport's specific demands. We use a combination of advanced modalities for tissue healing, manual therapy for mobility, progressive exercise prescription, and functional training to ensure you return not just to activity, but to competitive performance. Throughout rehabilitation, we monitor key benchmarks—range of motion, strength ratios, functional tests—to ensure safe progression and optimal outcomes."
      treatmentTimeline={[
        {
          title: "Initial Assessment & Diagnosis",
          description: "Comprehensive evaluation including injury history, mechanism of injury, physical examination, and functional testing. We identify all affected structures and contributing factors to create an accurate treatment plan."
        },
        {
          title: "Acute Phase Management",
          description: "Focus on pain control, inflammation reduction, and tissue protection. We use modalities like laser therapy, IFT, and gentle manual techniques while educating you on proper rest and activity modification."
        },
        {
          title: "Restoration Phase",
          description: "Progressive restoration of range of motion, flexibility, and early strengthening. Treatment frequency is typically 3-4 times weekly, incorporating manual therapy, mobility exercises, and controlled loading."
        },
        {
          title: "Strengthening & Conditioning",
          description: "Systematic strength rebuilding with focus on injured tissues and surrounding muscle groups. We address any muscle imbalances and work toward sport-specific strength requirements."
        },
        {
          title: "Sport-Specific Training",
          description: "Progressive introduction of sport-specific movements, agility drills, and functional exercises. This phase bridges the gap between clinical rehabilitation and full sports participation."
        },
        {
          title: "Return-to-Play Testing",
          description: "Objective testing of strength, power, agility, and sport-specific skills to ensure you meet criteria for safe return. We provide a graduated return-to-sport protocol and ongoing injury prevention guidance."
        }
      ]}
      recoveryPrevention="Recovery timelines vary significantly based on injury type and severity. Minor muscle strains may heal in 2-4 weeks, while ACL reconstruction rehabilitation typically requires 6-9 months for safe return to cutting and pivoting sports. During recovery, following your rehabilitation program consistently is crucial—missed sessions and incomplete exercises significantly delay healing and increase re-injury risk. Between sessions, follow prescribed rest and activity guidelines, use ice or heat as directed, and perform home exercises diligently. To prevent future injuries, maintain year-round conditioning, include proper warm-up and cool-down routines, address any biomechanical issues, ensure adequate recovery between training sessions, and progress training loads gradually. Listen to your body—persistent pain, swelling, or instability are warning signs that require attention before resuming intense activity."
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
      symptoms={[
        {
          name: "Pain During Activity",
          description: "Sharp or aching pain during sports movements, especially with specific actions like jumping, cutting, throwing, or running. Pain may worsen with continued activity",
          icon: <AlertCircle className="h-6 w-6" />
        },
        {
          name: "Swelling & Inflammation",
          description: "Visible swelling around the injured joint or muscle, warmth to touch, and stiffness. Swelling within hours indicates significant injury requiring prompt attention",
          icon: <Bone className="h-6 w-6" />
        },
        {
          name: "Weakness & Instability",
          description: "Feeling of giving way in joints, inability to bear weight normally, or noticeable weakness when attempting sports movements or everyday activities",
          icon: <Clock className="h-6 w-6" />
        },
        {
          name: "Reduced Performance",
          description: "Decreased speed, power, or endurance compared to pre-injury levels. Compensatory movement patterns, favoring one side, or inability to perform sport-specific skills",
          icon: <UserCheck className="h-6 w-6" />
        }
      ]}
      causes={[
        {
          name: "Acute Trauma",
          description: "Sudden injuries from falls, collisions, awkward landings, or rapid direction changes. ACL tears, ankle sprains, and muscle strains often result from single traumatic events",
          icon: <AlertCircle className="h-6 w-6" />
        },
        {
          name: "Overuse & Repetitive Stress",
          description: "Gradual onset injuries from repetitive movements without adequate recovery. Tendinitis, stress fractures, and chronic muscle strains develop over weeks or months of overtraining",
          icon: <Clock className="h-6 w-6" />
        },
        {
          name: "Poor Biomechanics",
          description: "Faulty movement patterns, muscle imbalances, or joint alignment issues that place excessive stress on specific structures during athletic movements",
          icon: <Bone className="h-6 w-6" />
        },
        {
          name: "Inadequate Conditioning",
          description: "Insufficient strength, flexibility, or endurance for the demands of your sport. Poor warm-up habits and rapid increases in training intensity increase injury risk",
          icon: <UserCheck className="h-6 w-6" />
        }
      ]}
      equipment={[
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy accelerates tissue healing by stimulating cellular repair processes at the injury site. This painless treatment is particularly effective for tendon injuries, muscle strains, and ligament healing, often reducing recovery time by 25-30% compared to rest alone."
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "IFT delivers therapeutic electrical currents deep into injured tissues, providing significant pain relief and promoting healing. Athletes benefit from reduced pain during rehabilitation exercises, allowing more effective strengthening even in early recovery phases."
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed Electromagnetic Field therapy enhances the body's natural healing processes at the cellular level. Research shows PEMF accelerates bone healing, reduces soft tissue inflammation, and speeds recovery from ligament and tendon injuries—essential for athletes seeking faster return to sport."
        },
        {
          name: "Electric Muscle Stimulation (EMS)",
          description: "EMS maintains and rebuilds muscle strength when normal training isn't possible due to injury. By directly stimulating muscle contractions, we prevent the significant muscle atrophy that occurs during immobilization and accelerate strength recovery during rehabilitation."
        },
        {
          name: "T.E.N.S (Transcutaneous Electrical Nerve Stimulation)",
          description: "TENS provides portable, drug-free pain relief that athletes can use during daily activities and between treatment sessions. This allows better participation in rehabilitation exercises and reduces reliance on pain medications that may impair training."
        },
        {
          name: "Chiropractic Therapy",
          description: "Joint mobilization and spinal adjustments restore optimal biomechanics essential for athletic performance. We address joint restrictions throughout the kinetic chain that may contribute to injury or impair recovery, ensuring your body moves efficiently during sport."
        },
        {
          name: "Manual Therapy",
          description: "Hands-on soft tissue techniques including sports massage, myofascial release, and trigger point therapy address muscle tightness, scar tissue, and movement restrictions. Manual therapy accelerates recovery and restores the tissue quality needed for athletic performance."
        },
        {
          name: "Traction Therapy",
          description: "Mechanical traction provides controlled decompression for spinal and joint injuries common in contact sports and high-impact activities. This technique relieves nerve compression, reduces disc pressure, and creates an optimal environment for tissue healing."
        }
      ]}
      exercises={[
        {
          name: "Progressive Resistance Training",
          description: "Systematic strength rebuilding using resistance bands, weights, and body weight exercises progressed according to tissue healing and strength benchmarks. We target the injured area plus surrounding muscles, addressing imbalances that contributed to injury. Exercises are progressed from isometric holds to concentric/eccentric movements to power training."
        },
        {
          name: "Proprioceptive Training",
          description: "Balance and body awareness exercises on unstable surfaces, single-leg stances, and perturbation training to restore the neuromuscular control essential for injury prevention. These exercises retrain the reflexive muscle responses that protect joints during rapid sports movements, significantly reducing re-injury risk."
        },
        {
          name: "Plyometric Exercises",
          description: "Progressive jumping, hopping, and bounding exercises that rebuild explosive power needed for running, jumping, and cutting sports. We follow strict progression protocols—starting with low-intensity movements and advancing to sport-specific plyometrics only when strength and control benchmarks are met."
        },
        {
          name: "Functional Movement Training",
          description: "Sport-specific movement patterns including cutting, pivoting, acceleration, deceleration, and throwing mechanics tailored to your sport. These exercises bridge the gap between clinical rehabilitation and competitive performance, ensuring you can execute complex athletic movements safely and effectively."
        },
        {
          name: "Flexibility & Mobility Work",
          description: "Dynamic stretching, static stretching, and mobility exercises to restore full range of motion and tissue extensibility. We address both the injured area and related muscle groups in the kinetic chain, ensuring the flexibility needed for athletic movements without compensation."
        },
        {
          name: "Core Stabilization",
          description: "Progressive core strengthening from basic stability exercises to dynamic, sport-specific core training. A strong, stable core is fundamental to athletic performance and injury prevention, providing the foundation for all limb movements and protecting the spine during high-force activities."
        }
      ]}
      faqs={[
        {
          question: "How long will it take to return to my sport?",
          answer: "Return-to-sport timelines depend on injury type and severity. Minor strains may allow return in 2-4 weeks, moderate injuries often require 6-12 weeks, while major injuries like ACL tears typically need 6-9 months of rehabilitation. We use objective testing criteria—not just time—to determine when you're ready for safe return to full competition."
        },
        {
          question: "Should I continue training other body parts during recovery?",
          answer: "Yes, maintaining fitness in uninjured areas is important for overall conditioning and mental well-being. We design your rehabilitation program to include safe training for unaffected body parts while protecting the injured area. This approach helps maintain cardiovascular fitness and prevents significant deconditioning during recovery."
        },
        {
          question: "How do I know if my injury is serious enough for physiotherapy?",
          answer: "Any injury causing significant pain, swelling, weakness, or limiting your ability to train or compete benefits from professional assessment. Early treatment often prevents minor injuries from becoming chronic problems. Warning signs requiring immediate attention include inability to bear weight, severe swelling, joint locking, or visible deformity."
        },
        {
          question: "Will I need to stop all physical activity during treatment?",
          answer: "Complete rest is rarely necessary and often counterproductive. We prescribe relative rest—avoiding activities that stress the injured area while maintaining safe movement and conditioning. This approach promotes tissue healing while preventing the strength and fitness losses that come with complete inactivity."
        },
        {
          question: "Can physiotherapy help prevent future injuries?",
          answer: "Absolutely. Our rehabilitation includes comprehensive injury prevention strategies including movement screening, correction of biomechanical issues, addressing muscle imbalances, and sport-specific conditioning. Athletes who complete thorough rehabilitation programs have significantly lower re-injury rates than those who return based on pain resolution alone."
        },
        {
          question: "What should I do immediately after a sports injury?",
          answer: "Follow the PRICE protocol: Protect the injury from further damage, Rest appropriately, Ice for 15-20 minutes every 2-3 hours, Compress with bandaging if appropriate, and Elevate the injured limb. Seek professional assessment within 24-48 hours for proper diagnosis and treatment planning."
        },
        {
          question: "Do you treat both amateur and professional athletes?",
          answer: "Yes, we treat athletes at all levels—from recreational sports enthusiasts to competitive amateur athletes. Our rehabilitation principles are the same regardless of level, though treatment intensity and return-to-sport criteria are customized to each athlete's specific demands and goals. Call 075172 37255 to schedule your assessment."
        }
      ]}
      whyChooseUs={[
        "Specialized expertise in sports injury rehabilitation",
        "Evidence-based protocols following latest sports medicine research",
        "Complete return-to-sport programs with objective testing criteria",
        "Advanced modalities including laser therapy and PEMF for faster healing",
        "15+ years experience treating athletes of all levels",
        "Personalized one-on-one treatment (no group sessions)",
        "15,000+ successful treatments—athletes returned to peak performance",
        "Comprehensive approach addressing injury cause and prevention",
        "Convenient Pimpri-Chinchwad location with flexible scheduling"
      ]}
    />
  );
};

export default SportsInjury;
