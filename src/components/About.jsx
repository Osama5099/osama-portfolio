import React from "react";
import { FaCode, FaLightbulb, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";
import OsamaDP from "../assets/Osama_DP.png";
import { aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* Image + My Journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-full h-full object-cover"
              src={OsamaDP}
              alt="Osama"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <div className=" rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                My journey into software development began with a curiosity
                about how technology can solve real-world problems. During my
                B.Tech in Computer Science and Engineering, I built a strong
                foundation in Java, Object-Oriented Programming, Data
                Structures, and problem-solving. As I progressed, I developed a
                strong interest in full-stack development and gained hands-on
                experience with React, Java, Spring Boot, REST
                APIs,Microservices and MongoDB.
              </p>
              <p className="text-gray-300 mb-12">
                Through hands-on projects, including CitizenAssist AI,
                FitnessMicroservices .I have gained practical experience in
                designing and developing end-to-end applications, covering
                responsive frontend interfaces, backend services,
                authentication, API development, and database integration. I am
                continuously strengthening my skills through project-based
                learning and Data Structures & Algorithms practice, with the
                goal of contributing to scalable, reliable, and user-centric
                software solutions as a Full Stack Developer.
              </p>

              {/* Cards Now Inside My Journey */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
