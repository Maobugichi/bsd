import { companyHighlights, icons } from "../../object";

export const CompanyHighlights = () => {
  return (
    <div className="w-full  mx-auto flex flex-wrap gap-6 py-10">
      {companyHighlights.map((item, i) => {
        const Icon = icons[item.icon];
        return (
          <div
            key={i}
            className="  bg-white border-t-2 w-full md:w-[47%] p-6  duration-300"
          >
           <div className="grid relative items-center gap-3 mb-4">
             <div className="w-10 grid place-items-center border-2 rounded-full h-10 place-self-end shadow"> <Icon className="" /></div>
              <h3 className="text-lg font-semibold text-gray-800 ">{item.header}</h3>
            </div>
            <p className="text-sm font-roboto text-gray-600">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};