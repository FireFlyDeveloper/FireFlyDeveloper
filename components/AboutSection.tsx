export default function AboutSection() {
  const aboutPoints = [
    {
      icon: "💻",
      title: "Full Stack Developer",
      description: "Focused on scalable, real-world systems"
    },
    {
      icon: "🔧",
      title: "Multi-Platform Expertise",
      description: "Web, Mobile, Backend, Cloud, AI, and Embedded systems"
    },
    {
      icon: "🤖",
      title: "Automation Specialist",
      description: "Strong interest in automation, agents, and distributed systems"
    },
    {
      icon: "🏗️",
      title: "Infrastructure Builder",
      description: "Passionate about building platforms and tools"
    }
  ]

  return (
    <section className="space-y-6">
      <div className="flex items-center mb-2">
        <div className="w-8 h-px bg-gray-900 mr-4"></div>
        <h2 className="text-2xl font-light text-gray-900">About Me</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aboutPoints.map((point, index) => (
          <div 
            key={index} 
            className="p-5 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors group"
          >
            <div className="text-2xl mb-3 opacity-80">{point.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="text-gray-600 italic">
          ⚡ I work out, read novels, and watch anime — balance fuels creativity.
        </p>
      </div>
    </section>
  )
}