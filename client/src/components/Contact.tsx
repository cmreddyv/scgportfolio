import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Stay in Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            I'd love to stay connected! Here's how you can reach me.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-primary to-accent p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
                  <p>I'm excited for new opportunities and collaborations</p>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="flex items-center justify-center gap-2 h-16 text-lg"
                      onClick={() => window.open('mailto:cmreddy.v@gmail.com')}
                    >
                      <Mail className="h-5 w-5" />
                      Email Me
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="flex items-center justify-center gap-2 h-16 text-lg"
                      onClick={() => window.open('https://www.linkedin.com/in/chandramohanreddyv/', '_blank')}
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="flex items-center justify-center gap-2 h-16 text-lg"
                      onClick={() => window.open('https://github.com/cmreddyv', '_blank')}
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="flex items-center justify-center gap-2 h-16 text-lg"
                      onClick={() => window.open('https://twitter.com/cmreddyv', '_blank')}
                    >
                      <Twitter className="h-5 w-5" />
                      Twitter
                    </Button>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-neutral-600">
                      Looking forward to staying connected and hearing about your cloud adventures!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
