import { useState } from "react"
import { Users, Plus, MessageSquare, Reply, Search, Hash, Heart, Share, Bookmark } from "lucide-react"

interface Group {
  id: number
  name: string
  description: string
  members: number
  posts: number
  category: string
  isJoined: boolean
}

interface Post {
  id: number
  author: string
  avatar: string
  title: string
  content: string
  timestamp: string
  likes: number
  comments: number
  tags: string[]
  groupId: number
  isLiked: boolean
  isBookmarked: boolean
}

interface Comment {
  id: number
  postId: number
  author: string
  avatar: string
  content: string
  timestamp: string
  likes: number
  isLiked: boolean
}

export function CommunitySection() {
  const [activeTab, setActiveTab] = useState<"groups" | "posts" | "qa">("groups")
  const [showCreateGroup, setShowCreateGroup] = useState(false)
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      name: "Deep Learning Researchers",
      description: "A community for researchers working on deep learning and neural networks",
      members: 1250,
      posts: 89,
      category: "Research",
      isJoined: true,
    },
    {
      id: 2,
      name: "MLOps Engineers",
      description: "Best practices for deploying and maintaining ML models in production",
      members: 890,
      posts: 156,
      category: "Engineering",
      isJoined: false,
    },
    {
      id: 3,
      name: "Computer Vision Hub",
      description: "Discussing latest advances in computer vision and image processing",
      members: 2100,
      posts: 234,
      category: "Research",
      isJoined: true,
    },
    {
      id: 4,
      name: "NLP Practitioners",
      description: "Natural Language Processing techniques and applications",
      members: 1680,
      posts: 178,
      category: "Research",
      isJoined: false,
    },
  ])

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Dr. Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "New breakthrough in transformer architecture efficiency",
      content:
        "Just published our latest research on reducing transformer computational complexity by 40% while maintaining accuracy. The key insight was...",
      timestamp: "2 hours ago",
      likes: 45,
      comments: 12,
      tags: ["transformers", "efficiency", "research"],
      groupId: 1,
      isLiked: false,
      isBookmarked: true,
    },
    {
      id: 2,
      author: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "MLOps pipeline for real-time inference at scale",
      content:
        "Sharing our experience building a MLOps pipeline that handles 1M+ predictions per second. Here's what we learned about scaling...",
      timestamp: "5 hours ago",
      likes: 67,
      comments: 23,
      tags: ["mlops", "scaling", "production"],
      groupId: 2,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 3,
      author: "Prof. Michael Zhang",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Question: Best practices for few-shot learning?",
      content:
        "I'm working on a project that requires learning from very few examples. What are the current best practices and recent advances in few-shot learning?",
      timestamp: "1 day ago",
      likes: 23,
      comments: 18,
      tags: ["few-shot", "question", "learning"],
      groupId: 1,
      isLiked: false,
      isBookmarked: false,
    },
  ])

  const [comments] = useState<Comment[]>([
    {
      id: 1,
      postId: 1,
      author: "Dr. Emily Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "This is fascinating! Have you tested this on other transformer variants like BERT or GPT?",
      timestamp: "1 hour ago",
      likes: 8,
      isLiked: false,
    },
    {
      id: 2,
      postId: 1,
      author: "James Liu",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "Great work! Could you share more details about the specific optimizations you implemented?",
      timestamp: "30 minutes ago",
      likes: 5,
      isLiked: true,
    },
  ])

  const toggleGroupJoin = (groupId: number) => {
    setGroups(
      groups.map((group) =>
        group.id === groupId
          ? { ...group, isJoined: !group.isJoined, members: group.isJoined ? group.members - 1 : group.members + 1 }
          : group,
      ),
    )
  }

  const togglePostLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
          : post,
      ),
    )
  }

  const togglePostBookmark = (postId: number) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, isBookmarked: !post.isBookmarked } : post)))
  }

  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-indigo-950 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm mb-6">
            <Users className="w-4 h-4" />
            Community Hub
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Join the Community
            </span>
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Connect with fellow researchers, share knowledge, ask questions, and collaborate on cutting-edge AI
            projects.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: "200ms" }}>
          {[
            { id: "groups", label: "Groups", icon: Users },
            { id: "posts", label: "Posts", icon: MessageSquare },
            { id: "qa", label: "Q&A", icon: Reply },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/5 text-indigo-300 hover:bg-white/10 hover:text-white border border-indigo-900/30"
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12 animate-fadeInUp" style={{ animationDelay: "300ms" }}>
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-black/50 border border-indigo-900/30 rounded-2xl text-white placeholder-indigo-400 focus:border-indigo-500 focus:outline-none backdrop-blur-sm transition-all duration-300"
          />
        </div>

        {/* Groups Tab */}
        {activeTab === "groups" && (
          <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white">Research Groups</h3>
              <button
                onClick={() => setShowCreateGroup(true)}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              >
                <Plus className="w-4 h-4" />
                Create Group
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredGroups.map((group, index) => (
                <div
                  key={group.id}
                  className="group bg-black/40 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Hash className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                            {group.name}
                          </h4>
                          <span className="text-indigo-400 text-sm">{group.category}</span>
                        </div>
                      </div>
                      <p className="text-indigo-200 mb-4">{group.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-indigo-300">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{group.members.toLocaleString()} members</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{group.posts} posts</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleGroupJoin(group.id)}
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                      group.isJoined
                        ? "bg-green-600/20 text-green-300 border border-green-500/30 hover:bg-green-600/30"
                        : "bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105"
                    }`}
                  >
                    {group.isJoined ? "Joined" : "Join Group"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Posts Tab */}
        {activeTab === "posts" && (
          <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white">Community Posts</h3>
              <button
                onClick={() => setShowCreatePost(true)}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              >
                <Plus className="w-4 h-4" />
                Create Post
              </button>
            </div>

            <div className="space-y-8">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="bg-black/40 backdrop-blur-sm border border-indigo-900/30 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={post.avatar || "/placeholder.svg"}
                      alt={post.author}
                      className="w-12 h-12 rounded-full border-2 border-indigo-500/30"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-white">{post.author}</h4>
                        <span className="text-indigo-400 text-sm">{post.timestamp}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-indigo-200 mb-4">{post.content}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm border border-indigo-700/50"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-6">
                        <button
                          onClick={() => togglePostLike(post.id)}
                          className={`flex items-center gap-2 transition-all duration-300 hover:scale-110 ${
                            post.isLiked ? "text-red-400" : "text-indigo-300 hover:text-red-400"
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${post.isLiked ? "fill-current" : ""}`} />
                          <span>{post.likes}</span>
                        </button>

                        <button className="flex items-center gap-2 text-indigo-300 hover:text-white transition-all duration-300 hover:scale-110">
                          <MessageSquare className="w-5 h-5" />
                          <span>{post.comments}</span>
                        </button>

                        <button className="flex items-center gap-2 text-indigo-300 hover:text-white transition-all duration-300 hover:scale-110">
                          <Share className="w-5 h-5" />
                          Share
                        </button>

                        <button
                          onClick={() => togglePostBookmark(post.id)}
                          className={`flex items-center gap-2 transition-all duration-300 hover:scale-110 ${
                            post.isBookmarked ? "text-yellow-400" : "text-indigo-300 hover:text-yellow-400"
                          }`}
                        >
                          <Bookmark className={`w-5 h-5 ${post.isBookmarked ? "fill-current" : ""}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Q&A Tab */}
        {activeTab === "qa" && (
          <div className="animate-fadeIn">
            <div className="text-center py-16">
              <Reply className="w-16 h-16 text-indigo-400 mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-bold text-white mb-4">Q&A Section</h3>
              <p className="text-indigo-300 text-lg mb-8">Ask questions and get answers from the community</p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                Ask a Question
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
