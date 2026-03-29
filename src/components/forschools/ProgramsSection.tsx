// components/ProgramsSection.tsx

import { Card, CardContent } from "@/components/ui/card";
import { FaCode, FaRobot, FaMicrochip, FaProjectDiagram } from "react-icons/fa";

const programs = [
  {
    icon: <FaCode className="text-green-500 text-3xl" />,
    title: "Coding",
    description:
      "Students learn programming fundamentals, logical thinking, and problem-solving using beginner-friendly tools and languages.",
  },
  {
    icon: <FaRobot className="text-green-500 text-3xl" />,
    title: "Robotics & Automation",
    description:
      "Students build and control smart systems, learning how machines interact with real-world environments.",
  },
  {
    icon: <FaMicrochip className="text-green-500 text-3xl" />,
    title: "Practical Electronics",
    description:
      "Hands-on experience with circuits, sensors, and components to understand how electronic systems work.",
  },
  {
    icon: <FaProjectDiagram className="text-green-500 text-3xl" />,
    title: "Project-Based Learning",
    description:
      "Students apply their knowledge by building real-life projects such as smart bins, alarms, and automated systems.",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Programs
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We offer a structured and practical curriculum designed to equip students
          with real-world technology skills.
        </p>

        {/* Program Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-xl transition duration-300 border-none"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
          <p className="text-gray-700 text-lg">
            All programs are delivered through hands-on sessions that make learning
            engaging and impactful.
          </p>
        </div>
      </div>
    </section>
  );
}