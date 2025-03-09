// @flow strict
// import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
// import { FaCommentAlt } from 'react-icons/fa';
// import { SiCss3, SiHtml5, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
// import { FaReact } from 'react-icons/fa6';
import { Badge } from "@/app/components/UI/badge";
import { projectsData } from '../../../../utils/data/projects-data';




export function Tools({ tools }) {
  return (
    <>
      {tools.slice(0, 6).map((tool, index) => (
        <Badge
          key={index}  // إضافة key هنا
          id={`sticky-card-${index + 1}`}
          variant="outline"
          className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
            {tool.icon}  {/* تغيير الاسم من tools إلى tool */}
          </span>
          <span className="font-medium">{tool.name}</span>  {/* تغيير الاسم من tools إلى tool */}
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

        {/* <Image
          src={project.image}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        /> */}

      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          {/* <p>{timeConverter(blog.published_at)}</p> */}
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">

              <BsHeartFill />
              {/* <span>{blog.public_reactions_count}</span> */}
            </p>
            {/* {blog.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            } */}
          </div>
        </div>
        {/* <Link target='_blank' href={project.demo}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {project.name}
          </p>
          <div className="flex flex-wrap gap-3">
            <Tools tools={projectsData[0].tools} />
          </div>
        </Link> */}

        {/* <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${blog.reading_time_minutes} Min Read`}
        </p> */}
        {/* <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p> */}
        {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;