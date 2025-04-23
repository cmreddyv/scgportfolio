import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function FarewellMessage() {
  return (
    <section id="farewell" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Farewell Message</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A few words as I embark on my next adventure.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 md:p-12">
                <div className="text-primary mb-6">
                  <Quote className="h-12 w-12 mx-auto opacity-50" />
                </div>
                
                <p className="text-lg md:text-xl text-neutral-700 mb-6 text-center italic">
                  As I prepare to embark on a new chapter in my career, I wanted to express my profound gratitude for the incredible journey we've shared together. The past year working with this amazing platform engineering team at Scentre Group has been transformative, both professionally and personally.
                </p>
                
                <p className="text-lg md:text-xl text-neutral-700 mb-6 text-center italic">
                  I've learned so much from each of you – your expertise, creativity, and dedication have inspired me daily. Special thanks to my manager, James Parsons, for his guidance and leadership. To the VRE team, Megan and Garry, thank you for the amazing collaboration and innovative spirit. Together, we've solved complex problems, built innovative solutions, and created infrastructure that will continue to serve the company well into the future.
                </p>
                
                <p className="text-lg md:text-xl text-neutral-700 mb-8 text-center italic">
                  While I'm excited about the new challenges ahead, I will deeply miss our collaboration and camaraderie. Thank you for your support, friendship, and for making this team feel like a second family. I look forward to staying connected and watching all the amazing things you'll continue to accomplish.
                </p>
                
                <p className="text-right text-lg font-bold text-primary">With gratitude and appreciation,</p>
                <p className="text-right text-xl font-bold text-primary">Chandra</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
