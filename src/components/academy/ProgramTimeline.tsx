import { FaCalendarAlt, FaClock, FaLaptop } from 'react-icons/fa'

const timeline = [
  {
    month: 'January',
    title: 'Computer & Web Basics',
    desc: 'Understanding computers, the internet, and how websites work.',
  },
  {
    month: 'February – March',
    title: 'HTML',
    desc: 'Learning website structure, text, images, and links.',
  },
  {
    month: 'March – May',
    title: 'CSS',
    desc: 'Styling websites, layouts, and responsive design.',
  },
  {
    month: 'June',
    title: 'JavaScript (Beginner)',
    desc: 'Adding simple interactivity to websites.',
  },
  {
    month: 'July',
    title: 'Real Projects',
    desc: 'Building complete websites from scratch.',
  },
  {
    month: 'August',
    title: 'Portfolio & Certification',
    desc: 'Project presentation, portfolio creation, and certification.',
  },
]

const ProgramTimeline = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Program Structure & Timeline
          </h2>
          <p className="text-gray-600 text-lg">
            The training runs from January to August 2025 and is structured
            to help students learn gradually and confidently.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {item.month}
              </span>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* SCHEDULE SUMMARY */}
        <div className="bg-white rounded-2xl shadow-md p-8 grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <FaCalendarAlt className="text-blue-600 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Duration</h4>
            <p className="text-gray-600">January – August 2025</p>
          </div>

          <div>
            <FaClock className="text-blue-600 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Class Schedule</h4>
            <p className="text-gray-600">2 classes per week (1–1.5 hrs)</p>
          </div>

          <div>
            <FaLaptop className="text-blue-600 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Mode of Learning</h4>
            <p className="text-gray-600">100% Online Live Classes</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProgramTimeline
