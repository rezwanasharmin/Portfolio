import React from 'react'
import agency from '../assets/agency.png'
import ecom from "../assets/ecom.png"
import coffee from "../assets/coffee.png"
import finsweet from "../assets/finsweet.png"
import restro from "../assets/restro.png"
import toury from "../assets/toury.png"

const Project = () => {
  return (
    <>
          <section id="projects" className="section-padding px-6 bg-black bg-opacity-20">
        <div class="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
                <h2 className="text-5xl font-bold mt-4 mb-6">Selected Projects</h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Showcase of my recent work and creative solutions for diverse clients.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="glass-effect rounded-3xl overflow-hidden hover-lift cursor-pointer group">
                    <div className="h-64 bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                        <span className="text-6xl font-bold opacity-50 group-hover:opacity-100 transition-opacity"><img src={ecom} alt="" /></span>
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs px-3 py-1 bg-purple-600 bg-opacity-30 rounded-full">React</span>
                            <span className="text-xs px-3 py-1 bg-purple-600 bg-opacity-30 rounded-full">Next.js</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">E-Commerce Platform</h3>
                        <p className="text-gray-400 mb-4">A full-featured e-commerce solution with cart functionality, payment integration, and admin dashboard.</p>
                        <a href="#" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">View Project →</a>
                    </div>
                </div>

                <div className="glass-effect rounded-3xl overflow-hidden hover-lift cursor-pointer group">
                    <div className="h-64 bg-linear-to-br from-pink-600 to-purple-600 flex items-center justify-center">
                        <span className="text-6xl font-bold opacity-50 group-hover:opacity-100 transition-opacity"><img src={coffee} alt="" /></span>
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs px-3 py-1 bg-pink-600 bg-opacity-30 rounded-full">WordPress</span>
                            <span className="text-xs px-3 py-1 bg-pink-600 bg-opacity-30 rounded-full">PHP</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Corporate Website</h3>
                        <p className="text-gray-400 mb-4">Custom WordPress theme for a multinational corporation with multilingual support and CMS integration.</p>
                        <a href="#" className="text-pink-400 font-semibold hover:text-pink-300 transition-colors">View Project →</a>
                    </div>
                </div>

                <div className="glass-effect rounded-3xl overflow-hidden hover-lift cursor-pointer group">
                    <div className="h-64 bg-linear-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
                        <span className="text-6xl font-bold opacity-50 group-hover:opacity-100 transition-opacity"><img src={agency} alt="" /></span>
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs px-3 py-1 bg-blue-600 bg-opacity-30 rounded-full">React</span>
                            <span className="text-xs px-3 py-1 bg-blue-600 bg-opacity-30 rounded-full">Redux</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Task Management App</h3>
                        <p className="text-gray-400 mb-4">Real-time collaborative task management application with drag-and-drop functionality and team features.</p>
                        <a href="#" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">View Project →</a>
                    </div>
                </div>

                <div className="glass-effect rounded-3xl overflow-hidden hover-lift cursor-pointer group">
                    <div className="h-64 bg-linear-to-br from-green-600 to-teal-600 flex items-center justify-center">
                        <span className="text-6xl font-bold opacity-50 group-hover:opacity-100 transition-opacity"><img src={finsweet} alt="" /></span>
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs px-3 py-1 bg-green-600 bg-opacity-30 rounded-full">HTML</span>
                            <span className="text-xs px-3 py-1 bg-green-600 bg-opacity-30 rounded-full">Tailwind</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Portfolio Website</h3>
                        <p className="text-gray-400 mb-4">Modern portfolio website for a creative agency with smooth animations and interactive elements.</p>
                        <a href="#" className="text-green-400 font-semibold hover:text-green-300 transition-colors">View Project →</a>
                    </div>
                </div>

                <div className="glass-effect rounded-3xl overflow-hidden hover-lift cursor-pointer group">
                    <div className="h-64 bg-linear-to-br from-orange-600 to-red-600 flex items-center justify-center">
                        <span className="text-6xl font-bold opacity-50 group-hover:opacity-100 transition-opacity"><img src={restro} alt="" /></span>
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs px-3 py-1 bg-orange-600 bg-opacity-30 rounded-full">Next.js</span>
                            <span className="text-xs px-3 py-1 bg-orange-600 bg-opacity-30 rounded-full">API</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Blog Platform</h3>
                        <p className="text-gray-400 mb-4">SEO-optimized blog platform with server-side rendering, markdown support, and dynamic routing.</p>
                        <a href="#" className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">View Project →</a>
                    </div>
                </div>

                <div className="glass-effect rounded-3xl overflow-hidden hover-lift cursor-pointer group">
                    <div className="h-64 bg-linear-to-br from-yellow-600 to-orange-600 flex items-center justify-center">
                        <span className="text-6xl font-bold opacity-50 group-hover:opacity-100 transition-opacity"><img src={toury} alt="" /></span>
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs px-3 py-1 bg-yellow-600 bg-opacity-30 rounded-full">React</span>
                            <span className="text-xs px-3 py-1 bg-yellow-600 bg-opacity-30 rounded-full">Bootstrap</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Dashboard Analytics</h3>
                        <p className="text-gray-400 mb-4">Data visualization dashboard with real-time charts, reports, and comprehensive analytics tools.</p>
                        <a href="#" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">View Project →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Project
