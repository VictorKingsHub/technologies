'use client';

import Image from 'next/image';
import { FaCode, FaRobot, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';

const offerings = [
  {
    icon: <FaCode className="text-primary w-8 h-8" />,
    title: 'Coding Classes',
    description:
      'We introduce students to programming concepts using fun, age-appropriate tools that build logical thinking and problem-solving skills.',
  },
  {
    icon: <FaRobot className="text-primary w-8 h-8" />,
    title: 'Robotics & STEM Projects',
    description:
      'Students get hands-on experience assembling circuits, building simple robots, and engaging in tech challenges that spark creativity.',
  },
  {
    icon: <FaChalkboardTeacher className="text-primary w-8 h-8" />,
    title: 'Teacher Training',
    description:
      'We equip school staff with the skills and tools needed to integrate technology effectively into classrooms and instruction.',
  },
  {
    icon: <FaGraduationCap className="text-primary w-8 h-8" />,
    title: 'Tech Events & Competitions',
    description:
      'We organize tech fairs, inter-school coding contests, and exhibitions to showcase student creativity and promote collaboration.',
  },
];

const WhatWeOfferToSchools = () => {
  return (
    <section className="py-20 bg-white" id="what-offer-schools">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="flex-1">
          <Image
            src="/robo.jpeg"
            alt="What We Offer to Schools"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl object-cover shadow-md"
            priority
          />
        </div>

        {/* Right Offerings */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left">
            What We Offer to Schools
          </h2>
          <div className="space-y-8">
            {offerings.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferToSchools;
