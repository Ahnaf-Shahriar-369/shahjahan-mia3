"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle } from "lucide-react"
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
                                        className="group relative ml-8 cursor-pointer"
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-200 via-emerald-200 to-blue-200 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

                                        {/* Main card */}
                                        <div className="relative backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 sm:p-8 shadow-lg shadow-white/10 transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/20 bg-gradient-to-br from-white/5 to-white/0 hover:scale-105 active:scale-95">
                                            {/* Decorative corners */}
                                            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
                                            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>

                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center font-['Inter',sans-serif] drop-shadow-lg">
                                                My WhatsApp
                                            </h3>
                                            <p className="text-white/90 text-sm md:text-base leading-relaxed text-center mb-6 font-['Inter',sans-serif] font-medium drop-shadow-md">
                                                Contact me through WhatsApp to get high quality construction materials, in all over Tangail
                                            </p>

                                            <div className="flex items-center justify-center space-x-4 mb-4">
                                                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                                                    <MessageCircle className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-white/80 text-sm font-medium mb-1 font-['Inter',sans-serif]">Call or Message</p>
                                                    <p className="text-white text-xl md:text-2xl font-bold tracking-wide font-['Inter',sans-serif] drop-shadow-lg">
                                                        {whatsappNumber}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <span className="inline-block bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full group-hover:bg-white/20 transition-all duration-300 font-['Inter',sans-serif]">
                                                    Tap to open WhatsApp
                                                </span>
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
