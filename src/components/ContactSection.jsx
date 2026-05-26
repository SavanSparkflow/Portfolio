import React from 'react';
import { FadeIn } from './Shared';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-30 -mt-10 sm:-mt-12 md:-mt-14 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
      
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
          Contact
        </h2>
      </FadeIn>

      <div className="max-w-5xl w-full flex flex-col gap-12 sm:gap-16 md:gap-20">
        
        <FadeIn delay={0.1} y={30} className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left border-b border-[rgba(12,12,12,0.15)] pb-12 sm:pb-16">
          <h3 className="text-[#0C0C0C]/60 uppercase tracking-widest text-lg sm:text-xl font-bold mb-4 md:mb-0 md:w-1/3">
            Email
          </h3>
          <a href="mailto:asavant151@gmail.com" className="text-[#0C0C0C] font-black text-[clamp(1.5rem,4vw,3.5rem)] hover:opacity-70 transition-opacity duration-300 break-all md:w-2/3 md:text-right">
            asavant151@gmail.com
          </a>
        </FadeIn>

        <FadeIn delay={0.2} y={30} className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left border-b border-[rgba(12,12,12,0.15)] pb-12 sm:pb-16">
          <h3 className="text-[#0C0C0C]/60 uppercase tracking-widest text-lg sm:text-xl font-bold mb-4 md:mb-0 md:w-1/3">
            Phone
          </h3>
          <a href="tel:9737531475" className="text-[#0C0C0C] font-black text-[clamp(1.5rem,4vw,3.5rem)] hover:opacity-70 transition-opacity duration-300 md:w-2/3 md:text-right">
            +91 97375 31475
          </a>
        </FadeIn>

        <FadeIn delay={0.3} y={30} className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left">
          <h3 className="text-[#0C0C0C]/60 uppercase tracking-widest text-lg sm:text-xl font-bold mb-4 md:mb-0 md:w-1/3">
            Location
          </h3>
          <p className="text-[#0C0C0C] font-black text-[clamp(1.5rem,4vw,3.5rem)] md:w-2/3 md:text-right">
            Surat, Gujarat, India
          </p>
        </FadeIn>
      </div>

    </section>
  );
};

export default ContactSection;
