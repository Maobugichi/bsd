import { Card } from "../components/card"
import {
  Hammer,
  ToolCaseIcon,
  ComputerIcon,
  Globe,
  Building2,
  Construction,
 
} from 'lucide-react';

interface FeatureCardProps {
    className?:string
}

export const FeatureCard:React.FC<FeatureCardProps> = ({}) => {
       const services = [
            {
                className: 'bg-black text-white row-span-3 col-span-2',
                children: (
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">Building Construction & Maintenance</h1>
                    <p className="font-roboto text-[#F5F5F5]">We deliver expert construction and maintenance services, ensuring strong, durable structures with ongoing support for reliability and efficiency.</p>
                    <div className="w-12 h-12 grid place-items-center border-[#D4AF37] border-2 rounded-full bg-[#000] place-self-end">
                    <Hammer className="text-[#D4AF37] w-7 h-7" />
                    </div>
                </div>
                )
            },
            {
                className: 'bg-[#9b2226] text-white row-span-5 col-span-2',
                children: (
                <div className="p-4 flex flex-col gap-3">
                    <h1 className="text-xl font-semibold mb-2">M&D Design & Installation</h1>
                    <p className="font-roboto text-[#F5F5F5] tracking-wider leading-7">We provide tailored mechanical and design installations — from layout planning and 3D modeling to HVAC, electrical, and plumbing system integration. Whether it’s a smart office or a custom industrial fit-out, we bring creative solutions and technical precision together to ensure smooth execution, lasting performance, and aesthetic harmony. Every design is engineered for efficiency, compliance, and real-world use, with expert teams managing the entire process seamlessly.</p>
                    <div className="w-12 h-12 border-[#D4AF37] grid place-items-center border-2 rounded-full  ">
                    <ToolCaseIcon className="text-[#D4AF37] w-7 h-7" />
                    </div>
                </div>
                )
            },
            {
                className:' bg-[#2d3436] text-white col-span-2 row-span-2',
                children: (
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">IT & Telecom Services</h1>
                    <p className="font-roboto text-[#F5F5F5]">We offer cloud, VoIP, cybersecurity, and network solutions to keep your business connected, protected, and productive.</p>
                    <div className="w-12 border-[#D4AF37] h-12 grid place-items-center border-2 rounded-full  place-self-end">
                    <ComputerIcon className="text-[#D4AF37] w-7 h-7" />
                    </div>
                </div>
                )
            },
            {
                className: 'bg-[#30323D] text-white row-span-3 col-span-2',
                children: (
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">Import, Export & Sales</h1>
                    <p className="font-roboto text-[#F5F5F5]">From product sourcing to final delivery, we simplify and manage every stage of international trade. Our end-to-end import, export, and product sales operations ensure reliability, efficiency, and compliance, enabling businesses to expand globally with confidence and ease.</p>
                    <div className="w-12 border-[#D4AF37] h-12 grid place-items-center border-2 rounded-full  place-self-end">
                    <Globe className="text-[#D4AF37] w-7 h-7" />
                    </div>
                </div>
                )
            },
            {
                className: 'bg-[#324D3E] text-white md:row-span-2',
                children: (
                <div className="p-2">
                    <h1 className="text-md font-semibold mb-2">Property Development</h1>
                    <p className="text-sm text-[#F5F5F5] font-roboto">From design to delivery, we develop high-quality residential and commercial real estate.</p>
                    <div className="border-[#D4AF37] w-10 h-10 grid place-items-center border-2 rounded-full place-self-end">
                    <Building2 className="text-[#D4AF37] w-6 h-6" />
                    </div>
                </div>
                )
            },
            {
                className: 'bg-[#929982] text-white md:row-span-2',
                children: (
                <div className="p-2">
                    <h1 className="text-md font-semibold mb-2">Refurbishment & Renovation</h1>
                    <p className="text-sm text-[#F5F5F5] font-roboto">Upgrade residential or commercial spaces with modern, value-enhancing transformations.</p>
                    <div className="border-[#D4AF37] w-10 h-10 grid place-items-center border-2 rounded-full  place-self-end">
                    <Construction className="text-[#D4AF37] w-6 h-6" />
                    </div>
                </div>
                )
            },
           
        ];



    return(
        <div className="grid font-poppins grid-cols-2 md:grid-cols-4  lg:grid-cols-6 h-fit  gap-2 w-[95%] p-2 mx-auto">
          {
            services.map((feature:{className:string, children:React.ReactNode}) => <Card className={`${feature.className} text-left shadow-sm rounded-md`}>{feature.children}</Card>)
          }
        </div>
    )
}