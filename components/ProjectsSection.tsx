export default function ProjectsSection() {
  const projects = [
    {
      category: "API & Data Services",
      items: [
        {
          name: "Manga-API",
          description: "Versatile API for manga titles, chapters, and details retrieval",
          link: "https://github.com/FireFlyDeveloper/Manga-API"
        }
      ]
    },
    {
      category: "Backend & Arduino IoT",
      items: [
        {
          name: "UPtime",
          description: "Node.js monitoring system with real-time device tracking and email alerts",
          link: "https://github.com/FireFlyDeveloper/UPtime"
        },
        {
          name: "ESP8266-Server-Auto-Power-Controller",
          description: "Lightweight ESP8266 health monitoring and remote power control",
          link: "https://github.com/FireFlyDeveloper/ESP8266-Server-Auto-Power-Controller"
        },
        {
          name: "VertexHermesProxy",
          description: "Google Agent Studio OpenAI proxy for Hermes Agent",
          link: "https://github.com/FireFlyDeveloper/VertexHermesProxy"
        },
        {
          name: "VA",
          description: "Linux real-time voice assistant with wake word, TTS, and speech recognition",
          link: "https://github.com/FireFlyDeveloper/VA"
        },
        {
          name: "Zero",
          description: "Unofficial Facebook Messenger Bot",
          link: "https://github.com/FireFlyDeveloper/Zero"
        },
        {
          name: "TiktokAPI",
          description: "TikTok API with no watermark",
          link: "https://github.com/FireFlyDeveloper/TiktokAPI"
        },
        {
          name: "Washing-Machine-Semi-Automatic",
          description: "Documentation needed",
          link: "https://github.com/FireFlyDeveloper/Washing-Machine-Semi-Automatic",
          needsDocs: true
        }
      ]
    },
    {
      category: "Full Stack (Frontend + Backend + Arduino IoT)",
      items: [
        {
          name: "Power-Monitoring",
          description: "Real-time energy monitoring web app with AI-powered reporting (Next.js, React, TailwindCSS)",
          link: "https://github.com/FireFlyDeveloper/Power-Monitoring"
        },
        {
          name: "Power-Monitoring-Backend",
          description: "Backend services for Power Monitoring system - Documentation needed",
          link: "https://github.com/FireFlyDeveloper/Power-Monitoring-Backend",
          needsDocs: true
        },
        {
          name: "Power-Monitoring-Arduino",
          description: "Arduino firmware for Power Monitoring - Documentation needed",
          link: "https://github.com/FireFlyDeveloper/Power-Monitoring-Arduino",
          needsDocs: true
        }
      ]
    },
    {
      category: "Full Stack (Frontend + Backend)",
      items: [
        {
          name: "face-door-app",
          description: "React + Capacitor Android app for face enrollment via Bluetooth",
          link: "https://github.com/FireFlyDeveloper/face-door-app"
        },
        {
          name: "face-door-pi",
          description: "Raspberry Pi face recognition door lock with 3-layer liveness detection",
          link: "https://github.com/FireFlyDeveloper/face-door-pi"
        },
        {
          name: "Drownsiness",
          description: "Documentation needed",
          link: "https://github.com/FireFlyDeveloper/Drownsiness",
          needsDocs: true
        }
      ]
    }
  ]

  return (
    <section className="space-y-6">
      <div className="flex items-center mb-2">
        <div className="w-8 h-px bg-gray-900 mr-4"></div>
        <h2 className="text-2xl font-light text-gray-900">Projects</h2>
      </div>
      
      <div className="space-y-8">
        {projects.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="font-medium text-gray-700 mb-4">{category.category}</h3>
            <div className="space-y-3">
              {category.items.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-sm ${
                    project.needsDocs
                      ? 'bg-amber-50 border-amber-200 hover:border-amber-300'
                      : 'bg-white border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold text-gray-900 ${project.needsDocs ? 'text-amber-900' : ''}`}>
                        {project.name}
                      </h4>
                      {project.needsDocs && (
                        <span className="inline-block mt-1 text-xs text-amber-700 font-medium px-2 py-0.5 bg-amber-200 rounded">
                          Documentation Needed
                        </span>
                      )}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 shrink-0 text-cyan-600 hover:text-cyan-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <p className={`text-sm ${project.needsDocs ? 'text-amber-800' : 'text-gray-600'} wrap-break-word`}>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}