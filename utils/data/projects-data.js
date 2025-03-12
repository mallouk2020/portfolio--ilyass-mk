
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa6';
import Image from 'next/image';


export  function Ico (){
   return( <Image
    src={"/projects/sanity.ico"} 
    alt={""} 
    width={24}  // تحديد عرض الصورة
    height={24}  // تحديد ارتفاع الصورة
  />)
}

export const projectsData = [
    {
        id: 1,
        name: "full-stack e-commerce site",
        description: "A complete e-commerce platform built with Next.js, TypeScript, and Sanity for CMS. Features include a responsive UI, dynamic product management, and seamless user authentication.",
        image: "/projects/e-commerce.png",
        role: 'Backend Developer',
        code: '',
        link: 'https://github.com/mallouk2020/ecommerce',
        tools: [
            { name: "React", 
             icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />},
            {
                name: "Next.js",
                icon: <SiNextdotjs className="w-4 h-4 text-white" />,
            },
            {
                name: "TypeScript",
                icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
            },
            {
                name: "HTML5",
                icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" />,
            },
            {
                name: "CSS",
                icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
            },
            {
                name: "sanity",
                icon: <Ico/>,
            },
        ],
    },

    {
        id: 2,
        name: "Storage management system",
        description: "A web-based inventory management system designed for efficient stock tracking and control, utilizing JavaScript, HTML5, and CSS.",
        image: "/projects/gestion-de-stock.png",
        role: 'Full Stack Developer',
        code: '',
        link: 'https://github.com/mallouk2020/cruds',
        tools: [
            // { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
            // {
            //     name: "Next.js",
            //     icon: <SiNextdotjs className="w-4 h-4 text-white" />,
            // },
            {
                name: "javaScript",
                icon: <SiJavascript className="w-4 h-4 text-[#3178C6]" />,
            },
            // {
            //     name: "Tailwind CSS",
            //     icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
            // },
            {
                name: "HTML5",
                icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" />,
            },
            {
                name: "CSS",
                icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
            },
        ],
    },
    {
        id: 3,
        name: "shopping cart",
        description: "A modern shopping cart application leveraging React, Next.js, and TypeScript, featuring a seamless UI and dynamic cart management.",
        image: "/projects/shopping-cart.png",
        code: '',
        role: 'Full Stack Developer',
        link: 'https://github.com/mallouk2020/shopping-cart',
        tools: [
            { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
            {
                name: "Next.js",
                icon: <SiNextdotjs className="w-4 h-4 text-white" />,
            },
            {
                name: "TypeScript",
                icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
            },
            {
                name: "HTML5",
                icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" />,
            },
            // {
            //     name: "CSS",
            //     icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
            // },
        ],
    },
    {
        id: 4,
        name: "prayer timer",
        description: "A web app that provides accurate prayer times and notifications, built with React, TypeScript, and Tailwind CSS for a clean and responsive UI.",
        image: "/projects/prayertimer.png",
        code: '',
        link: 'https://github.com/mallouk2020/prayertime',
        role: 'prayer timer',
        tools: [
            { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
            // {
            //     name: "Next.js",
            //     icon: <SiNextdotjs className="w-4 h-4 text-white" />,
            // },
            {
                name: "TypeScript",
                icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
            },
            {
                name: "HTML5",
                icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" />,
            },
            {
                name: "CSS",
                icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
            },
        ],
    },
    {
        id: 5,
        name: "social media application",
        description: "A WhatsApp clone developed using React Native and TypeScript, featuring real-time messaging and a smooth user experience.",
        image: "/projects/whatssapp.png",
        code: '',
        link: 'https://github.com/mallouk2020/whatsappclone',
        role: 'Full Stack Developer',
        tools: [
            { name: "React native", icon: <FaReact className="w-4 h-4 text-[#522cad]" /> },
            // {
            //     name: "Next.js",
            //     icon: <SiNextdotjs className="w-4 h-4 text-white" />,
            // },
            {
                name: "TypeScript",
                icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
            },
            {
                name: "HTML5",
                icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" />,
            },
            {
                name: "CSS",
                icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
            },
        ],
    },
    {
        id: 6,
        name: "movie app",
        description: "A movie streaming application built with React, offering a modern UI, movie search functionality, and smooth navigation.",
        image: "/projects/movie.png",
        code: '',
        link: 'https://github.com/mallouk2020/movie-app',
        role: 'movie-app',
        tools: [
            { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
            {
                name: "Next.js",
                icon: <SiNextdotjs className="w-4 h-4 text-white" />,
            },
            {
                name: "TypeScript",
                icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
            },
            {
                name: "redux",
                icon: <SiRedux className="w-4 h-4 text-[#38B2AC]" />,
            },
            {
                name: "HTML5",
                icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" />,
            },
            {
                name: "CSS",
                icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
            },
        ],
    }
];




// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     link: '',
// },