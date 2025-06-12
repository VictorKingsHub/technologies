'use client';

import { FaCode, FaRobot, FaPaintBrush, FaMobileAlt, FaLightbulb } from 'react-icons/fa';

const detailedServices = [
  {
    icon: <FaCode className="text-primary w-8 h-8" />,
    title: 'Website & Web App Development',
    description:
      'We build responsive, high-performance websites and web applications tailored to your business goals. From landing pages to portals, we craft seamless digital experiences.',
  },
  {
    icon: <FaRobot className="text-primary w-8 h-8" />,
    title: 'Coding & Robotics for Schools',
    description:
      'Our hands-on curriculum introduces students to real-world tech skills, including programming logic, robotics, and STEM activities that ignite innovation early.',
  },
  {
    icon: <FaPaintBrush className="text-primary w-8 h-8" />,
    title: 'UI/UX & Graphics Design',
    description:
      'We design modern, intuitive interfaces and engaging graphics that enhance usability and visual appeal across all your digital products.',
  },
  {
    icon: <FaMobileAlt className="text-primary w-8 h-8" />,
    title: 'Mobile App Development',
    description:
      'We craft mobile applications that are fast, intuitive, and built to engage users — from native Android apps to cross-platform solutions.',
  },
  {
    icon: <FaLightbulb className="text-primary w-8 h-8" />,
    title: 'Tech Empowerment Training',
    description:
      'We equip individuals and teams with in-demand digital skills through workshops, bootcamps, and mentorships that inspire growth and innovation.',
  },
];

const DetailedServiceHighlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Detailed Service Highlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServiceHighlights;
