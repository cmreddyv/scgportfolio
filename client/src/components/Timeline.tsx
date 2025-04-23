import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, Star, Code, Server, Cloud, Award } from "lucide-react";

const timelineEvents = [
  {
    date: "April 2023",
    title: "Joined the Cloud Team",
    description: "Started my journey as a Platform Engineer at Scentre Group focusing on GCP infrastructure.",
    icon: <Cloud className="h-6 w-6" />,
    highlight: false
  },
  {
    date: "July 2023",
    title: "Infrastructure as Code Initiative",
    description: "Implemented Terraform across all projects, reducing deployment time by 70%.",
    icon: <Code className="h-6 w-6" />,
    highlight: true
  },
  {
    date: "October 2023",
    title: "Cost Optimization",
    description: "Led initiatives to optimize cloud resources, resulting in significant monthly cost savings.",
    icon: <Server className="h-6 w-6" />,
    highlight: false
  },
  {
    date: "January 2024",
    title: "Multi-Region Deployment",
    description: "Architected and implemented multi-region deployments to improve global performance and disaster recovery.",
    icon: <Cloud className="h-6 w-6" />,
    highlight: true
  },
  {
    date: "February 2024",
    title: "DevSecOps Implementation",
    description: "Integrated security scanning and compliance checks into the CI/CD pipeline.",
    icon: <Award className="h-6 w-6" />,
    highlight: false
  },
  {
    date: "March 2024",
    title: "VRE Project",
    description: "Collaborated with the VRE team to build and deploy virtual room experience infrastructure.",
    icon: <Star className="h-6 w-6" />,
    highlight: true
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">My Journey Timeline</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Key milestones and projects from my time as a Platform Engineer at Scentre Group.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 z-0"></div>
          
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-end mb-4 md:mb-0">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <CalendarIcon className="h-5 w-5 text-primary mr-2 md:mx-2" />
                    <p className="text-sm font-medium text-primary">{event.date}</p>
                  </div>
                </div>
                
                <div className="timeline-icon bg-white border-4 border-primary rounded-full p-2 z-10">
                  <div className={`${event.highlight ? 'bg-primary' : 'bg-white'} rounded-full p-2 text-${event.highlight ? 'white' : 'primary'}`}>
                    {event.icon}
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-8">
                  <Card className={`${event.highlight ? 'border-primary shadow-md' : ''}`}>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-neutral-600">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
