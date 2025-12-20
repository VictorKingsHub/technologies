import {
  FaCheckCircle,
  FaCalendarAlt,
  FaLaptop,
  FaClock,
} from 'react-icons/fa'

const Pricing = () => {
  return (
    <section className="w-full bg-blue-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Training Fee
          </h2>
          <p className="text-blue-200 text-lg">
            A one-time, affordable fee that covers the complete website
            development training program.
          </p>
        </div>

        {/* PRICE */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-blue-300">
            One-Time Payment
          </p>
          <h3 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mt-4">
            ₦75,000
          </h3>
          <p className="text-blue-200 mt-4">
            Covers the full 8-month training (January – August 2025)
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {[
            '8 months of structured training',
            'Two live online classes every week',
            'HTML, CSS & JavaScript (Beginner)',
            'Practical website projects',
            'Portfolio development',
            'Certificate of completion',
          ].map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-400 mt-1" />
              <span className="text-blue-100 text-lg">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* INFO BAR */}
        <div className="bg-blue-800 rounded-2xl p-8 grid sm:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
          <div>
            <FaCalendarAlt className="text-yellow-400 text-3xl mx-auto mb-3" />
            <p className="font-semibold">Duration</p>
            <p className="text-blue-200">
              January – August 2025
            </p>
          </div>

          <div>
            <FaClock className="text-yellow-400 text-3xl mx-auto mb-3" />
            <p className="font-semibold">Schedule</p>
            <p className="text-blue-200">
              2 Classes per Week
            </p>
          </div>

          <div>
            <FaLaptop className="text-yellow-400 text-3xl mx-auto mb-3" />
            <p className="font-semibold">Mode</p>
            <p className="text-blue-200">
              100% Online Learning
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Pricing
