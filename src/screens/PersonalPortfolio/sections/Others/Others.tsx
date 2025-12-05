"use client"

import MilestoneCard from "./MilestoneCard"

export default function Others() {
    const cardData = [
        {
            title: "Vision & Mission",
            descriptions: [
                "Vision: To strengthen the foundation of progress in Tangail through reliable supply of world-class building materials.",
                "Mission: To provide quality products and trustworthy services that enable sustainable infrastructure growth, while maintaining integrity and long-term customer relationships.",
            ],
        },
        {
            title: "Contributions & Impact",
            descriptions: [
                "Entrepreneurship: Created employment opportunities and developed a strong supply chain network in Tangail.",
                "Community Building: Founded local initiatives that foster collaboration and support among businesses and residents.",
            ],
        },
        {
            title: "Recognition",
            descriptions: [
                "Partnerships: Built long-term collaborations with globally reputed cement and steel brands, ensuring access to top-quality construction materials in Tangail.",
                "Widely respected as a trusted business leader in Tangail. Known for his integrity, reliability, and commitment to community growth.",
            ],
        },
    ]

    return (
        <div id="others" className="isolate relative w-full min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden bg-gray-900">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/tang4.png"
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-sans drop-shadow-lg">
                        Others
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white font-sans font-medium drop-shadow-md max-w-3xl mx-auto">
                        Discover our vision, impact, and legacy
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="space-y-8 max-w-4xl mx-auto">
                    {cardData.map((card, index) => (
                        <div key={index} className="transform transition-all duration-500 hover:scale-105">
                            <MilestoneCard title={card.title} descriptions={card.descriptions} />
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
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    )
}
