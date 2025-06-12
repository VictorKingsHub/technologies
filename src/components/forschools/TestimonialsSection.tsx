'use client';

import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Mrs. Adaeze N.',
    position: 'Principal, Bright Future Academy',
    quote:
      'Taughtlevel Technologies has transformed our school’s tech landscape. Our students now engage with coding and robotics like never before. Their team is truly passionate and professional.',
  },
  {
    name: 'Mr. Chinedu E.',
    position: 'Head Teacher, Sunrise Model School',
    quote:
      'We’ve seen remarkable improvement in student interest and creativity since we partnered with Taughtlevel. The robotics sessions are always a highlight!',
  },
  {
    name: 'Mrs. Gloria O.',
    position: 'Director, Starfield High School',
    quote:
      'Their team doesn’t just teach—they inspire. Our teachers and pupils love every session. We’re proud to be partners with Taughtlevel Technologies.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our Partner Schools Say
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
          We proudly collaborate with schools that are shaping the future through innovation and quality education.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <FaQuoteLeft className="text-primary text-2xl mb-4" />
              <p className="text-muted-foreground mb-4 text-base leading-relaxed">
               {testimonial.quote}
              </p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
