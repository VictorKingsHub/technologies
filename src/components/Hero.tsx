'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Empowering the Future Through <br className="hidden md:block" />
            Technology & Education
          </h1>

          <p className="text-lg text-muted-foreground font-bold">
            Developing Humans With Potentials To Reward The Future With Passion.
          </p>

          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Unleash the world&apos;s most powerful human building capacity, reward the future with profitable accolades to support start-ups, expertise and business building solutions.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link href="/contact">
              <Button size="lg" className="cursor-pointer">Get Started</Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className='cursor-pointer'>Explore Services</Button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/computer.jpg" 
            alt="Taughtlevel Hero"
            width={600}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;