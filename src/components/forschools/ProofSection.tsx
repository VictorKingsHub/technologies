// components/ProofSection.tsx

import Image from "next/image";

const projects = [
  {
    title: "Smart Waste Bin Project",
    image: "/p1.png",
  },
  {
    title: "Students Building Circuits",
    image: "/p3.jpg",
  },
  {
    title: "Robotics Practical Session",
    image: "/p2.png",
  },
  {
    title: "Classroom Engagement",
    image: "/p4.jpg",
  },
];

export default function ProofSection() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Real Students. Real Projects. Real Impact.
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Our students don’t just learn — they build. Here are some of the practical projects and classroom experiences from our programs.
        </p>

        {/* Image Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={400}
                className="object-cover w-full h-64 transform group-hover:scale-105 transition duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-sm font-semibold text-white px-4 text-center">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Testimonial */}
        <div className="mt-16 max-w-3xl mx-auto">
          <p className="text-lg italic text-gray-300">
            “Students were highly engaged and excited throughout the session. This is the kind of practical learning every school needs.”
          </p>
          <p className="mt-4 font-semibold text-green-400">
            — School Administrator
          </p>
        </div>
      </div>
    </section>
  );
}