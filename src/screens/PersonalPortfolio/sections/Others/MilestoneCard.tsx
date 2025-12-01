"use client"

interface MilestoneCardProps {
    title: string
    descriptions: string[]
}

export default function MilestoneCard({ title, descriptions }: MilestoneCardProps) {
    return (
        <div className="group relative ml-8">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            {/* Main card */}
            <div className="relative backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 sm:p-8 shadow-lg shadow-white/10 transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/20 bg-gradient-to-br from-white/5 to-white/0">
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-['Inter',sans-serif] drop-shadow-lg">
                    {title}
                </h3>
                <div className="space-y-3">
                    {descriptions.map((description, descIndex) => (
                        <p key={descIndex} className="text-white text-sm md:text-base leading-relaxed font-['Inter',sans-serif] font-medium drop-shadow-md">
                            {description}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}
