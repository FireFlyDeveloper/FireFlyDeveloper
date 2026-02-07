const techCategories = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Java", "C++", "Kotlin", "JavaScript"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TailwindCSS", "React Native", "Flutter"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Django", "FastAPI", "Express.js", "GraphQL", "Socket.io"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Google Cloud", "Vercel", "Firebase"]
  },
  {
    category: "IoT & Embedded",
    items: ["Arduino", "Raspberry Pi", "TensorFlow", "PyTorch", "n8n"]
  }
]

export default function TechStack() {
  return (
    <section className="space-y-6">
      <div className="flex items-center mb-2">
        <div className="w-8 h-px bg-gray-900 mr-4"></div>
        <h2 className="text-2xl font-light text-gray-900">Technical Stack</h2>
      </div>
      
      <div className="space-y-8">
        {techCategories.map((category, index) => (
          <div key={index}>
            <h3 className="font-medium text-gray-700 mb-3">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}