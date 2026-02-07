export default function EducationSection() {
  const educationHistory = [
    {
      school: "Nagbunga Elementary School",
      location: "Nagbunga, Zambales",
      period: "2009 - 2015",
      details: "Elementary Education"
    },
    {
      school: "Balayan Colleges",
      location: "Balayan, Batangas",
      period: "2015 - 2019",
      details: "Junior High School"
    },
    {
      school: "Balayan Senior High School",
      location: "Balayan, Batangas",
      period: "2019 - 2021",
      details: "Senior High School - ICT Strand",
      highlight: "Graduated with High Honors",
      award: true
    },
    {
      school: "Batangas State University - Balayan Campus",
      location: "Balayan, Batangas",
      period: "2021 - 2022",
      details: "Bachelor's in Industrial Technology - Computer Technology",
      highlight: "Completed 1st year before transferring to BSIT"
    },
    {
      school: "Batangas State University - Balayan Campus",
      location: "Balayan, Batangas",
      period: "2022 - Present",
      details: "Bachelor of Science in Information Technology",
      current: true,
      highlight: "Transferred to BSIT program • Current: 3rd Year, 2nd Semester"
    }
  ]

  const certifications = ["N/A"]

  return (
    <section className="space-y-6">
      <div className="flex items-center mb-2">
        <div className="w-8 h-px bg-gray-900 mr-4"></div>
        <h2 className="text-2xl font-light text-gray-900">Education</h2>
      </div>
      
      <div className="space-y-8">
        {educationHistory.map((edu, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline dot */}
            <div className={`absolute left-0 top-2 w-3 h-3 rounded-full ${
              edu.current 
                ? 'bg-cyan-500 ring-4 ring-cyan-100' 
                : 'bg-gray-300 group-hover:bg-gray-400 transition-colors'
            }`}></div>
            
            {/* Timeline line */}
            {index !== educationHistory.length - 1 && (
              <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gray-200"></div>
            )}
            
            <div className={`p-5 rounded-xl ${
              edu.current 
                ? 'bg-linear-to-r from-cyan-50 to-white border border-cyan-100' 
                : 'bg-white border border-gray-100 group-hover:border-gray-200'
            } transition-all duration-300 hover:shadow-sm`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{edu.school}</h3>
                  <p className="text-sm text-gray-600 truncate">{edu.location}</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-4 shrink-0">
                  <div className="flex flex-col items-end">
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.current 
                          ? 'bg-cyan-100 text-cyan-800' 
                          : 'bg-gray-100 text-gray-700'
                      } whitespace-nowrap`}>
                        {edu.period}
                      </span>
                    </div>
                    {edu.current && (
                      <div className="mt-1">
                        <span className="text-xs text-cyan-600 font-medium px-2 py-0.5 bg-cyan-50 rounded">
                          Current
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-2">{edu.details}</p>
              
              {edu.highlight && (
                <div className="flex items-start mt-2">
                  <div className={`w-2 h-2 rounded-full mr-2 mt-1.5 shrink-0 ${
                    edu.award ? 'bg-amber-400' : 'bg-gray-400'
                  }`}></div>
                  <p className={`text-sm ${edu.award ? 'text-amber-700 font-medium' : 'text-gray-600'} wrap-break-word`}>
                    {edu.highlight}
                    {edu.award && (
                      <span className="ml-2 inline-flex items-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-6 border-t border-gray-100">
        <h4 className="font-medium text-gray-700 mb-4">Certifications & Professional Development</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="p-3 bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-colors hover:shadow-sm"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 shrink-0">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700 wrap-break-word">{cert}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}