"use client"

import { Phone, Mail, MapPin, Building2 } from "lucide-react"

export default function Contact() {
    const headOfficePhones = [
        "01324441230",
        "01324441231",
        "01324441232",
        "01324441233",
        "01324441234"
    ]

    const salesCenterPhones = [
        "01324441261",
        "01324441262",
        "01324441263"
    ]

    const handleEmailClick = () => {
        window.location.href = "mailto:brotherscorporationtangail@yahoo.com"
    }

    return (
        <section id="contact" className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/tang1.png"
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-['Inter',sans-serif] drop-shadow-lg">
                        Get In Touch
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white font-['Inter',sans-serif] font-medium drop-shadow-md max-w-3xl mx-auto">
                        Ready to start your construction project? Contact us today
                    </p>
                </div>

                {/* Main Contact Container */}
                <div className="space-y-8">
                    {/* Two Locations Side by Side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {/* Head Office */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                            <div className="relative backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 sm:p-8 shadow-lg shadow-white/10 transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/20 bg-gradient-to-br from-white/10 to-white/5 h-full">
                                {/* Decorative corners */}
                                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
                                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <Building2 className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-['Inter',sans-serif] drop-shadow-lg">
                                            Head Office
                                        </h3>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-white/70 text-sm font-['Inter',sans-serif]">Location</p>
                                            <p className="text-white text-lg font-bold font-['Inter',sans-serif] drop-shadow-lg">Mosjid Road, Tangail</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <a
                                        href="mailto:brotherscorporationtangail@yahoo.com"
                                        onClick={handleEmailClick}
                                        className="flex items-start gap-3 group/item cursor-pointer transform transition-all duration-300 hover:translate-x-2"
                                    >
                                        <Mail className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-white/70 text-sm font-['Inter',sans-serif]">Email</p>
                                            <p className="text-white text-base font-bold font-['Inter',sans-serif] drop-shadow-lg break-all">brotherscorporationtangail@yahoo.com</p>
                                        </div>
                                    </a>

                                    {/* Phone Numbers */}
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />
                                        <div className="flex-1">
                                            <p className="text-white/70 text-sm mb-2 font-['Inter',sans-serif]">Phone Numbers</p>
                                            <div className="space-y-1.5">
                                                {headOfficePhones.map((phone) => (
                                                    <a
                                                        key={phone}
                                                        href={`tel:+88${phone}`}
                                                        className="block text-white text-base font-bold font-['Inter',sans-serif] drop-shadow-lg hover:text-emerald-200 transition-colors duration-300"
                                                    >
                                                        {phone}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sales Center Jamalpur */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                            <div className="relative backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 sm:p-8 shadow-lg shadow-white/10 transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/20 bg-gradient-to-br from-white/10 to-white/5 h-full">
                                {/* Decorative corners */}
                                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
                                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <Building2 className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-['Inter',sans-serif] drop-shadow-lg">
                                            Sales Center Jamalpur
                                        </h3>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-white/70 text-sm font-['Inter',sans-serif]">Location</p>
                                            <p className="text-white text-lg font-bold font-['Inter',sans-serif] drop-shadow-lg">Jamalpur Sadar, Jamalpur</p>
                                        </div>
                                    </div>

                                    {/* Phone Numbers */}
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />
                                        <div className="flex-1">
                                            <p className="text-white/70 text-sm mb-2 font-['Inter',sans-serif]">Phone Numbers</p>
                                            <div className="space-y-1.5">
                                                {salesCenterPhones.map((phone) => (
                                                    <a
                                                        key={phone}
                                                        href={`tel:+88${phone}`}
                                                        className="block text-white text-base font-bold font-['Inter',sans-serif] drop-shadow-lg hover:text-emerald-200 transition-colors duration-300"
                                                    >
                                                        {phone}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
        </section>
    )
}
