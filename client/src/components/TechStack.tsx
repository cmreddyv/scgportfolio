import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiGooglecloud, SiKubernetes, SiTerraform, SiDocker, SiGithubactions, SiGrafana, SiPrometheus } from "react-icons/si";
import { Ship } from "lucide-react";

const technologies = [
  {
    name: "Google Cloud Platform",
    icon: <SiGooglecloud className="h-12 w-12" />,
    description: "Built and managed cloud infrastructure using GCP services like Compute Engine, Cloud Storage, Cloud SQL, and Cloud Functions.",
    color: "text-blue-500"
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes className="h-12 w-12" />,
    description: "Orchestrated containerized applications for high availability, scalability, and efficient resource utilization.",
    color: "text-blue-600"
  },
  {
    name: "Terraform",
    icon: <SiTerraform className="h-12 w-12" />,
    description: "Implemented infrastructure as code to automate provisioning and management of cloud resources.",
    color: "text-purple-600"
  },
  {
    name: "Docker",
    icon: <SiDocker className="h-12 w-12" />,
    description: "Containerized applications for consistent deployments across different environments.",
    color: "text-blue-700"
  },
  {
    name: "CI/CD Pipelines",
    icon: <SiGithubactions className="h-12 w-12" />,
    description: "Built automated pipelines for continuous integration and delivery, ensuring rapid and reliable deployments.",
    color: "text-gray-700"
  },
  {
    name: "Monitoring & Observability",
    icon: <SiGrafana className="h-12 w-12" />,
    description: "Implemented comprehensive monitoring solutions using Prometheus, Grafana, and Google Cloud Monitoring.",
    color: "text-orange-500"
  },
  {
    name: "Prometheus",
    icon: <SiPrometheus className="h-12 w-12" />,
    description: "Setup metrics collection and alerting for proactive issue detection and resolution.",
    color: "text-red-500"
  },
  {
    name: "Helm",
    icon: <Ship className="h-12 w-12" />,
    description: "Managed Kubernetes applications using Helm charts for simplified deployment and updates.",
    color: "text-blue-400"
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Technology Stack</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            The key technologies I've worked with during my time as a cloud engineer.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className={`${tech.color} mb-4`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{tech.name}</h3>
                  <p className="text-neutral-600 text-center">{tech.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
