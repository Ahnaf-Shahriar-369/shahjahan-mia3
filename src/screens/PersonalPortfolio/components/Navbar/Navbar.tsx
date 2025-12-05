"use client"

import { useState, useEffect } from "react"
import { Twitter, Linkedin, Menu, X, Mail } from "lucide-react"
import { IoLogoWhatsapp } from "react-icons/io"

const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Dealerships", href: "#dealerships" },
    { label: "Others", href: "#others" },
    { label: "Contact", href: "#contact" },
]

const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: IoLogoWhatsapp, href: "https://wa.me/01324441230", label: "WhatsApp" },
    { icon: Mail, href: "mailto:brotherscorporationtangail@yahoo.com", label: "Email" },
]

interface NavbarProps {
    isVideoPlaying: boolean
    scrollY: number
}

export default function Navbar({ isVideoPlaying, scrollY }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState("#home")

    // Scroll spy: Update active link based on visible section
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
            threshold: 0,
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id")
                    if (id) {
                        setActiveLink(`#${id}`)
                    }
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        // Observe all sections
        const sections = navigationItems.map((item) => item.href.substring(1))
        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId)
            if (element) {
                observer.observe(element)
            }
        })

        return () => {
            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId)
                if (element) {
                    observer.unobserve(element)
                }
            })
        }
    }, [])

    const handleNavClick = (href: string) => {
        setActiveLink(href)
        setMobileMenuOpen(false)
    }

    // Determine if navbar is scrolled
    const isScrolled = scrollY > 50

    // Dynamic navbar height based on scroll
    const navbarHeight = isScrolled ? 60 : 70

    // Dynamic logo sizes based on scroll
    const mobileLogo = {
        width: isScrolled ? 90 : 111,
        height: isScrolled ? 56 : 69,
        scale: Math.max(0.65, 1 - scrollY / 500)
    }

    const desktopLogo = {
        width: isScrolled ? 130 : 160,
        height: isScrolled ? 97 : 120,
        scale: Math.max(0.6, 1 - scrollY / 700)
    }

    return (
        <header className={`
      w-full flex justify-center fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out
      ${isScrolled ? "py-2" : "py-4"}
      ${isVideoPlaying ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}
    `}>
            <div
                className={`
          w-full max-w-[1110px] rounded-full backdrop-blur-md
          flex items-center justify-between px-4 md:px-8 lg:px-[95px]
          transition-all duration-500 ease-out
          ${isScrolled
                        ? "bg-white/30 shadow-xl shadow-black/10 border border-white/40"
                        : "bg-white/20 shadow-sm hover:shadow-md border border-white/30"
                    }
        `}
                style={{ height: `${navbarHeight}px` }}
            >
                {/* Logo - Mobile */}
                <div className="flex lg:hidden items-center gap-3 cursor-pointer">
                    <img
                        src="/mia.png"
                        alt="Mia Logo"
                        width={mobileLogo.width}
                        height={mobileLogo.height}
                        className="rounded-full object-cover border-2 border-white/50 shadow-md"
                        style={{
                            transform: `scale(${mobileLogo.scale})`,
                            transformOrigin: 'center'
                        }}
                    />
                </div>

                {/* Logo - Desktop */}
                <div className="hidden lg:flex items-center gap-3 cursor-pointer">
                    <img
                        src="/mia.png"
                        alt="Mia Logo"
                        width={desktopLogo.width}
                        height={desktopLogo.height}
                        className="rounded-full object-cover border-2 border-white/60 shadow-lg"
                        style={{
                            transform: `scale(${desktopLogo.scale})`,
                            transformOrigin: 'center',
                            transition: 'transform 0.5s ease-out'
                        }}
                    />
                </div>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-[70px]">
                    {navigationItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={`[font-family:'IBM_Plex_Mono',Helvetica] font-normal text-sm tracking-[0.14px] leading-[normal] 
                  relative inline-block transition-all duration-300
                  ${activeLink === item.href ? "text-white font-medium border-b-2 border-white pb-1" : "text-white/80"}
                  hover:text-white
                  active:scale-95
                  hover:translate-y-[-2px]
                `}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Social Links - Desktop */}
                <div className="hidden lg:flex items-center gap-4 lg:ml-6">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon as any
                        return (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-white hover:text-white/80 transition-all duration-300 hover:scale-125 active:scale-95 group/icon relative"
                                style={{
                                    transitionDelay: `${index * 50}ms`,
                                }}
                            >
                                <Icon className="w-5 h-5 group-hover/icon:animate-bounce" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                    {social.label}
                                </div>
                            </a>
                        )
                    })}
                </div>

                {/* Mobile: Social Icons and Hamburger */}
                <div className="lg:hidden flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon as any
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="text-white hover:text-white/80 transition-all duration-300 hover:scale-125 active:scale-95 group/icon relative"
                                >
                                    <Icon className="w-4 h-4 group-hover/icon:animate-bounce" />
                                </a>
                            )
                        })}
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white hover:text-white/80 transition-all duration-300 active:scale-90 p-2 group/menu"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 transition-all duration-300 rotate-90 group-hover/menu:rotate-180" />
                        ) : (
                            <Menu className="w-6 h-6 transition-all duration-300 group-hover/menu:translate-x-1" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`lg:hidden absolute left-0 right-0 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden
          ${isScrolled
                        ? "top-[60px] bg-white/30 border-t border-white/40"
                        : "top-[70px] bg-white/20 border-t border-white/30"
                    }
          ${mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
            >
                <nav className="flex flex-col items-center py-4 gap-2">
                    {navigationItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={`[font-family:'IBM_Plex_Mono',Helvetica] font-normal text-sm tracking-[0.14px] leading-[normal]
                py-2 px-4 rounded-md transition-all duration-300
                ${activeLink === item.href ? "text-white font-medium bg-white/10 border-b-2 border-white" : "text-white/90"}
                hover:text-white hover:bg-white/10 hover:translate-x-2
                active:scale-95
              `}
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 50}ms forwards` : "none",
                                opacity: mobileMenuOpen ? 1 : 0,
                                transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="flex items-center gap-6 mt-4 pt-4 border-t border-[#d0d0d0] w-[80%] justify-center">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon as any
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="text-white hover:text-white/80 transition-all duration-300 hover:scale-125 active:scale-95 relative group/icon"
                                    style={{
                                        animationDelay: `${(navigationItems.length + index) * 50}ms`,
                                        animation: mobileMenuOpen
                                            ? `slideIn 0.3s ease-out ${(navigationItems.length + index) * 50}ms forwards`
                                            : "none",
                                        opacity: mobileMenuOpen ? 1 : 0,
                                        transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                                    }}
                                >
                                    <Icon className="w-12 h-6 group-hover/icon:animate-bounce" />
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                        {social.label}
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </nav>
            </div>
        </header>
    )
}
