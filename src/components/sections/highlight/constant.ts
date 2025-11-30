import { Award, Clock, Shield, Target, Users, Zap } from "lucide-react";
import { HighlightItem } from "./types";

export const companyHighlight:HighlightItem[] = [
  {
    id:'Excellence',
    header: "15+ Years of Excellence",
    desc: "Over a decade and a half of delivering exceptional construction and design solutions across residential and commercial projects with unwavering commitment to quality.",
    icon: Award,
    metric: "15+",
    unit: "Years",
    color: "emerald"
  },
  {
    id:'Projects',
    header: "500+ Projects Completed",
    desc: "Successfully delivered hundreds of construction, renovation, and design projects with consistently high client satisfaction ratings and zero major incidents.",
    icon: Target,
    metric: "500+",
    unit: "Projects",
    color: "blue"
  },
  {
    id:'Experts',
    header: "Expert Team of 50+ Professionals",
    desc: "Our diverse team of architects, engineers, project managers, and skilled craftsmen brings decades of combined experience to every project.",
    icon: Users,
    metric: "50+",
    unit: "Experts",
    color: "purple"
  },
  {
    id:'Support',
    header: "24/7 Project Support",
    desc: "Round-the-clock project monitoring and client support to ensure timelines are met and quality standards exceeded throughout the entire process.",
    icon: Clock,
    metric: "24/7",
    unit: "Support",
    color: "orange"
  },
  {
    id:'Liscensed',
    header: "Fully Licensed & Insured",
    desc: "Complete regulatory compliance with comprehensive insurance coverage for all our construction and installation services, ensuring peace of mind.",
    icon: Shield,
    metric: "100%",
    unit: "Compliant",
    color: "red"
  },
  {
    id:'Delivery',
    header: "Fast-Track Delivery",
    desc: "Streamlined processes and efficient project management enable us to deliver high-quality results ahead of schedule without compromising quality.",
    icon: Zap,
    metric: "30%",
    unit: "Faster",
    color: "amber"
  }
];