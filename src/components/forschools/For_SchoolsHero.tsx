'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const ForSchoolsHero = () => {
  const router = useRouter();

  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
          Empowering Schools with 21st Century Tech Education
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          We collaborate with forward-thinking schools to deliver hands-on coding, robotics, and digital skills programs that prepare students for a tech-driven future.
        </p>
        <Button
          size="lg"
          className="text-lg cursor-pointer"
          onClick={() => router.push('/contact')}
        >
          Bring Us to Your School
        </Button>
      </div>
    </section>
  );
};

export default ForSchoolsHero;
