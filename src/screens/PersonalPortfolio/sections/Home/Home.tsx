"use client"

import { Play, Pause } from "lucide-react"
import { useEffect, useRef, useState } from "react"

/**
 * Hero Section Component
 *
 * A fully responsive, interactive hero section with:
 * - Image/Video toggle functionality
 * - Smooth transitions and animations
 * - Hover and click effects throughout
 * - Mobile-first responsive design
 * - Developer-friendly structure with clear sections
 *
 * Customization Guide:
 * 1. Update image path in HERO_CONFIG.bgImage
 * 2. Update video path in HERO_CONFIG.videoSource
 * 3. Modify text content in the Content Section
 * 4. Adjust colors in the overlay gradients
 * 5. Tweak animation timings in duration-* classes
 */

// ============================================================================
// CONFIGURATION & CONSTANTS
// ============================================================================

const HERO_CONFIG = {
  bgImage: "/tang1.png",
  videoSource: "/tang.mp4",
  videoSourceMp4: "/tang.mp4",
  altText: "Premium Bay Area real estate hero background",
}

// Animation durations for consistency
const ANIMATION_DURATIONS = {
  fast: 300, // milliseconds
  standard: 500,
  slow: 700,
  verySlow: 1000,
}

// ============================================================================
// MAIN HERO COMPONENT
// ============================================================================

interface HeroProps {
  onPlayStateChange?: (isPlaying: boolean) => void
}

