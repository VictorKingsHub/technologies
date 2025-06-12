'use client';

const MissionVisionSection = () => {
  return (
    <section className="py-20 bg-white" id="mission-vision">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          Our Mission & Vision
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mission */}
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              To equip individuals and institutions with transformative digital skills, educational tools,
              and cutting-edge technologies that foster innovation, creativity, and lifelong success.
            </p>
          </div>

          {/* Vision */}
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              To become Africa’s leading catalyst for tech-driven education and development —
              where every learner, teacher, and organization thrives in a digital-first world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
