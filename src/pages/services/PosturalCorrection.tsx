import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { AlignVerticalJustifyCenter, AlertCircle, Activity, Clock, Laptop, Briefcase, Users, TrendingDown } from "lucide-react";

const PosturalCorrection = () => {
  return (
    <ServiceDetailLayout
      title="Postural Correction Therapy"
      description="Expert physiotherapy for posture correction, forward head posture, rounded shoulders, and spinal alignment"
      icon={<AlignVerticalJustifyCenter className="h-8 w-8 text-white" />}
      introduction="In today's digital world, poor posture has become an epidemic affecting people of all ages. At Dr. Anirudha Vaidya's Physiotherapy Clinic in Pimpri-Chinchwad, Pune, we help patients overcome the aches, pains, and limitations caused by years of improper body positioning. Our postural correction program addresses the root causes of poor posture, not just the symptoms it creates.

Poor posture is more than a cosmetic concern—it affects your spine health, breathing capacity, energy levels, and overall well-being. Forward head posture, rounded shoulders, and excessive spinal curves place abnormal stress on muscles, joints, and nerves, leading to chronic pain and dysfunction. We treat patients from across Sambhajinagar and Pune who suffer from headaches, neck pain, back pain, and fatigue that stem from postural problems. Our comprehensive approach combines manual therapy, targeted exercises, and ergonomic education to help you stand taller, move better, and feel healthier. Call us at 075172 37255 to schedule your postural assessment."
      understandingCondition="Posture refers to how you hold your body when standing, sitting, and moving. Good posture maintains the natural curves of your spine—a slight inward curve at the neck and lower back, and a gentle outward curve in the mid-back. When these curves become exaggerated or flattened, problems develop.

Common postural deviations include forward head posture (where your head juts forward relative to your shoulders), rounded shoulders (where shoulders roll inward), increased thoracic kyphosis (excessive mid-back rounding), and lower crossed syndrome (where tight hip flexors and weak core muscles create anterior pelvic tilt). These patterns develop gradually from prolonged sitting, screen use, weak muscles, or habitual positions. Understanding your specific postural issues is the first step toward correction."
      treatmentApproach="Our postural correction program is personalized based on your specific deviations, contributing factors, and goals. We begin with a comprehensive postural assessment, analyzing your alignment from multiple angles and identifying muscle imbalances through specific tests.

Treatment addresses the three components of posture: shortened muscles that pull you out of alignment, weak muscles that can't maintain proper position, and habitual patterns that have become ingrained. We use manual therapy to release tight muscles and mobilize stiff joints. Targeted strengthening exercises rebuild the muscles that support good posture. Postural awareness training helps you recognize and correct poor positions throughout your day. Ergonomic modifications address environmental factors contributing to your posture problems."
      treatmentTimeline={[
        {
          title: "Phase 1: Assessment & Mobility (Weeks 1-3)",
          description: "Comprehensive postural analysis and treatment of restricted tissues. Manual therapy and stretching to restore normal muscle length and joint mobility."
        },
        {
          title: "Phase 2: Muscle Activation (Weeks 3-6)",
          description: "Awakening weak postural muscles through specific activation exercises. Introduction of basic postural awareness training and ergonomic modifications."
        },
        {
          title: "Phase 3: Strength Building (Weeks 6-10)",
          description: "Progressive strengthening of postural muscles including deep neck flexors, lower trapezius, and core stabilizers. Endurance training for sustained positions."
        },
        {
          title: "Phase 4: Integration (Weeks 10-14)",
          description: "Applying improved posture to daily activities, work, and exercise. Breaking old habits and establishing new movement patterns."
        },
        {
          title: "Phase 5: Maintenance (Ongoing)",
          description: "Long-term exercise program, periodic reassessment, and ongoing ergonomic optimization for lasting postural improvement."
        }
      ]}
      recoveryPrevention="Maintaining good posture is a lifelong commitment that becomes easier with practice. The key is developing awareness—regularly checking your position throughout the day and making corrections before bad habits take hold. Setting reminders on your phone or computer can help establish this habit.

Your environment significantly impacts your posture. Ensure your workspace is ergonomically set up, with screen at eye level, feet flat on the floor, and lumbar support in your chair. Take regular breaks from prolonged sitting—stand, stretch, and move every 30-45 minutes. Strengthen postural muscles through regular exercise, focusing on back, core, and shoulder blade muscles. Sleep position matters too—side sleeping with proper pillow support or back sleeping with neck support maintains spinal alignment overnight."
      symptoms={[
        { name: "Chronic Neck Pain", description: "Persistent aching and stiffness in the neck", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Headaches", description: "Tension headaches from muscle strain", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Upper Back Pain", description: "Aching between shoulder blades", icon: <TrendingDown className="h-5 w-5 text-primary" /> },
        { name: "Shoulder Pain", description: "Discomfort from rounded shoulder position", icon: <Activity className="h-5 w-5 text-primary" /> },
        { name: "Lower Back Pain", description: "Pain from abnormal spinal curves", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Fatigue", description: "Tiredness from inefficient muscle use", icon: <Clock className="h-5 w-5 text-primary" /> }
      ]}
      causes={[
        { name: "Prolonged Sitting", description: "Extended desk work and computer use", icon: <Laptop className="h-5 w-5 text-secondary" /> },
        { name: "Phone and Device Use", description: "Forward bending to look at screens", icon: <Laptop className="h-5 w-5 text-secondary" /> },
        { name: "Weak Core Muscles", description: "Insufficient spinal support from muscles", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "Muscle Imbalances", description: "Tight and weak muscles pulling posture out of alignment", icon: <TrendingDown className="h-5 w-5 text-secondary" /> },
        { name: "Poor Ergonomics", description: "Workstation not set up properly", icon: <Briefcase className="h-5 w-5 text-secondary" /> },
        { name: "Habitual Patterns", description: "Learned positions reinforced over years", icon: <Users className="h-5 w-5 text-secondary" /> }
      ]}
      keyPoints={[
        "Comprehensive postural assessment",
        "Forward head posture correction",
        "Rounded shoulder treatment",
        "Spinal curve normalization",
        "Core and postural muscle strengthening",
        "Ergonomic workstation assessment",
        "Postural awareness training",
        "Long-term maintenance programs"
      ]}
      equipment={[
        {
          name: "Postural Analysis System",
          description: "Comprehensive assessment tools that accurately measure postural deviations from ideal alignment. We analyze your posture from front, side, and back views, identifying exactly where corrections are needed and tracking improvement over time."
        },
        {
          name: "Manual Therapy",
          description: "Skilled hands-on techniques including spinal mobilization, myofascial release, and muscle energy techniques. Manual therapy restores normal joint mobility and muscle flexibility, allowing the body to achieve and maintain better posture."
        },
        {
          name: "Traction Therapy",
          description: "Gentle spinal traction that decompresses vertebrae and helps restore normal spinal curves. Traction is particularly effective for cervical posture correction, relieving the compression that develops from forward head position."
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed electromagnetic field therapy that reduces muscle tension and promotes tissue healing. PEMF helps release the chronic muscle tightness that contributes to postural deviations."
        },
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy that reduces pain and inflammation in overworked postural muscles. Laser treatment helps break the pain cycle that reinforces poor postural patterns."
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Electrical stimulation that reduces muscle spasm and pain in areas stressed by poor posture. IFT provides relief that allows you to tolerate the exercises and stretches needed for postural correction."
        },
        {
          name: "Exercise Equipment",
          description: "Specialized equipment for postural strengthening including resistance bands, stability balls, and foam rollers. Our gym includes tools specifically designed to target the muscles most important for maintaining good posture."
        },
        {
          name: "Ergonomic Assessment Tools",
          description: "Equipment to analyze your workstation, sleeping position, and daily activities. Proper ergonomic setup is essential for maintaining the postural improvements achieved through therapy."
        }
      ]}
      exercises={[
        {
          name: "Chin Tucks",
          description: "Exercise that strengthens deep neck flexor muscles and corrects forward head posture. By pulling your chin straight back (not down), you train the muscles that maintain proper head-on-neck alignment. Regular chin tucks counter the effects of screen use."
        },
        {
          name: "Scapular Retraction",
          description: "Shoulder blade squeezes that strengthen the muscles between your shoulder blades. These exercises correct rounded shoulders by building the lower trapezius and rhomboid muscles that pull your shoulders back naturally."
        },
        {
          name: "Pectoral Stretches",
          description: "Doorway stretches and chest openers that lengthen tight pectoral muscles. Shortened chest muscles are a primary driver of rounded shoulders, and regular stretching is essential for lasting postural improvement."
        },
        {
          name: "Core Stabilization",
          description: "Deep core muscle exercises that provide the foundation for good posture. Strong transverse abdominis and multifidus muscles support your spine in neutral alignment throughout daily activities."
        },
        {
          name: "Upper Back Extension",
          description: "Exercises that restore normal thoracic spine mobility and counteract the excessive rounding of prolonged sitting. Prone extensions and wall angels build the strength and flexibility needed for upright posture."
        },
        {
          name: "Hip Flexor Stretches",
          description: "Stretching of the psoas and hip flexor muscles that become shortened from prolonged sitting. Tight hip flexors pull the pelvis forward, increasing lower back curve and disrupting the entire postural chain."
        }
      ]}
      faqs={[
        {
          question: "How long does it take to correct poor posture?",
          answer: "Postural correction is a gradual process that typically takes 8-12 weeks to see noticeable improvements, with continued progress over 6-12 months. The timeline depends on the severity of your postural issues, how long they've developed, and your consistency with exercises and awareness. The good news is that most patients notice reduced pain and increased comfort within the first few weeks of treatment."
        },
        {
          question: "Can posture really cause headaches?",
          answer: "Yes, forward head posture is a common cause of tension-type headaches and can contribute to migraines. When your head juts forward, the muscles at the base of your skull and along your neck work overtime to support the weight, leading to muscle tension that radiates pain into your head. Correcting forward head posture often significantly reduces headache frequency and intensity."
        },
        {
          question: "Is it too late to fix my posture as an adult?",
          answer: "It's never too late to improve your posture. While correction may take longer in adults with long-standing postural issues, significant improvements are achievable at any age. Muscles can be strengthened and stretched, joints can be mobilized, and habits can be changed regardless of age. The benefits of improved posture—reduced pain, better breathing, increased energy—are worth the effort."
        },
        {
          question: "Do I need to wear a posture corrector brace?",
          answer: "Posture corrector braces can serve as a short-term reminder of proper positioning, but they shouldn't be relied upon long-term. Constant brace use can actually weaken the muscles needed to maintain posture naturally. We may recommend temporary brace use in specific cases, but the emphasis is always on building the muscle strength and awareness to maintain posture without external support."
        },
        {
          question: "Will ergonomic changes at work help my posture?",
          answer: "Absolutely. Since many people spend 8+ hours at work, ergonomic setup significantly impacts posture. Screen height, chair position, desk height, and keyboard placement all affect how you hold your body throughout the day. We provide specific recommendations for your workstation and can work with your employer's ergonomic resources if available."
        },
        {
          question: "How often should I do posture exercises?",
          answer: "For best results, postural exercises should be performed daily, but they don't require significant time commitment. Most exercises can be done in 10-15 minutes. Additionally, micro-breaks throughout the day—standing, stretching, and resetting your posture every 30-45 minutes—are equally important. Consistency with brief, frequent practice is more effective than occasional longer sessions."
        },
        {
          question: "Can poor posture affect my breathing?",
          answer: "Yes, posture significantly impacts breathing capacity. Forward head posture and rounded shoulders compress the chest cavity, restricting lung expansion. When you stand or sit properly, your lungs can expand fully, improving oxygen intake and energy levels. Many patients notice improved breathing and reduced fatigue as their posture improves."
        }
      ]}
      whyChooseUs={[
        "Comprehensive postural analysis and assessment",
        "Expertise in treating desk workers and tech professionals",
        "Integrated approach combining manual therapy and exercise",
        "Practical ergonomic solutions for work and home",
        "Focus on lasting improvement, not quick fixes",
        "Convenient location in Pimpri-Chinchwad serving Pune and Sambhajinagar",
        "Personalized programs for each patient's specific postural issues"
      ]}
    />
  );
};

export default PosturalCorrection;
