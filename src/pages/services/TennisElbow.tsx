import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Zap, AlertTriangle, Repeat, MousePointer, Dumbbell, Laptop, Clock, Activity } from "lucide-react";

const TennisElbow = () => {
  return (
    <ServiceDetailLayout
      title="Tennis Elbow & Golfer's Elbow Treatment"
      description="Expert physiotherapy for lateral and medial epicondylitis in Pimpri-Chinchwad, Pune"
      icon={<Zap className="h-8 w-8 text-white" />}
      introduction="At Dr. Anirudha Vaidya's Physiotherapy Clinic in Pimpri-Chinchwad, we provide specialized treatment for tennis elbow (lateral epicondylitis) and golfer's elbow (medial epicondylitis)—conditions that cause significant pain and limitation in daily activities and work. Despite their names, these conditions aren't limited to athletes; they commonly affect anyone who performs repetitive gripping, twisting, or forearm movements, including office workers, laborers, homemakers, and craftspeople. The pain and weakness can make simple tasks like holding a cup, turning a doorknob, or shaking hands extremely difficult. Our comprehensive treatment approach addresses the underlying tendon damage while providing effective pain relief, allowing you to return to your normal activities without surgery or long-term medication use. With advanced therapeutic equipment and proven rehabilitation techniques, our expert team in Pune has helped numerous patients in Sambhajinagar and surrounding areas overcome this frustrating condition and regain full arm function."
      understandingCondition="Tennis elbow and golfer's elbow are overuse injuries affecting the tendons that attach your forearm muscles to the elbow. Tennis elbow affects the lateral epicondyle (outside of the elbow) where the wrist extensor muscles attach, while golfer's elbow affects the medial epicondyle (inside of the elbow) where the wrist flexor muscles attach. These conditions typically develop gradually from repetitive stress that causes microscopic tears in the tendon fibers. Over time, this leads to tendinopathy—a degeneration of the tendon with failed healing responses. The condition is most common in adults between 30-50 years old and often affects the dominant arm. Understanding that this is primarily a tendon healing problem (not just inflammation) is important because it explains why traditional anti-inflammatory treatments often provide only temporary relief. Effective treatment must address the tendon damage and promote proper healing while modifying the activities that caused the problem."
      treatmentApproach="Our treatment for tennis elbow and golfer's elbow targets tendon healing while providing effective pain management. We begin with a comprehensive assessment to confirm the diagnosis, identify contributing factors, and assess the severity of tendon involvement. Our treatment plan typically combines pain-relieving modalities like IFT, laser therapy, and ultrasound with specific manual therapy techniques including friction massage and muscle release. The cornerstone of our approach is eccentric exercise therapy—a specific type of strengthening that has been proven most effective for tendinopathy. We also address biomechanical factors, teaching proper wrist and arm mechanics for your specific activities. Bracing or taping may be used to reduce strain during recovery. We work with you to modify activities that aggravate your condition while maintaining as much function as possible. Most patients see significant improvement within 6-8 weeks with consistent treatment and home exercise compliance."
      treatmentTimeline={[
        {
          title: "Pain Relief & Protection",
          description: "Initial focus on reducing pain and inflammation using IFT, laser therapy, and ice. We provide activity modification guidance and may recommend a counterforce brace to reduce strain on the affected tendons."
        },
        {
          title: "Tissue Healing Phase",
          description: "Introduction of friction massage, soft tissue techniques, and beginning of gentle stretching. We start low-level strengthening and continue with healing modalities to promote tendon repair."
        },
        {
          title: "Progressive Strengthening",
          description: "Eccentric exercise program becomes the focus, proven to stimulate proper tendon healing. We progressively increase resistance and introduce functional activities while monitoring symptoms."
        },
        {
          title: "Return to Activities",
          description: "Gradual return to normal work, sport, and daily activities with proper technique. We provide ongoing exercise programs and ergonomic recommendations to prevent recurrence."
        }
      ]}
      recoveryPrevention="Preventing tennis elbow and golfer's elbow recurrence requires attention to technique and conditioning. Continue your forearm strengthening exercises even after symptoms resolve—strong, well-conditioned tendons are more resistant to injury. Pay attention to grip techniques in your activities; avoid tight gripping when possible and use the whole arm rather than just the wrist and fingers. Take regular breaks during repetitive tasks and vary your activities to avoid overloading the same structures repeatedly. Ensure proper equipment for sports (correct racquet size, appropriate grip) and ergonomic setup for computer work. Warm up before physical activities and stretch afterward. If symptoms begin to return, reduce aggravating activities immediately and restart your exercises—early intervention prevents minor flare-ups from becoming major problems. Call our Pimpri-Chinchwad clinic at 075172 37255 if you need guidance."
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
          description: "IFT provides effective deep tissue pain relief for elbow tendinopathy by delivering therapeutic electrical currents to the affected area. It reduces pain, decreases muscle tension in the forearm, and promotes blood flow to support tendon healing."
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed Electromagnetic Field therapy accelerates tendon healing at the cellular level by enhancing cellular metabolism and promoting collagen production. This non-invasive treatment helps repair the degenerative changes within the damaged tendon."
        },
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy is particularly effective for tendinopathy, promoting collagen synthesis and proper fiber organization within the healing tendon. It reduces inflammation, accelerates healing, and helps restore normal tendon structure."
        },
        {
          name: "T.E.N.S",
          description: "Transcutaneous Electrical Nerve Stimulation provides portable pain management that patients can use during aggravating activities. It helps manage discomfort while allowing you to maintain necessary work and daily tasks during recovery."
        },
        {
          name: "Electric Muscle Stimulation",
          description: "EMS helps maintain forearm muscle strength during the recovery period when heavy gripping must be avoided. It prevents muscle weakening and supports the rehabilitation process by keeping the muscles conditioned."
        },
        {
          name: "Manual Therapy",
          description: "Specific hands-on techniques including deep friction massage across the affected tendon, trigger point release in forearm muscles, and joint mobilization form an essential part of treatment. These techniques break down scar tissue, release muscle tension, and improve local blood flow."
        },
        {
          name: "Exercise Therapy",
          description: "Eccentric strengthening exercises are the gold standard treatment for tendinopathy. Our graded exercise program progressively loads the healing tendon in a way that stimulates proper repair and builds strength without aggravating symptoms."
        },
        {
          name: "Taping & Bracing",
          description: "Counterforce braces and therapeutic taping techniques reduce strain on the affected tendon during activities. We teach proper application and provide guidance on when and how to use these supportive measures effectively."
        }
      ]}
      exercises={[
        {
          name: "Eccentric Wrist Exercises",
          description: "The cornerstone of tennis and golfer's elbow rehabilitation, eccentric exercises involve slowly lowering a weight with your wrist. This specific type of muscle contraction has been proven to stimulate tendon healing and is more effective than traditional strengthening exercises."
        },
        {
          name: "Forearm Stretches",
          description: "Regular stretching of the wrist flexor and extensor muscles maintains flexibility and reduces tension on the affected tendons. We teach proper stretching technique with appropriate duration and frequency for optimal benefit without irritating the tendon."
        },
        {
          name: "Grip Strengthening",
          description: "Progressive grip exercises using therapy putty, stress balls, or grip strengtheners rebuild hand and forearm strength. We carefully progress resistance to strengthen without overloading the healing tendon, eventually restoring full grip capability."
        },
        {
          name: "Wrist Extension Exercises",
          description: "For tennis elbow specifically, strengthening the wrist extensor muscles is essential. We progress from isometric (static) holds to concentric and eccentric movements with increasing resistance as the tendon heals and tolerates more load."
        },
        {
          name: "Pronation/Supination",
          description: "Rotating the forearm palm-up and palm-down strengthens the muscles that control forearm rotation. These movements are often involved in aggravating activities, so strengthening them helps prevent recurrence and improves functional performance."
        },
        {
          name: "Neural Glides",
          description: "The radial and ulnar nerves can become irritated with chronic elbow problems. Gentle nerve gliding exercises improve nerve mobility and reduce symptoms like tingling or numbness that sometimes accompany tennis or golfer's elbow."
        }
      ]}
      faqs={[
        {
          question: "Do I need to stop playing tennis/golf during treatment?",
          answer: "Not necessarily completely, but activity modification is usually required. During the acute phase, reducing or temporarily stopping the aggravating activity helps the tendon heal. As treatment progresses, we work with you to gradually return to your sport with proper technique and conditioning. Many patients can continue playing with modifications during recovery."
        },
        {
          question: "How long does tennis elbow take to heal?",
          answer: "Tennis elbow typically takes 6-12 weeks to heal with proper treatment, though chronic cases may take longer. The key factors are consistent adherence to the exercise program and appropriate activity modification. Most patients at our Pimpri-Chinchwad clinic see significant improvement within 4-6 weeks and return to full activities within 2-3 months."
        },
        {
          question: "Is cortisone injection effective for tennis elbow?",
          answer: "While cortisone injections can provide short-term pain relief, research shows they often lead to worse long-term outcomes compared to physiotherapy. The injection doesn't address the underlying tendon problem and may actually impair healing. We recommend physiotherapy as the first-line treatment, with injection reserved for cases that don't respond to conservative care."
        },
        {
          question: "What's the difference between tennis elbow and golfer's elbow?",
          answer: "Tennis elbow (lateral epicondylitis) affects the outside of the elbow and involves the wrist extensor tendons. Golfer's elbow (medial epicondylitis) affects the inside of the elbow and involves the wrist flexor tendons. Treatment principles are similar, but the specific exercises and techniques are adapted for each condition."
        },
        {
          question: "Can computer work cause tennis elbow?",
          answer: "Yes, computer work is a common cause of tennis elbow, particularly if you type extensively, use a mouse frequently, or have poor ergonomic setup. Repetitive clicking and typing movements strain the forearm muscles and tendons. We provide specific ergonomic recommendations for computer users to reduce strain and prevent recurrence."
        },
        {
          question: "Should I wear an elbow brace for tennis elbow?",
          answer: "A counterforce brace (worn just below the elbow) can be helpful in reducing strain on the affected tendon during activities. It's not a cure but can allow you to function more comfortably during recovery. We can recommend the appropriate type of brace and teach you proper placement and use."
        },
        {
          question: "Why hasn't my tennis elbow healed with rest alone?",
          answer: "Tennis elbow is a tendon degeneration problem (tendinopathy), not just inflammation. While rest reduces pain, it doesn't stimulate the tendon healing and remodeling that's needed for recovery. Research shows that progressive loading through eccentric exercises is actually necessary to promote proper tendon repair. That's why active rehabilitation is more effective than rest alone."
        }
      ]}
      whyChooseUs={[
        "Trusted center for tennis elbow and golfer's elbow treatment in Pimpri-Chinchwad, Pune",
        "Specialized upper extremity rehabilitation with evidence-based protocols",
        "Success with persistent cases that didn't respond to rest or medication",
        "Comprehensive assessment identifying all contributing factors",
        "Practical solutions for athletes, office workers, and manual laborers",
        "Call 075172 37255 today to begin your recovery"
      ]}
    />
  );
};

export default TennisElbow;
