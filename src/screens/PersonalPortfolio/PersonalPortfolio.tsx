"use client"

import { useState, useEffect } from "react"
// Import animations in your main app or index file instead
// import { CaseStudiesSection } from "./sections/CaseStudiesSection"
// import { ContactSection } from "./sections/ContactSection"
// import { HeroSection } from "./sections/HeroSection"
// import { PortfolioSection } from "./sections/PortfolioSection"
// import { TestimonialsSection } from "./sections/TestimonialsSection"
import Hero from "./sections/Home/Home"
import About from "./sections/About/About"
import Navbar from "./components/Navbar/Navbar"
import Dealerships from "./sections/Dealerships/Dealerships"
import Others from "./sections/Others/Others"
import Contact from "./sections/Contact/Contact"

export const PersonalPortfolio = () => {
  // Preloader: show a full-screen animated loader on first visit
  const [isLoading, setIsLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)

  // Video playing state from Hero component
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Logo scroll effect
  const [scrollY, setScrollY] = useState(0)

  // Scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('.section-reveal')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [isLoading])

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

  return (
    <div className="bg-transparent w-full flex flex-col">
      <Navbar isVideoPlaying={isVideoPlaying} scrollY={scrollY} />

      {isLoading && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 px-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse-slow" />
              <div className="relative w-40 h-40 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/mia-s.png" alt="loader logo" className="w-36 h-36 rounded-full object-cover drop-shadow-xl transform transition-transform duration-700 animate-scaleUp" />
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
        <div className="w-full section-reveal">
          <About />
        </div>

        {/* Dealerships Section */}
        <div className="w-full section-reveal">
          <Dealerships />
        </div>

        {/* Others Section */}
        <div className="w-full section-reveal">
          <Others />
        </div>

        {/* Contact Section */}
        <div className="w-full section-reveal">
          <Contact />
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
          @2025 all rights reserved
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
