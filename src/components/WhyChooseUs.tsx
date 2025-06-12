'use client';

import Image from 'next/image';
import { FaSchool, FaLaptopCode, FaChalkboardTeacher, FaStar } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaSchool className="text-primary w-8 h-8" />,
    title: 'Trusted by Leading Schools',
    description:
      'We partner with top-tier schools like Sun Dream Academy and Bright Future Academy to deliver proven results.',
  },
  {
    icon: <FaLaptopCode className="text-primary w-8 h-8" />,
    title: 'Cutting-Edge Curriculum',
    description:
      'Our curriculum is continually updated with the latest industry tools and methodologies to keep learners ahead.',
  },
  {
    icon: <FaChalkboardTeacher className="text-primary w-8 h-8" />,
    title: 'Expert Instructors',
    description:
      'Each session is led by professionals with real-world experience and a passion for teaching.',
  },
  {
    icon: <FaStar className="text-primary w-8 h-8" />,
    title: 'Proven Outcomes',
    description:
      'Over 90% of our students excel in STEM projects, showcasing the impact of our programs.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="flex-1">
          <Image
            src="/smart-home.jpg"  // Replace with your image path
            alt="Why Choose Taughtlevel Technologies"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl object-cover shadow-md"
            priority
          />
        </div>

        {/* Right Benefits */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Taughtlevel Technologies
          </h2>
          <div className="space-y-8">
            {benefits.map((item, index) => (
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

export default WhyChooseUs;
