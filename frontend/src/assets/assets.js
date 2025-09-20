import doctorappointment from './imgs/appointment.png'
import doctimelogo from './imgs/doctimelogo.png'
import doctimelogotype from './imgs/doctimelogologotype.png'
import doc1 from './imgs/doctors/doc1.jpg'
import doc2 from './imgs/doctors/doc2.jpg'
import doc3 from './imgs/doctors/doc3.jpg'
import doc4 from './imgs/doctors/doc4.jpg'
import doc5 from './imgs/doctors/doc5.jpg'
import doc6 from './imgs/doctors/doc6.jpg'
import doc7 from './imgs/doctors/doc7.jpg'
import doc8 from './imgs/doctors/doc8.jpg'
import doc9 from './imgs/doctors/doc9.jpg'
import doc10 from './imgs/doctors/doc10.jpg'
import doc11 from './imgs/doctors/doc11.jpg'
import doc12 from './imgs/doctors/doc12.jpg'
import doc13 from './imgs/doctors/doc13.jpg'
import doc14 from './imgs/doctors/doc14.jpg'
import doc15 from './imgs/doctors/doc15.jpg'
import doc16 from './imgs/doctors/doc16.jpg'
import doc17 from './imgs/doctors/doc17.jpg'
import doc18 from './imgs/doctors/doc18.jpg'
import doc19 from './imgs/doctors/doc19.jpg'
import doc20 from './imgs/doctors/doc20.jpg'
import doc21 from './imgs/doctors/doc21.jpg'
import doc22 from './imgs/doctors/doc22.jpg'
import doc23 from './imgs/doctors/doc23.jpg'
import doc24 from './imgs/doctors/doc24.jpg'
import doc25 from './imgs/doctors/doc25.jpg'
import doc26 from './imgs/doctors/doc26.jpg'
import doc27 from './imgs/doctors/doc27.jpg'
import doc28 from './imgs/doctors/doc28.jpg'
import doc29 from './imgs/doctors/doc29.jpg'
import doc30 from './imgs/doctors/doc30.jpg'
import doc31 from './imgs/doctors/doc31.jpg'
import doc32 from './imgs/doctors/doc32.jpg'
import doc33 from './imgs/doctors/doc33.jpg'
import doc34 from './imgs/doctors/doc34.jpg'
import doc35 from './imgs/doctors/doc35.jpg'
import doc36 from './imgs/doctors/doc36.jpg'
import doc37 from './imgs/doctors/doc37.jpg'
import doc38 from './imgs/doctors/doc38.jpg'
import doc39 from './imgs/doctors/doc39.jpg'
import doc40 from './imgs/doctors/doc40.jpg'
import doc41 from './imgs/doctors/doc41.jpg'
import doc42 from './imgs/doctors/doc42.jpg'
import doc43 from './imgs/doctors/doc43.jpg'
import doc44 from './imgs/doctors/doc44.jpg'
import doc45 from './imgs/doctors/doc45.jpg'
import doc46 from './imgs/doctors/doc46.jpg'
import doc47 from './imgs/doctors/doc47.jpg'
import doc48 from './imgs/doctors/doc48.jpg'
import doc49 from './imgs/doctors/doc49.jpg'
import doc50 from './imgs/doctors/doc50.jpg'
import doc51 from './imgs/doctors/doc51.jpg'
import doc52 from './imgs/doctors/doc52.jpg'
import doc53 from './imgs/doctors/doc53.jpg'
import doc54 from './imgs/doctors/doc54.jpg'
import doc55 from './imgs/doctors/doc55.jpg'
import doc56 from './imgs/doctors/doc56.jpg'
import doc57 from './imgs/doctors/doc57.jpg'
import doc58 from './imgs/doctors/doc58.jpg'
import doc59 from './imgs/doctors/doc59.jpg'
import doc60 from './imgs/doctors/doc60.jpg'
import doc61 from './imgs/doctors/doc61.jpg'
import doc62 from './imgs/doctors/doc62.jpg'
import doc63 from './imgs/doctors/doc63.jpg'
import doc64 from './imgs/doctors/doc64.jpg'
import headerpic from './imgs/headerpic.png'
import groupprofile from './imgs/group-profiles.png'
import profilepic from './imgs/profiles/profile-five.png'
import chatIcon from './imgs/icons/chat-icon.png'
import verifiedIcon from './imgs/icons/verified-icon.png'
import infoIcon from './imgs/icons/info-icon.png'
import arrowIcon from './imgs/icons/arrow-icon.png'
import menuIcon from './imgs/icons/menu-icon.png'
import crossIcon from './imgs/icons/cross-icon.png'
import dropdownIcon from './imgs/icons/dropdown-icon.png'
import uploadIcon from './imgs/icons/upload-icon.png'
import Cardiology from './imgs/speciality/stomach.png'
import Ophthalmology from './imgs/speciality/eye.png'
import Gynecology from './imgs/speciality/ear.png'
import Gastroenterology from './imgs/speciality/Gastroenterology.png'
import Dentistry from './imgs/speciality/Dentistry.png'
import Dermatology from './imgs/speciality/Dentistry.png'
import Orthopedics from './imgs/speciality/Dentistry.png'
import Pediatrics from './imgs/speciality/Dentistry.png'
import GeneralPractice from './imgs/speciality/Dentistry.png'
import Psychiatry from './imgs/speciality/Dentistry.png'
import profileOne from './imgs/profiles/profile-one.png'
import profileTwo from './imgs/profiles/profile-two.png'
import profileThree from './imgs/profiles/profile-three.png'
import ratingStar from './imgs/star.png'
import aboutus from './imgs/about.jpg'
import contactus from './imgs/contact.jpg'

