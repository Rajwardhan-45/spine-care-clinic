import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Stethoscope, AlertCircle, Activity } from "lucide-react";

const PostSurgeryRehab = () => {
  return (
    <ServiceDetailLayout
      title="Post-Surgery Rehabilitation"
      description="Expert physiotherapy for complete recovery after orthopedic surgeries including joint replacements, ligament repairs, and spinal procedures"
      icon={<Stethoscope className="h-8 w-8 text-white" />}
      introduction="Recovering from surgery requires more than just time—it demands specialized care that guides your body through each stage of healing. At Dr. Anirudha Vaidya's Physiotherapy Clinic in Pimpri-Chinchwad, Pune, we understand that surgery is only the first step in your journey back to full health. Our comprehensive post-surgical rehabilitation program is designed to restore your strength, mobility, and independence safely and efficiently.

Whether you've undergone joint replacement surgery, ACL reconstruction, spinal surgery, or any other orthopedic procedure, our team creates personalized recovery protocols that align with your surgeon's recommendations. We work closely with orthopedic surgeons across Sambhajinagar and Pune to ensure continuity of care. Our clinic has helped hundreds of patients return to their daily activities, work, and sports after surgery. The key to successful rehabilitation lies in starting at the right time with the right intensity—and that's exactly what we provide. Call us at 075172 37255 to schedule your post-operative assessment and begin your recovery journey."
      understandingCondition="Post-surgical rehabilitation addresses the natural challenges your body faces after any operative procedure. Surgery, while necessary, creates trauma to tissues, muscles, and joints that requires careful management. Without proper rehabilitation, you may experience prolonged stiffness, muscle weakness, scar tissue formation, and delayed return to function.

The healing process follows predictable phases: the initial inflammatory phase (days 1-7), the proliferative phase (weeks 1-6), and the remodeling phase (weeks 6 onwards). Each phase requires specific therapeutic interventions to optimize recovery. Our rehabilitation protocols are evidence-based and phase-appropriate, meaning we progress your treatment as your tissues heal. Understanding where you are in this process helps us apply the right techniques at the right time, preventing complications while accelerating your recovery."
      treatmentApproach="Our post-surgery rehabilitation approach begins with a thorough assessment of your surgical procedure, current limitations, and recovery goals. We design individualized treatment plans that respect tissue healing timelines while progressively challenging your body to rebuild strength and function.

During the early phase, we focus on pain management, swelling control, and gentle range of motion exercises that protect your surgical site. As healing progresses, we introduce strengthening exercises, balance training, and functional movements specific to your daily activities. For athletes, we include sport-specific training in the final phases. Our therapists communicate regularly with your surgeon to adjust protocols based on your progress. This collaborative approach ensures you receive comprehensive care that addresses both the surgical repair and overall functional recovery."
      treatmentTimeline={[
        {
          title: "Phase 1: Protection & Pain Management (Weeks 1-2)",
          description: "Initial focus on protecting the surgical site while managing pain and swelling. Gentle passive range of motion, ice therapy, and electrical stimulation to promote healing."
        },
        {
          title: "Phase 2: Early Mobility (Weeks 2-6)",
          description: "Progressive range of motion exercises, gentle strengthening, and beginning weight-bearing activities as cleared by your surgeon. Scar tissue management begins."
        },
        {
          title: "Phase 3: Strength Building (Weeks 6-12)",
          description: "Intensive strengthening program targeting surgical area and surrounding muscles. Introduction of functional movements and balance exercises."
        },
        {
          title: "Phase 4: Functional Restoration (Weeks 12-16)",
          description: "Advanced exercises mimicking daily activities and work demands. Sport-specific training for athletes. Preparation for full return to activities."
        },
        {
          title: "Phase 5: Return to Activity (Weeks 16+)",
          description: "Final clearance testing, maintenance exercise program development, and guidance for long-term joint and muscle health."
        }
      ]}
      recoveryPrevention="Your commitment to the rehabilitation process directly impacts your surgical outcome. Following your home exercise program, attending all therapy sessions, and communicating any concerns promptly are essential for optimal recovery. We provide you with detailed exercise guides and video demonstrations to ensure correct technique at home.

Long-term success depends on maintaining the strength and flexibility gained during rehabilitation. We recommend continuing with a maintenance exercise program even after formal therapy ends. Proper nutrition, adequate sleep, and avoiding activities that stress your surgical repair are equally important. Our team educates you on warning signs that require immediate attention, ensuring your safety throughout recovery."
      symptoms={[
        { name: "Post-operative pain and swelling", description: "Normal inflammation response requiring management", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Limited range of motion", description: "Restricted joint movement after surgery", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Muscle weakness around surgical site", description: "Atrophy from immobilization and disuse", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Difficulty walking or bearing weight", description: "Reduced function affecting mobility", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Stiffness in joints after immobilization", description: "Adhesions and tightness from rest", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Balance and coordination problems", description: "Impaired proprioception post-surgery", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Scar tissue restricting movement", description: "Fibrous tissue limiting flexibility", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Difficulty performing daily activities", description: "Functional limitations affecting independence", icon: <AlertCircle className="h-5 w-5 text-primary" /> }
      ]}
      causes={[
        { name: "Joint replacement surgery", description: "Hip, knee, or shoulder replacements", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "ACL, PCL, or meniscus repair", description: "Knee ligament and cartilage surgeries", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "Rotator cuff surgery", description: "Shoulder tendon repair procedures", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "Spinal fusion or discectomy", description: "Back and neck surgical procedures", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "Fracture fixation surgery", description: "Internal fixation of broken bones", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "Tendon repair procedures", description: "Achilles, patellar, or other tendon repairs", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "Arthroscopic procedures", description: "Minimally invasive joint surgeries", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "Carpal tunnel release surgery", description: "Wrist nerve decompression procedure", icon: <Activity className="h-5 w-5 text-secondary" /> }
      ]}
      keyPoints={[
        "Surgeon-coordinated rehabilitation protocols",
        "Phase-appropriate treatment progression",
        "Pain and swelling management",
        "Range of motion restoration",
        "Muscle strength rebuilding",
        "Scar tissue mobilization",
        "Balance and proprioception training",
        "Return-to-activity clearance testing"
      ]}
      equipment={[
        {
          name: "Continuous Passive Motion (CPM)",
          description: "Motorized devices that gently move your joint through its range of motion without requiring muscle effort. CPM is particularly beneficial after knee and shoulder surgeries, helping prevent stiffness and promoting cartilage healing during the early recovery phase."
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Deep-penetrating electrical currents that effectively reduce post-surgical pain and swelling. IFT reaches deeper tissues than standard TENS, making it ideal for managing discomfort around surgical sites while promoting blood flow for faster healing."
        },
        {
          name: "Ultrasound Therapy",
          description: "Therapeutic ultrasound delivers sound waves that promote tissue healing and reduce scar tissue formation. This treatment helps break down adhesions that form after surgery, improving tissue flexibility and reducing long-term stiffness."
        },
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy accelerates cellular repair and reduces inflammation at the surgical site. The photobiomodulation effect promotes collagen production and tissue regeneration, leading to stronger healing and reduced scarring."
        },
        {
          name: "Electric Muscle Stimulation (EMS)",
          description: "Electrical currents that activate muscles weakened by surgery or immobilization. EMS is crucial for preventing muscle atrophy during recovery periods when you cannot perform voluntary exercises, maintaining muscle mass and promoting earlier return to function."
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed electromagnetic field therapy enhances bone and soft tissue healing at the cellular level. Particularly beneficial after fracture repairs and joint replacements, PEMF reduces healing time and improves surgical outcomes."
        },
        {
          name: "Manual Therapy",
          description: "Skilled hands-on techniques including joint mobilization, soft tissue massage, and scar tissue release. Our therapists use manual therapy to restore normal joint mechanics, reduce muscle tension, and improve tissue flexibility around your surgical site."
        },
        {
          name: "Exercise Therapy Equipment",
          description: "Progressive resistance equipment, balance boards, and functional training tools designed for post-surgical rehabilitation. Our gym includes specialized equipment that allows safe strengthening while protecting your surgical repair."
        }
      ]}
      exercises={[
        {
          name: "Ankle Pumps and Circles",
          description: "Simple movements performed immediately after lower limb surgery to promote blood circulation and prevent blood clots. Pumping your feet up and down and circling your ankles keeps blood flowing during periods of reduced mobility, reducing DVT risk."
        },
        {
          name: "Passive Range of Motion",
          description: "Gentle movements where the therapist moves your joint through its available range without requiring your muscle effort. These exercises maintain joint mobility during early healing phases when active movement is restricted."
        },
        {
          name: "Isometric Exercises",
          description: "Muscle contractions performed without moving the joint, protecting surgical repairs while maintaining muscle activation. Quad sets after knee surgery and gluteal squeezes after hip surgery are common examples that prevent muscle atrophy."
        },
        {
          name: "Progressive Strengthening",
          description: "Gradually increasing resistance exercises that rebuild muscle strength around the surgical site. We progress from body weight to resistance bands to weights as your healing allows, ensuring safe and effective muscle development."
        },
        {
          name: "Balance and Proprioception Training",
          description: "Exercises that restore your body's awareness of joint position and movement. Standing on unstable surfaces, single-leg balance, and perturbation training help prevent future injuries by improving neuromuscular control."
        },
        {
          name: "Functional Movement Training",
          description: "Exercises that mimic real-life activities like climbing stairs, getting in and out of chairs, and reaching overhead. These movements prepare you for returning to daily activities and work with confidence and safety."
        }
      ]}
      faqs={[
        {
          question: "When should I start physiotherapy after surgery?",
          answer: "The timing depends on your specific surgery and surgeon's protocol. Many procedures benefit from starting physiotherapy within 24-48 hours, while others require a brief waiting period. We coordinate directly with your surgeon to begin at the optimal time. Early intervention generally leads to better outcomes, but starting too aggressively can compromise healing. Contact us before your surgery so we can plan your rehabilitation timeline."
        },
        {
          question: "How long does post-surgery rehabilitation take?",
          answer: "Recovery timelines vary significantly based on the procedure. Simple arthroscopic surgeries may require 6-8 weeks of rehabilitation, while joint replacements typically need 12-16 weeks. Complex reconstructions or spinal surgeries may require 6 months or longer. We provide realistic expectations based on your specific surgery and monitor your progress to adjust the timeline as needed."
        },
        {
          question: "Will physiotherapy be painful after surgery?",
          answer: "Some discomfort during rehabilitation is normal and expected, particularly when working on range of motion. However, we carefully manage treatment intensity to keep pain at acceptable levels. We use various pain management techniques including ice, electrical stimulation, and manual therapy to minimize discomfort. Good communication about your pain levels helps us adjust treatment appropriately."
        },
        {
          question: "Can I do rehabilitation exercises at home?",
          answer: "Home exercises are essential for optimal recovery. We provide detailed exercise programs with written instructions and video demonstrations. However, clinic sessions are equally important for advanced techniques, equipment-based treatments, and progress monitoring. The combination of supervised therapy and consistent home exercises produces the best results."
        },
        {
          question: "What happens if I skip physiotherapy after surgery?",
          answer: "Skipping rehabilitation often leads to prolonged stiffness, persistent weakness, increased scar tissue formation, and delayed return to activities. Some patients develop chronic pain or permanent limitations that could have been prevented with proper rehabilitation. Your surgeon recommends physiotherapy because research consistently shows better outcomes with structured rehabilitation programs."
        },
        {
          question: "Do you coordinate with my surgeon during rehabilitation?",
          answer: "Absolutely. We maintain open communication with orthopedic surgeons throughout your recovery. We follow surgeon-specific protocols, provide progress reports, and consult on any concerns that arise during rehabilitation. This team approach ensures you receive consistent, coordinated care that aligns with your surgical procedure and expected outcomes."
        },
        {
          question: "How much does post-surgery rehabilitation cost?",
          answer: "Rehabilitation costs depend on the frequency of sessions, duration of treatment, and specific modalities required. We provide transparent pricing after your initial assessment. Many health insurance plans cover post-surgical physiotherapy—we can help verify your coverage. The investment in proper rehabilitation prevents costly complications and ensures you get the full benefit from your surgery."
        }
      ]}
      whyChooseUs={[
        "Surgeon-coordinated rehabilitation protocols ensuring continuity of care",
        "Experience with all major orthopedic procedures including joint replacements",
        "Advanced equipment specifically designed for post-surgical recovery",
        "Personalized treatment plans respecting your healing timeline",
        "Regular progress reporting to your surgical team",
        "Convenient location in Pimpri-Chinchwad serving Pune and Sambhajinagar",
        "Flexible scheduling to accommodate your recovery needs"
      ]}
    />
  );
};

export default PostSurgeryRehab;
