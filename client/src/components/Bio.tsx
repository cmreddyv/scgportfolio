import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Bio() {
  return (
    <section id="bio" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            I've had the privilege of being part of an amazing cloud engineering team, 
            working with cutting-edge technologies and solving complex challenges.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden shadow-lg border-none">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Man working with laptop" 
                  className="w-full aspect-video object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">My Platform Engineering Journey</h3>
            <p className="text-neutral-600 mb-4">
              As a Platform Engineer at Scentre Group, I've been dedicated to building and optimizing cloud infrastructure 
              that scales with business needs. My focus has been on Google Cloud Platform (GCP), Kubernetes,
              Infrastructure as Code using Terraform, and Vehicle Recognisation Engine (VRE).
            </p>
            <p className="text-neutral-600 mb-4">
              I've implemented CI/CD pipelines, and architected solutions that have 
              significantly improved reliability and reduced operational costs.
            </p>
            <p className="text-neutral-600">
              Working with this incredible team has been one of the most rewarding experiences of my career.
              The challenges we've overcome together and the innovations we've created with the VRE team will always be a highlight.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
