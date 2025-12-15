import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { Smile, Bone, AlertCircle, Clock, UserCheck } from "lucide-react";

const FrozenShoulder = () => {
  return (
    <ServiceDetailLayout
      title="Shoulder Pain & Frozen Shoulder Treatment"
      description="Expert physiotherapy for adhesive capsulitis, rotator cuff injuries, and complete shoulder mobility restoration in Pimpri-Chinchwad"
      icon={<Smile className="h-8 w-8 text-white" />}
      introduction="Shoulder pain and frozen shoulder (adhesive capsulitis) are among the most debilitating conditions affecting your upper body mobility. Whether you're struggling to lift your arm, experiencing sharp pain during movement, or finding it impossible to perform simple tasks like combing your hair or reaching for objects, our specialized shoulder treatment program can help restore your freedom of movement. At Dr. Anirudha Vaidya's clinic in Pimpri-Chinchwad, we understand that shoulder problems significantly impact your work productivity, sleep quality, and overall quality of life. Our comprehensive approach combines advanced physiotherapy techniques with proven manual therapy methods to address all three stages of frozen shoulder—freezing, frozen, and thawing—providing effective relief without the need for surgery or prolonged medication. Many patients experience noticeable improvement within the first few weeks of treatment, regaining the ability to perform daily activities with confidence."
      understandingCondition="Frozen shoulder typically develops gradually in three distinct stages over 1-3 years if left untreated. The freezing stage brings increasing pain and stiffness, the frozen stage shows reduced pain but maximum stiffness, and the thawing stage sees gradual return of movement. This condition most commonly affects individuals between 40-60 years old, particularly women, diabetics, and those who have had shoulder injuries or surgery. What many people don't realize is that frozen shoulder involves inflammation and thickening of the shoulder joint capsule, creating adhesions that severely restrict movement. Early intervention is crucial—starting treatment during the freezing stage can significantly reduce the total recovery time and prevent the severe stiffness that occurs in later stages. Related conditions like rotator cuff injuries, shoulder impingement, and bursitis share similar symptoms but require different treatment approaches, making accurate assessment essential."
      treatmentApproach="Our shoulder treatment protocol begins with a thorough assessment to determine the exact stage of your condition and identify any underlying causes. We then create a customized treatment plan that combines pain relief modalities with progressive mobility exercises. Unlike generic approaches, our treatment adapts to your specific stage—focusing on pain management during the freezing stage, gentle stretching during the frozen stage, and strengthening during the thawing stage. We integrate multiple techniques including joint mobilization, soft tissue release, therapeutic exercises, and advanced modalities like laser therapy and PEMF to accelerate healing. Our goal is not just temporary relief but complete restoration of shoulder function, allowing you to return to all your normal activities without pain or limitation."
      treatmentTimeline={[
        {
          title: "Initial Assessment",
          description: "Comprehensive shoulder examination including range of motion testing, strength assessment, and identification of pain triggers. We determine your frozen shoulder stage and create a baseline for tracking progress."
        },
        {
          title: "Treatment Plan Development",
          description: "Based on your assessment, we design a personalized treatment protocol targeting your specific stage and severity. Goals are set collaboratively, considering your occupation, activities, and recovery expectations."
        },
        {
          title: "Active Treatment Phase",
          description: "Regular sessions (typically 2-3 times weekly) combining pain relief modalities, manual therapy, and progressive exercises. Each session builds upon the previous, gradually expanding your range of motion and reducing pain levels."
        },
        {
          title: "Progress Monitoring",
          description: "Regular reassessment of shoulder mobility and pain levels using standardized measurements. Treatment intensity and techniques are adjusted based on your response, ensuring optimal progress at each stage."
        },
        {
          title: "Expected Duration",
          description: "Early-stage frozen shoulder may improve significantly within 6-12 weeks. Advanced cases typically require 4-6 months of treatment. Consistent participation in home exercises significantly accelerates recovery."
        },
        {
          title: "Maintenance Phase",
          description: "Once full mobility is restored, we provide a maintenance exercise program and ergonomic guidance to prevent recurrence. Periodic check-ups ensure continued shoulder health and early intervention if needed."
        }
      ]}
      recoveryPrevention="Recovery from frozen shoulder requires patience and consistent effort. During treatment, you'll notice gradual improvements in your ability to perform daily activities—first reaching nearby objects, then overhead movements, and finally full rotational mobility. Between sessions, performing prescribed home exercises is essential for maintaining and building upon gains made during treatment. Sleep positioning is important—using a pillow to support your arm can significantly reduce nighttime pain. Workplace ergonomics matter too—proper desk height, monitor positioning, and regular movement breaks help prevent shoulder strain. To reduce recurrence risk, maintain regular shoulder stretching and strengthening exercises, avoid prolonged immobilization after injuries, and address any underlying conditions like diabetes. If you experience sudden shoulder stiffness after an injury or notice progressive loss of movement, seek treatment promptly."
      keyPoints={[
        "Adhesive capsulitis (frozen shoulder) treatment for all stages",
        "Complete pain relief and mobility restoration",
        "Range of motion improvement with proven techniques",
        "Capsular release through manual therapy",
        "Rotator cuff injury rehabilitation",
        "Shoulder impingement and bursitis management",
        "Post-operative shoulder care and recovery",
        "Prevention strategies for long-term shoulder health"
      ]}
      symptoms={[
        {
          name: "Shoulder Stiffness",
          description: "Progressive loss of shoulder movement, difficulty raising arm above head or reaching behind back, feeling of shoulder being 'locked' in position",
          icon: <Bone className="h-6 w-6" />
        },
        {
          name: "Pain During Movement",
          description: "Sharp or dull aching pain when moving shoulder, especially during lifting, reaching, or rotational movements. Pain often worsens at night disrupting sleep",
          icon: <AlertCircle className="h-6 w-6" />
        },
        {
          name: "Limited Daily Activities",
          description: "Difficulty with routine tasks like dressing, combing hair, reaching for seatbelt, cooking, or carrying objects. Compensatory movements causing neck and back strain",
          icon: <Clock className="h-6 w-6" />
        },
        {
          name: "Night Pain & Sleep Disturbance",
          description: "Intense shoulder pain when lying on affected side, difficulty finding comfortable sleeping position, waking due to shoulder discomfort",
          icon: <UserCheck className="h-6 w-6" />
        }
      ]}
      causes={[
        {
          name: "Prolonged Immobilization",
          description: "Keeping shoulder immobile after injury, surgery, or fracture leads to capsule stiffening and adhesion formation. Early mobilization is crucial for prevention",
          icon: <Bone className="h-6 w-6" />
        },
        {
          name: "Diabetes & Metabolic Conditions",
          description: "Diabetic patients have 2-4 times higher risk of frozen shoulder. Thyroid disorders and hormonal imbalances also increase susceptibility",
          icon: <AlertCircle className="h-6 w-6" />
        },
        {
          name: "Shoulder Injury or Surgery",
          description: "Rotator cuff tears, tendinitis, bursitis, or shoulder surgery can trigger frozen shoulder if not properly rehabilitated with early movement",
          icon: <Clock className="h-6 w-6" />
        },
        {
          name: "Age & Gender Factors",
          description: "Most common in adults 40-60 years old, affecting women more frequently than men. Previous frozen shoulder increases risk in opposite shoulder",
          icon: <UserCheck className="h-6 w-6" />
        }
      ]}
      equipment={[
        {
          name: "Interferential Therapy (IFT)",
          description: "IFT delivers comfortable electrical currents deep into the shoulder joint capsule, effectively reducing pain and muscle spasm. This therapy helps relax the tight muscles surrounding the shoulder, making subsequent stretching exercises more effective and comfortable for patients in the painful freezing stage."
        },
        {
          name: "PEMF Therapy",
          description: "Pulsed Electromagnetic Field therapy penetrates the thickened shoulder capsule to promote cellular healing and reduce inflammation. PEMF has been shown to accelerate tissue repair and is particularly beneficial for frozen shoulder patients who haven't responded well to other treatments."
        },
        {
          name: "Electric Muscle Stimulation (EMS)",
          description: "EMS prevents muscle wasting (atrophy) that commonly occurs when shoulder movement is limited. By stimulating the rotator cuff and deltoid muscles, we maintain muscle strength during the immobile phases, ensuring faster functional recovery once mobility improves."
        },
        {
          name: "T.E.N.S (Transcutaneous Electrical Nerve Stimulation)",
          description: "TENS provides portable, continuous pain relief that patients can use at home between clinic sessions. This safe, drug-free method is particularly helpful for managing nighttime shoulder pain and reducing the need for pain medications."
        },
        {
          name: "Short Wave Diathermy",
          description: "Deep heat therapy reaches the shoulder joint capsule, softening the fibrous adhesions that cause stiffness. When applied before manual therapy and stretching, short wave diathermy significantly improves the effectiveness of mobility techniques."
        },
        {
          name: "Laser Therapy",
          description: "Low-level laser therapy reduces inflammation within the shoulder joint and promotes healing of damaged tissues. This painless treatment accelerates recovery and is especially effective for shoulder impingement and rotator cuff inflammation accompanying frozen shoulder."
        },
        {
          name: "Manual Therapy",
          description: "Our specialized joint mobilization techniques target the restricted shoulder capsule, gradually breaking down adhesions and restoring normal joint mechanics. Combined with soft tissue release, manual therapy addresses both the joint stiffness and muscle tightness."
        },
        {
          name: "Exercise Therapy",
          description: "Progressive therapeutic exercises form the foundation of frozen shoulder rehabilitation. We guide you through phase-appropriate stretching and strengthening, ensuring exercises match your current stage and capabilities for safe, steady improvement."
        }
      ]}
      exercises={[
        {
          name: "Pendulum Exercises",
          description: "These gentle, gravity-assisted movements are ideal for early-stage frozen shoulder. Lean forward supporting yourself on a table, let your affected arm hang, and create small circular motions using body sway. Perform for 2-3 minutes, 3-4 times daily to maintain joint lubrication without stressing the inflamed capsule."
        },
        {
          name: "Wall Walks",
          description: "Face a wall at arm's length, place fingertips on the wall at waist level, and slowly 'walk' your fingers upward as far as comfortable. Hold the top position for 10 seconds, then walk down. This exercise progressively increases shoulder flexion. Perform 10 repetitions, 3 times daily, marking your progress on the wall."
        },
        {
          name: "Towel Stretch",
          description: "Hold a towel behind your back with one hand over the shoulder and one behind the lower back. Use the top hand to gently pull the bottom hand upward, stretching the affected shoulder into internal rotation. Hold for 20-30 seconds, repeat 5 times. This stretch targets the commonly restricted internal rotation."
        },
        {
          name: "Shoulder Circles",
          description: "With arms relaxed at your sides, slowly roll your shoulders in large circles—forward, up, back, and down. Perform 10 circles in each direction, 2-3 times daily. This exercise improves overall shoulder mobility and helps maintain scapular (shoulder blade) movement essential for full shoulder function."
        },
        {
          name: "Cross-Body Stretch",
          description: "Use your unaffected hand to lift the affected arm across your body at shoulder height. Hold for 30 seconds, feeling the stretch in the back of the shoulder. Repeat 3-5 times. This stretch targets the posterior capsule, which is often tight in frozen shoulder and shoulder impingement."
        },
        {
          name: "Resistance Band Exercises",
          description: "Once pain decreases and mobility improves, resistance band exercises strengthen the rotator cuff muscles. External and internal rotation exercises with the elbow bent at 90 degrees rebuild the shoulder's stability system. Start with light resistance, 10-15 repetitions, progressing as strength improves."
        }
      ]}
      faqs={[
        {
          question: "How long does frozen shoulder treatment take to show results?",
          answer: "Most patients notice pain reduction within 2-4 weeks of starting treatment. Significant mobility improvement typically occurs over 2-3 months with consistent treatment and home exercises. The total recovery time depends on your stage when starting treatment—early intervention can reduce total recovery time by 50% or more. Complete resolution may take 6-12 months for advanced cases."
        },
        {
          question: "Is physiotherapy for frozen shoulder painful?",
          answer: "Our treatment is designed to work within your comfort limits. While some stretching may cause mild discomfort, we never push into severe pain. Pain-free techniques like heat therapy and PEMF help relax the shoulder before stretching. We teach you to differentiate between therapeutic stretch sensation (acceptable) and harmful pain (to be avoided)."
        },
        {
          question: "Can frozen shoulder heal without treatment?",
          answer: "While frozen shoulder can eventually resolve on its own, this typically takes 2-3 years with significant pain and disability during that time. Many patients are left with permanent mobility limitations. Physiotherapy treatment dramatically reduces recovery time, minimizes pain, and ensures complete return of shoulder function without long-term restrictions."
        },
        {
          question: "How many treatment sessions will I need?",
          answer: "Treatment frequency and duration depend on your frozen shoulder stage and severity. Most patients benefit from 2-3 sessions weekly for the first 4-6 weeks, then gradually reducing as home exercises become more effective. Total treatment typically ranges from 12-24 sessions, though early-stage cases may require fewer visits."
        },
        {
          question: "Can I continue working during treatment?",
          answer: "Yes, most patients continue working throughout treatment. We may recommend temporary modifications for jobs requiring overhead reaching or heavy lifting. Your home exercise program is designed to fit around your work schedule. Many patients find that treatment actually improves their work performance by reducing pain and improving function."
        },
        {
          question: "What can I do at home to speed up recovery?",
          answer: "Home exercises are essential—performing them consistently can double your recovery speed. Apply heat before stretching, use ice after if sore, and maintain good posture. Sleep with a pillow supporting your arm, avoid carrying heavy bags on the affected side, and take regular movement breaks if you have a desk job."
        },
        {
          question: "Will my frozen shoulder come back after treatment?",
          answer: "Once fully resolved, frozen shoulder rarely recurs in the same shoulder. However, about 20-30% of patients develop it in the opposite shoulder, especially if underlying risk factors like diabetes persist. We teach prevention strategies and maintenance exercises to minimize this risk and catch any early warning signs promptly."
        }
      ]}
      whyChooseUs={[
        "Specialized expertise in all stages of frozen shoulder treatment",
        "Advanced modalities including PEMF and laser therapy for faster healing",
        "Gentle, stage-appropriate techniques that work within your comfort",
        "15+ years experience with shoulder conditions and proven results",
        "Personalized one-on-one sessions (no group treatments)",
        "15,000+ successful treatments—many surgeries avoided",
        "Comprehensive approach addressing underlying causes",
        "Convenient Pimpri-Chinchwad location with flexible scheduling",
        "Patient education empowering you to prevent recurrence"
      ]}
    />
  );
};

export default FrozenShoulder;
