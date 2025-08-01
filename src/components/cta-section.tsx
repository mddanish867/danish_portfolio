import { Download, MessageCircle, ArrowRight } from "lucide-react"
import { useState } from "react"

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-purple-950">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm animate-pulse">
              🚀 Available for New Opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent animate-gradient">
              AI Research
            </span>
            <br />
            <span className="text-indigo-300">Scientist</span>
          </h1>

          <p className="text-xl md:text-2xl text-indigo-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of artificial intelligence through cutting-edge research in machine learning, deep
            learning, and neural networks. Transforming complex data into breakthrough innovations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button
              className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Hire Me Now
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-50 -z-10 group-hover:opacity-75 transition-opacity duration-300"></div>
            </button>

            <button className="group border-2 border-indigo-400/50 text-indigo-300 hover:bg-indigo-600/20 hover:border-indigo-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:scale-105">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </button>

            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Research Papers", icon: "📄" },
              { number: "100+", label: "ML Models Deployed", icon: "🤖" },
              { number: "5M+", label: "Data Points Analyzed", icon: "📊" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-indigo-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
