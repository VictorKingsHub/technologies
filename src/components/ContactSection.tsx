'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'; // Import icons

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setResponse(
          '✅ Your message has been sent successfully. Our team will get back to you shortly.'
        );
        setSuccess(true);
        setForm({ name: '', phone: '', email: '', message: '' }); // Clear form on success
      } else {
        setResponse('❌ Failed to send message. Please try again.');
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      setResponse('❌ Something went wrong. Please try again.');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Applied a subtle background gradient for a softer look
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get in Touch with SEANEVERUNDRY
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            We&apos;re always ready to hear from you — whether you&apos;re a school,
            parent, or tech enthusiast!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> {/* Uses a grid for two columns on larger screens */}
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200"> {/* Enhanced shadow and border */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6 text-lg"> {/* Increased spacing */}
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="text-lg p-3 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-md" 
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number (e.g., +234 816 754 2553)"
                value={form.phone}
                onChange={handleChange}
                className="text-lg p-3 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-md"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="text-lg p-3 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-md"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6} // Increased rows for more message space
                value={form.message}
                onChange={handleChange}
                className="text-lg p-3 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-md resize-y" // Added resize-y
                required
              />
              <Button
                type="submit"
                className="w-full text-lg py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-colors duration-300" // Enhanced button styling
                disabled={loading}
              >
                {loading ? 'Sending Message...' : 'Send Message'}
              </Button>

              {response && (
                <p
                  className={`text-center mt-4 text-base font-medium ${ // Adjusted font size and weight
                    success ? 'text-green-700' : 'text-red-700' // Stronger success/error colors
                  }`}
                >
                  {response}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-center"> {/* Consistent styling with form */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Contact Details
            </h3>
            <div className="space-y-8"> {/* Increased spacing between info blocks */}
              <div className="flex items-start"> {/* Aligns icon and text */}
                <FaMapMarkerAlt className="text-green-600 text-3xl mr-4 flex-shrink-0 mt-1" /> {/* Icon with brand color */}
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900">Office Address</h4>
                  <p className="text-gray-700 text-lg">
                    No.2 Christ The King Road, Abayi, Aba, Abia State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhoneAlt className="text-green-600 text-3xl mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900">Phone Numbers</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="tel:+2348167542553" className="text-green-600 hover:text-green-800 transition-colors duration-200 text-lg flex items-center">
                        +234 816 754 2553
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/2348132119962" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition-colors duration-200 text-lg flex items-center">
                        <FaWhatsapp className="mr-2" /> +234 813 211 9962
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-green-600 text-3xl mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900">Email Address</h4>
                  <p className="text-gray-700 text-lg">
                    <a href="mailto:kingvic2553@gmail.com" className="text-green-600 hover:text-green-800 transition-colors duration-200">
                       seaneverdrynatural@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;