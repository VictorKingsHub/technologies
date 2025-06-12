'use client';

import { FaCheckCircle, FaUsers, FaLaptopCode, FaLightbulb } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaLaptopCode className="text-primary w-8 h-8" />,
    title: 'Future-Ready Students',
    description:
      'Equip your students with digital skills that are in high demand, preparing them for future careers and innovation.',
  },
  {
    icon: <FaUsers className="text-primary w-8 h-8" />,
    title: 'Enhanced School Reputation',
    description:
      'Stand out as a forward-thinking institution embracing 21st-century education and technology leadership.',
  },
  {
    icon: <FaLightbulb className="text-primary w-8 h-8" />,
    title: 'Innovative Learning Environment',
    description:
      'Inspire curiosity and creativity by integrating tech into daily learning through engaging classes and projects.',
  },
  {
    icon: <FaCheckCircle className="text-primary w-8 h-8" />,
    title: 'Professional Support',
    description:
      'Access expert instructors, curriculum resources, and ongoing support to ensure successful program implementation.',
  },
];

const SchoolBenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Benefits to Your School
        </h2>
        <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-12">
          Partnering with Taughtlevel Technologies brings direct value to your students, teachers, and school community.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolBenefitsSection;
