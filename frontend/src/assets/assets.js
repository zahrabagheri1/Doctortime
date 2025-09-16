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
import Otolaryngology from './imgs/speciality/dna.png'
import Gastroenterology from './imgs/speciality/Gastroenterology.png'
import Dentistry from './imgs/speciality/Dentistry.png'
import Dermatology from './imgs/speciality/Dentistry.png'
import Orthopedics from './imgs/speciality/Dentistry.png'
import Neurology from './imgs/speciality/Dentistry.png'
import Pediatrics from './imgs/speciality/Dentistry.png'
import Endocrinology from './imgs/speciality/Dentistry.png'
import Pulmonology from './imgs/speciality/Dentistry.png'
import Urology from './imgs/speciality/Dentistry.png'
import Psychiatry from './imgs/speciality/Dentistry.png'
import profileOne from './imgs/profiles/profile-one.png'
import profileTwo from './imgs/profiles/profile-two.png'
import profileThree from './imgs/profiles/profile-three.png'
import ratingStar from './imgs/star.png'

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
    ratingStar
}


export const specialityData = [
    {
        speciality: "Ophthalmology",
        image: Ophthalmology
    },
    {
        speciality: "Gynecology",
        image: Gynecology
    },
    {
        speciality: "Gastroenterology",
        image: Gastroenterology
    },
    {
        speciality: "Otolaryngology",
        image: Otolaryngology
    },
    {
        speciality: "Dentistry",
        image: Dentistry
    },
    {
        speciality: "Cardiology",
        image: Cardiology
    },
    {
        speciality: "Endocrinology",
        image: Endocrinology
    },
    // {
    //     speciality: "Urology",
    //     image: Urology
    // },
    // {
    //     speciality: "Pulmonology",
    //     image: Pulmonology
    // },
    // {
    //     speciality: "Pediatrics",
    //     image: Pediatrics
    // },
    // {
    //     speciality: "Psychiatry",
    //     image: Psychiatry
    // },
    // {
    //     speciality: "Neurology",
    //     image: Neurology
    // },
    // {
    //     speciality: "Orthopedics",
    //     image: Orthopedics
    // },
    // {
    //     speciality: "Dermatology",
    //     image: Dermatology
    // }
]


