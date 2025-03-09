// @flow strict
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { Badge } from "@/app/components/UI/badge";
// import { projectsData } from '../../../../utils/data/projects-data';




export function Tools({ tools }) {
  return (
    <>
      {tools?.map((tool, index) => (
        <Badge
          key={index}  // إضافة key هنا
          id={`sticky-card-${index + 1}`}
          variant="outline"
          className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
            {tool?.icon}  {/* تغيير الاسم من tools إلى tool */}
          </span>
          <span className="font-medium">{tool?.name}</span>  {/* تغيير الاسم من tools إلى tool */}
        </Badge>
      ))}
    </>
  );
}






function BlogCard({ project }) {

 

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">

        <Image
          src={project?.image}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />

      </div>

      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <div className="flex items-center gap-3">
          
          </div>
        </div>

        <Link target='_blank' href={"#"}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {project?.name}
          </p>
          <div className="flex flex-wrap gap-3">
            <Tools tools={project?.tools} />
          </div>
        </Link>

      
      </div>


    </div>
  );
};

export default BlogCard;