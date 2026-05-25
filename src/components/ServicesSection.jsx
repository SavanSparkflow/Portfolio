import React from 'react';
import { FadeIn } from './Shared';

const servicesData = [
  {
    num: "01",
    name: "Web Development",
    desc: "Building fast, responsive, and scalable single-page applications using modern frameworks like React and Vite."
  },
  {
    num: "02",
    name: "UI/UX Implementation",
    desc: "Translating pixel-perfect Figma designs into interactive, accessible, and dynamic user interfaces with precision."
  },
  {
    num: "03",
    name: "Performance Optimization",
    desc: "Improving application speed, core web vitals, and overall performance to deliver a seamless user experience."
  },
  {
    num: "04",
    name: "Interactive Animations",
    desc: "Crafting engaging micro-interactions and scroll-driven animations using Framer Motion and modern CSS techniques."
  },
  {
    num: "05",
    name: "Responsive Design",
    desc: "Ensuring applications look and function flawlessly across all devices, from mobile phones to ultra-wide desktop screens."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 -mt-10 sm:-mt-12 md:-mt-14 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {servicesData.map((service, i) => (
          <FadeIn key={i} delay={i * 0.1} y={30}>
            <div className={`flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 ${i !== servicesData.length - 1 ? 'border-b border-[rgba(12,12,12,0.15)]' : ''}`}>
              <div className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none md:w-[25%] lg:w-[30%] mb-4 md:mb-0">
                {service.num}
              </div>
              <div className="flex flex-col md:w-[75%] lg:w-[70%] text-[#0C0C0C]">
                <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-2 sm:mb-3 md:mb-4">
                  {service.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

    </section>
  );
};

export default ServicesSection;
