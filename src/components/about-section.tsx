export function AboutSection() {
  const skills = [
    "Python",
    "R",
    "SQL",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Jupyter",
    "Git",
    "Docker",
    "AWS",
    "Azure",
    "GCP",
  ]

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-indigo-950  mt-10">      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-indigo-200 text-lg mb-6">
              I'm a passionate Data Scientist with 5+ years of experience in machine learning, artificial intelligence,
              and statistical analysis. I specialize in building end-to-end ML pipelines and deploying scalable AI
              solutions.
            </p>
            <p className="text-indigo-200 text-lg mb-6">
              My expertise spans across various domains including computer vision, natural language processing,
              predictive analytics, and recommendation systems. I have successfully delivered projects that increased
              business revenue by 25% and improved operational efficiency by 40%.
            </p>
            <div className="space-y-4">
              <div>
                <span className="text-indigo-400 font-semibold">Education:</span>
                <span className="text-white ml-2">MS in Data Science, Stanford University</span>
              </div>
              <div>
                <span className="text-indigo-400 font-semibold">Location:</span>
                <span className="text-white ml-2">San Francisco, CA</span>
              </div>
              <div>
                <span className="text-indigo-400 font-semibold">Experience:</span>
                <span className="text-white ml-2">5+ Years</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg px-3 py-2 text-center"
                >
                  <span className="text-indigo-200 text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
