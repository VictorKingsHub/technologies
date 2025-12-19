'use client'

import Image from 'next/image'
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br flex flex-col md:flex-row from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-5 md:py-20 grid md:grid-cols-2 gap-5 md:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3 md:mb-6">
            Online Web Development Training for
            <span className="text-yellow-400"> Secondary School Students</span>
          </h1>

          <p className="text-lg text-blue-100 mb-4 md:mb-8">
            Learn HTML, CSS & JavaScript and build real websites from
            <strong> January-August 2025</strong>. No coding experience required.
          </p>

          {/* HIGHLIGHTS */}
          <ul className="space-y-3 mb-5 md:mb-8">
            {[
              'Beginner Friendly Learning',
              '100% Online Live Classes',
              'Build Real Projects',
              'Certificate Included',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#register"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-xl text-center transition"
            >
              Enroll Now
            </a>

            <a
              href="https://wa.me/2348167542553"
              target="_blank"
              className="border border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition"
            >
              <FaWhatsapp />
              Talk to Us
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE / VISUAL */}
        <div className=" md:block">
          <Image
            width ={500}
            height = {500}
            src="/web-training-hero.png"
            alt="Students learning web development"
            // className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
