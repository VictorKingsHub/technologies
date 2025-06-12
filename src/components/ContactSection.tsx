"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setResponse(
          "✅ Your message has been sent successfully. Please wait for a reply from our team shortly."
        );
        setSuccess(true);
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setResponse("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      setResponse("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Contact Us
        </h2>
        <p className="text-muted-foreground text-center mb-2 text-lg">
          Please, fill out the form below
        </p>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto text-lg">
          We’re always ready to hear from you — whether you&apos;re a school,
          parent, or tech enthusiast!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <p className="text-muted-foreground text-lg pb-5">
              Please, fill out the form below
              </p>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-xl shadow-sm space-y-4 text-lg"
            >
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="text-lg"
                required
              />
              <Input
                type="phone"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="text-lg"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="text-lg"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="text-lg"
                required
              />
              <Button
                type="submit"
                className="w-full text-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {response && (
                <p
                  className={`text-sm text-center mt-4 ${
                    success ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {response}
                </p>
              )}
            </form>
          </div>
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-1">Office Address</h4>
              <p className="text-muted-foreground text-lg">
                21 Mikes Street, Aba, Abia State, Nigeria
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">Phone Numbers</h4>
              <ul className="space-y-2 text-blue-600">
                <li>
                  <a href="tel:+2348167542553">+234 816 754 2553</a>
                </li>
                <li>
                  <a href="tel:+2348132119963">+234 813 211 9962</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
