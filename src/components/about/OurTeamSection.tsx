'use client';

import Image from 'next/image';

const teamMembers = [
  {
    name: 'Victor Eze',
    role: 'Managing Partner',
    image: '/vic.png',
    description: 'Visionary leader with a passion for education, innovation, and tech empowerment.',
  },
  { // Corrected: Removed the extra comma that caused an empty element
    name: 'Chukwu Blessing',
    role: 'Administrator',
    image: '/chi.png',
    description: 'Passionate about transforming education through practical learning.',
  },
  {
    name: 'Ada Johnson',
    role: 'Lead Software Engineer',
    image: '/woman.png',
    description: 'Expert in modern web development and building scalable digital products.',
  },
  {
    name: 'Philip Ejem',
    role: 'UI/UX Designer',
    image: '/ejem.png',
    description: 'Designs intuitive and delightful user experiences across platforms.',
  }
];

const OurTeamSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="our-team">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet Our Team</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-lg">
          A dedicated team of thinkers, creators, and educators building the future of learning and technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            // Ensure 'member' is not undefined before rendering
            member && (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
