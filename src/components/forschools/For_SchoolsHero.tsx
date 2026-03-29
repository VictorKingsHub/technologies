"use client"
// components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function ForSchoolsHero() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/p3.jpg"
          alt="Students working on robotics project"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-black/80"></div> 
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col items-start lg:items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Transform Your School with <span className="text-green-400">Coding, Robotics & Electronics</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-xl">
          Engage your students, boost school reputation, and prepare them for the future
          with hands-on technology education that inspires creativity and problem-solving.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button
            variant="default"
            size="lg"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 cursor-pointer"
            onClick={() => window.open("https://wa.me/2348167542553", "_blank")}
          >
            <FaWhatsapp size={20} /> Book a FREE Demo
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-gray-900 hover:bg-white hover:text-gray-900 cursor-pointer"
            onClick={() => window.location.href="/for_schools#programs"}
          >
            Learn More
          </Button>
        </div>

        {/* Optional trust line */}
        <p className="mt-6 text-sm text-gray-300">
          Trusted by schools in <span className="font-semibold">Owerri, Umuahia, Aba, Onitsha</span> and beyond.
        </p>
      </div>
    </section>
  );
}