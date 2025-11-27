export const HighlightContent = ({item, colors}:any) => {
    return(
          <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.header}
                </h3>
                <p className="text-gray-600 tracking-wide text-lg leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div className={`h-1 w-12 ${colors.accent} rounded-full opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-300`} />
                </div>
         </div>
    )
}