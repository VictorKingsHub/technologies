'use client';

import { useKeenSlider } from 'keen-slider/react';
import { useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
  {
    name: "Mrs. Johnson Chika",
    role: "School Director, Sun Dream Academy",
    message: "Taughtlevel Technologies transformed our students' mindset toward technology. Their Robotics and Coding classes are a hit!",
  },
  {
    name: "Mr. Daniel Ekene",
    role: "ICT Coordinator, Greenlight School",
    message: "Their instructors are professional, patient, and really know how to engage students. We highly recommend Taughtlevel.",
  },
  {
    name: "Grace Udo",
    role: "Parent",
    message: "My son now talks about programming confidently. I’m impressed by the hands-on approach and the excitement he brings home.",
  },
  {
    name: "Victor Kings",
    role: "CEO, Taughtlevel Technologies",
    message: "We exist to inspire transformation in young minds, and this is just the beginning.",
  },
  {
    name: "Mrs. Bisi Adigun",
    role: "Principal, Future Builders School",
    message: "They brought STEM to life in our school. Our students now look forward to tech class every week.",
  },
  {
    name: "Samuel Nwachukwu",
    role: "Parent",
    message: "We noticed a big change in our daughter’s confidence after joining the coding club. Taughtlevel made it fun and real.",
  },
];

const Testimonials = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.5, spacing: 16 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
    created: (instance) => {
      timerRef.current = setInterval(() => {
        instance.next();
      }, 5000);
    },
    destroyed: () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    },
  });

  return (
    <section className="py-20 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What People Are Saying</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Hear from school leaders, parents, and clients who have experienced the Taughtlevel impact.
        </p>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-white p-6 rounded-2xl shadow-md transition-all duration-300"
            >
              <FaQuoteLeft className="text-primary w-6 h-6 mb-4" />
              <p className="text-muted-foreground mb-4 italic">{testimonial.message}</p>
              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