export default function Hero({ onPlayStateChange }: HeroProps = {}) {
  // =========================================================================
  // STATE MANAGEMENT
  // =========================================================================

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [currentTitle, setCurrentTitle] = useState("Entrepreneur")
  const titles = ["Entrepreneur", "Founder", "Community Builder", "Visionary Leader"]

  // Refs for media elements
  const videoRef = useRef<HTMLVideoElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  // =========================================================================
  // EFFECTS
  // =========================================================================

  // Mount effect - ensures hydration consistency
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Video playback effect - manages play/pause state
  useEffect(() => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.play().catch((error) => {
        console.error("[Hero] Video playback error:", error)
      })
    } else {
      videoRef.current.pause()
    }
  }, [isPlaying])

  // Notify parent component of play state changes
  useEffect(() => {
    onPlayStateChange?.(isPlaying)
  }, [isPlaying, onPlayStateChange])

  // Rotating title effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => {
        const currentIndex = titles.indexOf(prev)
        return titles[(currentIndex + 1) % titles.length]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // =========================================================================
  // EVENT HANDLERS
  // =========================================================================

  const handlePlayPauseToggle = () => {
    setIsPlaying((prev) => !prev)
  }

  const handleLearnMoreClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Prevent render before hydration
  if (!isMounted) return null

  // =========================================================================
  // RENDER
  // =========================================================================

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden bg-black group">
      {/* ===================================================================
          BACKGROUND LAYER
          - Image for paused state
          - Video for playing state
          - Smooth crossfade transition
          =================================================================== */}

      {/* Background Image - Default State */}
      <img
        ref={imageRef}
        src={HERO_CONFIG.bgImage || "/placeholder.svg"}
        alt={HERO_CONFIG.altText}
        className={`
          absolute inset-0 w-full h-full object-cover object-center
          transition-all duration-700 ease-out
          /* Fade out and zoom when playing */
          ${isPlaying ? "opacity-0 scale-105" : "opacity-100 scale-100"}
        `}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Background Video - Playing State */}
      <video
        ref={videoRef}
        className={`
          absolute inset-0 w-full h-full object-cover object-center
          transition-all duration-700 ease-out
          /* Fade in when playing */
          ${isPlaying ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={HERO_CONFIG.videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ===================================================================
          OVERLAY GRADIENTS
          - Left-to-right gradient for text readability
          - Top-to-bottom gradient for depth
          - Opacity changes based on video state
          =================================================================== */}

      <div
        className={`
          absolute inset-0 transition-opacity duration-1000
          ${isPlaying ? "opacity-35" : "opacity-50"}
        `}
      >
        {/* Left-to-right dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        {/* Top-to-bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/70" />
      </div>

      {/* ===================================================================
          CONTENT CONTAINER
          - Flex layout for responsive positioning
          - Left content (text) and right content (button)
          - Responsive padding and gaps
          =================================================================== */}

      <div
        className={`
          relative z-10 h-full
          flex flex-col lg:flex-row items-center justify-between
          px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24
          py-12 lg:py-0 gap-8 lg:gap-0
        `}
      >
        {/* ===============================================================
            LEFT CONTENT - Text & Button Section
            =============================================================== */}

        <div
          className={`
            flex flex-col justify-center max-w-2xl space-y-4 md:space-y-6
            relative z-20
            transition-all duration-700 ease-out
            ${isPlaying ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}
          `}
        >
          {/* ------- Logo & Name Section ------- */}
          <div
            className={`
              flex items-center gap-4 sm:gap-6
              animate-fadeInUp animation-delay-100
            `}
          >
            {/* Monogram on left */}
            <div
              className={`
                text-white
                transform transition-transform duration-300
                hover:scale-110 flex-shrink-0
                relative
              `}
            >
              {/* Glow effect around logo */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative">
                <img src="mia-s.png" alt="mia-s"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Divider line */}
            <div
              className={`
                w-px h-16 sm:h-20 bg-white/50
                transition-all duration-500
                group-hover:bg-white/80 group-hover:shadow-lg group-hover:shadow-white/40
              `}
            />

            {/* Main title section on right */}
            <div className="flex-1 relative">
              {/* Construction Materials Supplier - Upper Right */}
              <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 shadow-lg">
                <p className="text-[10px] sm:text-xs tracking-widest text-white/90 font-normal drop-shadow-md uppercase whitespace-nowrap">
                  CONSTRUCTION MATERIALS SUPPLIER®
                </p>
              </div>

              <h1
                className={`
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                  font-serif text-white font-bold leading-tight tracking-tight
                  drop-shadow-2xl
                  animate-fadeInUp
                  mt-8 sm:mt-10
                `}
              >
                Md. Shahjahan Miah
              </h1>

              {/* Rotating text with translucent background */}
              <div className="mt-6 inline-block">
                <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full px-6 py-3 shadow-xl transition-all duration-300 hover:bg-white/15 hover:border-white/30">
                  <p
                    key={currentTitle}
                    className="text-base sm:text-lg md:text-xl tracking-widest text-white/90 font-semibold drop-shadow-md uppercase animate-slideInFromBottom"
                  >
                    {currentTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ------- Tagline ------- */}
          <p
            className={`
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-serif text-white font-light leading-relaxed tracking-wide
              animate-fadeInUp animation-delay-200
              drop-shadow-lg mt-4 sm:mt-6
            `}
          >
            Bringing Wellness to Tangail Through Quality Construction Materials
          </p>

          {/* ------- Learn More Button ------- */}
          <div className="pt-6 md:pt-8 animate-slideInFromBottom animation-delay-400">
            <button
              onClick={handleLearnMoreClick}
              className={`
                  group/btn relative
                  px-8 sm:px-10 py-3 sm:py-3.5 md:py-4
                  bg-white/10 backdrop-blur-md hover:bg-white/20
                  border-2 border-white/30 hover:border-white/50
                  text-white font-semibold text-sm sm:text-base
                  transition-all duration-300 ease-out
                  hover:shadow-2xl hover:shadow-white/60 hover:scale-105
                  active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
                  overflow-hidden rounded-full tracking-wide
                `}
              aria-label="Contact Md. Shahjahan Miah"
            >
              {/* Button text with animated arrow */}
              <span className="relative z-10 inline-flex items-center gap-2 transition-all duration-300 uppercase">
                Contact Now
                <svg
                  className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>

              {/* Animated fill effect from left to right */}
              <div
                className={`
                    absolute inset-0 rounded-lg
                    bg-gradient-to-r from-white/30 via-white/20 to-transparent
                    opacity-0 group-hover/btn:opacity-100
                    transition-opacity duration-500
                    -translate-x-full group-hover/btn:translate-x-0
                  `}
              />

              {/* Secondary shine effect */}
              <div
                className={`
                    absolute inset-0 rounded-lg
                    bg-gradient-to-r from-transparent via-white/40 to-transparent
                    opacity-0 group-hover/btn:opacity-100
                    transition-opacity duration-700
                    translate-x-full group-hover/btn:translate-x-0
                  `}
              />
            </button>
          </div>
        </div>        {/* ===============================================================
            RIGHT CONTENT - Play/Pause Button Section
            =============================================================== */}

        <div
          className={`
            flex items-center justify-center lg:justify-start lg:mr-32
            animate-fadeInRight animation-delay-400
          `}
        >
          <PlayPauseButton isPlaying={isPlaying} onToggle={handlePlayPauseToggle} />
        </div>
      </div>

      {/* ===================================================================
          BOTTOM ACCENT LINE
          - Subtle gradient line for visual interest
          =================================================================== */}

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
    </div>
  )
}

// ============================================================================
// PLAY/PAUSE BUTTON COMPONENT
// ============================================================================

interface PlayPauseButtonProps {
  isPlaying: boolean
  onToggle: () => void
}

/**
 * PlayPauseButton Component
 *
 * Interactive button with multi-layer effects:
 * - Icon state feedback (play/pause)
 * - Multi-ring hover animations
 * - Press feedback with scaling
 * - Pulse effect when video is playing
 * - Full accessibility support
 */
function PlayPauseButton({ isPlaying, onToggle }: PlayPauseButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  // =========================================================================
  // EVENT HANDLERS
  // =========================================================================

  const handleClick = () => {
    // Add press feedback
    setIsPressed(true)
    // Toggle play state
    onToggle()
    // Reset press state after animation
    setTimeout(() => setIsPressed(false), ANIMATION_DURATIONS.fast)
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  // =========================================================================
  // RENDER
  // =========================================================================

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        group relative
        w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
        rounded-full
        bg-white/15 backdrop-blur-md
        border-2 border-white/40
        flex items-center justify-center
        transition-all duration-300 ease-out
        hover:bg-white/25 hover:border-white/70 hover:shadow-2xl hover:shadow-white/30
        active:scale-90
        focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/20
      `}
      aria-label={isPlaying ? "Pause video" : "Play video"}
      aria-pressed={isPlaying}
    >
      {/* ===================================================================
          ICON LAYER
          =================================================================== */}

      <div className="relative z-20 flex items-center justify-center transition-all duration-300">
        {isPlaying ? (
          // Pause icon
          <Pause
            size={56}
            className={`
              text-white drop-shadow-lg
              transition-all duration-300
              ${isHovered ? "scale-110" : "scale-100"}
              ${isPressed ? "scale-75" : ""}
            `}
            fill="currentColor"
          />
        ) : (
          // Play icon (offset slightly for visual balance)
          <Play
            size={56}
            className={`
              text-white drop-shadow-lg
              transition-all duration-300 ml-1 sm:ml-2
              ${isHovered ? "scale-110" : "scale-100"}
              ${isPressed ? "scale-75" : ""}
            `}
            fill="currentColor"
          />
        )}
      </div>

      {/* ===================================================================
          RING ANIMATIONS
          - Multiple concentric rings for depth effect
          - Expand and fade on hover
          =================================================================== */}

      {/* Primary ring - closest to button */}
      <div
        className={`
          absolute inset-0 rounded-full
          border-2 border-white/40
          transition-all duration-500 ease-out
          ${isHovered ? "scale-140 opacity-0" : "scale-100 opacity-100"}
        `}
      />

      {/* Secondary ring - middle layer */}
      <div
        className={`
          absolute inset-0 rounded-full
          border border-white/20
          transition-all duration-700 ease-out
          ${isHovered ? "scale-160 opacity-0" : "scale-100 opacity-50"}
        `}
      />

      {/* ===================================================================
          GLOW EFFECT
          - Soft glow background on hover
          =================================================================== */}

      <div
        className={`
          absolute inset-0 rounded-full
          bg-white/10 blur-xl
          transition-all duration-300
          ${isHovered ? "opacity-100 scale-120" : "opacity-0 scale-100"}
        `}
      />

      {/* ===================================================================
          PULSE EFFECT
          - Active pulse when video is playing
          =================================================================== */}

      <div
        className={`
          absolute inset-2 rounded-full
          border border-white/30
          transition-all duration-500
          ${isPlaying ? "animate-pulse" : ""}
        `}
      />
    </button>
  )
}
