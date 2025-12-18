import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Zap, AlertCircle, Activity, TrendingDown, Clock, Briefcase, Dumbbell, Users } from "lucide-react";

const Sciatica = () => {
  return (
    <ServiceDetailLayout
      title="Sciatica Treatment"
      description="Expert physiotherapy for sciatic nerve pain, leg pain, and lower back nerve compression"
      icon={<Zap className="h-8 w-8 text-white" />}
      introduction="Sciatica can turn simple movements into agonizing experiences, with pain shooting from your lower back down through your leg. At Dr. Anirudha Vaidya's Physiotherapy Clinic in Pimpri-Chinchwad, Pune, we understand how debilitating sciatic nerve pain can be and offer targeted treatments that address the root cause of your symptoms. Our non-surgical approach has helped countless patients find relief and return to their normal activities.

The sciatic nerve is the longest nerve in your body, running from your lower spine through your buttocks and down each leg. When this nerve becomes compressed or irritated, the resulting pain can be intense, often accompanied by numbness, tingling, or weakness in the affected leg. We treat patients from across Sambhajinagar and Pune who have struggled with sciatica, providing them with evidence-based treatments that reduce nerve compression and restore comfortable movement. Don't let sciatica control your life—call us at 075172 37255 to start your journey toward relief."
      understandingCondition="Sciatica is a symptom rather than a diagnosis, meaning something is irritating or compressing your sciatic nerve. The most common causes include herniated discs pressing on nerve roots, bone spurs narrowing the spinal canal (stenosis), piriformis syndrome where a muscle in your buttock compresses the nerve, and degenerative disc disease.

The pattern of your symptoms often reveals where the problem originates. Pain in the back of your thigh and calf typically indicates involvement of the L5-S1 nerve roots, while pain along the outer leg and top of the foot suggests L4-L5 involvement. Understanding the specific cause and location of your nerve compression is essential for effective treatment. Our comprehensive evaluation includes neurological testing, movement analysis, and may recommend imaging studies to identify the exact source of your sciatica."
      treatmentApproach="Our sciatica treatment targets both immediate pain relief and long-term resolution of the underlying cause. We begin by determining what's compressing your sciatic nerve and develop a treatment strategy specific to that cause.

Initial treatment focuses on reducing inflammation around the nerve and relieving acute pain. We use modalities like IFT, TENS, and traction therapy to decrease nerve irritation and muscle spasm. As pain reduces, we introduce exercises that decompress the spine and improve nerve mobility. McKenzie extension exercises are particularly effective for disc-related sciatica, while piriformis stretching helps when muscle tightness is the culprit. Core strengthening and posture correction prevent recurrence by reducing ongoing stress on your spine."
      treatmentTimeline={[
        {
          title: "Phase 1: Acute Pain Relief (Weeks 1-2)",
          description: "Intensive treatment to reduce severe pain and inflammation. Modalities, positioning advice, and gentle movements to decrease nerve irritation."
        },
        {
          title: "Phase 2: Nerve Mobilization (Weeks 2-4)",
          description: "Introduction of specific exercises to improve nerve mobility and begin directional preference movements. Continued pain management as needed."
        },
        {
          title: "Phase 3: Spinal Decompression (Weeks 4-8)",
          description: "Traction therapy and targeted exercises to reduce disc pressure on the nerve. Progressive strengthening of supporting muscles begins."
        },
        {
          title: "Phase 4: Core Stabilization (Weeks 8-12)",
          description: "Intensive core strengthening to support the spine and prevent recurrence. Posture and movement retraining for daily activities."
        },
        {
          title: "Phase 5: Prevention Program (Ongoing)",
          description: "Maintenance exercise program, ergonomic modifications, and strategies to prevent future episodes of sciatica."
        }
      ]}
      recoveryPrevention="Preventing sciatica recurrence requires ongoing attention to spinal health. Maintaining strong core muscles provides essential support for your lower back, reducing stress on discs and nerves. Regular stretching of hip flexors, hamstrings, and piriformis muscles keeps these structures from becoming tight and contributing to nerve compression.

Proper lifting technique—bending at the hips and knees rather than the waist—protects your spine during everyday activities. Avoid prolonged sitting, and when you must sit for long periods, use lumbar support and take regular breaks to stand and move. Weight management reduces spinal loading, and staying active keeps spinal structures healthy. Our team provides personalized guidance on preventing your specific type of sciatica from returning."
      symptoms={[
        { name: "Radiating Leg Pain", description: "Sharp, shooting pain from lower back to foot", icon: <Zap className="h-5 w-5 text-primary" /> },
        { name: "Numbness or Tingling", description: "Loss of sensation or pins-and-needles in leg", icon: <TrendingDown className="h-5 w-5 text-primary" /> },
        { name: "Muscle Weakness", description: "Difficulty lifting foot or standing on toes", icon: <Activity className="h-5 w-5 text-primary" /> },
        { name: "Burning Sensation", description: "Hot, burning feeling along the nerve path", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Pain When Sitting", description: "Symptoms worsen with prolonged sitting", icon: <Briefcase className="h-5 w-5 text-primary" /> },
        { name: "Electric Shock Sensation", description: "Sudden jolts of pain with certain movements", icon: <Zap className="h-5 w-5 text-primary" /> }
      ]}
      causes={[
        { name: "Herniated Disc", description: "Disc material pressing on nerve roots", icon: <AlertCircle className="h-5 w-5 text-secondary" /> },
        { name: "Spinal Stenosis", description: "Narrowing of spinal canal compressing nerves", icon: <TrendingDown className="h-5 w-5 text-secondary" /> },
        { name: "Piriformis Syndrome", description: "Muscle spasm trapping the sciatic nerve", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "Degenerative Disc Disease", description: "Age-related disc breakdown affecting nerves", icon: <Clock className="h-5 w-5 text-secondary" /> },
        { name: "Spondylolisthesis", description: "Vertebrae slipping and pinching nerve roots", icon: <AlertCircle className="h-5 w-5 text-secondary" /> },
        { name: "Sedentary Lifestyle", description: "Prolonged sitting weakening spinal support", icon: <Briefcase className="h-5 w-5 text-secondary" /> }
      ]}
      keyPoints={[
        "Non-surgical sciatic nerve pain relief",
        "Spinal decompression therapy",
        "Disc herniation management",
        "Piriformis syndrome treatment",
        "Nerve mobilization techniques",
        "Core strengthening for spinal support",
        "Posture and ergonomic correction",
        "Recurrence prevention programs"
      ]}
      equipment={[
        {
          name: "Spinal Traction Therapy",
          description: "Mechanical or manual traction gently separates vertebrae, reducing pressure on compressed nerves. Traction is highly effective for disc-related sciatica, creating space for herniated material to retract and relieving the direct cause of nerve irritation."
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Deep-penetrating electrical currents that reduce pain and muscle spasm along the sciatic nerve path. IFT reaches the deep spinal muscles where sciatica originates, providing relief that surface-level treatments cannot achieve."
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed electromagnetic field therapy reduces inflammation around compressed nerves and promotes tissue healing. PEMF accelerates recovery from disc herniations and helps restore normal nerve function."
        },
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy reduces inflammation along the nerve path and promotes cellular healing. Laser treatment is particularly effective for reducing nerve root inflammation and accelerating recovery from sciatica."
        },
        {
          name: "T.E.N.S",
          description: "Transcutaneous electrical nerve stimulation provides portable pain relief that patients can use between sessions. TENS is especially helpful during the acute phase when pain is most severe, allowing better tolerance of therapeutic exercises."
        },
        {
          name: "Ultrasound Therapy",
          description: "Deep-heating modality that reduces muscle spasm and inflammation around the sciatic nerve. Ultrasound is particularly effective for piriformis syndrome, reducing muscle tension that compresses the nerve."
        },
        {
          name: "Manual Therapy",
          description: "Hands-on techniques including spinal mobilization, soft tissue release, and neural mobilization. Our therapists use specific techniques to reduce nerve adhesions and improve mobility of the sciatic nerve through surrounding tissues."
        },
        {
          name: "McKenzie Equipment",
          description: "Specialized equipment for directional preference exercises that are highly effective for disc-related sciatica. These exercises use repeated movements to centralize pain and promote disc healing."
        }
      ]}
      exercises={[
        {
          name: "McKenzie Extension Exercises",
          description: "Repeated extension movements that help centralize disc material away from the nerve root. These exercises are particularly effective for sciatica caused by disc herniation, often providing rapid pain relief when performed correctly."
        },
        {
          name: "Sciatic Nerve Glides",
          description: "Gentle movements that improve the mobility of the sciatic nerve through surrounding tissues. Neural glides reduce adhesions that form around irritated nerves and improve nerve function without stretching."
        },
        {
          name: "Piriformis Stretching",
          description: "Targeted stretches for the piriformis muscle, essential for sciatica caused by piriformis syndrome. Regular stretching reduces muscle tension and releases compression on the underlying sciatic nerve."
        },
        {
          name: "Core Stabilization",
          description: "Deep core muscle activation exercises that stabilize the lumbar spine and reduce stress on discs and nerves. A strong core is essential for preventing sciatica recurrence."
        },
        {
          name: "Hip Flexor Stretches",
          description: "Stretching of psoas and hip flexor muscles that often contribute to abnormal spinal posture and increased disc pressure. Flexible hip flexors reduce the anterior pelvic tilt that worsens sciatica."
        },
        {
          name: "Swimming or Water Walking",
          description: "Low-impact aquatic exercises that allow movement without compressive stress on the spine. Water exercise is ideal during recovery from acute sciatica, maintaining fitness while protecting the healing spine."
        }
      ]}
      faqs={[
        {
          question: "How long does it take to recover from sciatica?",
          answer: "Recovery time varies depending on the cause and severity of your sciatica. Many patients experience significant improvement within 4-6 weeks of consistent treatment. Disc-related sciatica may take longer, sometimes 3-6 months for complete resolution. However, most patients notice pain reduction within the first few weeks. We provide realistic expectations based on your specific condition and track your progress carefully."
        },
        {
          question: "Should I rest or stay active with sciatica?",
          answer: "While brief rest during severe flare-ups may be necessary, prolonged bed rest actually worsens sciatica outcomes. We encourage gentle activity within your pain tolerance and prescribe specific exercises that promote healing without aggravating your symptoms. Movement helps reduce inflammation and prevents the muscle weakness and stiffness that develop with inactivity."
        },
        {
          question: "Can sciatica be cured permanently?",
          answer: "Many cases of sciatica can be fully resolved with appropriate treatment, especially when caused by conditions like piriformis syndrome or mild disc bulges. For some patients, the underlying cause (like degenerative changes) cannot be reversed, but symptoms can be well-managed through exercise and lifestyle modifications. Our goal is to minimize symptoms and maximize function regardless of the underlying cause."
        },
        {
          question: "When should I consider surgery for sciatica?",
          answer: "Surgery is typically considered only after conservative treatment has failed for 6-12 weeks, or immediately if you experience progressive weakness, loss of bladder/bowel control, or severe, unrelenting pain. Most sciatica cases respond well to physiotherapy, and we recommend exhausting conservative options before considering surgery. We can refer you to appropriate specialists if surgery becomes necessary."
        },
        {
          question: "Can I exercise with sciatica?",
          answer: "Yes, appropriate exercise is essential for sciatica recovery. The key is choosing the right exercises for your specific condition. Some exercises that help disc-related sciatica may worsen stenosis-related sciatica, and vice versa. We prescribe exercises matched to your diagnosis and adjust your program based on your response. Avoiding exercise typically prolongs recovery."
        },
        {
          question: "Why does my sciatica get worse at night?",
          answer: "Nighttime sciatica worsening often relates to sleeping position and reduced movement. Lying flat can increase pressure on nerve roots, and hours without position changes allow inflammation to accumulate. We provide guidance on sleep positions—typically side-lying with a pillow between knees or back-lying with knees elevated—that reduce nighttime symptoms."
        },
        {
          question: "Is walking good for sciatica?",
          answer: "Walking is generally beneficial for sciatica and is often recommended as part of treatment. It promotes blood flow, maintains mobility, and prevents deconditioning without excessive spinal loading. However, walking tolerance varies—some patients can walk for extended periods while others need to start with short distances. We guide you on appropriate walking duration and progression."
        }
      ]}
      whyChooseUs={[
        "Specialized expertise in spinal conditions and nerve pain",
        "Advanced spinal traction and decompression equipment",
        "McKenzie-trained therapists for disc-related sciatica",
        "Comprehensive diagnosis of sciatica causes",
        "Coordination with spine specialists when needed",
        "Convenient location in Pimpri-Chinchwad serving Pune and Sambhajinagar",
        "High success rate with non-surgical sciatica treatment"
      ]}
    />
  );
};

export default Sciatica;
