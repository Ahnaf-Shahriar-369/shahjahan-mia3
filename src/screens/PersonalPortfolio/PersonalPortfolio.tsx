"use client"

import { useState, useEffect } from "react"
// import { CaseStudiesSection } from "./sections/CaseStudiesSection"
// import { ContactSection } from "./sections/ContactSection"
// import { HeroSection } from "./sections/HeroSection"
// import { PortfolioSection } from "./sections/PortfolioSection"
// import { TestimonialsSection } from "./sections/TestimonialsSection"
import { Twitter, Linkedin, Menu, X, Mail } from "lucide-react"
import { IoLogoWhatsapp } from "react-icons/io";
import Hero from "./sections/Home/Home";
import About from "./sections/About/About";


const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Others", href: "#others" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: IoLogoWhatsapp, href: "https://wa.me/01324441230", label: "WhatsApp" },
  { icon: Mail, href: "mailto:brotherscorporationtangail@yahoo.com", label: "Email" },
]

export const PersonalPortfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#home")

  // Preloader: show a full-screen animated loader on first visit
  const [isLoading, setIsLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)

  // Video playing state from Hero component
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Logo scroll effect
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const assets = ["/201.png", "/tang.mp4", "/tang.webm", "/mia.png", "/mia-s.png"]
    let loaded = 0
    const total = assets.length

    const update = () => setLoadProgress(Math.round((loaded / total) * 100))

    const loaders = assets.map((src) => {
      if (src.match(/\.(png|jpe?g|webp|svg|jfif)$/i)) {
        return new Promise<void>((res) => {
          const img = new Image()
          img.src = src
          img.onload = () => { loaded++; update(); res() }
          img.onerror = () => { loaded++; update(); res() }
        })
      }

      return new Promise<void>((res) => {
        try {
          const vid = document.createElement('video')
          vid.preload = 'auto'
          vid.src = src
          vid.onloadeddata = () => { loaded++; update(); res() }
          vid.onerror = () => { loaded++; update(); res() }
          vid.load()
        } catch (e) {
          loaded++; update(); res()
        }
      })
    })

    Promise.all(loaders).then(() => {
      setTimeout(() => setIsLoading(false), 450)
    })
  }, [])

  // Scroll listener for logo animation
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    setMobileMenuOpen(false)
  }

  return (
    <div className="bg-transparent w-full flex flex-col">
      <header className={`
        w-full flex justify-center fixed top-0 left-0 right-0 z-50 p-4
        transition-all duration-700 ease-out
        ${isVideoPlaying ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}
      `}>
        <div className="w-full max-w-[1110px] rounded-full bg-black/5 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow duration-300 h-[70px] flex items-center justify-between px-4 md:px-8 lg:px-[95px]">
          {/* Logo - Always visible */}
          <div className="flex lg:hidden items-center gap-3 group cursor-pointer">
            <div className="relative overflow-hidden rounded-full transition-all duration-300 group-hover:shadow-lg"
              style={{
                transform: `scale(${Math.max(0.75, 1 - scrollY / 500)})`,
                transformOrigin: 'center'
              }}
            >
              <img
                src="/mia.png"
                alt="Mia Logo"
                width={111}
                height={69}
                className="rounded-full object-cover transition-all duration-300 group-hover:scale-110 group-active:scale-95"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 group cursor-pointer"
            style={{
              transform: `scale(${Math.max(0.7, 1 - scrollY / 700)})`,
              transformOrigin: 'center',
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="relative overflow-hidden rounded-full transition-all duration-300 group-hover:shadow-lg">
              <img
                src="/mia.png"
                alt="Mia Logo"
                width={160}
                height={120}
                className="rounded-full object-cover transition-all duration-300 group-hover:scale-110 group-active:scale-95"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>

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

        <div
          className={`lg:hidden absolute top-[70px] left-0 right-0 bg-black/5 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden
            ${mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <nav className="flex flex-col items-center py-4 gap-2 ">
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
                    <Icon className="w-12 h-6  group-hover/icon:animate-bounce" />
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

      {isLoading && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 px-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse-slow" />
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/mia.png" alt="loader logo" className="w-20 h-20 rounded-full object-cover drop-shadow-xl transform transition-transform duration-700 animate-scaleUp" />
              </div>
              <div className="absolute -inset-3 rounded-full border border-white/20 animate-spin-slow" />
            </div>

            <div className="text-white text-sm tracking-wide">Loading — {loadProgress}%</div>

            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <div style={{ width: `${loadProgress}%` }} className="h-full bg-white/80 transition-all duration-300" />
            </div>
          </div>
        </div>
      )}

      <main className="w-full flex flex-col items-center pt-[70px]">
        <div className="-mt-[70px] w-full">
          <Hero onPlayStateChange={setIsVideoPlaying} />
        </div>

        {/* About Section */}
        <div className="w-full">
          <About />
        </div>

        {/* 
          Future sections below will auto-reveal with scroll animations
          Add the 'section-reveal' class to any section to enable fade-in-up animation
          Example: <div className="section-reveal">...</div>
        */}

        {/* <HeroSection className="section-reveal" />
        <div className="w-full md:w-[85%] lg:w-[70%] flex justify-center px-4 md:px-0 section-reveal">
          <CaseStudiesSection />
        </div>
        <TestimonialsSection className="section-reveal" />
        <div className="w-full md:w-[90%] lg:w-[87%] flex justify-center px-4 md:px-0 section-reveal">
          <PortfolioSection />
        </div>
        <ContactSection className="section-reveal" /> */}
      </main>

      <footer className="w-full bg-[#1a1a1a] h-[70px] flex items-center justify-center">
        <div className="[font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#9c9c9c] text-sm text-center tracking-[0.14px] leading-[normal]">
          Made with ❤
        </div>
      </footer>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseSlow {
          0% { transform: scale(1); opacity: 0.65; }
          50% { transform: scale(1.06); opacity: 0.95; }
          100% { transform: scale(1); opacity: 0.65; }
        }
        .animate-pulse-slow { animation: pulseSlow 1.6s ease-in-out infinite; }

        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spinSlow 8s linear infinite; }

        @keyframes scaleUp { 0% { transform: scale(.98); } 50% { transform: scale(1.03); } 100% { transform: scale(.98); } }
        .animate-scaleUp { animation: scaleUp 1.8s ease-in-out infinite; }

        /* Smooth scroll behavior globally */
        html {
          scroll-behavior: smooth;
        }

        /* Section reveal animation for scroll effects */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-reveal {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Stagger animation for multiple elements */
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
      `}</style>
    </div>
  )
}
