"use client"

import { useEffect, useRef, useState } from "react"
import { IoLogoWhatsapp } from "react-icons/io"
import MilestoneCard from "./MilestoneCard"

export default function Others() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scrollY, setScrollY] = useState(0)

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
        {
            title: "Contact Me",
            descriptions: [],
            isWhatsApp: true,
        },
    ]

    const whatsappNumber = "+8801324441230"
    const message = "Hello! I'm interested in your construction materials."

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const getCardTransform = (index: number) => {
        if (!containerRef.current) return {}

        const containerTop = containerRef.current.offsetTop
        const cardHeight = 300
        const triggerPoint = containerTop + index * cardHeight

        const scrollProgress = Math.max(0, scrollY - triggerPoint)
        const stackingDistance = (cardData.length - 1 - index) * cardHeight
        const moveAmount = Math.min(scrollProgress * 1.5, stackingDistance)

        if (scrollProgress > 0) {
            return {
                transform: `translateY(-${moveAmount}px)`,
                zIndex: cardData.length + index,
                position: "relative" as const,
            }
        }

        return {
            transform: "translateY(0px)",
            zIndex: index,
            position: "relative" as const,
        }
    }

    const getTimelineProgress = () => {
        if (!containerRef.current) return { lineHeight: 0, activeCards: 0 }

        const containerTop = containerRef.current.offsetTop
        const cardHeight = 300
        const totalHeight = cardData.length * cardHeight

        const currentCardIndex = Math.max(0, Math.floor((scrollY - containerTop) / cardHeight))
        const activeCards = Math.min(cardData.length, currentCardIndex + 1)

        const scrollInContainer = Math.max(0, scrollY - containerTop)
        const lineHeight = Math.min(totalHeight, scrollInContainer + cardHeight)

        return { lineHeight, activeCards }
    }

    const { lineHeight, activeCards } = getTimelineProgress()

    return (
        <div id="others" className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden" ref={containerRef}>
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/tang4.png"
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
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

                {/* Timeline Container */}
                <div className="relative pl-6 sm:pl-8 md:pl-10 lg:pl-12">
                    {/* Timeline line */}
                    <div
                        className="absolute left-2 sm:left-3 md:left-4 lg:left-5 top-0 w-[2px] bg-gradient-to-b from-white via-white to-white/50 z-0 pointer-events-none transition-all duration-100 ease-out"
                        style={{
                            height: `${lineHeight}px`,
                        }}
                        aria-hidden="true"
                    />

                    {/* Timeline circles */}
                    {cardData.map((_, index) => {
                        const isActive = index < activeCards
                        const cardScrollProgress = Math.max(0, scrollY - (containerRef.current?.offsetTop || 0) - index * 300)
                        const circleScale = isActive ? Math.min(1, 0.5 + (cardScrollProgress / 300) * 0.5) : 0.5

                        return (
                            <div
                                key={`circle-${index}`}
                                className="absolute left-0 sm:left-1 md:left-2 lg:left-3 h-3 w-3 sm:h-4 sm:w-4 rounded-full ring-2 ring-white z-10 transition-all duration-100 ease-out"
                                style={{
                                    top: `${index * 300 + 16}px`,
                                    backgroundColor: isActive ? "#10b981" : "#6b7280",
                                    opacity: isActive ? 1 : 0.3,
                                    transform: `scale(${circleScale})`,
                                }}
                                aria-hidden="true"
                            />
                        )
                    })}

                    {/* Cards */}
                    <div className="space-y-6 md:space-y-8">
                        {cardData.map((card, index) => (
                            <div key={index} style={getCardTransform(index)} className="transition-all duration-100 ease-out">
                                {card.isWhatsApp ? (
                                    <div
                                        onClick={handleWhatsAppClick}
                                        className="group/whatsapp relative ml-8 cursor-pointer"
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 rounded-2xl blur opacity-40 group-hover/whatsapp:opacity-60 transition duration-500"></div>

                                        {/* Main card */}
                                        <div className="relative backdrop-blur-sm border-2 border-white/40 rounded-2xl p-8 sm:p-10 shadow-xl transition-all duration-500 hover:border-white/60 hover:shadow-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 hover:scale-105 active:scale-95">
                                            <div className="text-center">
                                                <div className="flex justify-center mb-6">
                                                    <div className="bg-white/30 p-6 rounded-full group-hover/whatsapp:bg-white/40 transition-all duration-300 group-hover/whatsapp:rotate-12">
                                                        <IoLogoWhatsapp className="w-16 h-16 text-white" />
                                                    </div>
                                                </div>

                                                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Inter',sans-serif] drop-shadow-lg">
                                                    Message Us on WhatsApp
                                                </h4>

                                                <p className="text-white/90 text-base sm:text-lg mb-6 font-['Inter',sans-serif] font-medium drop-shadow-md">
                                                    Get instant quotes and answers to your construction material needs
                                                </p>

                                                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 inline-block group-hover/whatsapp:bg-white/30 transition-all duration-300">
                                                    <p className="text-white text-xl font-bold font-['Inter',sans-serif] drop-shadow-lg">
                                                        +880 1324441230
                                                    </p>
                                                </div>

                                                <div className="mt-6">
                                                    <span className="inline-block bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full group-hover/whatsapp:bg-white/20 transition-all duration-300 font-['Inter',sans-serif]">
                                                        Click to start chat →
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <MilestoneCard title={card.title} descriptions={card.descriptions} />
                                )}
                            </div>
                        ))}
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
