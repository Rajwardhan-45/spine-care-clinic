import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Footprints, AlertCircle, Activity, Clock, Dumbbell, Users, TrendingDown, Briefcase } from "lucide-react";

const PlantarFasciitis = () => {
  return (
    <ServiceDetailLayout
      title="Plantar Fasciitis Treatment"
      description="Expert physiotherapy for heel pain, plantar fasciitis, and foot conditions affecting your mobility"
      icon={<Footprints className="h-8 w-8 text-white" />}
      introduction="That sharp, stabbing heel pain you feel with your first steps each morning doesn't have to be your daily reality. At Dr. Anirudha Vaidya's Physiotherapy Clinic in Pimpri-Chinchwad, Pune, we specialize in treating plantar fasciitis—one of the most common causes of heel pain that affects millions of people. Our comprehensive approach addresses both immediate pain relief and the underlying factors that caused your condition.

Plantar fasciitis occurs when the thick band of tissue (plantar fascia) running along the bottom of your foot becomes inflamed and irritated. This condition can make every step painful and significantly impact your quality of life. We treat patients from across Sambhajinagar and Pune who have struggled with heel pain for months or even years, helping them walk comfortably again. Our treatment success comes from addressing not just the symptoms but the biomechanical and lifestyle factors contributing to your pain. Call us at 075172 37255 to schedule your heel pain assessment and take the first step toward pain-free walking."
      understandingCondition="The plantar fascia is a strong, fibrous band that connects your heel bone to your toes, creating the arch of your foot and absorbing shock during walking. When this tissue is subjected to excessive stress, tiny tears develop, leading to inflammation, thickening, and pain. The hallmark symptom is intense heel pain with the first steps of the morning, which typically eases as you move but may return after prolonged standing or when rising after sitting.

Several factors contribute to plantar fasciitis: tight calf muscles, high or low foot arches, sudden increases in activity, improper footwear, obesity, and occupations requiring prolonged standing. Understanding which factors apply to you is essential for effective treatment. Without addressing these underlying causes, plantar fasciitis often becomes chronic and increasingly difficult to treat. Our comprehensive evaluation identifies all contributing factors, enabling a treatment plan that provides lasting relief."
      treatmentApproach="Our plantar fasciitis treatment addresses both the painful tissue and the factors causing ongoing stress. We begin with a thorough assessment of your foot mechanics, gait pattern, calf flexibility, and footwear, identifying everything contributing to your condition.

Initial treatment focuses on reducing inflammation and pain through modalities like ultrasound, laser therapy, and specialized taping techniques. We introduce specific stretching exercises for the plantar fascia and calf muscles, which are essential for recovery. As pain reduces, we address muscle imbalances and foot mechanics through strengthening exercises and gait retraining. Custom orthotics may be recommended to correct biomechanical issues and prevent recurrence. Education on footwear selection and activity modification helps you support your recovery."
      treatmentTimeline={[
        {
          title: "Phase 1: Inflammation Reduction (Weeks 1-3)",
          description: "Focus on reducing acute inflammation and pain using modalities, taping, and initial stretching exercises. Activity modifications and footwear guidance begin immediately."
        },
        {
          title: "Phase 2: Tissue Healing (Weeks 3-6)",
          description: "Progressive stretching program for plantar fascia and calf muscles. Introduction of eccentric loading exercises to stimulate tissue repair."
        },
        {
          title: "Phase 3: Strength Building (Weeks 6-10)",
          description: "Intrinsic foot muscle strengthening and lower leg exercises. Gait retraining and correction of movement patterns that stress the plantar fascia."
        },
        {
          title: "Phase 4: Return to Activity (Weeks 10-14)",
          description: "Gradual return to walking, running, or standing activities. Progression monitored carefully to prevent recurrence."
        },
        {
          title: "Phase 5: Prevention Program (Ongoing)",
          description: "Maintenance stretching routine, appropriate footwear guidance, and strategies to prevent future episodes of heel pain."
        }
      ]}
      recoveryPrevention="Preventing plantar fasciitis recurrence requires consistent attention to foot health. Daily stretching of calf muscles and the plantar fascia should become a lifelong habit—a few minutes each morning and evening makes a significant difference. Maintaining a healthy weight reduces stress on your feet with every step you take.

Proper footwear is essential: choose shoes with good arch support, cushioned heels, and avoid going barefoot on hard surfaces. If you run or play sports, increase training gradually and replace worn athletic shoes regularly. Strengthening the intrinsic muscles of your feet improves their shock-absorbing capacity. Night splints may be recommended for stubborn cases to maintain gentle stretch while you sleep. Our team provides personalized prevention strategies based on your specific risk factors."
      symptoms={[
        { name: "Morning Heel Pain", description: "Intense pain with first steps after waking", icon: <Clock className="h-5 w-5 text-primary" /> },
        { name: "Pain After Rest", description: "Discomfort returning after prolonged sitting", icon: <Briefcase className="h-5 w-5 text-primary" /> },
        { name: "Stabbing Sensation", description: "Sharp pain at the bottom of the heel", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Arch Discomfort", description: "Aching along the arch of the foot", icon: <Activity className="h-5 w-5 text-primary" /> },
        { name: "Tenderness to Touch", description: "Pain when pressing the inner heel", icon: <AlertCircle className="h-5 w-5 text-primary" /> },
        { name: "Limping or Altered Gait", description: "Changes in walking pattern to avoid pain", icon: <Footprints className="h-5 w-5 text-primary" /> }
      ]}
      causes={[
        { name: "Tight Calf Muscles", description: "Limited ankle flexibility stressing the fascia", icon: <Activity className="h-5 w-5 text-secondary" /> },
        { name: "Foot Mechanics", description: "Flat feet or high arches affecting load", icon: <Footprints className="h-5 w-5 text-secondary" /> },
        { name: "Overuse", description: "Sudden increase in walking or running", icon: <Dumbbell className="h-5 w-5 text-secondary" /> },
        { name: "Improper Footwear", description: "Worn shoes or inadequate support", icon: <AlertCircle className="h-5 w-5 text-secondary" /> },
        { name: "Excess Weight", description: "Additional stress on feet with each step", icon: <Users className="h-5 w-5 text-secondary" /> },
        { name: "Prolonged Standing", description: "Occupational stress on foot structures", icon: <Briefcase className="h-5 w-5 text-secondary" /> }
      ]}
      keyPoints={[
        "Non-invasive heel pain treatment",
        "Plantar fascia stretching and healing",
        "Calf muscle flexibility improvement",
        "Foot strengthening exercises",
        "Gait analysis and correction",
        "Custom orthotic recommendations",
        "Footwear guidance and education",
        "Prevention of recurrent heel pain"
      ]}
      equipment={[
        {
          name: "Ultrasound Therapy",
          description: "Therapeutic ultrasound delivers deep heat to the plantar fascia, promoting blood flow and accelerating tissue healing. This treatment is particularly effective for chronic plantar fasciitis, breaking down scar tissue and reducing the thickening that occurs with prolonged inflammation."
        },
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy reduces inflammation and promotes cellular repair in the damaged plantar fascia. Laser treatment accelerates healing at the tissue level, often providing relief for stubborn cases that haven't responded to other treatments."
        },
        {
          name: "Shockwave Therapy",
          description: "Extracorporeal shockwave therapy stimulates healing in chronic plantar fasciitis by promoting blood vessel formation and tissue regeneration. This treatment is often effective for cases lasting longer than 6 months that haven't responded to conventional treatment."
        },
        {
          name: "Interferential Therapy (IFT)",
          description: "Electrical stimulation that reduces pain and inflammation in the heel and foot. IFT provides effective pain relief, allowing you to tolerate the stretching and strengthening exercises essential for recovery."
        },
        {
          name: "Kinesiology Taping",
          description: "Specialized taping techniques that support the plantar fascia and reduce stress during weight-bearing activities. Taping provides immediate pain relief and can be worn during daily activities to support the healing process."
        },
        {
          name: "Night Splints",
          description: "Devices worn during sleep that maintain a gentle stretch on the plantar fascia and calf muscles. Night splints prevent the tissue from tightening overnight, reducing morning pain and accelerating overall recovery."
        },
        {
          name: "Custom Orthotics Assessment",
          description: "Comprehensive foot assessment to determine if custom orthotics would benefit your condition. We analyze your foot mechanics and gait pattern to recommend appropriate arch support and cushioning for your specific needs."
        },
        {
          name: "Manual Therapy",
          description: "Hands-on techniques including plantar fascia mobilization, calf soft tissue release, and joint mobilization. Our therapists use specialized techniques to improve tissue flexibility and reduce pain in the foot and lower leg."
        }
      ]}
      exercises={[
        {
          name: "Plantar Fascia Stretch",
          description: "Specific stretching of the plantar fascia by pulling the toes toward the shin while massaging the arch. This stretch is most effective when performed before getting out of bed in the morning and helps prepare the tissue for weight-bearing."
        },
        {
          name: "Calf Stretching",
          description: "Wall stretches for the gastrocnemius and soleus muscles, addressing the tight calves that contribute to plantar fasciitis. Both straight-knee and bent-knee positions are used to target different calf muscle layers."
        },
        {
          name: "Towel Curls",
          description: "Strengthening exercise for the intrinsic foot muscles by scrunching a towel with your toes. Strong foot muscles improve arch support and shock absorption, reducing stress on the plantar fascia."
        },
        {
          name: "Marble Pickups",
          description: "Toe dexterity exercise that strengthens small foot muscles while improving toe coordination. This exercise builds the intrinsic foot strength that supports your arch naturally."
        },
        {
          name: "Eccentric Calf Raises",
          description: "Slow lowering movements that strengthen the Achilles tendon and calf muscles while improving their flexibility. Eccentric exercises are particularly effective for healing tendon-related conditions."
        },
        {
          name: "Frozen Water Bottle Roll",
          description: "Rolling a frozen water bottle under your foot combines massage with ice therapy. This exercise reduces inflammation while mobilizing the plantar fascia and can be done multiple times daily for relief."
        }
      ]}
      faqs={[
        {
          question: "How long does plantar fasciitis take to heal?",
          answer: "With proper treatment, most patients experience significant improvement within 6-8 weeks, though complete resolution may take 3-6 months for chronic cases. The healing timeline depends on how long you've had symptoms, the severity of tissue damage, and your adherence to treatment. Early intervention typically results in faster recovery. We set realistic expectations based on your specific condition."
        },
        {
          question: "Should I rest completely or stay active with plantar fasciitis?",
          answer: "Complete rest is rarely necessary and may actually delay recovery. We recommend modifying activities rather than stopping completely—reducing high-impact activities while maintaining low-impact movement like swimming or cycling. The right balance of rest and activity promotes healing while preventing the stiffness and weakness that develop with inactivity."
        },
        {
          question: "Do I need custom orthotics for plantar fasciitis?",
          answer: "Not everyone with plantar fasciitis needs custom orthotics, but many patients benefit significantly from proper arch support. We assess your foot mechanics to determine if orthotics would help your specific case. Sometimes quality over-the-counter insoles are sufficient, while other cases require custom devices. We provide honest recommendations based on your individual needs."
        },
        {
          question: "Can I continue running with plantar fasciitis?",
          answer: "Running typically needs to be temporarily reduced or modified during treatment, but complete cessation may not be necessary. We assess your running mechanics, training load, and footwear to determine safe activity levels. Many runners can maintain some training while recovering, with gradual return to full volume as symptoms improve."
        },
        {
          question: "Why is my heel pain worse in the morning?",
          answer: "During sleep, your plantar fascia contracts into a shortened position. When you take your first steps, the tissue is suddenly stretched, causing the characteristic sharp pain. This is why morning stretching before getting up and night splints that maintain a gentle stretch can be so effective at reducing morning symptoms."
        },
        {
          question: "Is surgery ever needed for plantar fasciitis?",
          answer: "Surgery is rarely required for plantar fasciitis—conservative treatment succeeds in over 90% of cases. Surgical options are typically considered only after 6-12 months of failed conservative treatment. Our comprehensive approach addresses all contributing factors, maximizing your chances of recovery without surgical intervention."
        },
        {
          question: "Can plantar fasciitis come back after treatment?",
          answer: "Recurrence is possible if underlying risk factors aren't addressed, which is why we emphasize prevention strategies alongside treatment. Maintaining flexibility, wearing appropriate footwear, managing weight, and continuing maintenance exercises significantly reduce recurrence risk. We provide long-term guidance to help you stay pain-free."
        }
      ]}
      whyChooseUs={[
        "Specialized expertise in foot and lower limb conditions",
        "Comprehensive gait and biomechanical analysis",
        "Advanced modalities including shockwave therapy",
        "Connections with orthotic specialists when needed",
        "Customized footwear and activity recommendations",
        "Convenient location in Pimpri-Chinchwad serving Pune and Sambhajinagar",
        "High success rate with conservative plantar fasciitis treatment"
      ]}
    />
  );
};

export default PlantarFasciitis;
