import { useState, useEffect } from "react"
import { Github, ExternalLink, Star, GitFork, Eye, Calendar, Code, Zap, Award } from "lucide-react"

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  language: string
  topics: string[]
  created_at: string
  updated_at: string
  size: number
  open_issues: number
}

export function ProjectsSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock GitHub data with enhanced details
  useEffect(() => {
    const mockRepos: GitHubRepo[] = [
      {
        id: 1,
        name: "neural-architecture-search",
        description:
          "Automated neural architecture search framework with evolutionary algorithms and reinforcement learning for optimal model design",
        html_url: "https://github.com/username/neural-architecture-search",
        stargazers_count: 342,
        forks_count: 89,
        watchers_count: 156,
        language: "Python",
        topics: ["neural-architecture-search", "automl", "deep-learning", "pytorch", "evolutionary-algorithms"],
        created_at: "2023-08-15",
        updated_at: "2024-01-10",
        size: 15420,
        open_issues: 8,
      },
      {
        id: 2,
        name: "quantum-ml-algorithms",
        description:
          "Implementation of quantum machine learning algorithms using Qiskit and PennyLane for hybrid classical-quantum computing",
        html_url: "https://github.com/username/quantum-ml-algorithms",
        stargazers_count: 278,
        forks_count: 67,
        watchers_count: 134,
        language: "Python",
        topics: ["quantum-computing", "machine-learning", "qiskit", "pennylane", "hybrid-algorithms"],
        created_at: "2023-06-20",
        updated_at: "2024-01-08",
        size: 12890,
        open_issues: 5,
      },
      {
        id: 3,
        name: "federated-learning-framework",
        description:
          "Privacy-preserving federated learning framework with differential privacy and secure aggregation protocols",
        html_url: "https://github.com/username/federated-learning-framework",
        stargazers_count: 456,
        forks_count: 123,
        watchers_count: 234,
        language: "Python",
        topics: ["federated-learning", "privacy", "differential-privacy", "tensorflow", "secure-aggregation"],
        created_at: "2023-04-10",
        updated_at: "2024-01-12",
        size: 18750,
        open_issues: 12,
      },
      {
        id: 4,
        name: "explainable-ai-toolkit",
        description:
          "Comprehensive toolkit for explainable AI with LIME, SHAP, and custom interpretability methods for deep learning models",
        html_url: "https://github.com/username/explainable-ai-toolkit",
        stargazers_count: 389,
        forks_count: 98,
        watchers_count: 178,
        language: "Python",
        topics: ["explainable-ai", "interpretability", "lime", "shap", "model-explanation"],
        created_at: "2023-09-05",
        updated_at: "2024-01-09",
        size: 14230,
        open_issues: 7,
      },
      {
        id: 5,
        name: "real-time-anomaly-detection",
        description:
          "Real-time anomaly detection system using streaming data processing and ensemble methods for IoT and cybersecurity",
        html_url: "https://github.com/username/real-time-anomaly-detection",
        stargazers_count: 234,
        forks_count: 56,
        watchers_count: 112,
        language: "Python",
        topics: ["anomaly-detection", "real-time", "streaming", "kafka", "ensemble-methods"],
        created_at: "2023-11-12",
        updated_at: "2024-01-11",
        size: 11670,
        open_issues: 4,
      },
      {
        id: 6,
        name: "multimodal-ai-platform",
        description:
          "End-to-end multimodal AI platform combining vision, language, and audio processing with transformer architectures",
        html_url: "https://github.com/username/multimodal-ai-platform",
        stargazers_count: 567,
        forks_count: 145,
        watchers_count: 289,
        language: "Python",
        topics: ["multimodal", "transformers", "computer-vision", "nlp", "audio-processing"],
        created_at: "2023-07-18",
        updated_at: "2024-01-13",
        size: 22340,
        open_issues: 15,
      },
    ]

    setTimeout(() => {
      setRepos(mockRepos)
      setLoading(false)
    }, 1500)
  }, [])

  const categories = [
    { id: "all", label: "All Projects", count: repos.length },
    {
      id: "deep-learning",
      label: "Deep Learning",
      count: repos.filter((r) =>
        r.topics.some((t) => t.includes("deep-learning") || t.includes("neural") || t.includes("transformers")),
      ).length,
    },
    {
      id: "quantum",
      label: "Quantum ML",
      count: repos.filter((r) => r.topics.some((t) => t.includes("quantum"))).length,
    },
    {
      id: "privacy",
      label: "Privacy & Security",
      count: repos.filter((r) =>
        r.topics.some((t) => t.includes("privacy") || t.includes("federated") || t.includes("anomaly")),
      ).length,
    },
    {
      id: "explainable",
      label: "Explainable AI",
      count: repos.filter((r) => r.topics.some((t) => t.includes("explainable") || t.includes("interpretability")))
        .length,
    },
  ]

  const filteredRepos =
    selectedCategory === "all"
      ? repos
      : repos.filter((repo) => {
          switch (selectedCategory) {
            case "deep-learning":
              return repo.topics.some(
                (t) => t.includes("deep-learning") || t.includes("neural") || t.includes("transformers"),
              )
            case "quantum":
              return repo.topics.some((t) => t.includes("quantum"))
            case "privacy":
              return repo.topics.some((t) => t.includes("privacy") || t.includes("federated") || t.includes("anomaly"))
            case "explainable":
              return repo.topics.some((t) => t.includes("explainable") || t.includes("interpretability"))
            default:
              return true
          }
        })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const formatSize = (bytes: number) => {
    return `${(bytes / 1024).toFixed(1)} KB`
  }

  if (loading) {
    return (
      <section className="bg-gradient-to-br from-black via-indigo-950 to-purple-950 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-6 animate-pulse"></div>
            <div className="h-8 bg-gray-700 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-96 mx-auto animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-900/50 rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-gray-700 rounded mb-4"></div>
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded mb-4 w-3/4"></div>
                <div className="flex space-x-4 mb-4">
                  <div className="h-3 bg-gray-700 rounded w-16"></div>
                  <div className="h-3 bg-gray-700 rounded w-16"></div>
                </div>
                <div className="flex space-x-2">
                  <div className="h-6 bg-gray-700 rounded w-16"></div>
                  <div className="h-6 bg-gray-700 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-br from-black via-indigo-950 to-purple-950 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm mb-6">
            <Code className="w-4 h-4" />
            Open Source Projects
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Cutting-edge AI and machine learning projects pushing the boundaries of what's possible in artificial
            intelligence.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              label: "Total Stars",
              value: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0).toLocaleString(),
              icon: Star,
              color: "from-yellow-500 to-orange-500",
            },
            {
              label: "Total Forks",
              value: repos.reduce((sum, repo) => sum + repo.forks_count, 0).toLocaleString(),
              icon: GitFork,
              color: "from-green-500 to-emerald-500",
            },
            {
              label: "Watchers",
              value: repos.reduce((sum, repo) => sum + repo.watchers_count, 0).toLocaleString(),
              icon: Eye,
              color: "from-blue-500 to-cyan-500",
            },
            { label: "Projects", value: repos.length.toString(), icon: Code, color: "from-purple-500 to-pink-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-indigo-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: "600ms" }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/5 text-indigo-300 hover:bg-white/10 hover:text-white border border-indigo-900/30"
              }`}
            >
              {category.label}
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id ? "bg-white/20" : "bg-indigo-600/30"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRepos.map((repo, index) => (
            <div
              key={repo.id}
              className="group bg-black/40 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${700 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                    {repo.name}
                  </h3>
                  <p className="text-indigo-200 text-sm mb-4 line-clamp-3">{repo.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-indigo-300">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork className="w-4 h-4 text-green-400" />
                    <span>{repo.forks_count}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4 text-blue-400" />
                    <span>{repo.watchers_count}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 text-xs text-indigo-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-indigo-900/30 rounded">{repo.language}</span>
                  <span>{formatSize(repo.size)}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded text-xs border border-indigo-700/50 hover:border-indigo-500/50 transition-colors duration-300"
                  >
                    {topic}
                  </span>
                ))}
                {repo.topics.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700/30 text-gray-400 rounded text-xs">
                    +{repo.topics.length - 3}
                  </span>
                )}
              </div>

              <div className="flex space-x-3">
                <a
                  href={repo.html_url}
                  className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 group"
                >
                  <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  View Code
                </a>
                <a
                  href={repo.html_url}
                  className="flex items-center justify-center gap-2 border border-indigo-500/50 text-indigo-300 hover:bg-indigo-600/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {repo.open_issues > 0 && (
                <div className="mt-4 flex items-center gap-2 text-xs text-orange-400">
                  <Zap className="w-3 h-3" />
                  <span>{repo.open_issues} open issues - contributions welcome!</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-16">
            <Code className="w-16 h-16 text-indigo-400 mx-auto mb-4 opacity-50" />
            <p className="text-indigo-300 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: "1000ms" }}>
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8">
            <Award className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Collaboration?</h3>
            <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
              I'm always open to collaborating on exciting AI projects. Feel free to fork any repository, submit pull
              requests, or reach out for partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                Follow on GitHub
              </a>
              <button className="border border-indigo-500/50 text-indigo-300 hover:bg-indigo-600/20 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
