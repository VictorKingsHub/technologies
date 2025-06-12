'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const partners = [
  { name: "Sun Dream Academy", logo: "/sunndream.jpg" },
  { name: "Golden ELites High School", logo: "/golden.jpg" },
  { name: "Pace Setters", logo: "/pace.jpg" },
  { name: "SpringField International School", logo: "/sp.png" },
  { name: "MunaChris Mirror Academy", logo: "/munachris.png" }
];

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Trusted Partners</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          We&apos;ve proudly worked with forward-thinking schools and institutions committed to digital transformation.
        </p>

        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover
          className="flex gap-12"
        >
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center mx-6">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={100}
                className="object-contain  hover:grayscale-0 transition duration-300 mx-9"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
