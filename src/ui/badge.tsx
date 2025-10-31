const Badge = () => {
    return(
      <div className="flex justify-center ">
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-semibold rounded-full shadow-lg relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <span className="relative flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Build Your Dream
            </span>
            </span>
      </div>
    )
}

export default Badge