export const doctors = [
    {
        id: 'doc1',
        name: 'Dr. Hannah Lee',
        image: doc1,
        speciality: 'General Practice',
        degree: 'MBBS',
        experience: 6,
        about: 'Dr. Hannah Lee is passionate about holistic health and preventive medicine, helping patients live healthier lives.',
        fees: 100,
        address: {
            line1: 'Evercare Medical Centre',
            line2: 'Perth, WA 6000'
        }
    },
    {
        id: 'doc2',
        name: 'Dr. James Parker',
        image: doc2,
        speciality: 'General Practice',
        degree: 'MBBS, MD',
        experience: 8,
        about: 'Dr. James Parker offers personalized care for families and individuals with a focus on preventive health.',
        fees: 120,
        address: {
            line1: 'Central Family Clinic',
            line2: 'Sydney, NSW 2000'
        }
    },
    {
        id: 'doc3',
        name: 'Dr. Olivia Carter',
        image: doc3,
        speciality: 'Ophthalmology',
        degree: 'MBBS, MS (Ophth)',
        experience: 12,
        about: 'Dr. Olivia Carter specializes in treating eye conditions and providing vision care with advanced surgical techniques.',
        fees: 180,
        address: {
            line1: 'Vision Plus Eye Clinic',
            line2: 'Sydney, NSW 2000'
        }
    },
    {
        id: 'doc4',
        name: 'Dr. William Scott',
        image: doc4,
        speciality: 'Ophthalmology',
        degree: 'MBBS, FRANZCO',
        experience: 15,
        about: 'Dr. William Scott is an expert in cataract and retinal surgery with a patient-first approach.',
        fees: 200,
        address: {
            line1: 'ClearView Eye Hospital',
            line2: 'Melbourne, VIC 3000'
        }
    },
    {
        id: 'doc5',
        name: 'Dr. Sophia Nguyen',
        image: doc5,
        speciality: 'Gynecology',
        degree: 'MBBS, MD (Gynecology)',
        experience: 14,
        about: 'Dr. Sophia Nguyen provides comprehensive women’s health care, including prenatal and reproductive services.',
        fees: 220,
        address: {
            line1: 'Women’s Wellness Centre',
            line2: 'Melbourne, VIC 3000'
        }
    },
    {
        id: 'doc6',
        name: 'Dr. Emily Foster',
        image: doc6,
        speciality: 'Gynecology',
        degree: 'MBBS, DGO',
        experience: 10,
        about: 'Dr. Emily Foster offers compassionate care for all aspects of gynecology and obstetrics.',
        fees: 180,
        address: {
            line1: 'Harmony Women’s Clinic',
            line2: 'Adelaide, SA 5000'
        }
    },
    {
        id: 'doc7',
        name: 'Dr. Ethan Mitchell',
        image: doc7,
        speciality: 'Gastroenterology',
        degree: 'MBBS, DM (Gastro)',
        experience: 10,
        about: 'Dr. Ethan Mitchell is an expert in digestive health, treating liver, stomach, and intestinal disorders.',
        fees: 250,
        address: {
            line1: 'Digestive Health Institute',
            line2: 'Brisbane, QLD 4000'
        }
    },
    {
        id: 'doc8',
        name: 'Dr. Chloe Ramirez',
        image: doc8,
        speciality: 'Gastroenterology',
        degree: 'MBBS, MD (Gastro)',
        experience: 9,
        about: 'Dr. Chloe Ramirez provides advanced care for gastrointestinal issues with a focus on patient comfort.',
        fees: 230,
        address: {
            line1: 'GutCare Medical Centre',
            line2: 'Perth, WA 6000'
        }
    },
    {
        id: 'doc9',
        name: 'Dr. Grace Wilson',
        image: doc9,
        speciality: 'Otolaryngology',
        degree: 'MBBS, MS (ENT)',
        experience: 11,
        about: 'Dr. Grace Wilson specializes in ear, nose, and throat conditions, offering both surgical and medical treatments.',
        fees: 190,
        address: {
            line1: 'ENT Care Centre',
            line2: 'Perth, WA 6000'
        }
    },
    {
        id: 'doc10',
        name: 'Dr. Daniel Hughes',
        image: doc10,
        speciality: 'Otolaryngology',
        degree: 'MBBS, FRACS (ENT)',
        experience: 13,
        about: 'Dr. Daniel Hughes has extensive experience in head and neck surgery, focusing on minimally invasive methods.',
        fees: 210,
        address: {
            line1: 'Sound Health ENT Hospital',
            line2: 'Sydney, NSW 2000'
        }
    },
    {
        id: 'doc11',
        name: 'Dr. Liam Patel',
        image: doc11,
        speciality: 'Dentistry',
        degree: 'BDS, MDS (Dentistry)',
        experience: 9,
        about: 'Dr. Liam Patel provides advanced dental care, including cosmetic and restorative dentistry.',
        fees: 150,
        address: {
            line1: 'BrightSmile Dental Clinic',
            line2: 'Adelaide, SA 5000'
        }
    },
    {
        id: 'doc12',
        name: 'Dr. Sarah Collins',
        image: doc12,
        speciality: 'Dentistry',
        degree: 'BDS, MDS (Oral Surgery)',
        experience: 11,
        about: 'Dr. Sarah Collins is a skilled oral surgeon, offering painless and safe dental procedures.',
        fees: 170,
        address: {
            line1: 'SmileCare Dental Hospital',
            line2: 'Melbourne, VIC 3000'
        }
    },
    {
        id: 'doc13',
        name: 'Dr. Isabella Brown',
        image: doc13,
        speciality: 'Cardiology',
        degree: 'MBBS, DM (Cardiology)',
        experience: 18,
        about: 'Dr. Isabella Brown is a leading cardiologist with expertise in heart disease prevention and interventional care.',
        fees: 300,
        address: {
            line1: 'HeartCare Hospital',
            line2: 'Sydney, NSW 2000'
        }
    },
    {
        id: 'doc14',
        name: 'Dr. Benjamin White',
        image: doc14,
        speciality: 'Cardiology',
        degree: 'MBBS, MD (Cardiology)',
        experience: 16,
        about: 'Dr. Benjamin White specializes in interventional cardiology and heart rhythm disorders.',
        fees: 280,
        address: {
            line1: 'Pulse Heart Centre',
            line2: 'Brisbane, QLD 4000'
        }
    },
    {
        id: 'doc15',
        name: 'Dr. Noah Anderson',
        image: doc15,
        speciality: 'Endocrinology',
        degree: 'MBBS, DM (Endocrinology)',
        experience: 13,
        about: 'Dr. Noah Anderson specializes in managing diabetes, thyroid, and hormone-related disorders.',
        fees: 210,
        address: {
            line1: 'Endocrine Health Centre',
            line2: 'Melbourne, VIC 3000'
        }
    },
    {
        id: 'doc16',
        name: 'Dr. Mia Thompson',
        image: doc16,
        speciality: 'Endocrinology',
        degree: 'MBBS, MD (Endocrinology)',
        experience: 12,
        about: 'Dr. Mia Thompson provides expert care for endocrine and metabolic disorders with a personalized approach.',
        fees: 220,
        address: {
            line1: 'Hormone Care Clinic',
            line2: 'Adelaide, SA 5000'
        }
    },
    {
        id: 'doc17',
        name: 'Dr. David Kim',
        image: doc17,
        speciality: 'Urology',
        degree: 'MBBS, MS (Urology)',
        experience: 15,
        about: 'Dr. David Kim specializes in urinary tract and male reproductive system disorders.',
        fees: 240,
        address: {
            line1: 'UroHealth Medical Centre',
            line2: 'Perth, WA 6000'
        }
    },
    {
        id: 'doc18',
        name: 'Dr. Rachel Green',
        image: doc18,
        speciality: 'Pulmonology',
        degree: 'MBBS, MD (Pulmonology)',
        experience: 14,
        about: 'Dr. Rachel Green is an expert in lung and respiratory diseases, including asthma and COPD.',
        fees: 230,
        address: {
            line1: 'BreatheWell Clinic',
            line2: 'Sydney, NSW 2000'
        }
    },
    {
        id: 'doc19',
        name: 'Dr. Lucas Harris',
        image: doc19,
        speciality: 'Pediatrics',
        degree: 'MBBS, MD (Pediatrics)',
        experience: 12,
        about: 'Dr. Lucas Harris provides compassionate care for children, from newborns to adolescents.',
        fees: 180,
        address: {
            line1: 'LittleSteps Children’s Hospital',
            line2: 'Brisbane, QLD 4000'
        }
    },
    {
        id: 'doc20',
        name: 'Dr. Ava Martin',
        image: doc20,
        speciality: 'Psychiatry',
        degree: 'MBBS, MD (Psychiatry)',
        experience: 17,
        about: 'Dr. Ava Martin specializes in mental health care, offering therapy and medication management.',
        fees: 220,
        address: {
            line1: 'MindCare Clinic',
            line2: 'Melbourne, VIC 3000'
        }
    },
    {
        id: 'doc21',
        name: 'Dr. Henry Clark',
        image: doc21,
        speciality: 'Neurology',
        degree: 'MBBS, DM (Neurology)',
        experience: 20,
        about: 'Dr. Henry Clark is a neurologist with expertise in epilepsy, stroke, and neurodegenerative diseases.',
        fees: 280,
        address: {
            line1: 'NeuroHealth Institute',
            line2: 'Sydney, NSW 2000'
        }
    },
    {
        id: 'doc22',
        name: 'Dr. Amelia Johnson',
        image: doc22,
        speciality: 'Orthopedics',
        degree: 'MBBS, MS (Ortho)',
        experience: 16,
        about: 'Dr. Amelia Johnson provides expert care for bone, joint, and muscle conditions.',
        fees: 200,
        address: {
            line1: 'OrthoCare Hospital',
            line2: 'Brisbane, QLD 4000'
        }
    },
    {
        id: 'doc23',
        name: 'Dr. Nathan Scott',
        image: doc23,
        speciality: 'Orthopedics',
        degree: 'MBBS, FRACS (Ortho)',
        experience: 18,
        about: 'Dr. Nathan Scott specializes in joint replacements and sports injuries.',
        fees: 220,
        address: {
            line1: 'Active Life Orthopedic Centre',
            line2: 'Perth, WA 6000'
        }
    },
    {
        id: 'doc24',
        name: 'Dr. Zoe Edwards',
        image: doc24,
        speciality: 'Dermatology',
        degree: 'MBBS, MD (Dermatology)',
        experience: 11,
        about: 'Dr. Zoe Edwards provides advanced skincare treatments for acne, eczema, and cosmetic dermatology.',
        fees: 190,
        address: {
            line1: 'SkinCare Clinic',
            line2: 'Melbourne, VIC 3000'
        }
    },
    {
        id: 'doc25',
        name: 'Dr. Jack Turner',
        image: doc25,
        speciality: 'Dermatology',
        degree: 'MBBS, MD (Dermatology)',
        experience: 13,
        about: 'Dr. Jack Turner specializes in skin cancer treatment and preventive skincare.',
        fees: 210,
        address: {
            line1: 'ClearSkin Hospital',
            line2: 'Adelaide, SA 5000'
        }
    },
    {
        id: 'doc26',
        name: 'Dr. Charlotte Bennett',
        image: doc26,
        speciality: 'Pediatrics',
        degree: 'MBBS, DCH',
        experience: 10,
        about: 'Dr. Charlotte Bennett is dedicated to child healthcare with a family-centered approach.',
        fees: 170,
        address: {
            line1: 'Happy Kids Clinic',
            line2: 'Sydney, NSW 2000'
        }
    },
    {
        id: 'doc27',
        name: 'Dr. Oliver James',
        image: doc27,
        speciality: 'Psychiatry',
        degree: 'MBBS, FRANZCP',
        experience: 14,
        about: 'Dr. Oliver James provides comprehensive psychiatric evaluation and therapy for mood and anxiety disorders.',
        fees: 240,
        address: {
            line1: 'Balance Mental Health Centre',
            line2: 'Brisbane, QLD 4000'
        }
    },
    {
        id: 'doc28',
        name: 'Dr. Natalie Brooks',
        image: doc28,
        speciality: 'Pulmonology',
        degree: 'MBBS, DM (Pulmonology)',
        experience: 12,
        about: 'Dr. Natalie Brooks specializes in advanced respiratory care, including sleep apnea and chronic lung disease.',
        fees: 250,
        address: {
            line1: 'LungCare Institute',
            line2: 'Perth, WA 6000'
        }
    },
    {
        id: 'doc29',
        name: 'Dr. Samuel Wright',
        image: doc29,
        speciality: 'Urology',
        degree: 'MBBS, FRACS (Urology)',
        experience: 19,
        about: 'Dr. Samuel Wright provides expert care in kidney stones, prostate health, and urinary disorders.',
        fees: 260,
        address: {
            line1: 'Advanced Urology Centre',
            line2: 'Melbourne, VIC 3000'
        }
    },
    {
        id: 'doc30',
        name: 'Dr. Ella Morgan',
        image: doc30,
        speciality: 'Neurology',
        degree: 'MBBS, DM (Neurology)',
        experience: 15,
        about: 'Dr. Ella Morgan focuses on movement disorders, migraines, and multiple sclerosis.',
        fees: 270,
        address: {
            line1: 'Brain & Spine Clinic',
            line2: 'Adelaide, SA 5000'
        }
    }
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