import { FaCertificate, FaCheckCircle } from 'react-icons/fa'

const outcomes = [
  'Understand What websites are and how they work',
  'Build structured web pages',
  'Design and style websites',
  'Add basic interactivity',
  'Project Completion and Presentation',
  'Portfolio designing',
]

const CertificateOutcomes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* CERTIFICATE PREVIEW */}
        <div className="bg-gray-50 rounded-3xl p-8 shadow-md text-center">
          <FaCertificate className="text-blue-600 text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">
            Certification on Completion
          </h3>
          <p className="text-gray-600">
            Issued by <strong>Taughtlevel Technologies</strong> after
            successful completion of the training.
          </p>

          {/* Optional image placeholder */}
          <div className="mt-6 bg-white rounded-xl border p-6 text-gray-400">
            Certificate Preview
          </div>
        </div>

        {/* OUTCOMES */}
        <div>
          <h3 className="text-3xl font-bold mb-6">
            Learning Outcomes
          </h3>

          <ul className="space-y-4">
            {outcomes.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default CertificateOutcomes
