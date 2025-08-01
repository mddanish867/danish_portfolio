import { Building, Calendar, MapPin } from "lucide-react"

interface Experience {
  id: number
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  projects: string[]
  technologies: string[]
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "TechCorp AI",
      position: "Senior Data Scientist",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led a team of 5 data scientists in developing ML models for customer behavior prediction",
        "Implemented end-to-end ML pipelines that increased model deployment speed by 60%",
        "Developed recommendation systems that improved user engagement by 35%",
      ],
      projects: ["Customer Churn Prediction Model", "Real-time Recommendation Engine", "Fraud Detection System"],
      technologies: ["Python", "TensorFlow", "AWS", "Docker", "Kubernetes", "MLflow"],
    },
    {
      id: 2,
      company: "DataFlow Solutions",
      position: "Data Scientist",
      duration: "2020 - 2022",
      location: "New York, NY",
      description: [
        "Built predictive models for financial risk assessment with 92% accuracy",
        "Developed automated data pipelines processing 10TB+ daily data",
        "Collaborated with cross-functional teams to deliver data-driven insights",
      ],
      projects: ["Credit Risk Assessment Model", "Market Volatility Predictor", "Automated Trading Algorithm"],
      technologies: ["Python", "R", "Spark", "Hadoop", "PostgreSQL", "Tableau"],
    },
    {
      id: 3,
      company: "StartupX",
      position: "Junior Data Scientist",
      duration: "2019 - 2020",
      location: "Austin, TX",
      description: [
        "Analyzed user behavior data to optimize product features and UX",
        "Built A/B testing framework that improved conversion rates by 25%",
        "Created dashboards and reports for stakeholder decision-making",
      ],
      projects: ["User Behavior Analytics Platform", "A/B Testing Framework", "Customer Segmentation Model"],
      technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"],
    },
  ]

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, ) => (
            <div
              key={exp.id}
              className="bg-gray-900 border border-indigo-900/30 rounded-lg p-6 hover:border-indigo-600/50 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Building className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-indigo-300 mb-2">{exp.position}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-indigo-200 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h5>
                  <ul className="space-y-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="text-indigo-200 flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Key Projects</h5>
                  <ul className="space-y-2 mb-4">
                    {exp.projects.map((project, idx) => (
                      <li key={idx} className="text-indigo-200 flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        {project}
                      </li>
                    ))}
                  </ul>

                  <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
