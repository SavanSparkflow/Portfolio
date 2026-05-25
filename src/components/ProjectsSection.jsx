import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn, LiveProjectButton } from './Shared';
import rareJewelsImg1 from '../assets/screenshot-1779694475852.png';
import rareJewelsImg2 from '../assets/screenshot-1779694492485.png';
import samruddhiImg1 from '../assets/https-samruddhinxt.in_department.png';
import samruddhiImg2 from '../assets/https-samruddhinxt.in-login.png';
import agroImg1 from '../assets/japexim.co.in_ (1).png';
import agroImg2 from '../assets/japexim.co.in_ (2).png';
import trackifyImg1 from '../assets/admin.trackify.sparkflows.in_admin (1).png';
import trackifyImg2 from '../assets/admin.trackify.sparkflows.in_admin.png';
import thumblifyImg1 from '../assets/screenshot-1779693832442.png';
import thumblifyImg2 from '../assets/screenshot-1779694017807.png';
import postifyImg1 from '../assets/screenshot-1779694143743.png';
import postifyImg2 from '../assets/screenshot-1779694153965.png';
import quickBlogImg1 from '../assets/screenshot-1779694186719.png';
import quickBlogImg2 from '../assets/screenshot-1779694198330.png';

const projectsData = [
  {
    num: "01",
    category: "Personal",
    name: "Thumblify",
    images: {
      col1_1: thumblifyImg1,
      col1_2: thumblifyImg2,
      col2: thumblifyImg1
    }
  },
  {
    num: "02",
    category: "Personal",
    name: "Postify AI",
    images: {
      col1_1: postifyImg1,
      col1_2: postifyImg2,
      col2: postifyImg1
    }
  },
  {
    num: "03",
    category: "Personal",
    name: "Quick Blog",
    images: {
      col1_1: quickBlogImg1,
      col1_2: quickBlogImg2,
      col2: quickBlogImg1
    }
  },
  {
    num: "04",
    category: "Client",
    name: "Samruddhi",
    images: {
      col1_1: samruddhiImg1,
      col1_2: samruddhiImg2,
      col2: samruddhiImg1
    }
  },
  {
    num: "05",
    category: "Client",
    name: "Rare Jewels",
    images: {
      col1_1: rareJewelsImg1,
      col1_2: rareJewelsImg2,
      col2: rareJewelsImg1
    }
  },
  {
    num: "06",
    category: "Client",
    name: "Agro",
    images: {
      col1_1: agroImg1,
      col1_2: agroImg2,
      col2: agroImg1
    }
  },
  {
    num: "07",
    category: "Client",
    name: "Trackify",
    images: {
      col1_1: trackifyImg1,
      col1_2: trackifyImg2,
      col2: trackifyImg1
    }
  }
];

const ProjectCard = ({ project, index, progress, targetScale }) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, [index * 0.33, 1], [1, targetScale]);
  
  return (
    <div 
      ref={containerRef}
      className="sticky h-[85vh] flex items-center justify-center w-full"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div 
        style={{ scale }}
        className="w-full h-full max-h-[85vh] max-w-7xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="text-[#D7E2EA] font-black text-[clamp(3rem,10vw,140px)] leading-none">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm sm:text-base font-medium mb-1">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.5rem,3vw,2.5rem)] leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom Row */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 sm:gap-6 min-h-0">
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6 h-full">
            <img 
              src={project.images.col1_1} 
              alt={`${project.name} 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img 
              src={project.images.col1_2} 
              alt={`${project.name} 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-1"
              style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-full md:w-[60%] h-full">
            <img 
              src={project.images.col2} 
              alt={`${project.name} 3`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ minHeight: '300px' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 -mt-10 sm:-mt-12 md:-mt-14"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
          Project
        </h2>
      </FadeIn>

      <div className="relative">
        {projectsData.map((project, i) => {
          const targetScale = 1 - (projectsData.length - 1 - i) * 0.03;
          return (
            <ProjectCard 
              key={i} 
              project={project} 
              index={i} 
              progress={scrollYProgress} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
      
      {/* Spacer to allow scrolling past the sticky cards */}
      <div className="h-[20vh]"></div>
    </section>
  );
};

export default ProjectsSection;
