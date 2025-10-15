import { companyHighlights, icons } from "../../object";


export const CompanyHighlights = () => {
  return (
    <div className="w-full  mx-auto flex flex-wrap gap-6 py-10">
        {companyHighlights.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <div
              key={i}
              className="
                bg-white 
                border border-gray-100 
                w-full md:w-[47%] p-6  
                rounded-2xl 
                shadow
                transition-all duration-300 ease-out
                hover:border-gray-900 hover:shadow-lg hover:shadow-gray-900/5
                cursor-pointer group
                relative
              "
            >
          
              <div className="grid relative items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900 shrink-0">
                  <Icon className="w-7 h-7 text-gray-700 transition-colors duration-300 group-hover:text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl tracking-wider font-bold text-gray-900 leading-tight">
                    {item.header}
                  </h3>
                </div>
              </div>

            
             
              <p className="text-lg tracking-wider font-roboto text-gray-600 leading-relaxed">{item.desc}</p>

  
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full transition-all duration-300 bg-gray-900 animate-pulse group-hover:scale-150" />
            </div>
          );
        })}
      </div>
  );
};