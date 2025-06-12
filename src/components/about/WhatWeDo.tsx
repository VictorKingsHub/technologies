'use client';

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What We Do</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-lg">
          At Taughtlevel Technologies, we combine education and innovation to equip individuals and organizations with future-ready skills and solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Coding & Robotics Training</h3>
            <p className="text-muted-foreground">
              We empower students and schools with hands-on coding and robotics training to spark creativity and critical thinking.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Website & Software Development</h3>
            <p className="text-muted-foreground">
              We build custom, high-performing websites and software that help businesses and institutions thrive online.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Tech Education & Mentorship</h3>
            <p className="text-muted-foreground">
              Through structured mentorship and digital literacy programs, we prepare the next generation of tech innovators.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">UI/UX & Graphic Design</h3>
            <p className="text-muted-foreground">
              We design intuitive user experiences and stunning visuals that communicate value and build brand trust.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">School Partnerships</h3>
            <p className="text-muted-foreground">
              We collaborate with schools to implement smart learning systems and foster innovation-driven environments.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">ICT Consultancy</h3>
            <p className="text-muted-foreground">
              We provide strategic ICT guidance for institutions looking to upgrade their technology systems or processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
