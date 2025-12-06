"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const dealerships = [
    {
        title: "Heidelberg Materials Bangladesh",
        shortName: "Heidelberg",
        description: "A leading cement producer in Bangladesh, part of the global Heidelberg Materials group; makes OPC/PCC cement.",
        logo: "/SVG/heidelberg.svg",
        category: "Cement",
        subBrands: [
            { name: "Scan Cement", logo: "/scan-cement.png" }
        ]
    },
    {
        title: "LafargeHolcim Cement",
        shortName: "LafargeHolcim",
        description: "Part of the Holcim group (formerly LafargeHolcim); produces high-quality cement for general and large projects, sold through nationwide dealer networks.",
        logo: "/SVG/LafargeHolcim.svg",
        category: "Cement",
        subBrands: [
            { name: "Holcim", logo: "/holicm-cement.png" }
        ]
    },
    {
        title: "Seven Rings Cement",
        shortName: "Seven Rings",
        description: "A popular Bangladeshi cement brand from Shun Shing Group; offers OPC/PCC grades used widely in real estate and infrastructure.",
        logo: "/SVG/sevenr-rings.svg",
        category: "Cement",
        subBrands: [
            { name: "Seven Ring", logo: "/three-ring.png" }
        ]
    },
    {
        title: "Madina Cement",
        shortName: "Madina",
        description: "Bangladesh-based cement brand supplying standard OPC/PCC cement targeted at residential and commercial construction.",
        logo: "/SVG/madina.svg",
        category: "Cement",
        subBrands: [
            { name: "Tiger Cement", logo: "/tiger-cement.png" }
        ]
    },
    {
        title: "Seven Horse Cement",
        shortName: "Seven Horse",
        description: "Local cement brand focused on affordable, reliable Portland cement for everyday building needs.",
        logo: "/SVG/seven-horse.svg",
        category: "Cement",
        subBrands: [
            { name: "Seven Horse", logo: "/seven-horse.png" }
        ]
    },
    {
        title: "BSRM Steel",
        shortName: "BSRM",
        description: "Bangladesh Steel Re-Rolling Mills—one of the country's largest steel manufacturers; best known for high-strength rebar and other construction steel products used in major projects.",
        logo: "/SVG/bsrm.svg",
        category: "Steel",
        subBrands: []
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

// Cement categories data
const cementCategories = [
    {
        name: "MPC",
        fullName: "Scan Multi Purpose Cement (MPC)",
        description: "High quality and smart cement produced using latest advanced technology. Strength class 42.5 N, providing higher long age strength.",
        brands: [
            { name: "Scan Cement", logo: "/scan-cement.png" }
        ],
        packageImage: "/scan-multipurpose.png",
        features: ["Prevents thermal cracks", "Sulphate resistant", "Environment friendly"],
        color: "blue"
    },
    {
        name: "PCC Max",
        fullName: "Scan PCC Max 52.5 N",
        description: "Bangladesh's first, strongest, and only Portland Composite Cement formulated with a 52.5 MPa strength. 25% stronger than conventional PCC.",
        brands: [
            { name: "Scan Cement", logo: "/scan-cement.png" }
        ],
        packageImage: "/scan-pcc-max.png",
        features: ["Strongest PCC (52.5 N)", "20 MPa in 2 days", "BOPP Bag Protection"],
        color: "emerald"
    },
    {
        name: "OPC",
        fullName: "Scan Ordinary Portland Cement (OPC)",
        description: "Produced by grinding clinker with a small amount of gypsum. Ideal for construction projects where fast setting is required.",
        brands: [
            { name: "Scan Cement", logo: "/scan-cement.png" }
        ],
        packageImage: "/scan-60mpa.png",
        features: ["Quick setting", "52.5 N strength", "95-100% Clinker"],
        color: "emerald"
    },
    {
        name: "evoBUILD",
        fullName: "Scan evoBuild 42.5 N",
        description: "Bangladesh's first and only Green Cement ensuring 50% carbon reduction. A responsible and powerful choice for modern constructions.",
        brands: [
            { name: "Scan Cement", logo: "/scan-cement.png" }
        ],
        packageImage: "/scan-evobuild.png",
        features: ["Green Cement", "50% carbon reduction", "Low heat of hydration"],
        color: "emerald"
    }
]

// Cement Categories Carousel Component
function CementCategoriesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-advance carousel
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cementCategories.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [currentIndex, isAutoPlaying])

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % cementCategories.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + cementCategories.length) % cementCategories.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const currentCategory = cementCategories[currentIndex]
    const colorClasses = {
        emerald: "from-emerald-300 via-emerald-200 to-emerald-100",
        blue: "from-blue-300 via-blue-200 to-blue-100",
        purple: "from-purple-300 via-purple-200 to-purple-100",
        pink: "from-pink-300 via-pink-200 to-pink-100",
        orange: "from-orange-300 via-orange-200 to-orange-100"
    }

    return (
        <div className="mt-16 sm:mt-20 px-4 sm:px-0">
            <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans drop-shadow-lg">
                    Scan Cement Categories
                </h3>
                <p className="text-white/80 font-sans">Explore our comprehensive range of high-performance cements</p>
            </div>

            <div className="relative w-full max-w-4xl mx-auto">
                {/* Carousel Card */}
                <div className="group relative">
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${colorClasses[currentCategory.color as keyof typeof colorClasses]} rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500`}></div>

                    {/* Main card */}
                    <div className="relative backdrop-blur-sm border-2 border-white/30 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-white/20 transition-all duration-500 hover:border-white/40 bg-gradient-to-br from-white/10 to-white/5">
                        {/* Decorative corners */}
                        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/40"></div>
                        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/40"></div>

                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                            {/* Left: Package Image - Small and Long */}
                            <div className="flex-shrink-0">
                                <div className="relative w-[100px] sm:w-[120px] aspect-[3/4] bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl p-3 shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                                    <img
                                        src={currentCategory.packageImage}
                                        alt={currentCategory.name}
                                        className="w-full h-full object-contain relative z-10 drop-shadow-md"
                                    />
                                </div>
                            </div>

                            {/* Middle & Right: Content */}
                            <div className="flex-1 w-full space-y-4">
                                {/* Header */}
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className={`px-3 py-1 bg-gradient-to-r ${colorClasses[currentCategory.color as keyof typeof colorClasses]} rounded-full text-[10px] font-bold text-gray-800 uppercase tracking-wider shadow-md`}>
                                            {currentCategory.name}
                                        </span>
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-1.5 font-sans drop-shadow-lg">
                                        {currentCategory.fullName}
                                    </h4>
                                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-2">
                                        {currentCategory.description}
                                    </p>
                                </div>

                                {/* Features & Brands Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Features */}
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-3">
                                        <h5 className="text-[10px] text-blue-300 uppercase tracking-wider font-semibold mb-2">Key Features</h5>
                                        <ul className="space-y-1.5">
                                            {currentCategory.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-1.5">
                                                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${colorClasses[currentCategory.color as keyof typeof colorClasses]} rounded-full mt-1 flex-shrink-0`}></div>
                                                    <span className="text-white/90 text-xs">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Available Brands */}
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-3">
                                        <h5 className="text-[10px] text-emerald-300 uppercase tracking-wider font-semibold mb-2">Available Brands</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {currentCategory.brands.map((brand, idx) => (
                                                <div key={idx} className="flex flex-col items-center gap-1">
                                                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md p-1.5 transition-transform hover:scale-110">
                                                        <img
                                                            src={brand.logo}
                                                            alt={brand.name}
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                    <span className="text-[10px] text-white/80 font-medium">{brand.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons - Adjusted for Mobile */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 sm:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-110 active:scale-95 shadow-lg -ml-3 sm:ml-0"
                    aria-label="Previous category"
                >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-0 sm:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-110 active:scale-95 shadow-lg -mr-3 sm:mr-0"
                    aria-label="Next category"
                >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                    {cementCategories.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentIndex(index)
                                setIsAutoPlaying(false)
                                setTimeout(() => setIsAutoPlaying(true), 10000)
                            }}
                            className={`
                                transition-all duration-300 rounded-full
                                ${index === currentIndex
                                    ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-white shadow-lg shadow-white/50'
                                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/60'
                                }
                            `}
                            aria-label={`Go to ${cementCategories[index].name}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}


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
                    <div className="relative h-[600px] sm:h-[550px] md:h-[500px] flex items-center justify-center">
                        {getVisibleCards().map((deal) => (
                            <div
                                key={deal.index}
                                className={`
                  absolute transition-all duration-700 ease-out
                  ${deal.position === 0 ? 'z-30 scale-100 opacity-100' : ''}
                  ${deal.position === -1 ? 'z-20 scale-90 opacity-60 -translate-x-[320px] sm:-translate-x-[360px] md:-translate-x-[440px]' : ''}
                  ${deal.position === 1 ? 'z-20 scale-90 opacity-60 translate-x-[320px] sm:translate-x-[360px] md:translate-x-[440px]' : ''}
                `}
                            >
                                {/* Card */}
                                <div className="group relative w-[320px] sm:w-[360px] md:w-[420px]">
                                    {/* Glow effect */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                                    {/* Main card */}
                                    <div className="relative backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 sm:p-8 shadow-lg shadow-white/10 transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/20 bg-gradient-to-br from-white/5 to-white/0">
                                        {/* Decorative corners */}
                                        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
                                        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>

                                        {/* Logo container */}
                                        <div className="flex justify-center mb-6">
                                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                                <img
                                                    src={deal.logo}
                                                    alt={deal.title}
                                                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain relative z-10"
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
                                        <p className="text-white text-sm sm:text-base leading-relaxed text-center font-sans font-medium drop-shadow-md line-clamp-3 mb-6">
                                            {deal.description}
                                        </p>

                                        {/* Sub-brands */}
                                        {deal.subBrands && deal.subBrands.length > 0 && (
                                            <div className="mt-6 pt-6 border-t border-white/10">
                                                <div className="text-center mb-3">
                                                    <span className="text-xs text-emerald-300 uppercase tracking-wider font-semibold">Sub-Brands</span>
                                                </div>
                                                <div className="flex justify-center gap-3 flex-wrap">
                                                    {deal.subBrands.map((subBrand: any, idx: number) => (
                                                        <div key={idx} className="flex flex-col items-center gap-2">
                                                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md p-2">
                                                                <img
                                                                    src={subBrand.logo}
                                                                    alt={subBrand.name}
                                                                    className="w-full h-full object-contain"
                                                                />
                                                            </div>
                                                            <span className="text-xs text-white/80 font-medium">{subBrand.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
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

                {/* Cement Categories Carousel */}
                <CementCategoriesCarousel />

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
