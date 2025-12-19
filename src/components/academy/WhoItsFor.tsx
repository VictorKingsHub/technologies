import { FaUserGraduate, FaLaptop, FaLightbulb, FaSchool } from 'react-icons/fa'

const WhoItsFor = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Who This Training Is For
          </h2>
          <p className="text-blue-600 font-bold text-lg">
            Master The New School Curriculum
          </p>
          <p className="text-gray-600 text-lg">
            This program is carefully designed to support young learners who want
            to begin their journey into technology.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <FaSchool className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Secondary School Students
            </h3>
            <p className="text-gray-600">
              Designed for JSS2, JSS3, SS1, SS2 and SS3 students.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <FaUserGraduate className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Beginners Welcome
            </h3>
            <p className="text-gray-600">
              No prior coding or technical experience is required.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <FaLightbulb className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Curious & Creative Minds
            </h3>
            <p className="text-gray-600">
              Perfect for students who enjoy learning and solving problems.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <FaLaptop className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Laptop Access Required
            </h3>
            <p className="text-gray-600">
              A laptop is recommended to fully participate in the training.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhoItsFor
