import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const subject = `Portfolio Contact from ${name}`;

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    window.location.href = `mailto:YOUR_EMAIL@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate?
          <br />
          Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple focus:ring-1 focus:ring-purple transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple focus:ring-1 focus:ring-purple transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none resize-none focus:border-purple focus:ring-1 focus:ring-purple transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">

            {/* Location */}
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Location
                </h3>

                <p className="text-gray-400">
                  Kanpur, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="text-pink-500 text-2xl mr-4">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Email
                </h3>

                <a
                  href="mailto:osama708084@gmail.com"
                  className="text-gray-400 hover:text-purple transition"
                >
                  osama708084@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="text-blue-400 text-2xl mr-4">
                <FaPhone />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phone
                </h3>

                <a
                  href="tel:+917080842393"
                  className="text-gray-400 hover:text-purple transition"
                >
                  +91 70808 42393
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">
                Follow Me
              </h3>

              <div className="flex space-x-4">

                {/* GitHub */}
                <a
                  href="https://github.com/Osama5099"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-gray-300 hover:bg-purple hover:text-white transition-colors"
                >
                  <FaGithub />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/osama-5731582a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-gray-300 hover:bg-purple hover:text-white transition-colors"
                >
                  <FaLinkedin />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;