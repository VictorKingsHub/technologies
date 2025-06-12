"use client";

import { Button } from '@/components/ui/button';

const PartnerCTASection = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Bring 21st Century Skills to Your School?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Let Taughtlevel Technologies empower your students and teachers with practical tech education. Join the growing list of schools building the future today.
        </p>
        <Button variant="secondary" size="lg">
          Contact Us to Get Started
        </Button>
      </div>
    </section>
  );
};

export default PartnerCTASection;
