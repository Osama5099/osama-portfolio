import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-r from-[#111111] via-[#1f1f1f] to-[#111111]"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="md:w-1/2">

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-gray-300 mb-3 tracking-wide"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="text-purple-500">Osama</span>
            </motion.h1>

            {/* Role - Typewriter Effect */}
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
              Full Stack Developer_
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl mb-8"
            >
              I build modern, responsive, and user-focused web applications
              using technologies like React, Java, Spring Boot, and databases.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-600 transition duration-300"
              >
                View My Work
                <FaArrowRight className="text-sm" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-purple-400 rounded-lg font-medium hover:bg-purple-500 hover:border-purple-500 transition duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/Osama5099"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-purple-400 text-2xl transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/osama-5731582a5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-purple-400 text-2xl transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              {/* Gradient Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-70"></div>

              {/* Image */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-purple-500 to-pink-500">
                <motion.img
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={assets.profileImg}
                  alt="Osama - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover object-top bg-[#1a1a1a]"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default Hero;