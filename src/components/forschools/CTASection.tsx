// components/CTASection.tsx

"use client";

import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="bg-green-600 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Transform Your School?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-lg text-green-100">
          Give your students the opportunity to learn, build, and innovate with
          practical Coding, Robotics, and Electronics education.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          
          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 flex items-center gap-3 cursor-pointer"
            onClick={() =>
              window.open("https://wa.me/2348167542553", "_blank")
            }
          >
            <FaWhatsapp /> Chat on WhatsApp
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-gray-900 hover:bg-white hover:text-green-600 flex items-center gap-3 cursor-pointer"
            onClick={() => window.open("tel:+2348167542553")}
          >
            <FaPhoneAlt /> Call Us
          </Button>
        </div>

        {/* Urgency / Trust Line */}
        <p className="mt-6 text-sm text-green-100">
          We are currently onboarding a limited number of schools this term.
        </p>
      </div>
    </section>
  );
}