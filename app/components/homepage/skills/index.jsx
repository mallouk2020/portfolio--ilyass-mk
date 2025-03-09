"use client";


import React from "react";
import { Card, CardContent } from "@/app/components/UI/card";
import { Badge } from "@/app/components/UI/badge";
import IconCloudDemo from "./ui/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud , Monitor ,TabletSmartphone} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaMobileAlt,
  
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiHtml5,
  SiCss3,
  SiMicrosoftazure,
  SiFlutter,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation, MdDesignServices, MdFileDownload, MdLaunch, MdWeb } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import { FaAndroid, FaApple, FaFire } from "react-icons/fa6";




const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
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
      icon: TabletSmartphone,
      title: "Mobile App Development Skills",
      color: "text-blue-400",
      skills: [
        {
          name: "React Native",
          icon: <FaReact className="w-4 h-4 text-[#61dafb]" />,
        },
        // {
        //   name: "Swift (iOS Development)",
        //   icon: <FaApple className="w-4 h-4 text-[#FF6F00]" />,
        // },
        // {
        //   name: "Kotlin (Android Development)",
        //   icon: <FaAndroid className="w-4 h-4 text-[#3DDC84]" />,
        // },
        // {
        //   name: "Flutter",
        //   icon: <SiFlutter className="w-4 h-4 text-[#02569B]" />,
        // },
        // {
        //   name: "Firebase",
        //   icon: <FaFire className="w-4 h-4 text-[#FF5722]" />,
        // },
        {
          name: "Expo (React Native Framework)",
          icon: <FaReact className="w-4 h-4 text-[#285a94]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        // {
        //   name: "Python",
        //   icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        // },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        // {
        //   name: "REST APIs",
        //   icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        // },
        // {
        //   name: "GraphQL",
        //   icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
        // },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Wireframing",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "Prototyping",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "Azure", icon: <SiMicrosoftazure className="w-4 h-4 text-[#1900ff]" /> },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        {
          name: "Kubernetes",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#326CE5]" />,
        },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Jest", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        {
          name: "Webpack",
          icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" />,
        },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },
    // {
    //   icon: Paintbrush,
    //   title: "Mobile App Design Skills",
    //   color: "text-blue-400",
    //   skills: [
    //     {
    //       name: "UI/UX Design for Android & iOS",
    //       icon: <MdDesignServices className="w-4 h-4 text-[#FF4081]" />,
    //     },
    //     {
    //       name: "Responsive Layout Design",
    //       icon: <MdWeb className="w-4 h-4 text-[#00C853]" />,
    //     },
    //     {
    //       name: "Prototyping with Figma",
    //       icon: <MdLaunch className="w-4 h-4 text-[#7C4DFF]" />,
    //     },
    //     {
    //       name: "Wireframing & Mockups",
    //       icon: <MdFileDownload className="w-4 h-4 text-[#FF6D00]" />,
    //     },
    //   ],
    // },
    
    
    
  ];

  return (
    <main
    //       className="pt-15 lg:pt-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
    //  text-white min-h-screen"
    >
      <section className="container mx-auto px-4 py-11">



        {/* cloudicons */}


        {/* <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div> */}

        
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Skills
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
