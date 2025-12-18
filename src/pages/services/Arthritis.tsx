import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Bone, AlertCircle, Activity, Clock, Thermometer, Dumbbell, Users, Briefcase } from "lucide-react";

const Arthritis = () => {
  return (
    <ServiceDetailLayout
      title="Arthritis & Joint Pain Treatment"
      description="Comprehensive physiotherapy for osteoarthritis, rheumatoid arthritis, and chronic joint pain management"
      icon={<Bone className="h-8 w-8 text-white" />}
      introduction="Living with arthritis doesn't mean accepting a life of limited mobility and constant pain. At Dr. Anirudha Vaidya's Physiotherapy Clinic in Pimpri-Chinchwad, Pune, we specialize in evidence-based treatments that help arthritis patients regain function, reduce pain, and improve their quality of life. Our comprehensive approach addresses both the symptoms and underlying causes of joint deterioration.

Arthritis affects millions of people across all age groups, from young adults with inflammatory conditions to seniors with age-related joint wear. Whether you're dealing with osteoarthritis in your knees, rheumatoid arthritis affecting multiple joints, or other forms of joint disease, our team creates personalized treatment plans that work with your specific condition and lifestyle. We serve patients throughout Sambhajinagar and Pune who seek alternatives to long-term medication dependency. Our goal is to help you move better, hurt less, and live more fully. Call us at 075172 37255 to schedule your arthritis assessment and discover how physiotherapy can transform your joint health."
      understandingCondition="Arthritis is not a single disease but a term covering over 100 different conditions affecting joints and surrounding tissues. The two most common forms are osteoarthritis (OA), which involves cartilage breakdown, and rheumatoid arthritis (RA), an autoimmune condition causing joint inflammation. Both lead to pain, stiffness, and reduced function, but they require different management approaches.

In osteoarthritis, the protective cartilage that cushions your joints gradually wears away, causing bones to rub together. This triggers pain, swelling, and the formation of bone spurs. Rheumatoid arthritis attacks the joint lining (synovium), causing inflammation that eventually destroys cartilage and bone. Understanding your specific type of arthritis is crucial for effective treatment. Our detailed assessment identifies the nature and extent of your joint involvement, guiding a targeted rehabilitation strategy."
      treatmentApproach="Our arthritis treatment approach balances symptom management with long-term joint preservation. We begin with a comprehensive evaluation including joint mobility assessment, muscle strength testing, and functional movement analysis. This information guides your personalized treatment plan.

For acute flare-ups, we focus on pain relief, swelling reduction, and protecting affected joints. As symptoms stabilize, we introduce gentle exercises to maintain mobility and prevent muscle weakness. Progressive strengthening follows, building the muscular support your joints need. We also address factors that worsen arthritis, including excess weight, poor posture, and improper movement patterns. Education about joint protection strategies helps you manage your condition independently between sessions."
      treatmentTimeline={[
        {
          title: "Phase 1: Pain & Inflammation Control (Weeks 1-3)",
          description: "Initial focus on reducing joint pain and inflammation using modalities like IFT, ultrasound, and gentle manual therapy. Joint protection education begins immediately."
        },
        {
          title: "Phase 2: Mobility Restoration (Weeks 3-6)",
          description: "Gentle range of motion exercises to maintain and improve joint flexibility. Hydrotherapy may be introduced for low-impact movement."
        },
        {
          title: "Phase 3: Strength Building (Weeks 6-10)",
          description: "Progressive strengthening of muscles surrounding affected joints to improve stability and reduce stress on joint surfaces."
        },
        {
          title: "Phase 4: Functional Training (Weeks 10-14)",
          description: "Activities designed to improve performance of daily tasks. Focus on movement efficiency and joint-protective techniques."
        },
        {
          title: "Phase 5: Maintenance Program (Ongoing)",
          description: "Long-term exercise program development, periodic check-ups, and flare-up management strategies for ongoing joint health."
        }
      ]}
      recoveryPrevention="Managing arthritis is a lifelong commitment, but consistent effort yields significant rewards. Regular low-impact exercise like walking, swimming, or cycling maintains joint mobility and muscle strength without excessive stress. Maintaining a healthy weight reduces joint load—every kilogram lost removes four kilograms of pressure from your knees.

Joint protection techniques become second nature with practice: using larger joints for heavy tasks, taking breaks during repetitive activities, and using assistive devices when helpful. Heat therapy relaxes muscles before activity, while cold therapy reduces post-activity swelling. Our team provides ongoing guidance as your condition evolves, adjusting your program to maintain optimal function."
      symptoms={[
        { name: "Joint Pain", description: "Aching or sharp pain that worsens with activity", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Morning Stiffness", description: "Joints feel stiff after rest, especially in morning", icon: <Clock className="h-5 w-5 text-primary" /> },
        { name: "Joint Swelling", description: "Visible inflammation and puffiness around joints", icon: <Thermometer className="h-5 w-5 text-primary" /> },
        { name: "Reduced Range of Motion", description: "Difficulty bending or straightening joints fully", icon: <Activity className="h-5 w-5 text-primary" /> },
        { name: "Joint Crepitus", description: "Grinding, clicking, or popping sounds during movement", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Muscle Weakness", description: "Weakness around affected joints from disuse", icon: <Dumbbell className="h-5 w-5 text-primary" /> }
      ]}
      causes={[
        { name: "Age-Related Wear", description: "Natural cartilage breakdown over decades of use", icon: <Clock className="h-5 w-5 text-secondary" /> },
        { name: "Autoimmune Factors", description: "Immune system attacking joint tissues (RA)", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "Previous Joint Injury", description: "Old injuries accelerating joint degeneration", icon: <AlertCircle className="h-5 w-5 text-secondary" /> },
        { name: "Excess Body Weight", description: "Additional stress on weight-bearing joints", icon: <Users className="h-5 w-5 text-secondary" /> },
        { name: "Genetic Predisposition", description: "Family history increasing arthritis risk", icon: <Users className="h-5 w-5 text-secondary" /> },
        { name: "Occupational Stress", description: "Repetitive joint use in work activities", icon: <Briefcase className="h-5 w-5 text-secondary" /> }
      ]}
      keyPoints={[
        "Non-surgical arthritis pain management",
        "Joint mobility and flexibility improvement",
        "Muscle strengthening to support joints",
        "Flare-up prevention and management",
        "Weight management guidance",
        "Joint protection education",
        "Assistive device recommendations",
        "Long-term maintenance programs"
      ]}
      equipment={[
        {
          name: "Interferential Therapy (IFT)",
          description: "Deep-penetrating electrical currents that provide effective pain relief for arthritic joints. IFT reduces muscle spasm around affected joints and improves blood circulation, helping to reduce inflammation and promote healing of damaged tissues."
        },
        {
          name: "Ultrasound Therapy",
          description: "Therapeutic sound waves that reduce joint inflammation and break down scar tissue. Ultrasound is particularly effective for arthritis, promoting blood flow to damaged areas and reducing pain in both superficial and deep joint structures."
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed electromagnetic field therapy that reduces inflammation at the cellular level and promotes cartilage health. Research shows PEMF can slow cartilage breakdown while reducing pain and improving joint function in arthritis patients."
        },
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy reduces joint inflammation and pain while promoting tissue repair. The photobiomodulation effect is especially helpful for small joint arthritis in hands and feet, providing relief without medications."
        },
        {
          name: "Paraffin Wax Bath",
          description: "Warm wax therapy that delivers soothing heat to arthritic hands and feet. The combination of heat and gentle pressure reduces stiffness and pain, making it easier to perform exercises and daily activities after treatment."
        },
        {
          name: "Hydrotherapy Pool",
          description: "Warm water exercise provides the ideal environment for arthritic joints. Buoyancy reduces joint loading while warmth relaxes muscles, allowing you to perform movements that would be painful on land."
        },
        {
          name: "Manual Therapy",
          description: "Gentle joint mobilization and soft tissue techniques that maintain mobility and reduce pain. Our therapists use specialized approaches appropriate for arthritic joints, improving movement without causing flare-ups."
        },
        {
          name: "Exercise Therapy Equipment",
          description: "Specialized low-impact equipment designed for joint-friendly strengthening. Our gym includes resistance machines, balance equipment, and flexibility aids that allow safe exercise progression for arthritis patients."
        }
      ]}
      exercises={[
        {
          name: "Range of Motion Exercises",
          description: "Gentle movements that take joints through their full available range without resistance. These exercises are performed daily to maintain joint flexibility and prevent stiffness from progressing. We customize movements for each affected joint."
        },
        {
          name: "Isometric Strengthening",
          description: "Muscle contractions without joint movement, perfect for strengthening during flare-ups. Isometrics build muscle strength while protecting sensitive joint surfaces, making them ideal for arthritic joints."
        },
        {
          name: "Aquatic Exercises",
          description: "Water-based exercises that allow movement with reduced joint stress. The warmth and buoyancy of water make exercise comfortable while providing gentle resistance for muscle strengthening."
        },
        {
          name: "Low-Impact Aerobics",
          description: "Activities like walking, cycling, or elliptical training that improve cardiovascular health without jarring joints. Regular aerobic exercise reduces inflammation and helps with weight management."
        },
        {
          name: "Balance Training",
          description: "Exercises to improve stability and prevent falls, which are especially important for those with lower limb arthritis. Better balance reduces the risk of injury and builds confidence in movement."
        },
        {
          name: "Flexibility Stretches",
          description: "Gentle stretching of muscles around affected joints to reduce stiffness and improve movement quality. Stretches are held gently without bouncing to protect sensitive joint structures."
        }
      ]}
      faqs={[
        {
          question: "Can physiotherapy help if I already have severe arthritis?",
          answer: "Yes, physiotherapy benefits arthritis patients at all stages. While we cannot reverse existing joint damage, we can significantly improve your function and reduce pain. Treatment focuses on maintaining mobility, strengthening supporting muscles, and teaching movement strategies that minimize joint stress. Many patients with severe arthritis experience meaningful quality-of-life improvements through consistent physiotherapy."
        },
        {
          question: "How often should I come for arthritis treatment?",
          answer: "Treatment frequency depends on your condition severity and goals. During acute flare-ups, 2-3 sessions per week may be beneficial. For ongoing management, weekly or bi-weekly sessions are common. As you progress, we transition to monthly maintenance visits while you continue a home exercise program. Your treatment schedule is adjusted based on your response and changing needs."
        },
        {
          question: "Will exercise make my arthritis worse?",
          answer: "Properly prescribed exercise actually improves arthritis outcomes. The key is choosing appropriate activities and intensity levels. We design exercise programs that strengthen muscles without overloading damaged joints. Research consistently shows that appropriate exercise reduces arthritis pain and improves function better than rest alone. Our guidance ensures you exercise safely and effectively."
        },
        {
          question: "Can I reduce my arthritis medications with physiotherapy?",
          answer: "Many patients are able to reduce medication use as physiotherapy improves their symptoms. However, medication changes should always be discussed with your rheumatologist or prescribing doctor. We work collaboratively with your medical team, providing reports on your progress that may inform their treatment decisions. Never change medications without medical guidance."
        },
        {
          question: "What's the difference between treating osteoarthritis and rheumatoid arthritis?",
          answer: "Osteoarthritis treatment focuses on mechanical factors: improving joint alignment, strengthening supporting muscles, and reducing stress on worn cartilage. Rheumatoid arthritis treatment must account for systemic inflammation and potential joint destruction. We avoid aggressive treatment during RA flares and coordinate with rheumatologists regarding disease activity. Both conditions benefit from appropriate exercise and pain management."
        },
        {
          question: "Are there any activities I should avoid with arthritis?",
          answer: "High-impact activities like running, jumping, and contact sports typically worsen arthritis symptoms. Heavy lifting with poor technique and repetitive movements that stress affected joints should also be limited. However, complete inactivity is equally harmful. We help you identify activities to modify or avoid while finding alternatives that keep you active and healthy."
        },
        {
          question: "How much does arthritis treatment cost at your clinic?",
          answer: "Treatment costs vary based on session frequency, modalities used, and program duration. We provide transparent pricing after your initial assessment and work within your budget to create an effective treatment plan. Many health insurance plans cover physiotherapy for arthritis—we can help verify your coverage and provide necessary documentation."
        }
      ]}
      whyChooseUs={[
        "Specialized experience in all types of arthritis conditions",
        "Advanced modalities specifically effective for joint disease",
        "Gentle, joint-protective treatment techniques",
        "Coordination with rheumatologists and orthopedic specialists",
        "Comprehensive education on self-management strategies",
        "Convenient location in Pimpri-Chinchwad serving Pune and Sambhajinagar",
        "Supportive environment for patients with chronic conditions"
      ]}
    />
  );
};

export default Arthritis;
