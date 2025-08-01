import { Github, Linkedin, Mail, Twitter, Bell } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={` w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-indigo-900/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 animate-pulse">
                <span className="text-white font-bold text-lg">DA</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div className="transform group-hover:translate-x-2 transition-transform duration-300">
              <h1 className="text-white font-bold text-xl bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Danish Akhtar
              </h1>
              <p className="text-indigo-300 text-sm">AI Research Scientist & Data Engineer</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  className="relative group p-2 rounded-full hover:bg-indigo-600/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5 text-indigo-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {label}
                  </div>
                </a>
              ))}
            </div>

            <div className="relative">
              <button className="p-2 rounded-full hover:bg-indigo-600/20 transition-all duration-300 group">
                <Bell className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
