import { useState, useEffect } from "react"
import { 
  Menu, 
  X, 
  Home, 
  User, 
  FolderOpen, 
  BookOpen, 
  Briefcase, 
  Users, 
  FileText, 
  MessageCircle
} from "lucide-react"

interface NavbarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "research", label: "Research", icon: FileText },
    { id: "blogs", label: "Blogs", icon: BookOpen },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "community", label: "Community", icon: Users },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ]



  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/95 backdrop-blur-md border-b border-indigo-900/30" 
          : "bg-transparent"
      }`}
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Brand */}
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
              <p className="text-indigo-300 text-sm">AI Research Scientist</p>
            </div>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                      activeSection === item.id
                        ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25"
                        : "text-indigo-300 hover:text-white hover:bg-indigo-600/30"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-50 -z-10 animate-pulse"></div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-indigo-300 hover:text-white p-2 rounded-lg hover:bg-indigo-600/20 transition-all duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSectionChange(item.id)
                      setIsOpen(false)
                    }}
                    className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-all duration-300 flex items-center space-x-3 ${
                      activeSection === item.id
                        ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600"
                        : "text-indigo-300 hover:text-white hover:bg-indigo-600/30"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}