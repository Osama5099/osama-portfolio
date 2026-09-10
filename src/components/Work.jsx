import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      id="experience"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Experience</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My learning and professional experience in software development
        </p>

        {/* Experience */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">

            {workData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                className="relative pl-10"
              >

                {/* Timeline Line */}
                <div className="absolute left-0 top-0 w-[2px] h-full bg-purple/40"></div>

                {/* Timeline Dot */}
                <div className="absolute left-[-7px] top-1 w-4 h-4 rounded-full bg-purple"></div>

                {/* Card */}
                <div className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300">

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">

                    <div>
                      <h3 className="text-xl font-semibold">
                        {data.role}
                      </h3>

                      <p className="text-purple mt-1">
                        {data.company}
                      </p>
                    </div>

                    <span className="w-fit px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm">
                      {data.duration}
                    </span>

                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {data.description}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default Work