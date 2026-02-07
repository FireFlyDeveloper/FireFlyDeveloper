export default function ServicesSection() {
  const services = [
    {
      title: "Full Stack Development",
      description: "Scalable web applications with modern frameworks"
    },
    {
      title: "Backend Architecture",
      description: "Robust APIs and system design"
    },
    {
      title: "IoT Platforms",
      description: "End-to-end IoT solutions and dashboards"
    },
    {
      title: "Automation Systems",
      description: "Workflow automation and intelligent agents"
    },
    {
      title: "Cloud Infrastructure",
      description: "Deployment and optimization"
    },
    {
      title: "Real-time Systems",
      description: "WebSocket and live data applications"
    }
  ]

  return (
    <section className="space-y-6">
      <div className="flex items-center mb-2">
        <div className="w-8 h-px bg-gray-900 mr-4"></div>
        <h2 className="text-2xl font-light text-gray-900">Services & Expertise</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-5 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-all duration-300 hover:shadow-sm group"
          >
            <div className="flex items-start mb-3">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-gray-100 transition-colors">
                <span className="text-gray-600 text-sm font-medium">{index + 1}</span>
              </div>
              <h3 className="font-semibold text-gray-900">{service.title}</h3>
            </div>
            <p className="text-gray-600 text-sm pl-11">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}