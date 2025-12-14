import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Footprints, Zap, Activity, Dumbbell, TrendingDown, Users, Clock, Scale } from "lucide-react";

const KneePain = () => {
  return (
    <ServiceDetailLayout
      title="Knee Pain Treatment"
      description="Expert knee rehabilitation, arthritis management, and ligament injury treatment in Pimpri-Chinchwad"
      icon={<Footprints className="h-8 w-8 text-white" />}
      introduction="Knee pain affects people of all ages and can significantly impact your ability to walk, climb stairs, exercise, and enjoy daily activities. Whether you're dealing with osteoarthritis, a sports injury, or pain that developed gradually over time, you deserve effective treatment that addresses the root cause of your discomfort. At Dr. Anirudha Vaidya's clinic in Pimpri-Chinchwad, we specialize in comprehensive knee rehabilitation using advanced physiotherapy techniques and equipment. The knee is the largest joint in your body and bears tremendous stress during daily activities, making it particularly vulnerable to injury and wear. The good news is that most knee conditions respond excellently to conservative treatment without the need for surgery or long-term medication. Our approach focuses on reducing pain, restoring mobility, strengthening the muscles that support your knee, and addressing the underlying factors that caused your condition. With proper treatment, most patients experience significant improvement in their knee function and quality of life."
      understandingCondition="The knee joint is a complex structure consisting of bones, cartilage, ligaments, tendons, and the synovial membrane that provides lubrication. Knee pain can originate from any of these structures, and accurate diagnosis is essential for effective treatment. Osteoarthritis, the most common cause of knee pain in adults over 50, occurs when the protective cartilage wears down over time. Ligament injuries like ACL or MCL tears are common in sports and accidents. Meniscus tears affect the shock-absorbing cartilage and can occur from twisting movements or gradual degeneration. Many patients believe that knee pain means they need surgery, but this is often not the case. Early intervention with physiotherapy can prevent progression, reduce inflammation, and restore function. Untreated knee problems can lead to muscle weakness, altered walking patterns, and accelerated joint degeneration. Understanding your specific condition helps us create a targeted treatment plan that addresses your unique needs."
      treatmentApproach="Our treatment approach for knee pain is evidence-based and tailored to your specific diagnosis, severity, and goals. We begin with a comprehensive assessment that includes evaluating your knee alignment, muscle strength, joint mobility, and walking pattern. For inflammatory conditions, we use modalities like IFT and PEMF therapy to reduce swelling and pain quickly. Manual therapy techniques help restore normal joint movement and release tight tissues around the knee. The cornerstone of our treatment is a progressive exercise program designed to strengthen the quadriceps, hamstrings, and hip muscles that support and stabilize your knee. We incorporate balance and proprioception training to improve joint stability and prevent future injuries. For patients with biomechanical issues, we address problems in the ankle, hip, or spine that may be contributing to knee stress. Our multi-modal approach ensures that we're treating all factors contributing to your knee pain, not just masking symptoms."
      treatmentTimeline={[
        {
          title: "Initial Assessment (Day 1)",
          description: "Comprehensive 45-60 minute evaluation including knee mobility testing, strength assessment, gait analysis, and review of any X-rays or MRI reports. You'll receive a clear diagnosis and personalized treatment plan."
        },
        {
          title: "Pain & Inflammation Control (Week 1-2)",
          description: "Focus on reducing swelling and pain through modalities like IFT, PEMF, and laser therapy. Gentle range of motion exercises begin. 2-3 sessions per week with noticeable relief typically within first week."
        },
        {
          title: "Mobility Restoration (Week 2-4)",
          description: "Progressive exercises to restore full knee range of motion. Manual therapy to address joint stiffness. Introduction of strengthening exercises as pain allows."
        },
        {
          title: "Strengthening Phase (Week 4-8)",
          description: "Progressive resistance exercises for quadriceps, hamstrings, and hip muscles. Functional exercises like squats, step-ups, and walking programs. Balance training for joint stability."
        },
        {
          title: "Return to Activity & Prevention",
          description: "Sport-specific or activity-specific training as needed. Home exercise program for long-term maintenance. Strategies to prevent recurrence and protect your knee health."
        }
      ]}
      recoveryPrevention="Recovery from knee pain varies significantly based on the underlying condition and its severity. Mild knee strains may resolve in 2-3 weeks, while osteoarthritis management is an ongoing process. Ligament injuries and post-surgical rehabilitation typically require 8-12 weeks of dedicated treatment. During recovery, we recommend avoiding high-impact activities, using ice after exercise, and performing your prescribed exercises consistently. Maintaining a healthy weight is crucial for knee health, as every pound of body weight translates to 4 pounds of pressure on your knee joints during walking. Strengthening exercises should become a permanent part of your routine to maintain the gains achieved during treatment. Proper footwear with good support helps reduce knee stress. Warning signs that require immediate attention include sudden severe swelling, inability to bear weight, knee giving way, or locking of the joint. These may indicate serious injury requiring urgent evaluation."
      keyPoints={[
        "Osteoarthritis and degenerative knee pain management",
        "Meniscus tear rehabilitation without surgery",
        "Patellar tracking disorder and kneecap pain treatment",
        "Post-knee replacement rehabilitation therapy",
        "Runner's knee and jumper's knee treatment",
        "ACL, MCL, and ligament injury rehabilitation",
        "Cartilage damage and chondromalacia care",
        "Prevention of knee degeneration and surgery avoidance"
      ]}
      symptoms={[
        {
          name: "Sharp or Aching Pain",
          description: "Acute pain during movement, weight bearing, or climbing stairs; dull ache at rest or after activity",
          icon: <Zap className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Swelling & Stiffness",
          description: "Joint inflammation, fluid accumulation, and reduced flexibility especially after prolonged sitting",
          icon: <Activity className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Weakness & Instability",
          description: "Difficulty bearing weight, knee giving way, or feeling of the joint being unstable",
          icon: <TrendingDown className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Grinding & Popping",
          description: "Crepitus or clicking sounds during movement, catching or locking sensation in the joint",
          icon: <Dumbbell className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      causes={[
        {
          name: "Osteoarthritis & Wear",
          description: "Age-related cartilage deterioration, bone spurs, and joint space narrowing over time",
          icon: <Clock className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Sports & Trauma Injuries",
          description: "ACL/MCL tears, meniscus damage, ligament sprains from athletics or accidents",
          icon: <Activity className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Excess Body Weight",
          description: "Increased stress on knee joints accelerating cartilage breakdown and inflammation",
          icon: <Scale className="h-5 w-5 text-secondary-foreground" />
        },
        {
          name: "Biomechanical Issues",
          description: "Poor alignment, flat feet, muscle imbalances, or weakness affecting knee mechanics",
          icon: <Users className="h-5 w-5 text-secondary-foreground" />
        }
      ]}
      equipment={[
        {
          name: "Interferential Therapy (IFT)",
          description: "IFT delivers deep-penetrating electrical currents that effectively reduce knee pain, swelling, and inflammation. This therapy relaxes muscle spasms around the knee and improves blood circulation to promote healing. Most patients experience significant pain relief during and after treatment, with effects lasting several hours to days."
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed Electromagnetic Field therapy is particularly effective for knee conditions as it stimulates cartilage repair and reduces inflammation at the cellular level. This advanced technology promotes healing of damaged tissues including cartilage, which has limited blood supply. Regular PEMF sessions can slow the progression of osteoarthritis and improve joint function."
        },
        {
          name: "Electric Muscle Stimulation (EMS)",
          description: "EMS is essential for knee rehabilitation as it activates and strengthens the quadriceps muscles that support and stabilize your knee. This is particularly valuable when pain inhibits normal muscle activation. EMS helps rebuild muscle strength faster than exercise alone and is crucial for preventing muscle wasting after injury or surgery."
        },
        {
          name: "T.E.N.S (Transcutaneous Electrical Nerve Stimulation)",
          description: "TENS provides continuous pain relief by blocking pain signals from reaching your brain. We provide portable TENS units for home use, allowing you to manage pain between clinic visits and during daily activities. This non-invasive therapy is safe for regular use and helps reduce dependence on pain medications."
        },
        {
          name: "Laser Therapy (Low-Level Laser)",
          description: "Cold laser therapy penetrates deep into the knee joint to reduce inflammation and promote tissue healing. This advanced treatment is particularly effective for tendinitis, ligament injuries, and cartilage damage. Sessions are quick and painless, with cumulative benefits over multiple treatments."
        },
        {
          name: "Manual Therapy & Joint Mobilization",
          description: "Dr. Anirudha Vaidya personally performs hands-on techniques to restore normal movement in stiff knee joints. This includes joint mobilization to improve flexibility, soft tissue release for tight muscles, and patella mobilization to improve kneecap tracking. These techniques address restrictions that equipment alone cannot."
        },
        {
          name: "Therapeutic Exercise Program",
          description: "We design a progressive exercise program tailored to your specific condition and goals. This includes strengthening exercises for the quadriceps, hamstrings, and hip muscles, as well as flexibility and balance training. These exercises form the foundation of long-term knee health and are taught in detail for home practice."
        },
        {
          name: "Kinesiology Taping",
          description: "Specialized taping techniques provide support to the knee joint while allowing full movement. Patellar taping can immediately improve kneecap tracking and reduce pain. The tape can be worn for several days and provides continuous support during daily activities and exercise."
        }
      ]}
      exercises={[
        {
          name: "Quadriceps Strengthening",
          description: "The quadriceps muscle is your knee's primary stabilizer. Start with straight leg raises: lie on your back, tighten your thigh muscle, and lift your leg 6 inches off the ground. Hold for 5 seconds, lower slowly. Perform 3 sets of 10 repetitions. Progress to mini-squats and leg press as strength improves. Strong quadriceps are essential for knee stability and pain reduction."
        },
        {
          name: "Hamstring Stretches & Strengthening",
          description: "Tight hamstrings increase stress on your knee joint. Sit on the floor with one leg extended, reach toward your toes until you feel a gentle stretch behind your thigh. Hold for 30 seconds, repeat 3 times each leg. For strengthening, perform prone leg curls or bridge exercises. Balanced hamstring strength and flexibility supports optimal knee function."
        },
        {
          name: "Wall Slides (Mini Squats)",
          description: "Stand with your back against a wall, feet shoulder-width apart and 12 inches from the wall. Slowly slide down until your knees are bent about 45 degrees (not past 90 degrees), then slide back up. Perform 2-3 sets of 10 repetitions. This functional exercise strengthens your thighs while ensuring proper knee tracking and is excellent for building daily function."
        },
        {
          name: "Step-Up Exercises",
          description: "Using a 4-6 inch step, step up with your affected leg, bringing the other foot up, then step down. Focus on controlling the movement and keeping your knee aligned over your toes. Start with 2 sets of 10 and progress height gradually. This exercise builds strength for climbing stairs and daily activities that require leg power."
        },
        {
          name: "Balance & Proprioception Training",
          description: "Stand on one leg near a wall for support, hold for 30 seconds. Progress to eyes closed, then to unstable surfaces like a folded towel. Good balance reduces your risk of falls and improves the reflexive muscle control that protects your knee during activities. Perform balance exercises daily for best results."
        },
        {
          name: "Calf Stretches & Heel Raises",
          description: "Tight calves affect knee mechanics. Stand facing a wall, place one foot behind you with heel on the ground, lean forward until you feel a stretch in your calf. Hold 30 seconds, repeat 3 times each side. For strengthening, perform heel raises: rise up on your toes, hold 2 seconds, lower slowly. Strong, flexible calves support proper knee alignment."
        }
      ]}
      faqs={[
        {
          question: "How long does knee pain treatment typically take?",
          answer: "Treatment duration depends on your specific condition and its severity. Mild knee strains may improve within 2-3 weeks with 6-8 sessions. Moderate conditions like runner's knee or early osteoarthritis typically require 4-6 weeks of treatment. More severe conditions including ligament injuries or advanced arthritis may need 8-12 weeks. During your initial assessment, we'll provide a realistic timeline based on your diagnosis. Many patients feel significant improvement within the first 2 weeks, with continued strengthening over the following weeks."
        },
        {
          question: "Can physiotherapy help avoid knee replacement surgery?",
          answer: "In many cases, yes. Physiotherapy is the recommended first-line treatment for knee osteoarthritis and can significantly delay or even eliminate the need for knee replacement. By strengthening the muscles around your knee, reducing inflammation, and improving joint mechanics, we can reduce pain and improve function even when cartilage is damaged. At our clinic, we've helped thousands of patients avoid surgery through comprehensive treatment. Surgery should be considered only when conservative treatment has been given adequate time and hasn't provided sufficient relief."
        },
        {
          question: "Is treatment painful?",
          answer: "Our treatments are designed to relieve pain, not cause it. Modalities like IFT, PEMF, and laser therapy are comfortable and often immediately soothing. Manual therapy may cause brief discomfort when addressing tight muscles or stiff joints, but this is temporary and followed by relief. Exercises are progressed gradually within your pain tolerance. Some mild muscle soreness after exercise is normal and indicates your muscles are getting stronger. We always work within your comfort level and adjust treatment based on your feedback."
        },
        {
          question: "What should I expect in my first appointment?",
          answer: "Your first appointment lasts about 45-60 minutes. Dr. Anirudha Vaidya will take a detailed history of your knee problem, examine your joint mobility, muscle strength, and walking pattern, and assess factors like alignment and balance. Please bring any X-ray or MRI reports you have. Wear comfortable clothing that allows access to your knee (shorts are ideal). Based on this assessment, you'll receive a diagnosis, treatment plan, and realistic expectations. We typically begin some treatment on the first day."
        },
        {
          question: "Will I need to do exercises at home?",
          answer: "Yes, home exercises are essential for optimal results. The exercises we teach you take only 15-20 minutes daily and are crucial for building the strength and flexibility that protect your knee long-term. Patients who consistently perform their home exercises recover faster and have better long-term outcomes. We provide detailed instructions and demonstrations to ensure you're performing exercises correctly. Your exercise program is progressive and will be updated as you improve."
        },
        {
          question: "How soon will I notice improvement?",
          answer: "Many patients notice some improvement after their first session, particularly reduced pain and improved mobility. However, lasting improvement in knee function requires consistent treatment over several weeks. For acute injuries, significant relief often comes within 1-2 weeks. Chronic conditions like osteoarthritis show gradual improvement over 4-6 weeks. We track your progress using pain scales and functional measures so you can see objective improvement. The key is consistency with both clinic visits and home exercises."
        },
        {
          question: "Can I continue walking and exercising during treatment?",
          answer: "In most cases, yes, and we encourage staying active. However, we may recommend modifications based on your condition. Walking is generally beneficial for knee health and is encouraged. High-impact activities like running or jumping may need to be temporarily avoided or modified. We'll provide specific guidance on which activities are safe and beneficial for your condition. Our goal is to keep you as active as possible while protecting your knee during the healing process. As you improve, we'll gradually progress your activity level."
        }
      ]}
      whyChooseUs={[
        "15+ years of specialized experience treating all types of knee conditions",
        "Over 15,000 patients helped avoid knee surgery through effective physiotherapy",
        "Advanced equipment including PEMF therapy, laser therapy, and EMS for faster recovery",
        "Personalized one-on-one care directly from Dr. Anirudha Vaidya",
        "Comprehensive approach addressing root causes, not just symptoms",
        "Convenient Sambhajinagar location with easy access from all Pimpri-Chinchwad areas",
        "Flexible appointment scheduling including evening hours",
        "Clean, professional clinic with modern rehabilitation facilities"
      ]}
    />
  );
};

export default KneePain;
