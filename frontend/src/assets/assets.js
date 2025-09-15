import doctorappointment from './imgs/appointment.png'
import doctimelogo from './imgs/doctimelogo.png'
import doctimelogotype from './imgs/doctimelogologotype.png'
import doc1 from './imgs/doctors/DineshPalipana.jpg'
import doc2 from './imgs/doctors/BradMcKay.jpg'
import doc3 from './imgs/doctors/MukeshHaikerwal.png'
import doc4 from './imgs/doctors/NormanSwan.jpg'
import doc5 from './imgs/doctors/BenjaminScott.jpg'
import doc6 from './imgs/doctors/MohammadMutahar.jpg'
import doc7 from './imgs/doctors/ChloeSaadeKorban.jpg'
import doc8 from './imgs/doctors/YusofMutahar.png'
import doc9 from './imgs/doctors/LaylaHassan.jpg'
import doc10 from './imgs/doctors/SaraCollins.jpg'
import doc11 from './imgs/doctors/YasminFarah.jpg'
import doc12 from './imgs/doctors/HannahLee.png'
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
        _id: 'doc1',
        name: 'Dr. Dinesh Palipana',
        image: doc1,
        speciality: 'Emergency Medicine',
        degree: 'MBBS, JD',
        experience: '7 Years',
        about: 'Dr. Dinesh Palipana is an emergency medicine doctor and lawyer. He is the first quadriplegic medical intern in Queensland and the second person with quadriplegia to graduate as a doctor in Australia.',
        fees: 120,
        address: {
            line1: 'Royal Brisbane and Women’s Hospital',
            line2: 'Herston, QLD 4029'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Brad McKay',
        image: doc2,
        speciality: 'General Practice',
        degree: 'MBBS',
        experience: '15 Years',
        about: 'Dr. Brad McKay is a general practitioner and science communicator, known for his appearances on the TV show "Embarrassing Bodies Down Under" and as a regular guest on Australian television and radio programs.',
        fees: 95,
        address: {
            line1: 'Darlinghurst Medical Centre',
            line2: 'Darlinghurst, NSW 2010'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Mukesh Haikerwal',
        image: doc3,
        speciality: 'General Practice',
        degree: 'MBBS',
        experience: '35 Years',
        about: 'Dr. Mukesh Haikerwal is a general practitioner in Melbourne and a former Federal President of the Australian Medical Association. He is known for his advocacy in medical administration and public health.',
        fees: 110,
        address: {
            line1: 'Altona North Medical Practice',
            line2: 'Altona North, VIC 3025'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Norman Swan',
        image: doc4,
        speciality: 'General Practice',
        degree: 'MBBS',
        experience: '40 Years',
        about: 'Dr. Norman Swan is a physician, journalist, and broadcaster, known for hosting "The Health Report" on ABC Radio National and for his contributions to public health communication.',
        fees: 130,
        address: {
            line1: 'ABC Studios',
            line2: 'Ultimo, NSW 2007'
        }
    },
    {
        id: 'doc5',
        name: 'Dr. Benjamin Scott',
        image: doc5,
        speciality: 'Psychiatry',
        degree: 'MBBS',
        experience: 8,
        about: 'Dr. Benjamin Scott focuses on mental health for adults and young professionals.',
        fees: 105,
        address: {
            line1: 'MindCare Clinic',
            line2: 'Sydney, NSW 2000'
        }
    },
    {
        id: 'doc6',
        name: 'Dr. Mohammad Mutahar',
        image: doc6,
        speciality: 'General Practice',
        degree: 'MBBS',
        experience: 6,
        about: 'Dr. Mohammad Mutahar is a young Australian doctor and health advocate, passionate about preventive medicine, digital health, and community wellbeing.',
        fees: 95,
        address: {
            line1: 'Mutahar Medical Centre',
            line2: 'Melbourne, VIC 3000'
        }
    },
    {
        id: 'doc7',
        name: 'Dr. Chloe Saade Korban',
        image: doc7,
        speciality: 'Obstetrics & Gynecology',
        degree: 'MBBS, MD',
        experience: 8,
        about: 'Dr. Chloe Saade Korban is a compassionate gynecologist specializing in women’s health, prenatal care, and minimally invasive surgery. She provides a modern and supportive approach for her patients.',
        fees: 120,
        address: {
            line1: 'Women’s Health & Wellness Clinic',
            line2: 'Sydney, NSW 2000'
        }
    },
    {
        id: 'doc8',
        name: 'Dr. Yusof Mutahar',
        image: doc8,
        speciality: 'General Practice',
        degree: 'MBBS',
        experience: 10,
        about: 'Dr. Yusof Mutahar is an Australian doctor known for his holistic approach in general practice, preventive care, and community health. He is also an advocate for wellness and fitness.',
        fees: 110,
        address: {
            line1: 'Mutahar Medical Centre',
            line2: 'Perth, WA 6000'
        }
    },
    {
        id: 'doc9',
        name: 'Dr. Layla Hassan',
        image: doc9,
        speciality: 'Pediatrics',
        degree: 'MBBS',
        experience: 5,
        about: 'Dr. Layla Hassan loves working with children and provides a warm, supportive environment for families.',
        fees: 95,
        address: {
            line1: 'Bright Kids Clinic',
            line2: 'Melbourne, VIC 3000'
        }
    },
    {
        id: 'doc10',
        name: 'Dr. Sara Collins',
        image: doc10,
        speciality: 'Dermatology',
        degree: 'MBBS',
        experience: 8,
        about: 'Dr. Sara Collins focuses on skin health and modern cosmetic treatments for confidence and wellbeing.',
        fees: 110,
        address: {
            line1: 'Glow Dermatology Centre',
            line2: 'Brisbane, QLD 4000'
        }
    },
    {
        id: 'doc11',
        name: 'Dr. Yasmin Farah',
        image: doc11,
        speciality: 'Psychiatry',
        degree: 'MBBS',
        experience: 9,
        about: 'Dr. Yasmin Farah is dedicated to mental health, supporting young adults and professionals with therapy and care.',
        fees: 105,
        address: {
            line1: 'Mind & Wellness Clinic',
            line2: 'Adelaide, SA 5000'
        }
    },
    {
        id: 'doc12',
        name: 'Dr. Hannah Lee',
        image: doc12,
        speciality: 'General Practice',
        degree: 'MBBS',
        experience: 6,
        about: 'Dr. Hannah Lee is passionate about holistic health and preventive medicine, helping patients live healthier lives.',
        fees: 100,
        address: {
            line1: 'Evercare Medical Centre',
            line2: 'Perth, WA 6000'
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