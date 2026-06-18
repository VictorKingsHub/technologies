'use client'

import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    q: 'Do students need prior coding experience?',
    a: 'No, not a requirement.',
  },
  {
    q: 'Is this training suitable for students and non-students?',
    a: 'Yes.',
  },
  {
    q: 'How are the classes conducted?',
    a: 'All classes are conducted online',
  },
  {
    q: 'What days and time are the classes?',
    a: 'Classes hold Monday - Fridays.',
  },
  {
    q: 'Will my child receive a certificate?',
    a: 'Yes. Students who complete the training will receive a digital Certificate of Completion from Taughtlevel Technologies.',
  },
  {
    q: 'Can one use Mobile Phone for the training?',
    a: 'Yes. Mobile Phone, Tablet and Laptop can be used to join the training.',
  },
  {
    q: 'How long is the training?',
    a: 'The training runs from June to December 2026, covering a total of 7 months.',
  },
  {
    q: 'How do I enroll my child?',
    a: 'You can enroll by filling the registration form on this page or contacting us directly via WhatsApp.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Here are answers to some common questions parents and students ask
            about the training.
          </p>
        </div>

        {/* FAQ ITEMS */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-gray-800">
                  {item.q}
                </span>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ
