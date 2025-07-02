import { Card } from "../components/card"
import {
  Hammer,
  PenTool,
  Server,
  Globe,
  Building2,
  Brush,
 
} from 'lucide-react';

interface FeatureCardProps {
    className?:string
}

export const FeatureCard:React.FC<FeatureCardProps> = ({}) => {
       const services = [
            {
                className: 'bg-[#89B0AE] row-span-3 col-span-2',
                children: (
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">Building Construction & Maintenance</h1>
                    <p className="font-roboto">We deliver expert construction and maintenance services, ensuring strong, durable structures with ongoing support for reliability and efficiency.</p>
                    <div className="w-14 h-14 grid place-items-center border-2 rounded-full bg-[#184C42] place-self-end">
                    <Hammer className="text-white w-7 h-7" />
                    </div>
                </div>
                )
            },
            {
                className: 'bg-black text-white row-span-5 col-span-2',
                children: (
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">M&D Design & Installation</h1>
                    <p className="font-roboto">We provide tailored mechanical and design installations — from layout planning and 3D modeling to HVAC, electrical, and plumbing system integration. Whether it’s a smart office or a custom industrial fit-out, we bring creative solutions and technical precision together to ensure smooth execution, lasting performance, and aesthetic harmony. Every design is engineered for efficiency, compliance, and real-world use, with expert teams managing the entire process seamlessly.</p>
                    <div className="w-14 h-14 grid place-items-center border-2 rounded-full bg-[#AD8500] place-self-end">
                    <PenTool className="text-white w-7 h-7" />
                    </div>
                </div>
                )
            },
            {
                className:'bg-[#EBF4FF] col-span-2 row-span-2',
                children: (
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">IT & Telecom Services</h1>
                    <p className="font-roboto">We offer cloud, VoIP, cybersecurity, and network solutions to keep your business connected, protected, and productive.</p>
                    <div className="w-14 h-14 grid place-items-center border-2 rounded-full bg-[#0B3A6E] place-self-end">
                    <Server className="text-white w-7 h-7" />
                    </div>
                </div>
                )
            },
            {
                className: 'bg-[#1A1A1A] text-white row-span-3 col-span-2',
                children: (
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">Import, Export & Sales</h1>
                    <p className="font-roboto">From sourcing to shipping, we streamline international trade with reliable import, export, and product sales operations.</p>
                    <div className="w-14 h-14 grid place-items-center border-2 rounded-full bg-[#912525] place-self-end">
                    <Globe className="text-white w-7 h-7" />
                    </div>
                </div>
                )
            },
            {
                className: 'bg-[#EDF7EE] md:row-span-2',
                children: (
                <div className="p-2">
                    <h1 className="text-md font-semibold mb-2">Property Development</h1>
                    <p className="text-sm font-roboto">From design to delivery, we develop high-quality residential and commercial real estate.</p>
                    <div className="w-10 h-10 grid place-items-center border-2 rounded-full bg-[#24613E] place-self-end">
                    <Building2 className="text-white w-6 h-6" />
                    </div>
                </div>
                )
            },
            {
                className: 'bg-[#F4F1FD] md:row-span-2',
                children: (
                <div className="p-2">
                    <h1 className="text-md font-semibold mb-2">Refurbishment & Renovation</h1>
                    <p className="text-sm font-roboto">Upgrade residential or commercial spaces with modern, value-enhancing transformations.</p>
                    <div className="w-10 h-10 grid place-items-center border-2 rounded-full bg-[#4B3588] place-self-end">
                    <Brush className="text-white w-6 h-6" />
                    </div>
                </div>
                )
            },
           
        ];



    return(
        <div className="grid font-poppins grid-cols-2 md:grid-cols-6 h-fit  gap-2 w-[95%] p-2 mx-auto">
          {
            services.map((feature:{className:string, children:React.ReactNode}) => <Card className={`${feature.className} text-left shadow-sm rounded-md`}>{feature.children}</Card>)
          }
        </div>
    )
}