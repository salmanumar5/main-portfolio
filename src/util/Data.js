import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedinIn, FaHome, FaGithub, FaLaptopCode, FaMobileAlt, FaLightbulb } from "react-icons/fa";
import { PiPaintBrushBroadFill } from "react-icons/pi";


export const infoMenu = [
    { icon: <FaPhoneAlt />, title: "Phone No.", contact: "7088970160" },
    { icon: <FaEnvelope />, title: "Email", contact: "umar.salman@example.com" },
    { icon: <FaHome />, title: "Address", contact: "NFC, New Delhi, 110025" }

];

export const socialMedia = [
    { icon: <FaGithub />, link: "https://github.com/salmanumar5" },
    { icon: <FaInstagram />, link: "https://instagram.com/x.umar005" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/umar-salman-6124b121a" },
];

export const skillMenu = [
    {
        icon: <PiPaintBrushBroadFill size={24} className="text-[#FFCF75]" />,
        title: 'Web Design',
        description: 'Crafting visually stunning and user-friendly web interfaces.',
    },
    {
        icon: <FaLaptopCode size={24} className="text-[#FFCF75]" />,
        title: 'Web Dev',
        description: 'Building responsive and functional websites using modern technologies.',
    },
    {
        icon: <FaMobileAlt size={24} className="text-[#FFCF75]" />,
        title: 'Mobile Apps',
        description: 'Developing mobile applications for Android and iOS platforms.',
    },
    {
        icon: <FaLightbulb size={24} className="text-[#FFCF75]" />,
        title: 'Innovative Solutions',
        description: 'Creating innovative solutions and bringing creative ideas to life.',
    },
];

export const projectList = [
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2FemployeeTracker.png?alt=media&token=b5970a7f-7a6e-4e1b-afec-90c2c565f172' },
    { title: "E-Commerce Website", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2FframedLama.png?alt=media&token=4038da96-6ff1-442e-b77a-e8b93f6e8b5d' },
    { title: "URL Shortener", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2FurlShortener.png?alt=media&token=c693171f-59bf-4f59-bd0e-623bb2456b4b' },
    { title: "Gym Management System", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.jpg?alt=media&token=9957e8e2-927e-489f-b55e-c83f4611359f' },
    { title: "Portfolio Template #1", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2FvirtualWeb.png?alt=media&token=0355285c-ac75-4bda-9d65-3eadd2033d22' },
    { title: "Portfolio Template #2", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2FphotographerPort.png?alt=media&token=2ee66db0-9289-474b-b316-a8463b5c5401' },
    
  ];

export const testimonialsData = [
    {name: "Riyaz Khan", position: "CTO, Tech Team", org: "Headsup Corporatoin", img: "https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/info%2Fimg3.png?alt=media&token=e513bb88-c293-438a-a365-520cd1dc6a3b", tstmnl: "\"Umar is a dedicated and innovative computer science student with a strong grasp of the MERN stack. Their passion for solving challenges and creating solutions is inspiring.\""},
    {name: "Suraj Kumar", position: "Manager, Tech Team", org: "Headsup Corporatoin", img: "https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/info%2Fimg2.png?alt=media&token=7567e004-8e57-4d37-9c3e-6ad4c85a7721", tstmnl: "\"Umar is a driven and creative computer science student. Their enthusiasm for tackling problems and developing innovative solutions is truly remarkable.\""}
]