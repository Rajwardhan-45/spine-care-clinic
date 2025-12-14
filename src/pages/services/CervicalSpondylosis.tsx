import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Shield, Zap, AlertCircle, Radio, Smartphone, Users, Clock, Briefcase } from "lucide-react";

const CervicalSpondylosis = () => {
  return (
    <ServiceDetailLayout
      title="Neck Pain & Cervical Spondylosis"
      description="Expert treatment for neck pain, cervical disc problems, and spondylosis in Pimpri-Chinchwad"
      icon={<Shield className="h-8 w-8 text-white" />}
      introduction="Neck pain and cervical spondylosis are among the most common conditions we treat at our clinic in Pimpri-Chinchwad. Whether you're experiencing stiffness after long hours at your desk, sharp pain radiating down your arms, or chronic discomfort that affects your sleep and daily activities, you're not alone. Cervical spondylosis is a degenerative condition affecting the cervical spine (neck region), and it becomes increasingly common after age 40, though we're now seeing it in younger patients due to increased screen time and sedentary lifestyles. The good news is that most cases of neck pain and cervical spondylosis respond excellently to physiotherapy treatment without the need for surgery or long-term medication. At Dr. Anirudha Vaidya's clinic, we use a combination of advanced therapeutic equipment and manual techniques to relieve your pain, restore mobility, and address the root cause of your condition. Our goal is not just temporary relief, but long-term improvement in your neck health and quality of life."
      understandingCondition="Cervical spondylosis refers to age-related wear and tear affecting the spinal discs in your neck. As we age, the discs between our cervical vertebrae naturally dehydrate and shrink, which can lead to bone spurs and other degenerative changes. However, contrary to what many believe, having cervical spondylosis doesn't mean you must live with pain. Many people have cervical spondylosis without any symptoms. Problems arise when these changes compress nearby nerves or the spinal cord, causing pain, numbness, or weakness. Early intervention is crucial because untreated neck problems can progress to chronic pain, arm weakness, and in severe cases, balance problems. The condition significantly impacts daily life, from difficulty driving and looking over your shoulder to problems sleeping and concentrating at work. Understanding that physiotherapy can effectively manage these symptoms gives hope to thousands of patients we've treated in Pune and Pimpri-Chinchwad."
      treatmentApproach="Our treatment approach for neck pain and cervical spondylosis is comprehensive and personalized to your specific condition, symptoms, and lifestyle. We begin with a thorough assessment to understand the exact cause of your pain, whether it's disc-related, muscular, postural, or a combination of factors. Treatment typically combines pain-relieving modalities like interferential therapy and TENS with cervical traction to decompress the spine. We incorporate manual therapy techniques including gentle joint mobilization and soft tissue release to improve mobility. What sets our approach apart is our focus on correcting the underlying causes, particularly postural problems from desk work and smartphone use. We integrate therapeutic exercises that you can continue at home to strengthen weak muscles and stretch tight ones. Our multi-modal approach addresses inflammation, muscle spasm, joint stiffness, and nerve irritation simultaneously, providing faster and more lasting relief than single-treatment approaches."
      treatmentTimeline={[
        {
          title: "Initial Assessment (Day 1)",
          description: "Comprehensive 45-60 minute evaluation including neck mobility testing, nerve function assessment, posture analysis, and review of any imaging reports. You'll receive a diagnosis and customized treatment plan."
        },
        {
          title: "Acute Pain Relief Phase (Week 1-2)",
          description: "Focus on reducing pain and inflammation through modalities like IFT, TENS, and gentle cervical traction. 2-3 sessions per week with immediate relief often noticed."
        },
        {
          title: "Mobility Restoration Phase (Week 2-4)",
          description: "Progressive treatment to restore neck range of motion through manual therapy, joint mobilization, and targeted stretching. Introduction of home exercise program."
        },
        {
          title: "Strengthening Phase (Week 4-6)",
          description: "Building neck muscle strength and endurance through progressive exercises. Postural retraining and ergonomic education for lasting results."
        },
        {
          title: "Maintenance & Prevention",
          description: "Transition to home program with periodic check-ups. Long-term strategies to prevent recurrence and maintain optimal neck health."
        }
      ]}
      recoveryPrevention="Recovery from neck pain and cervical spondylosis varies based on the severity and duration of your condition. Acute neck pain often improves within 2-4 weeks with proper treatment, while chronic conditions may require 8-12 weeks for optimal recovery. During recovery, we recommend using a supportive pillow, taking regular breaks from screen time, and performing your prescribed exercises daily. Ergonomic modifications at your workstation are essential: keep your computer monitor at eye level, use a headset for phone calls, and avoid cradling your phone between your ear and shoulder. Lifestyle modifications include avoiding prolonged neck flexion while reading or using your phone, sleeping on your back or side with proper pillow support, and staying active with regular walks. Warning signs that require immediate attention include sudden severe weakness in your arms, difficulty walking or balance problems, loss of bladder or bowel control, or sudden onset of symptoms after trauma. These may indicate serious nerve compression requiring urgent medical evaluation."
      keyPoints={[
        "Cervical disc degeneration and bulging disc treatment",
        "Neck pain and chronic stiffness relief",
        "Radiating arm pain and numbness management",
        "Cervicogenic headache treatment",
        "Nerve compression and pinched nerve care",
        "Postural neck pain correction for IT professionals",
        "Prevention of progression and surgery avoidance",
        "Complete restoration of neck mobility"
      ]}
      symptoms={[
        {
          name: "Neck Stiffness",
          description: "Reduced range of motion, difficulty turning head, muscle tightness especially in mornings",
          icon: <AlertCircle className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Radiating Arm Pain",
          description: "Pain spreading from neck to shoulders, arms, or hands following nerve pathways",
          icon: <Radio className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Numbness & Tingling",
          description: "Pins and needles sensation in arms, hands, or fingers indicating nerve involvement",
          icon: <Zap className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Cervicogenic Headaches",
          description: "Tension headaches originating from neck, often felt at base of skull or behind eyes",
          icon: <AlertCircle className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      causes={[
        {
          name: "Age & Disc Degeneration",
          description: "Natural wear and tear of cervical discs, joints, and vertebrae over time",
          icon: <Clock className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Poor Posture & Screen Time",
          description: "Extended periods of forward head posture from computers, phones, and desk work",
          icon: <Smartphone className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Occupational Strain",
          description: "Jobs requiring repetitive neck movements, overhead work, or prolonged static positions",
          icon: <Briefcase className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Previous Neck Injury",
          description: "History of whiplash, sports injuries, or trauma affecting cervical spine",
          icon: <Users className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      equipment={[
        {
          name: "Cervical Traction Therapy",
          description: "Our motorized cervical traction unit provides gentle, controlled decompression of the cervical spine. This therapy creates space between vertebrae, relieving pressure on compressed discs and pinched nerves. Most patients feel immediate relief during the 15-20 minute session, with progressive improvement over multiple treatments. Particularly effective for disc bulges and nerve root compression."
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "IFT delivers deep-penetrating electrical currents that effectively relieve pain in the deep muscles and joints of the neck. This therapy reduces muscle spasm, improves blood circulation, and promotes natural healing. Sessions are comfortable and relaxing, with most patients experiencing significant pain reduction within the first few treatments."
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed Electromagnetic Field therapy stimulates cellular repair and reduces inflammation at the disc and joint level. This advanced technology is particularly beneficial for degenerative disc conditions, promoting healing of damaged tissues. Treatment is completely painless and many patients notice reduced stiffness and improved mobility after sessions."
        },
        {
          name: "T.E.N.S (Transcutaneous Electrical Nerve Stimulation)",
          description: "TENS provides excellent pain relief by blocking pain signals from reaching the brain. We also provide portable TENS units for home use, allowing you to manage pain between clinic visits. This non-invasive therapy is safe for regular use and helps reduce dependence on pain medications."
        },
        {
          name: "Short Wave Diathermy",
          description: "Deep heat therapy that penetrates to the core of neck muscles and joints, providing relief for chronic stiffness and pain. This treatment improves blood flow, relaxes tight muscles, and prepares the neck for manual therapy and exercises. Particularly effective for long-standing neck problems."
        },
        {
          name: "Laser Therapy (Low-Level Laser)",
          description: "Cold laser therapy reduces inflammation and promotes tissue healing at the cellular level. This advanced treatment accelerates recovery from disc problems and soft tissue injuries. Sessions are quick, painless, and highly effective when combined with other therapies."
        },
        {
          name: "Manual Therapy & Mobilization",
          description: "Dr. Anirudha Vaidya personally performs gentle joint mobilization techniques to restore normal movement in stiff cervical segments. Combined with soft tissue release for tight muscles, this hands-on approach addresses restrictions that equipment alone cannot. Each technique is carefully chosen based on your specific condition."
        },
        {
          name: "Therapeutic Exercise Program",
          description: "We design a customized exercise program focusing on strengthening weak neck stabilizers and stretching tight muscles. These exercises are taught in detail and form the foundation of long-term neck health. Regular practice of these exercises is key to preventing recurrence and maintaining the improvements gained during treatment."
        }
      ]}
      exercises={[
        {
          name: "Chin Tucks (Deep Neck Flexor Activation)",
          description: "The cornerstone exercise for neck health. Sit or stand tall, then gently draw your chin back as if making a double chin, keeping your eyes level. Hold for 5-10 seconds, repeat 10 times. This strengthens the deep neck flexor muscles that support proper head position and reduces strain on your cervical spine. Perform 3 sets daily for best results."
        },
        {
          name: "Neck Isometric Exercises",
          description: "These strengthen your neck without movement, making them safe even during acute pain. Place your palm against your forehead and push your head against it without actual movement. Repeat for each direction: forward, backward, and both sides. Hold each for 5-7 seconds, repeat 5 times each direction. Builds strength without aggravating sensitive structures."
        },
        {
          name: "Shoulder Blade Squeezes",
          description: "Sit upright and squeeze your shoulder blades together as if holding a pencil between them. Hold for 5 seconds, relax, and repeat 15 times. This exercise strengthens the muscles between your shoulder blades, improving upper back posture and reducing forward head position. Essential for desk workers and those with postural neck pain."
        },
        {
          name: "Gentle Neck Stretches",
          description: "Slowly tilt your ear toward your shoulder until you feel a gentle stretch on the opposite side. Hold for 20-30 seconds, repeat 3 times each side. For front neck stretch, gently look up toward the ceiling. These stretches maintain flexibility and reduce muscle tightness. Perform slowly and never force the movement."
        },
        {
          name: "Upper Trapezius Stretch",
          description: "Sit on your right hand, tilt your head to the left, and gently pull with your left hand for additional stretch. Hold 20-30 seconds, repeat 3 times each side. This releases tension in the upper trapezius muscle, one of the most commonly tight muscles in neck pain sufferers. Regular stretching prevents the build-up of chronic tension."
        },
        {
          name: "Postural Correction Training",
          description: "Practice sitting and standing with optimal alignment: ears over shoulders, shoulders over hips, chin slightly tucked. Set reminders to check your posture every 30 minutes during work. Use ergonomic aids like lumbar supports and monitor stands. This isn't just an exercise but a lifestyle change that prevents recurrence of neck problems."
        }
      ]}
      faqs={[
        {
          question: "How long does cervical spondylosis treatment take?",
          answer: "Treatment duration varies based on your condition severity and how long you've had symptoms. Most patients with moderate neck pain experience significant relief within 2-3 weeks of starting treatment, typically requiring 8-12 sessions. Chronic cases or those with nerve involvement may need 6-8 weeks of treatment. During your initial assessment, we'll give you a realistic timeline based on your specific condition. Many patients continue to improve even after completing their active treatment phase through continued home exercises."
        },
        {
          question: "Is cervical traction painful?",
          answer: "Not at all. Modern cervical traction therapy is gentle and comfortable. You'll lie on a padded table while our motorized traction unit applies a carefully controlled pulling force to your neck. Most patients find the sensation relaxing and experience immediate relief during the session. The force is always within your comfort level and can be adjusted based on your feedback. Some patients even fall asleep during traction! Any initial mild discomfort typically indicates tight muscles that ease with treatment."
        },
        {
          question: "Can I continue working during treatment?",
          answer: "Yes, most patients continue their regular work during treatment. However, we'll provide specific modifications for your workstation and work habits to support your recovery. This may include taking regular breaks, adjusting your monitor height, and performing prescribed stretches at work. If your job involves heavy lifting or overhead work, we may recommend temporary modifications during the acute phase. Our goal is to keep you functional while we treat your condition."
        },
        {
          question: "What should I expect in my first appointment?",
          answer: "Your first appointment lasts about 45-60 minutes. Dr. Anirudha Vaidya will take a detailed history of your symptoms, examine your neck mobility, test your nerve function, and assess your posture and muscle strength. If you have any MRI or X-ray reports, please bring them. Based on this comprehensive assessment, you'll receive a diagnosis, treatment plan, and realistic expectations for recovery. We may begin some gentle treatment on the first day if appropriate, so wear comfortable clothing."
        },
        {
          question: "Will I need to do exercises at home?",
          answer: "Yes, home exercises are a crucial part of your recovery and long-term neck health. We'll teach you specific stretches and strengthening exercises tailored to your condition. Initially, these take only 10-15 minutes daily. We provide detailed instructions and often demonstrate exercises that you can practice at home. Patients who consistently perform their home exercises recover faster and have lower rates of recurrence. We'll also provide postural advice and ergonomic tips for your daily activities."
        },
        {
          question: "How soon will I feel improvement?",
          answer: "Many patients notice some improvement after their very first session, particularly reduced muscle tension and improved mobility. However, lasting improvement typically builds over multiple sessions. For acute neck pain, significant relief often comes within 1-2 weeks. Chronic conditions with nerve involvement take longer, with gradual improvement over 4-6 weeks. We track your progress at each visit using pain scales and mobility measurements, so you can see objective improvement even when day-to-day changes feel subtle."
        },
        {
          question: "Can physiotherapy prevent neck surgery?",
          answer: "In many cases, yes. Conservative treatment with physiotherapy is the recommended first-line approach for most cervical spine conditions, including disc bulges and spondylosis. At our clinic, we've successfully helped thousands of patients avoid surgery through comprehensive physiotherapy treatment. Surgery is typically only necessary when there's severe nerve compression causing progressive weakness or when conservative treatment fails after an adequate trial. Most patients with cervical spondylosis respond well to physiotherapy and never require surgical intervention."
        }
      ]}
      whyChooseUs={[
        "15+ years of specialized experience in treating neck pain and cervical conditions",
        "Over 15,000 patients helped avoid surgery through effective physiotherapy",
        "Advanced equipment including motorized cervical traction, PEMF therapy, and laser therapy",
        "Personalized one-on-one care directly from Dr. Anirudha Vaidya",
        "Convenient Sambhajinagar location with easy access from all Pimpri-Chinchwad areas",
        "Comprehensive approach treating root cause, not just symptoms",
        "Flexible appointment scheduling including evening hours",
        "Clean, professional clinic environment with modern facilities"
      ]}
    />
  );
};

export default CervicalSpondylosis;
