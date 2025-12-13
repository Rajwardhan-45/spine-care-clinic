import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Bone, Zap, Radio, TrendingDown, AlertCircle, Users, Clock, Dumbbell, Briefcase } from "lucide-react";

const BackPain = () => {
  return (
    <ServiceDetailLayout
      title="Back Pain & Sciatica"
      description="Comprehensive treatment for chronic back pain and sciatica without surgery"
      icon={<Bone className="h-8 w-8 text-white" />}
      
      introduction={`Back pain and sciatica are among the most common health concerns affecting millions of people worldwide, and our clinic in Pimpri-Chinchwad, Pune specializes in providing effective, non-surgical treatment for these debilitating conditions. Whether you're experiencing a dull, persistent ache in your lower back or sharp, shooting pain radiating down your leg, you deserve relief that addresses the root cause—not just masks the symptoms.

At Dr. Anirudha Vaidya's physiotherapy clinic, we understand how back pain can disrupt every aspect of your life. From difficulty sitting at your desk to struggling with simple tasks like bending to tie your shoes, chronic back pain affects your work productivity, sleep quality, and overall happiness. Our comprehensive treatment approach combines advanced physiotherapy techniques with personalized care to help you return to a pain-free, active lifestyle.

What sets our treatment apart is our commitment to natural, medication-free healing. Many patients come to us after years of relying on painkillers that only provide temporary relief while potentially causing long-term side effects. Through our evidence-based physiotherapy protocols, we help patients achieve lasting relief by addressing the underlying muscular imbalances, postural issues, and structural problems causing their pain.`}

      understandingCondition={`Back pain can originate from various structures in the spine, including muscles, ligaments, discs, joints, and nerves. Sciatica specifically refers to pain that radiates along the sciatic nerve pathway—from your lower back through your hips and buttocks and down each leg. Understanding your condition is the first step toward effective treatment.

A common misconception is that back pain always requires surgery or that "resting in bed" is the best solution. In reality, prolonged bed rest can actually worsen your condition by weakening the muscles that support your spine. Another myth is that back pain is simply a natural part of aging that you must accept. While age-related changes do occur, proper treatment can significantly reduce or eliminate pain regardless of your age.

Early intervention is crucial for back pain and sciatica. When left untreated, these conditions can progress from occasional discomfort to chronic pain that affects your mobility, mental health, and quality of life. The muscles surrounding your spine may become weaker, creating a cycle of increased pain and decreased function. Additionally, untreated sciatica can lead to permanent nerve damage in severe cases.

Your back pain may also be connected to other health issues such as hip problems, knee pain, or even headaches, as your body compensates for spinal dysfunction. Our holistic assessment approach identifies these connections to provide comprehensive treatment.`}

      treatmentApproach={`Our treatment methodology at Dr. Anirudha Vaidya's clinic in Pimpri-Chinchwad is built on the principle of personalized care. We recognize that no two patients are alike—your pain has its own unique pattern, causes, and aggravating factors. That's why we begin every treatment journey with a thorough assessment to understand your specific condition.

We create customized treatment plans based on several factors: the severity and duration of your pain, your daily activities and occupational demands, your fitness level, and your personal recovery goals. A software professional with prolonged sitting requirements will receive a different treatment protocol than a construction worker with heavy lifting demands.

Our effectiveness comes from combining multiple therapy modalities to attack pain from various angles. We integrate manual therapy techniques like spinal mobilization and soft tissue release with advanced equipment including traction therapy, PEMF, and laser treatment. This multi-modal approach ensures faster relief and more sustainable results.

The goal is never just temporary pain relief—we focus on long-term outcomes. This means strengthening the muscles that support your spine, correcting postural imbalances that contribute to pain, and teaching you self-management strategies to prevent recurrence.`}

      treatmentTimeline={[
        {
          title: "Initial Assessment (First Visit)",
          description: "Your first consultation includes a comprehensive examination of your spine, posture, and movement patterns. We'll discuss your pain history, lifestyle factors, and treatment goals. Diagnostic findings are explained in simple terms, and we'll outline your personalized treatment plan."
        },
        {
          title: "Treatment Plan Development",
          description: "Based on your assessment, we customize a treatment protocol that addresses your specific condition. Plans vary based on pain severity—acute cases may require more frequent initial sessions, while chronic conditions benefit from a gradual, progressive approach."
        },
        {
          title: "Active Treatment Phase",
          description: "Most patients attend 2-3 sessions per week initially. Each session combines hands-on therapy with equipment-based treatments. You'll notice progressive improvement in pain levels, mobility, and daily function. Sessions typically last 45-60 minutes."
        },
        {
          title: "Progress Monitoring",
          description: "We regularly reassess your condition to track improvement and adjust treatment as needed. This ensures optimal outcomes and helps identify any factors that may be slowing your recovery."
        },
        {
          title: "Expected Duration",
          description: "Mild to moderate cases typically see significant improvement within 3-4 weeks. Chronic or severe conditions may require 6-8 weeks of treatment. Disc-related issues and sciatica generally need 6-12 weeks for optimal recovery."
        },
        {
          title: "Maintenance Phase",
          description: "Once your pain is under control, we transition to maintenance care with home exercises and periodic check-ups to prevent recurrence. We teach you self-management strategies for long-term spinal health."
        }
      ]}

      keyPoints={[
        "Chronic lower back pain management without medication dependency",
        "Acute back pain relief with rapid symptom reduction",
        "Sciatica and radiating leg pain treatment addressing nerve compression",
        "Muscle spasm relief through targeted manual and equipment therapy",
        "Nerve pain management using advanced modalities",
        "Postural correction for long-term spinal health",
        "Long-term pain prevention through strengthening and education",
        "Return to daily activities and improved quality of life"
      ]}
      
      symptoms={[
        {
          name: "Sharp Back Pain",
          description: "Sudden, intense pain in lower or upper back that may worsen with certain movements, prolonged sitting, or standing. This sharp pain often indicates muscle strain, facet joint irritation, or disc involvement.",
          icon: <Zap className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Radiating Pain (Sciatica)",
          description: "Pain shooting down one or both legs, following the sciatic nerve pathway from the lower back through the buttocks and into the leg. This may be accompanied by burning sensations or electric shock-like pain.",
          icon: <Radio className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Stiffness & Reduced Mobility",
          description: "Difficulty bending, twisting, or straightening your back, especially after prolonged rest or in the morning. This stiffness often improves with gentle movement but returns with inactivity.",
          icon: <TrendingDown className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Numbness & Tingling",
          description: "Tingling sensations, numbness, or 'pins and needles' feeling in legs, feet, or toes. This indicates nerve involvement and requires prompt evaluation to prevent progression.",
          icon: <AlertCircle className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      
      causes={[
        {
          name: "Poor Posture",
          description: "Prolonged sitting with improper posture, slouching, or forward head position places excessive stress on spinal structures. Common in desk workers, students, and those who spend hours on smartphones or computers.",
          icon: <Users className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Age-Related Changes",
          description: "Degenerative disc disease, spinal arthritis (spondylosis), and loss of disc hydration occur naturally with age. However, these changes don't always cause pain—treatment can help manage symptoms effectively.",
          icon: <Clock className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Muscle Strain & Injury",
          description: "Heavy lifting, sudden awkward movements, or sports injuries can strain back muscles and ligaments. Even minor activities can cause strain when muscles are weakened from inactivity.",
          icon: <Dumbbell className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Sedentary Lifestyle",
          description: "Desk jobs and inactive lifestyles lead to weak core muscles that fail to support the spine properly. This creates vulnerability to injury and chronic pain development.",
          icon: <Briefcase className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      
      equipment={[
        {
          name: "Traction Therapy",
          description: "Traction therapy uses gentle mechanical stretching to decompress the spine, creating space between vertebrae and reducing pressure on compressed nerves and discs. This FDA-recognized technique provides effective relief for herniated discs and sciatica, with many patients experiencing noticeable improvement after their first session. Each treatment session lasts 15-20 minutes and is completely comfortable, allowing the spine to gradually decompress and promote healing."
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "IFT delivers low-frequency electrical currents deep into affected tissues, providing profound pain relief and muscle relaxation that penetrates beyond the surface. This therapy stimulates blood flow, reduces inflammation, and triggers the release of natural pain-relieving endorphins. Patients typically feel a pleasant tingling sensation during treatment, with pain relief often lasting well beyond the session."
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed Electromagnetic Field therapy uses electromagnetic waves to stimulate cellular repair and regeneration at the molecular level. This non-invasive treatment accelerates healing of damaged tissues, reduces inflammation, and improves circulation to injured areas. PEMF is particularly effective for chronic conditions where tissue healing has stalled, helping restart the body's natural repair processes."
        },
        {
          name: "Electric Muscle Stimulation (EMS)",
          description: "EMS uses controlled electrical impulses to contract and relax muscles, effectively reducing painful muscle spasms and improving circulation to affected areas. This therapy is especially beneficial for patients whose muscles have become weak or inhibited due to pain, helping restore normal muscle function and supporting spinal stability."
        },
        {
          name: "T.E.N.S (Transcutaneous Electrical Nerve Stimulation)",
          description: "TENS provides drug-free pain relief by sending gentle electrical pulses that interfere with pain signal transmission to the brain. This portable therapy can be used during sessions and taught for home use, giving patients control over their pain management between appointments. It's particularly helpful for managing chronic pain without medication side effects."
        },
        {
          name: "Short Wave Diathermy",
          description: "This therapy uses high-frequency electromagnetic energy to generate deep heat within tissues, reaching areas that superficial heating methods cannot access. The deep warmth increases blood flow, relaxes tight muscles, and enhances tissue flexibility. Short wave diathermy is especially effective for chronic back conditions where deep tissue stiffness limits mobility."
        },
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy (LLLT) uses specific light wavelengths to reduce inflammation, accelerate tissue healing, and provide analgesic effects at the cellular level. This painless treatment stimulates cellular energy production, promoting faster recovery from acute injuries and helping manage chronic inflammatory conditions. Many patients report reduced pain and improved function within a few sessions."
        },
        {
          name: "Manual & Exercise Therapy",
          description: "Our hands-on manual therapy techniques include spinal mobilization, soft tissue release, and targeted stretching to restore normal joint movement and reduce muscle tension. Combined with customized therapeutic exercises, this approach addresses both immediate pain relief and long-term spinal health, teaching your body to maintain proper alignment and strength."
        }
      ]}
      
      exercises={[
        {
          name: "Pelvic Tilts",
          description: "Lie on your back with knees bent and feet flat on the floor. Gently flatten your lower back against the floor by tightening your abdominal muscles and tilting your pelvis upward. Hold for 5 seconds, then relax. This exercise strengthens the deep core muscles and improves lower back flexibility. Perform 10-15 repetitions, 2-3 times daily. This foundational exercise is safe for most back pain sufferers and helps establish proper spinal positioning."
        },
        {
          name: "Bridge Exercise",
          description: "Start lying on your back with knees bent. Squeeze your buttocks and lift your hips off the floor until your body forms a straight line from knees to shoulders. Hold for 5-10 seconds, then slowly lower. This exercise strengthens the gluteal muscles and lower back, providing essential support for your spine. Aim for 10 repetitions, progressing to 15 as strength improves. Strong glutes reduce strain on the lower back during daily activities."
        },
        {
          name: "Cat-Cow Stretch",
          description: "Begin on hands and knees with a neutral spine. For 'cow,' drop your belly toward the floor while lifting your head and tailbone. For 'cat,' round your spine toward the ceiling while tucking your chin. Alternate slowly between positions, moving with your breath. This flowing movement improves spinal mobility, reduces stiffness, and gently stretches the entire back. Perform 10-15 cycles, especially beneficial in the morning to relieve overnight stiffness."
        },
        {
          name: "Knee to Chest Stretch",
          description: "Lie on your back and bring one knee toward your chest, holding behind the thigh or shin. Keep the other leg straight or bent for comfort. Hold for 20-30 seconds, feeling a gentle stretch in your lower back and hip. Repeat with the other leg, then try both knees together. This stretch releases tension in the lower back muscles and helps decompress the lumbar spine. Perform 3 repetitions per side, twice daily."
        },
        {
          name: "Piriformis Stretch",
          description: "This stretch specifically targets the piriformis muscle, which when tight can compress the sciatic nerve. Lie on your back, cross one ankle over the opposite knee, then gently pull the bottom leg toward your chest. You should feel a deep stretch in your buttock. Hold for 30 seconds and repeat 3 times per side. Regular piriformis stretching can significantly reduce sciatic pain and improve hip mobility."
        },
        {
          name: "Core Stabilization Exercises",
          description: "Core stability exercises, including planks and bird-dogs, build the deep abdominal and back muscles that act as a natural 'corset' for your spine. Start with modified versions and progress as strength improves. For bird-dog, start on hands and knees, extend opposite arm and leg while maintaining a stable spine. Hold 5-10 seconds, alternate sides. Aim for 10 repetitions per side. Strong core muscles are essential for protecting your back during all daily activities."
        }
      ]}

      recoveryPrevention={`Recovery from back pain and sciatica follows a predictable pattern, though individual timelines vary based on condition severity and adherence to treatment. During the initial phase, focus on pain reduction and gentle movement rather than complete rest. Most patients experience meaningful improvement within the first few weeks of treatment.

Between treatment sessions, follow your home exercise program consistently—even 10-15 minutes daily makes a significant difference. Apply ice for acute flare-ups (first 48-72 hours) and heat for chronic muscle tension. Maintain gentle activity rather than complete bed rest.

Ergonomic modifications are essential for lasting relief. If you work at a desk, ensure your monitor is at eye level, your chair supports your lower back, and you take standing breaks every 30-45 minutes. For those with physically demanding jobs, learn proper lifting techniques—bend at the knees, keep loads close to your body, and avoid twisting while lifting.

To prevent recurrence, maintain a regular exercise routine focusing on core strength and flexibility. Stay at a healthy weight, as excess weight increases spinal stress. Practice good sleep hygiene with a supportive mattress and proper pillow positioning.

Warning signs requiring immediate medical attention include loss of bladder or bowel control, progressive weakness in legs, numbness in the groin area, or severe pain following trauma. If you experience any of these symptoms, seek emergency care immediately.`}

      faqs={[
        {
          question: "How long does back pain treatment typically take?",
          answer: "Treatment duration varies based on your specific condition. Acute back pain often improves significantly within 2-4 weeks of treatment. Chronic back pain or sciatica may require 6-12 weeks for optimal results. Disc-related conditions typically need the longer timeframe. During your initial assessment, we'll provide a personalized treatment timeline based on your diagnosis and goals. Many patients feel noticeable improvement within the first few sessions, with continued progress throughout treatment."
        },
        {
          question: "Is physiotherapy treatment for back pain painful or uncomfortable?",
          answer: "Most patients find physiotherapy treatment quite comfortable and even relaxing. While some techniques may cause mild discomfort when working on tight or tender areas, this is typically brief and followed by relief. We always work within your comfort level and communicate throughout each session. Treatments like traction, TENS, and laser therapy are completely painless. Our goal is to reduce your pain, not add to it. If any technique feels too intense, simply let us know and we'll adjust immediately."
        },
        {
          question: "How many physiotherapy sessions will I need for my back pain?",
          answer: "The number of sessions depends on factors including pain severity, duration of symptoms, and your body's response to treatment. A typical treatment course ranges from 8-15 sessions. Initially, we may recommend 2-3 sessions per week, reducing frequency as you improve. Some patients with acute conditions recover in 6-8 sessions, while chronic or complex cases may benefit from 15-20 sessions. We reassess regularly and adjust the plan based on your progress rather than following a rigid schedule."
        },
        {
          question: "Can I continue my normal activities during back pain treatment?",
          answer: "In most cases, yes—and we encourage staying active within comfortable limits. Complete rest often worsens back conditions by weakening supportive muscles. However, certain activities may need temporary modification. We'll advise which movements to avoid and provide alternatives that keep you active without aggravating your condition. For example, you might switch from running to swimming or modify lifting techniques at work. Our goal is to keep you functioning while you heal."
        },
        {
          question: "What should I expect in my first appointment for back pain?",
          answer: "Your first visit lasts approximately 45-60 minutes. We'll begin with a detailed discussion of your pain history, daily activities, and treatment goals. Next, a physical examination assesses your posture, spinal mobility, muscle strength, and neurological function. We may perform specific tests to identify the source of your pain. After explaining our findings in simple terms, we'll outline your personalized treatment plan and answer any questions. Most patients receive initial treatment during this first session."
        },
        {
          question: "Do you provide exercises I can do at home for my back pain?",
          answer: "Absolutely! Home exercises are a crucial part of your recovery. We teach you specific exercises tailored to your condition, demonstrating proper technique and providing written or video instructions. Your home program typically takes 15-20 minutes daily and evolves as you progress. These exercises complement your in-clinic treatment, accelerating recovery and helping prevent recurrence. We believe in empowering you with the knowledge and tools to manage your spinal health independently."
        },
        {
          question: "How soon will I feel improvement in my back pain?",
          answer: "Many patients experience some relief after their first treatment session, though significant improvement typically develops over several sessions. Acute conditions often respond faster than chronic ones. By the end of your first week of treatment (2-3 sessions), you should notice reduced pain intensity, improved mobility, or better sleep. We track your progress at each visit and adjust treatment to optimize results. Some patients experience gradual, steady improvement while others have more dramatic breakthroughs—both patterns are normal."
        }
      ]}

      whyChooseUs={[
        "Advanced physiotherapy equipment including traction, PEMF, and laser therapy",
        "Experienced physiotherapist with specialized training in spinal conditions",
        "Personalized one-on-one care—not group sessions or rushed appointments",
        "Proven track record with 10,000+ surgeries avoided through conservative treatment",
        "Convenient location in Pimpri-Chinchwad, Pune with easy accessibility",
        "Flexible appointment scheduling including evening hours",
        "Comprehensive approach addressing the root cause, not just symptoms",
        "Affordable treatment plans with transparent pricing",
        "Clean, modern, and professional clinic environment",
        "Focus on patient education and long-term self-management"
      ]}
    />
  );
};

export default BackPain;
