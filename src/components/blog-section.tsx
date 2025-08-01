import { useState } from "react"
import { Plus, Edit, Trash2, Calendar, User } from "lucide-react"

interface Blog {
  id: number
  title: string
  content: string
  author: string
  date: string
  tags: string[]
}

export function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "Understanding Deep Learning: A Comprehensive Guide",
      content: "Deep learning has revolutionized the field of artificial intelligence...",
      author: "Data Scientist",
      date: "2024-01-15",
      tags: ["deep-learning", "ai", "neural-networks"],
    },
    {
      id: 2,
      title: "MLOps Best Practices for Production Systems",
      content: "Deploying machine learning models in production requires careful consideration...",
      author: "Data Scientist",
      date: "2024-01-10",
      tags: ["mlops", "production", "deployment"],
    },
  ])

  const [isEditing, setIsEditing] = useState(false)
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  })

  const handleAdd = () => {
    setIsEditing(true)
    setEditingBlog(null)
    setFormData({ title: "", content: "", tags: "" })
  }

  const handleEdit = (blog: Blog) => {
    setIsEditing(true)
    setEditingBlog(blog)
    setFormData({
      title: blog.title,
      content: blog.content,
      tags: blog.tags.join(", "),
    })
  }

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id))
  }

  const handleSave = () => {
    const tagsArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag)

    if (editingBlog) {
      setBlogs(
        blogs.map((blog) =>
          blog.id === editingBlog.id
            ? { ...blog, title: formData.title, content: formData.content, tags: tagsArray }
            : blog,
        ),
      )
    } else {
      const newBlog: Blog = {
        id: Date.now(),
        title: formData.title,
        content: formData.content,
        author: "Data Scientist",
        date: new Date().toISOString().split("T")[0],
        tags: tagsArray,
      }
      setBlogs([newBlog, ...blogs])
    }

    setIsEditing(false)
    setEditingBlog(null)
    setFormData({ title: "", content: "", tags: "" })
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditingBlog(null)
    setFormData({ title: "", content: "", tags: "" })
  }

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-indigo-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Data Science Blogs</h2>
          <button
            onClick={handleAdd}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Blog
          </button>
        </div>

        {isEditing && (
          <div className="bg-black border border-indigo-900/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">{editingBlog ? "Edit Blog" : "Add New Blog"}</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Blog Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-gray-800 border border-indigo-900/30 rounded-lg px-4 py-2 text-white placeholder-indigo-300"
              />
              <textarea
                placeholder="Blog Content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={6}
                className="w-full bg-gray-800 border border-indigo-900/30 rounded-lg px-4 py-2 text-white placeholder-indigo-300"
              />
              <input
                type="text"
                placeholder="Tags (comma separated)"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full bg-gray-800 border border-indigo-900/30 rounded-lg px-4 py-2 text-white placeholder-indigo-300"
              />
              <div className="flex space-x-4">
                <button
                  onClick={handleSave}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-black border border-indigo-900/30 rounded-lg p-6 hover:border-indigo-600/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{blog.title}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="text-indigo-400 hover:text-white transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-indigo-200 mb-4 line-clamp-3">{blog.content}</p>

              <div className="flex items-center space-x-4 mb-4 text-sm text-indigo-300">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
