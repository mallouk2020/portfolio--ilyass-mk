
import { SiCss3, SiHtml5, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
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
        name: 'full-stack e-commerce site',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        // tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        image: "/projects/e-commerce.png",
        role: 'Backend Developer',
        code: '',
        demo: 'www.googlw.com',
        tools: [
            { name: "React", icon:<Ico/>},
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
        ],
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        // tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        image: "/projects/gestion-de-stock.png",
        role: 'Full Stack Developer',
        code: '',
        demo: '',
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
            {
                name: "CSS",
                icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
            },
        ],
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        // tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        image: "/projects/shopping-cart.png",
        code: '',
        role: 'Full Stack Developer',
        demo: '',
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
            {
                name: "CSS",
                icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
            },
        ],
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        // tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        image: "/projects/prayertimer.png",
        code: '',
        demo: '',
        role: 'Full Stack Developer',
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
            {
                name: "CSS",
                icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
            },
        ],
    },
    {
        id: 5,
        name: 'social media app',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        // tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        image: "/projects/whatssapp.png",
        code: '',
        demo: '',
        role: 'Full Stack Developer',
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
            {
                name: "CSS",
                icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
            },
        ],
    },
    {
        id: 6,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        // tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        image: "/projects/e-commerce.png",
        code: '',
        demo: '',
        role: 'Full Stack Developer',
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
//     demo: '',
// },