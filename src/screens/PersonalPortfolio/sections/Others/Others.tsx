"use client"

import { IoLogoWhatsapp } from "react-icons/io"
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

    const whatsappNumber = "+8801324441230"
    const message = "Hello! I'm interested in your construction materials."

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
    }

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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-['Inter',sans-serif] drop-shadow-lg">
                        Others
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white font-['Inter',sans-serif] font-medium drop-shadow-md max-w-3xl mx-auto">
                        Discover our vision, impact, and how to connect with us
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="space-y-8 max-w-4xl mx-auto">
                    {/* Information Cards */}
                    {cardData.map((card, index) => (
                        <div key={index} className="transform transition-all duration-500 hover:scale-105">
                            <MilestoneCard title={card.title} descriptions={card.descriptions} />
                        </div>
                    ))}

                    {/* WhatsApp CTA */}
                    <div
                        onClick={handleWhatsAppClick}
                        className="group/whatsapp relative cursor-pointer max-w-2xl mx-auto"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 rounded-2xl blur opacity-40 group-hover/whatsapp:opacity-60 transition duration-500"></div>

                        <div className="relative backdrop-blur-sm border-2 border-white/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-500 hover:border-white/60 hover:shadow-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 hover:scale-105 active:scale-95">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <div className="flex-shrink-0">
                                    <div className="bg-white/30 p-5 rounded-full group-hover/whatsapp:bg-white/40 transition-all duration-300 group-hover/whatsapp:rotate-12">
                                        <IoLogoWhatsapp className="w-12 h-12 text-white" />
                                    </div>
                                </div>

                                <div className="text-center sm:text-left flex-1">
                                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-['Inter',sans-serif] drop-shadow-lg">
                                        Message Us on WhatsApp
                                    </h4>
                                    <p className="text-white/90 text-sm sm:text-base mb-3 font-['Inter',sans-serif] font-medium drop-shadow-md">
                                        Get instant quotes and answers to your construction material needs
                                    </p>
                                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 inline-block group-hover/whatsapp:bg-white/30 transition-all duration-300">
                                        <p className="text-white text-base sm:text-lg font-bold font-['Inter',sans-serif] drop-shadow-lg">
                                            +880 1324441230
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
