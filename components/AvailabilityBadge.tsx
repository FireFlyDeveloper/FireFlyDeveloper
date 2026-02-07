export default function AvailabilityBadge() {
  return (
    <div className="bg-linear-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Open for Opportunities</h3>
          <p className="text-gray-600 text-sm">Available for freelance and full-time roles</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
            <span className="text-sm text-gray-700">Available</span>
          </div>
        </div>
      </div>
    </div>
  )
}