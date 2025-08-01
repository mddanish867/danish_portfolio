import { useState, useEffect } from "react"
import { Navbar } from "./components/navbar"
import { CTASection } from "./components/cta-section"
import { AboutSection } from "./components/about-section"
import { ProjectsSection } from "./components/project-section"
import { ResearchSection } from "./components/research-section"
import { BlogSection } from "./components/blog-section"
import { ExperienceSection } from "./components/experience-section"
import { CommunitySection } from "./components/community-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

export default function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <CTASection />
            <AboutSection />
          </>
        )
      case "about":
        return <AboutSection />
      case "projects":
        return <ProjectsSection />
      case "research":
        return <ResearchSection />
      case "blogs":
        return <BlogSection />
      case "experience":
        return <ExperienceSection />
      case "community":
        return <CommunitySection />
      case "contact":
        return <ContactSection />
      default:
        return (
          <>
            <CTASection />
            <AboutSection />
          </>
        )
    }
  }

  return (
    <div className={`min-h-screen bg-black transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <div className="fixed top-0 left-0 w-full z-50 bg-black">
     
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
    </div>
      <main className="pt-32">{renderSection()}</main>
      <Footer />
    </div>
  )
}
