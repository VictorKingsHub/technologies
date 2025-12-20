import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaProjectDiagram,
  FaGlobe,
  FaUserTie,
} from 'react-icons/fa'

const WhatStudentsWillLearn = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Students Will Learn
          </h2>
          <p className="text-gray-600 text-lg">
            Students will be guided step-by-step to understand website development
            and build real projects from scratch.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
            <FaHtml5 className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">HTML</h3>
            <p className="text-gray-600">
              Learn how to structure web pages using text, images, and links.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
            <FaCss3Alt className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">CSS</h3>
            <p className="text-gray-600">
              Style websites with colors, layouts, and responsive design.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
            <FaJsSquare className="text-yellow-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              JavaScript (Beginner)
            </h3>
            <p className="text-gray-600">
              Add interactivity such as buttons, forms, and simple logic.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
            <FaProjectDiagram className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real Projects</h3>
            <p className="text-gray-600">
              Build real websites and practice what is taught in class.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
            <FaGlobe className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Website Hosting</h3>
            <p className="text-gray-600">
              Learn how to publish websites online for others to see.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
            <FaUserTie className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Portfolio</h3>
            <p className="text-gray-600">
              Create a simple portfolio showcasing completed projects.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhatStudentsWillLearn
