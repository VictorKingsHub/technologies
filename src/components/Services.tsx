import { FaAngleRight } from "react-icons/fa6";

import {
  FaRobot,
  FaMobileAlt,
  FaLightbulb,
  FaCode,
  FaCogs,
  FaPaintBrush,
} from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
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
    icon: <FaCogs className="text-primary w-8 h-8" />,
    title: 'Software Development',
    description:
      'We build scalable software solutions tailored to the needs of businesses and educational systems.',
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

const Services = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">
          We offer practical, future-focused services and training designed to
          unlock human potential and empower institutions.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-lg text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link href="contact">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl right cursor-pointer">
              Get in Touch with Us <span className='text-white'><FaAngleRight /> </span> 
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
