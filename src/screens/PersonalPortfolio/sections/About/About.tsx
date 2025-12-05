"use client"

import { FaTrophy, FaBuilding, FaIndustry, FaHandsHelping } from 'react-icons/fa'

export default function About() {
  return (
    <div id="about" className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/tang2.png"
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>

        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-gray-200 rotate-45 animate-spin-very-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-gray-200 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Profile Section - Top */}
        <div className="flex flex-col items-center mb-16 sm:mb-20">
          {/* Profile Image */}
          <div className="relative group mb-8">
            {/* Outer glow rings */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse-slow"></div>
            <div className="absolute -inset-4 border-2 border-gray-300 rounded-full animate-spin-slow"></div>

            {/* Image container */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-gray-400/50 group-hover:scale-105 transition-all duration-500 bg-white">
              <img
                src="/bg.png"
                alt="Md. Shahjahan Miah"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gray-800"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gray-800"></div>
          </div>

          {/* Name and Title */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Md. Shahjahan Miah
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-400"></div>
              <p className="text-sm sm:text-base text-white/80 tracking-widest uppercase font-light">
                Visionary Entrepreneur
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* About Text Card */}
          <div className="group relative">
            {/* Subtle shadow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 sm:p-10 shadow-lg shadow-white/10 transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/20">
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-['Inter',sans-serif] drop-shadow-lg">
                <span className="w-1 h-8 bg-gradient-to-b from-white to-transparent"></span>
                About
              </h2>
              <p className="text-white text-base sm:text-lg leading-relaxed font-['Inter',sans-serif] font-medium drop-shadow-md">
                Md. Shahjahan Miah is a visionary Bangladeshi entrepreneur and community contributor, widely respected as one of the founders of Alhaj Abdul Khalek Nurania Madrasha - atimkhana and the Founder of Brother's Corporation, a well-recognized business house across Tangail. Through his leadership, Md. Shahjahan Miah has established himself as a pioneer in the building materials trade and a trusted partner in the region's development sector.
              </p>
            </div>
          </div>

          {/* Leadership Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 sm:p-10 shadow-lg shadow-white/10 transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/20 h-full">
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-['Inter',sans-serif] drop-shadow-lg">
                <span className="w-1 h-8 bg-gradient-to-b from-white to-transparent"></span>
                Founder & Leadership
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-base sm:text-lg font-['Inter',sans-serif] font-medium drop-shadow-md">
                    <span className="text-white font-bold drop-shadow-lg">Brother's Corporation</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-base sm:text-lg font-['Inter',sans-serif] font-medium drop-shadow-md">
                    Founded by Md. Shahjahan Miah, Brother's Corporation has grown into a household name in Tangail.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-base sm:text-lg font-['Inter',sans-serif] font-medium drop-shadow-md">
                    Best known for robust dealership operations in cement and steel, representing the most reputed brands in Bangladesh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats/Highlights Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            'Years of Excellence',
            'Business Operations',
            'Industries Served',
            'Community Impact',
          ].map((label, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 text-center shadow-lg shadow-white/10 transition-all duration-500 hover:border-white/50 hover:scale-105 hover:shadow-xl hover:shadow-white/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>
              <div className="relative flex justify-center mb-4">
                {index === 0 && <FaTrophy className="text-5xl sm:text-6xl text-white group-hover:scale-110 transition-transform duration-300" />}
                {index === 1 && <FaBuilding className="text-5xl sm:text-6xl text-white group-hover:scale-110 transition-transform duration-300" />}
                {index === 2 && <FaIndustry className="text-5xl sm:text-6xl text-white group-hover:scale-110 transition-transform duration-300" />}
                {index === 3 && <FaHandsHelping className="text-5xl sm:text-6xl text-white group-hover:scale-110 transition-transform duration-300" />}
              </div>
              <p className="relative text-xs sm:text-sm text-white/80 uppercase tracking-wider">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      {/* Custom animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes spin-very-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 40s linear infinite;
        }
      `}</style>
    </div>
  )
}
