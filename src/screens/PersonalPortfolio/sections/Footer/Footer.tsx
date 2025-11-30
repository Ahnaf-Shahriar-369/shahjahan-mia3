"use client"

import { Building2, Phone, Mail, MapPin, Truck, Users, Award, Shield } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [clickedItem, setClickedItem] = useState<string | null>(null)

  const handleItemClick = (item: string) => {
    setClickedItem(item)
    setTimeout(() => setClickedItem(null), 200)
  }

  return (
    <footer className="bg-emerald-400 text-white  animate-in slide-in-from-bottom-8 duration-1000 mt-0">
      <div className="max-w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-in fade-in-50 slide-in-from-left-4 duration-700 delay-100">
            <div
              className="flex items-center space-x-2 group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleItemClick("logo")}
            >
              <Building2
                className={`h-6 w-6 transition-all duration-300 group-hover:rotate-12 ${
                  clickedItem === "logo" ? "scale-125 rotate-12" : ""
                }`}
              />
              <h3 className="text-lg sm:text-xl font-bold group-hover:text-emerald-100 transition-colors duration-300">
                BuildMart Tangail
              </h3>
            </div>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base hover:text-white transition-colors duration-300">
              Your trusted partner for premium construction materials in Tangail. Building stronger foundations for a
              better tomorrow.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-in fade-in-50 slide-in-from-left-4 duration-700 delay-200">
            <h4 className="text-base sm:text-lg font-semibold flex items-center group">
              <Truck className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
              Our Services
            </h4>
            <ul className="space-y-2 text-white/90 text-sm sm:text-base">
              {[
                "Premium Cement Supply",
                "Quality Steel & Rebar",
                "Construction Aggregates",
                "Building Hardware",
                "Project Consultation",
              ].map((service, index) => (
                <li
                  key={service}
                  className={`cursor-pointer transform transition-all duration-300 hover:text-white hover:translate-x-2 hover:scale-105 ${
                    clickedItem === service ? "translate-x-3 scale-110 text-white" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleItemClick(service)}
                >
                  <span className="inline-block transition-transform duration-300 hover:rotate-3">•</span> {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-in fade-in-50 slide-in-from-right-4 duration-700 delay-300">
            <h4 className="text-base sm:text-lg font-semibold flex items-center group">
              <Phone className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Contact Us
            </h4>
            <div className="space-y-3 text-white/90 text-sm sm:text-base">
              {[
                { icon: MapPin, text: "Tangail, Dhaka Division, Bangladesh", id: "address" },
                { icon: Phone, text: "+880 1XXX-XXXXXX", id: "phone" },
                { icon: Mail, text: "info@buildmarttangail.com", id: "email" },
              ].map(({ icon: Icon, text, id }) => (
                <div
                  key={id}
                  className={`flex items-center space-x-2 cursor-pointer group transform transition-all duration-300 hover:text-white hover:translate-x-2 ${
                    clickedItem === id ? "translate-x-3 text-white scale-105" : ""
                  }`}
                  onClick={() => handleItemClick(id)}
                >
                  <Icon className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <span className="transition-all duration-300">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-4 animate-in fade-in-50 slide-in-from-right-4 duration-700 delay-400">
            <h4 className="text-base sm:text-lg font-semibold flex items-center group">
              <Award className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Why Choose Us
            </h4>
            <ul className="space-y-2 text-white/90 text-sm sm:text-base">
              {[
                { icon: Shield, text: "Quality Guaranteed", id: "quality" },
                { icon: Users, text: "Trusted by 500+ Clients", id: "trusted" },
                { icon: Truck, text: "Fast Delivery", id: "delivery" },
                { icon: Building2, text: "15+ Years Experience", id: "experience" },
              ].map(({ icon: Icon, text, id }, index) => (
                <li
                  key={id}
                  className={`flex items-center space-x-2 cursor-pointer group transform transition-all duration-300 hover:text-white hover:translate-x-2 hover:scale-105 ${
                    clickedItem === id ? "translate-x-3 scale-110 text-white" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleItemClick(id)}
                >
                  <Icon className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <span className="transition-all duration-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-500">
          <p className="text-white/80 text-xs sm:text-sm hover:text-white transition-colors duration-300 cursor-default">
            © 2024 BuildMart Tangail. All rights reserved. | Building Trust, Delivering Excellence
          </p>
        </div>
      </div>
    </footer>
  )
}