export const assets = {
    doctimelogo,
    doctimelogotype,
    doctorappointment,
    headerpic,
    groupprofile,
    profilepic,
    chatIcon,
    verifiedIcon,
    infoIcon,
    arrowIcon,
    menuIcon,
    crossIcon,
    dropdownIcon,
    uploadIcon,
    ratingStar,
    aboutus,
    contactus
}


export const specialityData = [
    { speciality: "General Practice", image: GeneralPractice },
    { speciality: "Pediatrics", image: Pediatrics },
    { speciality: "Cardiology", image: Cardiology },
    { speciality: "Dermatology", image: Dermatology },
    { speciality: "Gynecology", image: Gynecology },
    { speciality: "Orthopedics", image: Orthopedics },
    { speciality: "Ophthalmology", image: Ophthalmology },
    { speciality: "Dentistry", image: Dentistry },
    { speciality: "Gastroenterology", image: Gastroenterology },
    { speciality: "Psychiatry", image: Psychiatry }
]












export const doctors = [
    // General Practice
{ id: 'doc1', name: 'Dr. Hannah Lee', image: doc1, speciality: 'General Practice', degree: 'MBBS', experience: 6, about: 'Dr. Hannah Lee is dedicated to providing thorough first-contact care. She emphasizes preventive health, promotes healthy lifestyle habits, and ensures patients feel supported and informed about their well-being in everyday life.', fees: 100, address: { line1: 'Evercare Medical Centre', line2: 'Perth, WA 6000' } },
{ id: 'doc2', name: 'Dr. James Parker', image: doc2, speciality: 'General Practice', degree: 'MBBS, MD', experience: 8, about: 'Dr. James Parker offers comprehensive primary care, focusing on early diagnosis and preventive medicine. He guides patients in managing chronic conditions and encourages regular screenings to maintain overall health effectively.', fees: 120, address: { line1: 'Central Family Clinic', line2: 'Sydney, NSW 2000' } },
{ id: 'doc3', name: 'Dr. Emily Shaw', image: doc3, speciality: 'General Practice', degree: 'MBBS', experience: 5, about: 'Dr. Emily Shaw provides attentive and personalized care for individuals and families. Her approach combines modern medicine with patient education to ensure long-term health and wellness.', fees: 110, address: { line1: 'WellBeing Clinic', line2: 'Melbourne, VIC 3000' } },
{ id: 'doc4', name: 'Dr. Michael Brown', image: doc4, speciality: 'General Practice', degree: 'MBBS', experience: 7, about: 'Dr. Michael Brown emphasizes preventive care and early intervention. He helps patients understand their health risks and empowers them with practical guidance for a healthier lifestyle.', fees: 115, address: { line1: 'Healthy Life Medical', line2: 'Brisbane, QLD 4000' } },
{ id: 'doc5', name: 'Dr. Sarah Wilson', image: doc5, speciality: 'General Practice', degree: 'MBBS', experience: 9, about: 'Dr. Sarah Wilson is committed to comprehensive patient care. She provides routine check-ups, chronic disease management, and personalized advice for maintaining optimal health.', fees: 125, address: { line1: 'Central Health Clinic', line2: 'Adelaide, SA 5000' } },
{ id: 'doc6', name: 'Dr. Daniel Evans', image: doc6, speciality: 'General Practice', degree: 'MBBS', experience: 10, about: 'Dr. Daniel Evans focuses on family-centered primary care. He promotes preventive health, provides vaccinations, and ensures patients receive compassionate, evidence-based treatment.', fees: 130, address: { line1: 'Family Care Centre', line2: 'Perth, WA 6000' } },
// Pediatrics
{ id: 'doc7', name: 'Dr. Lucas Harris', image: doc7, speciality: 'Pediatrics', degree: 'MBBS, MD (Pediatrics)', experience: 12, about: 'Dr. Lucas Harris provides comprehensive care for children from infancy to adolescence. He emphasizes preventive care, immunizations, and guidance on healthy growth and development.', fees: 180, address: { line1: 'LittleSteps Children’s Hospital', line2: 'Brisbane, QLD 4000' } },
{ id: 'doc8', name: 'Dr. Charlotte Bennett', image: doc8, speciality: 'Pediatrics', degree: 'MBBS, DCH', experience: 10, about: 'Dr. Charlotte Bennett focuses on pediatric wellness and disease management. She works closely with families to ensure children’s growth and development are monitored and nurtured effectively.', fees: 170, address: { line1: 'Happy Kids Clinic', line2: 'Sydney, NSW 2000' } },
{ id: 'doc9', name: 'Dr. Ethan Lewis', image: doc9, speciality: 'Pediatrics', degree: 'MBBS, MD (Pediatrics)', experience: 8, about: 'Dr. Ethan Lewis provides attentive care for children, including preventive check-ups, vaccination guidance, and treatment for common illnesses, ensuring a healthy childhood.', fees: 160, address: { line1: 'Bright Futures Pediatrics', line2: 'Melbourne, VIC 3000' } },
{ id: 'doc10', name: 'Dr. Amelia Scott', image: doc10, speciality: 'Pediatrics', degree: 'MBBS, MD (Pediatrics)', experience: 11, about: 'Dr. Amelia Scott specializes in pediatric health care, providing treatment for acute and chronic illnesses while promoting wellness and healthy development in young patients.', fees: 175, address: { line1: 'Kids Health Clinic', line2: 'Adelaide, SA 5000' } },
{ id: 'doc11', name: 'Dr. Olivia Reed', image: doc11, speciality: 'Pediatrics', degree: 'MBBS, MD (Pediatrics)', experience: 9, about: 'Dr. Olivia Reed offers dedicated child healthcare services. She ensures early detection of illnesses, supports growth milestones, and promotes preventive health strategies for children.', fees: 165, address: { line1: 'Family Kids Clinic', line2: 'Perth, WA 6000' } },
{ id: 'doc12', name: 'Dr. Henry Moore', image: doc12, speciality: 'Pediatrics', degree: 'MBBS, MD (Pediatrics)', experience: 13, about: 'Dr. Henry Moore is devoted to children’s medical care, focusing on preventive medicine, chronic condition management, and educating parents on supporting their child’s overall health.', fees: 185, address: { line1: 'Children First Clinic', line2: 'Brisbane, QLD 4000' } },
// Cardiology
{ id: 'doc13', name: 'Dr. Isabella Brown', image: doc13, speciality: 'Cardiology', degree: 'MBBS, DM (Cardiology)', experience: 18, about: 'Dr. Isabella Brown is a highly experienced cardiologist dedicated to preventing and treating heart diseases. She provides comprehensive assessments, advanced interventions, and personalized care plans to improve cardiovascular health and enhance patients’ quality of life.', fees: 300, address: { line1: 'HeartCare Hospital', line2: 'Sydney, NSW 2000' } },
{ id: 'doc14', name: 'Dr. Benjamin White', image: doc14, speciality: 'Cardiology', degree: 'MBBS, MD (Cardiology)', experience: 16, about: 'Dr. Benjamin White specializes in diagnosing and managing heart conditions. He emphasizes patient education, lifestyle modification, and the latest interventional techniques to prevent complications and optimize long-term cardiac health.', fees: 280, address: { line1: 'Pulse Heart Centre', line2: 'Brisbane, QLD 4000' } },
{ id: 'doc15', name: 'Dr. Laura Evans', image: doc15, speciality: 'Cardiology', degree: 'MBBS, DM (Cardiology)', experience: 14, about: 'Dr. Laura Evans provides expert care in cardiology, focusing on early detection of heart disease, personalized treatment strategies, and long-term management of cardiovascular risk factors.', fees: 290, address: { line1: 'CardioPlus Clinic', line2: 'Melbourne, VIC 3000' } },
{ id: 'doc16', name: 'Dr. Daniel Hughes', image: doc16, speciality: 'Cardiology', degree: 'MBBS, MD (Cardiology)', experience: 12, about: 'Dr. Daniel Hughes is committed to improving heart health through comprehensive assessments, evidence-based interventions, and personalized guidance for managing cardiovascular conditions and lifestyle changes.', fees: 270, address: { line1: 'HeartWise Medical Centre', line2: 'Adelaide, SA 5000' } },
{ id: 'doc17', name: 'Dr. Rachel Green', image: doc17, speciality: 'Cardiology', degree: 'MBBS, DM (Cardiology)', experience: 15, about: 'Dr. Rachel Green focuses on prevention and treatment of cardiac conditions. She delivers tailored care plans, supports rehabilitation, and helps patients adopt heart-healthy lifestyles for long-term wellbeing.', fees: 285, address: { line1: 'Cardiac Health Institute', line2: 'Perth, WA 6000' } },
{ id: 'doc18', name: 'Dr. Samuel Wright', image: doc18, speciality: 'Cardiology', degree: 'MBBS, MD (Cardiology)', experience: 17, about: 'Dr. Samuel Wright offers advanced cardiology services, including diagnostics, intervention, and patient education. He aims to reduce cardiovascular risks and enhance patient quality of life through proactive management.', fees: 295, address: { line1: 'Advanced Heart Centre', line2: 'Brisbane, QLD 4000' } },
// Dermatology
{ id: 'doc19', name: 'Dr. Zoe Edwards', image: doc19, speciality: 'Dermatology', degree: 'MBBS, MD (Dermatology)', experience: 11, about: 'Dr. Zoe Edwards specializes in skin care, treating conditions like acne, eczema, and psoriasis. She emphasizes preventive measures, cosmetic dermatology, and patient education to ensure long-term skin health and confidence.', fees: 190, address: { line1: 'SkinCare Clinic', line2: 'Melbourne, VIC 3000' } },
{ id: 'doc20', name: 'Dr. Jack Turner', image: doc20, speciality: 'Dermatology', degree: 'MBBS, MD (Dermatology)', experience: 13, about: 'Dr. Jack Turner provides comprehensive dermatology services, including skin cancer screening, cosmetic treatments, and personalized care plans to improve both skin health and patient self-esteem.', fees: 210, address: { line1: 'ClearSkin Hospital', line2: 'Adelaide, SA 5000' } },
{ id: 'doc21', name: 'Dr. Emily Foster', image: doc21, speciality: 'Dermatology', degree: 'MBBS, DGO', experience: 10, about: 'Dr. Emily Foster focuses on medical and cosmetic dermatology, helping patients manage chronic skin conditions, improve appearance, and adopt healthy skin routines.', fees: 200, address: { line1: 'Glow Dermatology Centre', line2: 'Sydney, NSW 2000' } },
{ id: 'doc22', name: 'Dr. Michael Adams', image: doc22, speciality: 'Dermatology', degree: 'MBBS, MD (Dermatology)', experience: 12, about: 'Dr. Michael Adams is dedicated to treating skin disorders and promoting healthy skin practices. He provides individualized care plans and utilizes advanced therapies for optimal results.', fees: 205, address: { line1: 'Dermacare Clinic', line2: 'Brisbane, QLD 4000' } },
{ id: 'doc23', name: 'Dr. Sarah Collins', image: doc23, speciality: 'Dermatology', degree: 'MBBS, MD (Dermatology)', experience: 9, about: 'Dr. Sarah Collins combines clinical expertise with patient education, offering treatments for acne, dermatitis, and other skin concerns while focusing on prevention and skin wellness.', fees: 195, address: { line1: 'HealthySkin Medical Centre', line2: 'Perth, WA 6000' } },
{ id: 'doc24', name: 'Dr. Olivia Reed', image: doc24, speciality: 'Dermatology', degree: 'MBBS, MD (Dermatology)', experience: 14, about: 'Dr. Olivia Reed provides advanced dermatological care, specializing in both medical and cosmetic procedures. She ensures patients receive safe, effective treatments tailored to their skin needs.', fees: 215, address: { line1: 'Elite Skin Clinic', line2: 'Melbourne, VIC 3000' } },
// Gynecology
{ id: 'doc25', name: 'Dr. Sophia Nguyen', image: doc25, speciality: 'Gynecology', degree: 'MBBS, MD (Gynecology)', experience: 14, about: 'Dr. Sophia Nguyen provides comprehensive women’s health care, including prenatal, reproductive, and preventive services. She focuses on patient education, early detection of gynecological issues, and personalized care to ensure women feel supported and informed.', fees: 220, address: { line1: 'Women’s Wellness Centre', line2: 'Melbourne, VIC 3000' } },
{ id: 'doc26', name: 'Dr. Emily Foster', image: doc26, speciality: 'Gynecology', degree: 'MBBS, DGO', experience: 10, about: 'Dr. Emily Foster offers compassionate care for all aspects of gynecology and obstetrics. She emphasizes preventive screenings, fertility guidance, and holistic support to enhance women’s health and well-being.', fees: 180, address: { line1: 'Harmony Women’s Clinic', line2: 'Adelaide, SA 5000' } },
{ id: 'doc27', name: 'Dr. Laura Bennett', image: doc27, speciality: 'Gynecology', degree: 'MBBS, MD (Gynecology)', experience: 12, about: 'Dr. Laura Bennett specializes in reproductive health, prenatal care, and minimally invasive procedures. She prioritizes patient comfort, individualized treatment, and empowering women to make informed health decisions.', fees: 200, address: { line1: 'Femina Health Centre', line2: 'Sydney, NSW 2000' } },
{ id: 'doc28', name: 'Dr. Hannah Scott', image: doc28, speciality: 'Gynecology', degree: 'MBBS, DGO', experience: 11, about: 'Dr. Hannah Scott provides expert gynecological care, focusing on preventive screenings, hormonal health, and fertility support. She combines clinical expertise with empathetic guidance for optimal women’s wellness.', fees: 190, address: { line1: 'Vital Women Clinic', line2: 'Brisbane, QLD 4000' } },
{ id: 'doc29', name: 'Dr. Olivia Carter', image: doc29, speciality: 'Gynecology', degree: 'MBBS, MD (Gynecology)', experience: 13, about: 'Dr. Olivia Carter delivers comprehensive women’s healthcare, including routine check-ups, prenatal monitoring, and personalized guidance. She emphasizes preventive care and patient education for long-term reproductive health.', fees: 210, address: { line1: 'CareWell Women’s Clinic', line2: 'Perth, WA 6000' } },
{ id: 'doc30', name: 'Dr. Natalie White', image: doc30, speciality: 'Gynecology', degree: 'MBBS, DGO', experience: 15, about: 'Dr. Natalie White is dedicated to women’s reproductive health, providing fertility consultations, prenatal care, and gynecological treatments. She aims to create a supportive environment for women of all ages.', fees: 230, address: { line1: 'Women First Health Centre', line2: 'Melbourne, VIC 3000' } },
// Orthopedics
{ id: 'doc31', name: 'Dr. Amelia Johnson', image: doc31, speciality: 'Orthopedics', degree: 'MBBS, MS (Ortho)', experience: 16, about: 'Dr. Amelia Johnson provides expert care for bone, joint, and muscle conditions. She focuses on both surgical and non-surgical treatments, offering personalized rehabilitation plans and promoting optimal mobility and long-term musculoskeletal health.', fees: 200, address: { line1: 'OrthoCare Hospital', line2: 'Brisbane, QLD 4000' } },
{ id: 'doc32', name: 'Dr. Nathan Scott', image: doc32, speciality: 'Orthopedics', degree: 'MBBS, FRACS (Ortho)', experience: 18, about: 'Dr. Nathan Scott specializes in joint replacements, sports injuries, and musculoskeletal disorders. He emphasizes precise surgical techniques, patient education, and rehabilitation programs to ensure full recovery and mobility.', fees: 220, address: { line1: 'Active Life Orthopedic Centre', line2: 'Perth, WA 6000' } },
{ id: 'doc33', name: 'Dr. Olivia Harper', image: doc33, speciality: 'Orthopedics', degree: 'MBBS, MS (Ortho)', experience: 14, about: 'Dr. Olivia Harper provides comprehensive orthopedic care, including treatment for fractures, arthritis, and sports injuries. She emphasizes personalized care, modern surgical approaches, and rehabilitation to restore function effectively.', fees: 210, address: { line1: 'Precision Orthopedics Clinic', line2: 'Sydney, NSW 2000' } },
{ id: 'doc34', name: 'Dr. Ethan Clarke', image: doc34, speciality: 'Orthopedics', degree: 'MBBS, MS (Ortho)', experience: 12, about: 'Dr. Ethan Clarke focuses on treating musculoskeletal injuries and chronic joint conditions. He combines advanced surgical procedures with physiotherapy guidance to ensure long-term patient mobility and comfort.', fees: 195, address: { line1: 'OrthoPlus Medical Centre', line2: 'Melbourne, VIC 3000' } },
{ id: 'doc35', name: 'Dr. Sophia Mitchell', image: doc35, speciality: 'Orthopedics', degree: 'MBBS, FRACS (Ortho)', experience: 17, about: 'Dr. Sophia Mitchell specializes in sports injuries, trauma care, and joint replacement surgeries. She prioritizes patient education, early intervention, and tailored rehabilitation for optimal recovery.', fees: 225, address: { line1: 'Elite Ortho Clinic', line2: 'Adelaide, SA 5000' } },
{ id: 'doc36', name: 'Dr. Liam Walker', image: doc36, speciality: 'Orthopedics', degree: 'MBBS, MS (Ortho)', experience: 15, about: 'Dr. Liam Walker treats orthopedic conditions ranging from fractures to degenerative joint diseases. He provides personalized care plans, surgical solutions, and rehabilitation guidance to ensure the best outcomes.', fees: 210, address: { line1: 'Mobility Ortho Centre', line2: 'Brisbane, QLD 4000' } },
{ id: 'doc37', name: 'Dr. Isabella Reed', image: doc37, speciality: 'Orthopedics', degree: 'MBBS, MS (Ortho)', experience: 13, about: 'Dr. Isabella Reed offers expert orthopedic care, including surgical and non-surgical management of bones and joints. She emphasizes patient-centered treatment, recovery plans, and long-term mobility enhancement.', fees: 205, address: { line1: 'Harmony Orthopedic Hospital', line2: 'Perth, WA 6000' } },
{ id: 'doc38', name: 'Dr. Noah Bennett', image: doc38, speciality: 'Orthopedics', degree: 'MBBS, FRACS (Ortho)', experience: 19, about: 'Dr. Noah Bennett specializes in orthopedic surgery, including joint replacements, trauma care, and sports-related injuries. He ensures precise treatment and guides patients through recovery and rehabilitation for full mobility.', fees: 230, address: { line1: 'OrthoAdvanced Clinic', line2: 'Melbourne, VIC 3000' } },
{ id: 'doc39', name: 'Dr. Chloe Simmons', image: doc39, speciality: 'Orthopedics', degree: 'MBBS, MS (Ortho)', experience: 14, about: 'Dr. Chloe Simmons provides care for bone, joint, and musculoskeletal disorders. She focuses on preventive measures, innovative surgical techniques, and rehabilitation programs to restore function and reduce pain.', fees: 215, address: { line1: 'OrthoHealth Centre', line2: 'Sydney, NSW 2000' } },
{ id: 'doc40', name: 'Dr. Jack Turner', image: doc40, speciality: 'Orthopedics', degree: 'MBBS, MS (Ortho)', experience: 16, about: 'Dr. Jack Turner specializes in sports injuries, arthritis management, and reconstructive orthopedic surgery. He emphasizes evidence-based treatment, patient education, and comprehensive rehabilitation for lasting mobility.', fees: 220, address: { line1: 'Prime Ortho Clinic', line2: 'Adelaide, SA 5000' } },

// Ophthalmology
{ id: 'doc41', name: 'Dr. Olivia Carter', image: doc41, speciality: 'Ophthalmology', degree: 'MBBS, MS (Ophth)', experience: 12, about: 'Dr. Olivia Carter specializes in comprehensive eye care, including diagnosis and treatment of vision problems, cataracts, and retinal disorders. She combines advanced surgical techniques with personalized care to preserve and enhance patients’ vision.', fees: 180, address: { line1: 'Vision Plus Eye Clinic', line2: 'Sydney, NSW 2000' } },
{ id: 'doc42', name: 'Dr. William Scott', image: doc42, speciality: 'Ophthalmology', degree: 'MBBS, FRANZCO', experience: 15, about: 'Dr. William Scott is an expert in cataract and retinal surgery. He provides precise and safe procedures while focusing on patient comfort, vision preservation, and long-term eye health.', fees: 200, address: { line1: 'ClearView Eye Hospital', line2: 'Melbourne, VIC 3000' } },
{ id: 'doc43', name: 'Dr. Sophia Clarke', image: doc43, speciality: 'Ophthalmology', degree: 'MBBS, MS (Ophth)', experience: 11, about: 'Dr. Sophia Clarke offers advanced eye care services including glaucoma management, retinal treatments, and corrective surgeries. She emphasizes patient education, early detection, and personalized care for optimal vision outcomes.', fees: 190, address: { line1: 'Focus Eye Clinic', line2: 'Brisbane, QLD 4000' } },
{ id: 'doc44', name: 'Dr. Ethan Lewis', image: doc44, speciality: 'Ophthalmology', degree: 'MBBS, FRANZCO', experience: 13, about: 'Dr. Ethan Lewis provides specialized care in cataracts, corneal disorders, and refractive surgery. He prioritizes patient safety, comfort, and the latest techniques to ensure excellent vision restoration.', fees: 210, address: { line1: 'Bright Vision Eye Centre', line2: 'Perth, WA 6000' } },
{ id: 'doc45', name: 'Dr. Chloe Martin', image: doc45, speciality: 'Ophthalmology', degree: 'MBBS, MS (Ophth)', experience: 10, about: 'Dr. Chloe Martin focuses on comprehensive eye care, including pediatric ophthalmology, glaucoma, and retinal disorders. She ensures personalized treatment plans and preventive strategies to maintain long-term vision health.', fees: 175, address: { line1: 'ClearSight Clinic', line2: 'Adelaide, SA 5000' } },
{ id: 'doc46', name: 'Dr. Noah Bennett', image: doc46, speciality: 'Ophthalmology', degree: 'MBBS, FRANZCO', experience: 14, about: 'Dr. Noah Bennett specializes in advanced cataract and retinal surgeries, offering individualized care and modern techniques. He emphasizes preventive eye health and patient education to achieve the best visual outcomes.', fees: 220, address: { line1: 'EyeCare Specialists', line2: 'Melbourne, VIC 3000' } },

// Dentistry
{ id: 'doc47', name: 'Dr. Liam Patel', image: doc47, speciality: 'Dentistry', degree: 'BDS, MDS (Dentistry)', experience: 9, about: 'Dr. Liam Patel provides advanced dental care, including cosmetic, restorative, and preventive dentistry. He focuses on patient comfort, oral health education, and long-term dental wellness for individuals and families.', fees: 150, address: { line1: 'BrightSmile Dental Clinic', line2: 'Adelaide, SA 5000' } },
{ id: 'doc48', name: 'Dr. Sarah Collins', image: doc48, speciality: 'Dentistry', degree: 'BDS, MDS (Oral Surgery)', experience: 11, about: 'Dr. Sarah Collins is an experienced oral surgeon, offering safe, precise, and pain-free dental procedures. She emphasizes patient education and preventive care to maintain optimal oral health.', fees: 170, address: { line1: 'SmileCare Dental Hospital', line2: 'Melbourne, VIC 3000' } },
{ id: 'doc49', name: 'Dr. Ethan Brooks', image: doc49, speciality: 'Dentistry', degree: 'BDS, MDS (Prosthodontics)', experience: 10, about: 'Dr. Ethan Brooks specializes in prosthodontics and restorative dental care. He helps patients achieve functional and aesthetic results while ensuring comfort and long-term oral health.', fees: 160, address: { line1: 'PerfectSmile Clinic', line2: 'Sydney, NSW 2000' } },
{ id: 'doc50', name: 'Dr. Olivia Bennett', image: doc50, speciality: 'Dentistry', degree: 'BDS, MDS (Orthodontics)', experience: 12, about: 'Dr. Olivia Bennett focuses on orthodontic treatments, including braces and aligners. She ensures personalized care plans and guidance to achieve healthy, aligned teeth and long-lasting oral health.', fees: 180, address: { line1: 'Align Dental Centre', line2: 'Brisbane, QLD 4000' } },
{ id: 'doc51', name: 'Dr. Noah Thompson', image: doc51, speciality: 'Dentistry', degree: 'BDS, MDS (Endodontics)', experience: 11, about: 'Dr. Noah Thompson specializes in endodontics, including root canal treatments and complex dental procedures. He prioritizes pain-free care and patient education for maintaining optimal dental health.', fees: 175, address: { line1: 'RootCare Dental Clinic', line2: 'Perth, WA 6000' } },
{ id: 'doc52', name: 'Dr. Charlotte Harris', image: doc52, speciality: 'Dentistry', degree: 'BDS, MDS (Cosmetic Dentistry)', experience: 13, about: 'Dr. Charlotte Harris offers cosmetic dentistry services, including veneers, whitening, and smile makeovers. She combines aesthetic excellence with functional care for long-term dental wellness.', fees: 190, address: { line1: 'SmileDesign Dental Hospital', line2: 'Melbourne, VIC 3000' } },


// Gastroenterology
{ id: 'doc53', name: 'Dr. Ethan Mitchell', image: doc53, speciality: 'Gastroenterology', degree: 'MBBS, DM (Gastro)', experience: 10, about: 'Dr. Ethan Mitchell is an expert in digestive health, managing liver, stomach, and intestinal disorders. He emphasizes preventive care, early diagnosis, and patient education for long-term gastrointestinal wellness.', fees: 250, address: { line1: 'Digestive Health Institute', line2: 'Brisbane, QLD 4000' } },
{ id: 'doc54', name: 'Dr. Chloe Ramirez', image: doc54, speciality: 'Gastroenterology', degree: 'MBBS, MD (Gastro)', experience: 9, about: 'Dr. Chloe Ramirez provides advanced care for gastrointestinal issues, including chronic liver disease and digestive disorders. She focuses on patient comfort, education, and effective long-term management.', fees: 230, address: { line1: 'GutCare Medical Centre', line2: 'Perth, WA 6000' } },
{ id: 'doc55', name: 'Dr. Lucas Bennett', image: doc55, speciality: 'Gastroenterology', degree: 'MBBS, DM (Gastro)', experience: 12, about: 'Dr. Lucas Bennett specializes in diagnosing and treating complex gastrointestinal disorders. He prioritizes patient-centered care, preventive strategies, and comprehensive treatment plans.', fees: 260, address: { line1: 'Healthy Gut Clinic', line2: 'Sydney, NSW 2000' } },
{ id: 'doc56', name: 'Dr. Mia Thompson', image: doc56, speciality: 'Gastroenterology', degree: 'MBBS, MD (Gastro)', experience: 11, about: 'Dr. Mia Thompson focuses on digestive health, including liver, pancreas, and bowel disorders. She provides tailored treatments, emphasizes prevention, and educates patients on lifestyle modifications.', fees: 240, address: { line1: 'Digestive Wellness Centre', line2: 'Melbourne, VIC 3000' } },
{ id: 'doc57', name: 'Dr. Noah Anderson', image: doc57, speciality: 'Gastroenterology', degree: 'MBBS, DM (Gastro)', experience: 13, about: 'Dr. Noah Anderson delivers expert care for gastrointestinal diseases, emphasizing early detection and minimally invasive treatments. He helps patients maintain digestive wellness through education and personalized care.', fees: 270, address: { line1: 'Gastro Health Clinic', line2: 'Adelaide, SA 5000' } },
{ id: 'doc58', name: 'Dr. Sophia Carter', image: doc58, speciality: 'Gastroenterology', degree: 'MBBS, MD (Gastro)', experience: 10, about: 'Dr. Sophia Carter provides comprehensive gastrointestinal care, including diagnostics, treatment, and preventive guidance. She focuses on improving patient quality of life and long-term digestive health.', fees: 255, address: { line1: 'Liver & Gut Institute', line2: 'Brisbane, QLD 4000' } },

// Psychiatry
{ id: 'doc59', name: 'Dr. Ava Martin', image: doc59, speciality: 'Psychiatry', degree: 'MBBS, MD (Psychiatry)', experience: 17, about: 'Dr. Ava Martin specializes in mental health care, offering therapy and medication management for mood, anxiety, and stress-related disorders. She emphasizes holistic approaches and supports patients in achieving emotional balance and resilience.', fees: 220, address: { line1: 'MindCare Clinic', line2: 'Melbourne, VIC 3000' } },
{ id: 'doc60', name: 'Dr. Oliver James', image: doc60, speciality: 'Psychiatry', degree: 'MBBS, FRANZCP', experience: 14, about: 'Dr. Oliver James provides comprehensive psychiatric evaluation and therapy for mood, anxiety, and behavioral disorders. He focuses on personalized care, early intervention, and empowering patients to maintain mental wellness.', fees: 240, address: { line1: 'Balance Mental Health Centre', line2: 'Brisbane, QLD 4000' } },
{ id: 'doc61', name: 'Dr. Sophia Lane', image: doc61, speciality: 'Psychiatry', degree: 'MBBS, MD (Psychiatry)', experience: 12, about: 'Dr. Sophia Lane offers patient-centered psychiatric care, specializing in depression, anxiety, and stress management. She integrates therapy with evidence-based medication to improve mental well-being.', fees: 230, address: { line1: 'Harmony Psychiatry Clinic', line2: 'Sydney, NSW 2000' } },
{ id: 'doc62', name: 'Dr. Benjamin Reed', image: doc62, speciality: 'Psychiatry', degree: 'MBBS, FRANZCP', experience: 16, about: 'Dr. Benjamin Reed focuses on mental health disorders, providing therapy, counseling, and medication management. He emphasizes early detection, individualized care, and ongoing support for long-term emotional stability.', fees: 250, address: { line1: 'MindWell Institute', line2: 'Adelaide, SA 5000' } },
{ id: 'doc63', name: 'Dr. Emily Carter', image: doc63, speciality: 'Psychiatry', degree: 'MBBS, MD (Psychiatry)', experience: 13, about: 'Dr. Emily Carter provides expert care for patients with depression, anxiety, and other psychiatric conditions. She focuses on therapy, lifestyle interventions, and patient education to enhance overall mental health.', fees: 235, address: { line1: 'Serenity Mental Health Centre', line2: 'Perth, WA 6000' } },
{ id: 'doc64', name: 'Dr. Noah Wilson', image: doc64, speciality: 'Psychiatry', degree: 'MBBS, MD (Psychiatry)', experience: 15, about: 'Dr. Noah Wilson specializes in psychiatric care for adults and adolescents, offering therapy and medication guidance. He emphasizes empathy, patient engagement, and strategies for coping with mental health challenges.', fees: 245, address: { line1: 'CalmMind Clinic', line2: 'Melbourne, VIC 3000' } },

]


export const usersFeedbacks = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Cardiologist",
        image: profileOne,
        feedback:
            "DoctorTime has made it so much easier for my patients to book appointments. The platform is reliable and user-friendly.",
        rating: 5,
        date: "2025-09-01",
        location: "Melbourne, Australia",
    },
    {
        id: 2,
        name: "Michael Brown",
        role: "Patient",
        image: profileThree,
        feedback:
            "I booked my appointment in less than a minute. No waiting calls or emails – just quick and easy!",
        rating: 4,
        date: "2025-08-27",
        location: "Sydney, Australia",
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Dermatologist",
        image: profileTwo,
        feedback:
            "The platform helps me manage my schedule more efficiently, and my patients love the reminders.",
        rating: 5,
        date: "2025-09-10",
        location: "Brisbane, Australia",
    },
]