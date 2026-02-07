export default function ProfileHeader() {
  return (
    <header className="text-center lg:text-left">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 rounded-full bg-linear-to-br from-gray-100 to-gray-200 border-4 border-white shadow-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-3xl font-light text-gray-700">
            KS
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-light mb-3 text-gray-900 tracking-tight">
          Kim Eduard Saludes
        </h1>
        <h2 className="text-xl text-gray-600 font-normal mb-4">
          Full Stack Developer • IoT Engineer
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <div className="text-gray-500">
            <span className="font-medium">Age:</span> 21
          </div>
          <div className="text-gray-500">
            <span className="font-medium">Birthday:</span> July 01, 2004
          </div>
        </div>
      </div>
      
      <div className="pt-6 border-t border-gray-200">
        <p className="text-gray-700 leading-relaxed">
          I build production-grade systems, automation pipelines, IoT platforms, and scalable web applications.
        </p>
      </div>
    </header>
  )
}