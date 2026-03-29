import { Card, CardContent } from "@/components/ui/card";
import {
  FaUserGraduate,
  FaSchool,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaUserGraduate className="text-green-500 text-3xl" />,
    title: "Improved Student Engagement",
    description:
      "Students become more active and interested when learning is practical and hands-on.",
  },
  {
    icon: <FaSchool className="text-green-500 text-3xl" />,
    title: "Stronger School Reputation",
    description:
      "Position your school as a modern, forward-thinking institution that embraces innovation.",
  },
  {
    icon: <FaChartLine className="text-green-500 text-3xl" />,
    title: "Increased Enrollment",
    description:
      "Attract more parents looking for schools that offer advanced technology education.",
  },
  {
    icon: <FaLightbulb className="text-green-500 text-3xl" />,
    title: "Real-World Skills Development",
    description:
      "Students gain problem-solving, creativity, and technical skills they can apply in real life.",
  },
];

export default function SchoolBenefitsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Your School Gains
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Partnering with Taughtlevel Technologies gives your school a strong advantage in delivering modern, practical education.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-xl transition duration-300 border-none"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}