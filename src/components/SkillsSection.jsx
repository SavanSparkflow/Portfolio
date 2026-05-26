import React from 'react';
import { FadeIn } from './Shared';

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Redux Toolkit",
  "Framer Motion",
  "Vite",
  "Git",
  "GitHub",
  "Figma",
  "Responsive Design",
  "Performance Optimization"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#D7E2EA] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {skills.map((skill, i) => (
          <FadeIn key={i} delay={i * 0.05} y={20}>
            <div className="px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-[rgba(215,226,234,0.2)] bg-[rgba(215,226,234,0.03)] hover:bg-[rgba(215,226,234,0.1)] transition-colors duration-300 backdrop-blur-sm cursor-default">
              <span className="text-[#D7E2EA] font-medium text-[clamp(1rem,1.5vw,1.25rem)] uppercase tracking-wider">
                {skill}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>

    </section>
  );
};

export default SkillsSection;
