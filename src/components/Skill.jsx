import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skill = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            id="skills"
            className="py-20 bg-dark-100"
        >
            <div className="container mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-4">
                    My <span className="text-purple">Skills</span>
                </h2>

                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Technologies and tools I use to build modern, scalable web applications
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                            className="bg-dark-300 rounded-2xl p-6 
                                       hover:-translate-y-2 
                                       transition duration-300 
                                       cursor-pointer"
                        >

                            <div className="flex items-center mb-4">
                                <skill.icon className="w-12 h-12 text-purple mr-5" />

                                <h3 className="text-xl font-semibold">
                                    {skill.title}
                                </h3>
                            </div>

                            <p className="text-gray-400 mb-5">
                                {skill.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {skill.tags.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </motion.section>
    )
}

export default Skill