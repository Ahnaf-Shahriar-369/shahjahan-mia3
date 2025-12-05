"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const dealerships = [
    {
        title: "Heidelberg Materials Bangladesh",
        shortName: "Heidelberg",
        description: "A leading cement producer in Bangladesh, part of the global Heidelberg Materials group; makes OPC/PCC cement.",
        logo: "/SVG/heidelberg.svg",
        category: "Cement"
    },
    {
        title: "LafargeHolcim Cement",
        shortName: "LafargeHolcim",
        description: "Part of the Holcim group (formerly LafargeHolcim); produces high-quality cement for general and large projects, sold through nationwide dealer networks.",
        logo: "/SVG/LafargeHolcim.svg",
        category: "Cement"
    },
    {
        title: "Seven Rings Cement",
        shortName: "Seven Rings",
        description: "A popular Bangladeshi cement brand from Shun Shing Group; offers OPC/PCC grades used widely in real estate and infrastructure.",
        logo: "/SVG/sevenr-rings.svg",
        category: "Cement"
    },
    {
        title: "Madina Cement",
        shortName: "Madina",
        description: "Bangladesh-based cement brand supplying standard OPC/PCC cement targeted at residential and commercial construction.",
        logo: "/SVG/madina.svg",
        category: "Cement"
    },
    {
        title: "Seven Horse Cement",
        shortName: "Seven Horse",
        description: "Local cement brand focused on affordable, reliable Portland cement for everyday building needs.",
        logo: "/SVG/seven-horse.svg",
        category: "Cement"
    },
    {
        title: "BSRM Steel",
        shortName: "BSRM",
        description: "Bangladesh Steel Re-Rolling Mills—one of the country's largest steel manufacturers; best known for high-strength rebar and other construction steel products used in major projects.",
        logo: "/SVG/bsrm.svg",
        category: "Steel"
    },
]


const brandHierarchy = [
    {
        parent: "Heidelberg Materials Bangladesh PLC",
        child: "Scan Cement",
        childLogo: "/scan-cement.png",
        mergerYear: 2001
    },
    {
        parent: "Lafarge Holcim Bangladesh PLC",
        child: "Holcim",
        childLogo: "/holicm-cement.png",
        mergerYear: 2001
    },
    {
        parent: "Shun Shing Group",
        child: "Seven Ring",
        childLogo: "/three-ring.png",
        mergerYear: 2005
    },
    {
        parent: "Eastern Cement Industries Ltd (ECIL)",
        child: "Seven Horse Cement",
        childLogo: "/seven-horse.png",
        mergerYear: 2015
    },
    {
        parent: "Madina Cement Industries Ltd",
        child: "Three Ring Tiger Cement",
        childLogo: "/tiger-cement.png",
        mergerYear: 2022
    }
]


export default function Dealerships() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-advance carousel
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            handleNext()
        }, 5000)

        return () => clearInterval(interval)
    }, [currentIndex, isAutoPlaying])

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % dealerships.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + dealerships.length) % dealerships.length)
    }

    const handleDotClick = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    // Get 3 cards centered around current index
    const getVisibleCards = () => {
        const cards = []
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + dealerships.length) % dealerships.length
            cards.push({
                ...dealerships[index],
                position: i,
                index: index
            })
        }
        return cards
    }

    return (
        <div id="dealerships" className="isolate relative w-full min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/tang3.png"
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
                <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-sans drop-shadow-lg">
                        Our Dealerships
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white font-sans font-medium drop-shadow-md max-w-3xl mx-auto">
                        Partnering with industry-leading brands to provide top-notch building materials across Tangail
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Cards */}
                    <div className="relative h-[500px] sm:h-[450px] md:h-[400px] flex items-center justify-center">
                        {getVisibleCards().map((deal) => (
                            <div
                                key={deal.index}
                                className={`
                  absolute transition-all duration-700 ease-out
                  ${deal.position === 0 ? 'z-30 scale-100 opacity-100' : ''}
                  ${deal.position === -1 ? 'z-20 scale-90 opacity-60 -translate-x-[280px] sm:-translate-x-[320px] md:-translate-x-[380px]' : ''}
                  ${deal.position === 1 ? 'z-20 scale-90 opacity-60 translate-x-[280px] sm:translate-x-[320px] md:translate-x-[380px]' : ''}
                `}
                            >
                                {/* Card */}
                                <div className="group relative w-[280px] sm:w-[320px] md:w-[360px]">
                                    {/* Glow effect */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                                    {/* Main card */}
                                    <div className="relative backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 sm:p-8 shadow-lg shadow-white/10 transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/20 bg-gradient-to-br from-white/5 to-white/0">
                                        {/* Decorative corners */}
                                        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
                                        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>

                                        {/* Logo container */}
                                        <div className="flex justify-center mb-6">
                                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                                <img
                                                    src={deal.logo}
                                                    alt={deal.title}
                                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain relative z-10"
                                                />
                                            </div>
                                        </div>

                                        {/* Category badge */}
                                        <div className="flex justify-center mb-4">
                                            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-white/90 font-sans tracking-wider">
                                                {deal.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 font-sans drop-shadow-lg min-h-[4rem] flex items-center justify-center">
                                            {deal.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white text-sm sm:text-base leading-relaxed text-center font-sans font-medium drop-shadow-md line-clamp-4">
                                            {deal.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-white/20"
                        aria-label="Previous dealership"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-white/20"
                        aria-label="Next dealership"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 sm:gap-3 mt-12 sm:mt-16">
                    {dealerships.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`
                transition-all duration-300 rounded-full
                ${index === currentIndex
                                    ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-white shadow-lg shadow-white/50'
                                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/60'
                                }
              `}
                            aria-label={`Go to dealership ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Brand Hierarchy Section */}
                <div className="mt-8 sm:mt-12">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans drop-shadow-lg">
                            Brand Hierarchy
                        </h3>
                        <p className="text-white/80 font-sans">
                            Parent companies and their respective brands
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {brandHierarchy.map((item, index) => (
                            <div
                                key={index}
                                className="group relative backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 shadow-lg transition-all duration-300 hover:border-white/40 hover:shadow-xl bg-white/5"
                            >
                                {/* Parent */}
                                <div className="text-center">
                                    <div className="text-xs text-emerald-300 uppercase tracking-wider font-semibold mb-2">Parent Company</div>
                                    <div className="text-white font-bold text-lg drop-shadow-md">
                                        {item.parent}
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex justify-center my-4">
                                    <div className="text-white/60 text-2xl">↓</div>
                                </div>

                                {/* Child */}
                                <div className="text-center">
                                    <div className="text-xs text-blue-300 uppercase tracking-wider font-semibold mb-3">Brand</div>

                                    {/* Logo */}
                                    <div className="flex justify-center mb-3">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg p-2">
                                            <img
                                                src={item.childLogo}
                                                alt={item.child}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="text-white font-bold text-xl text-emerald-100 drop-shadow-md">
                                        {item.child}
                                    </div>
                                </div>

                                {/* Merger Year */}
                                <div className="text-center mt-4 pt-4 border-t border-white/10">
                                    <div className="text-xs text-purple-300 uppercase tracking-wider font-semibold mb-1">Merger Year</div>
                                    <div className="text-white/80 font-semibold">{item.mergerYear}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >

            {/* Bottom decorative line */}
            < div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" ></div >

            {/* Custom animations */}
            < style > {`
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
      `}</style >
        </div >
    )
}
