import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContent = () => {
    document.getElementById('bio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/90 to-accent/90 text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="md:max-w-2xl lg:max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Thanks for the Amazing Journey
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            As I embark on my next adventure, I wanted to share my journey and experiences from my time as a cloud engineer.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              className="rounded-full text-primary px-6 py-6 font-semibold bg-white hover:bg-neutral-100"
              onClick={scrollToContent}
            >
              Explore My Journey
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full text-white animate-bounce"
          onClick={scrollToContent}
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
      </motion.div>
    </section>
  );
}
