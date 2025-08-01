import { useState } from "react"
import { FileText, Download, ExternalLink, Calendar, Users, Award, Search, Filter } from "lucide-react"

interface ResearchPaper {
  id: number
  title: string
  authors: string[]
  journal: string
  year: number
  citations: number
  abstract: string
  tags: string[]
  pdfUrl: string
  status: "published" | "under-review" | "preprint"
  impact: "high" | "medium" | "low"
}

export function ResearchSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const papers: ResearchPaper[] = [
    {
      id: 1,
      title: "Deep Learning Approaches for Real-Time Anomaly Detection in IoT Networks",
      authors: ["Dr. Alex Chen", "Dr. Sarah Johnson", "Prof. Michael Zhang"],
      journal: "Nature Machine Intelligence",
      year: 2024,
      citations: 127,
      abstract:
        "This paper presents a novel deep learning framework for real-time anomaly detection in IoT networks, achieving 98.5% accuracy with minimal computational overhead...",
      tags: ["Deep Learning", "IoT", "Anomaly Detection", "Real-time Systems"],
      pdfUrl: "#",
      status: "published",
      impact: "high",
    },
    {
      id: 2,
      title: "Federated Learning for Privacy-Preserving Medical Image Analysis",
      authors: ["Dr. Alex Chen", "Dr. Emily Rodriguez", "Dr. James Liu"],
      journal: "IEEE Transactions on Medical Imaging",
      year: 2024,
      citations: 89,
      abstract:
        "We propose a federated learning approach that enables collaborative medical image analysis while preserving patient privacy through differential privacy techniques...",
      tags: ["Federated Learning", "Medical AI", "Privacy", "Computer Vision"],
      pdfUrl: "#",
      status: "published",
      impact: "high",
    },
    {
      id: 3,
      title: "Quantum-Enhanced Machine Learning for Drug Discovery",
      authors: ["Dr. Alex Chen", "Prof. Lisa Wang", "Dr. Robert Kim"],
      journal: "Science Advances",
      year: 2023,
      citations: 203,
      abstract:
        "This work demonstrates how quantum computing can accelerate machine learning algorithms for molecular property prediction in drug discovery pipelines...",
      tags: ["Quantum Computing", "Drug Discovery", "Molecular ML", "Quantum ML"],
      pdfUrl: "#",
      status: "published",
      impact: "high",
    },
    {
      id: 4,
      title: "Explainable AI for Financial Risk Assessment",
      authors: ["Dr. Alex Chen", "Dr. Maria Garcia"],
      journal: "Journal of Financial Technology",
      year: 2023,
      citations: 156,
      abstract:
        "We develop interpretable machine learning models for financial risk assessment that provide clear explanations for regulatory compliance...",
      tags: ["Explainable AI", "Finance", "Risk Assessment", "Interpretability"],
      pdfUrl: "#",
      status: "published",
      impact: "medium",
    },
    {
      id: 5,
      title: "Neural Architecture Search for Edge Computing Devices",
      authors: ["Dr. Alex Chen", "Dr. Kevin Park"],
      journal: "Under Review - ICML 2024",
      year: 2024,
      citations: 0,
      abstract:
        "This paper introduces an automated neural architecture search method specifically designed for resource-constrained edge computing environments...",
      tags: ["Neural Architecture Search", "Edge Computing", "Mobile AI", "Optimization"],
      pdfUrl: "#",
      status: "under-review",
      impact: "medium",
    },
  ]

  const filteredPapers = papers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesFilter = selectedFilter === "all" || paper.status === selectedFilter
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-600/20 text-green-300 border-green-500/30"
      case "under-review":
        return "bg-yellow-600/20 text-yellow-300 border-yellow-500/30"
      case "preprint":
        return "bg-blue-600/20 text-blue-300 border-blue-500/30"
      default:
        return "bg-gray-600/20 text-gray-300 border-gray-500/30"
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-red-400"
      case "medium":
        return "text-yellow-400"
      case "low":
        return "text-green-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-indigo-950 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm mb-6">
            <Award className="w-4 h-4" />
            Research Publications
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Research Papers
            </span>
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Cutting-edge research in artificial intelligence, machine learning, and data science published in top-tier
            journals and conferences.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: "200ms" }}>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search papers by title or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-black/50 border border-indigo-900/30 rounded-xl text-white placeholder-indigo-400 focus:border-indigo-500 focus:outline-none backdrop-blur-sm transition-all duration-300"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="pl-10 pr-8 py-3 bg-black/50 border border-indigo-900/30 rounded-xl text-white focus:border-indigo-500 focus:outline-none backdrop-blur-sm appearance-none cursor-pointer transition-all duration-300"
            >
              <option value="all">All Papers</option>
              <option value="published">Published</option>
              <option value="under-review">Under Review</option>
              <option value="preprint">Preprint</option>
            </select>
          </div>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Papers", value: "50+", icon: FileText, color: "from-blue-500 to-cyan-500" },
            { label: "Citations", value: "2,500+", icon: Award, color: "from-green-500 to-emerald-500" },
            { label: "H-Index", value: "28", icon: Users, color: "from-purple-500 to-pink-500" },
            { label: "Impact Factor", value: "8.5", icon: ExternalLink, color: "from-orange-500 to-red-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${300 + index * 100}ms` }}
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

        {/* Papers Grid */}
        <div className="space-y-8">
          {filteredPapers.map((paper, index) => (
            <div
              key={paper.id}
              className="group bg-black/40 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-500 hover:scale-[1.02] animate-fadeInUp"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(paper.status)}`}
                    >
                      {paper.status.replace("-", " ").toUpperCase()}
                    </span>
                    <div className="flex items-center gap-1 text-indigo-300">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{paper.year}</span>
                    </div>
                    <div className="flex items-center gap-1 text-indigo-300">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">{paper.citations} citations</span>
                    </div>
                    <div className={`text-sm font-medium ${getImpactColor(paper.impact)}`}>
                      {paper.impact.toUpperCase()} IMPACT
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                    {paper.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-indigo-400" />
                    <span className="text-indigo-200 text-sm">{paper.authors.join(", ")}</span>
                  </div>

                  <div className="text-indigo-300 font-medium mb-4">{paper.journal}</div>

                  <p className="text-indigo-200 mb-6 leading-relaxed">{paper.abstract}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm border border-indigo-700/50 hover:border-indigo-500/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 lg:min-w-[200px]">
                  <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 group">
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                    Download PDF
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-indigo-500/50 text-indigo-300 hover:bg-indigo-600/20 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    View Online
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="text-center py-16">
            <FileText className="w-16 h-16 text-indigo-400 mx-auto mb-4 opacity-50" />
            <p className="text-indigo-300 text-lg">No papers found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
