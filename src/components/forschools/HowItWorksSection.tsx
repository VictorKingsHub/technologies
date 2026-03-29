// components/HowItWorksSection.tsx

import { Card, CardContent } from "@/components/ui/card";
import { FaChalkboardTeacher, FaCogs, FaCalendarAlt, FaProjectDiagram } from "react-icons/fa";

const steps = [
  {
    icon: <FaChalkboardTeacher className="text-green-500 text-3xl" />,
    title: "Free Demo Session",
    description:
      "We visit your school to deliver a live, hands-on session so students and management can experience the program firsthand.",
  },
  {
    icon: <FaCogs className="text-green-500 text-3xl" />,
    title: "Program Setup",
    description:
      "We structure the program based on your school’s timetable, class size, and available resources.",
  },
  {
    icon: <FaCalendarAlt className="text-green-500 text-3xl" />,
    title: "Weekly Practical Classes",
    description:
      "Students participate in engaging, hands-on sessions designed to build their skills progressively.",
  },
  {
    icon: <FaProjectDiagram className="text-green-500 text-3xl" />,
    title: "Projects & Development",
    description:
      "Students apply their knowledge by building real-life projects, improving creativity and problem-solving skills.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Getting started is simple. We guide your school through every step to ensure a smooth and successful implementation.
        </p>

        {/* Steps */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative shadow-md hover:shadow-xl transition duration-300 border-none"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                
                {/* Step Number */}
                <div className="absolute -top-4 left-4 bg-green-500 text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  {index + 1}
                </div>

                <div className="mb-4">{step.icon}</div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-lg text-gray-700">
            Ready to get started? Let’s schedule your free demo session today.
          </p>
        </div>
      </div>
    </section>
  );
}