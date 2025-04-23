import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Cloud = {
  id: number;
  size: number;
  position: {
    x: number;
    y: number;
  };
  speed: number;
  opacity: number;
};

export default function CloudAnimation() {
  const [clouds, setClouds] = useState<Cloud[]>([]);
  
  useEffect(() => {
    // Generate random clouds
    const newClouds: Cloud[] = [];
    const cloudCount = window.innerWidth < 768 ? 5 : 8;
    
    for (let i = 0; i < cloudCount; i++) {
      newClouds.push({
        id: i,
        size: Math.random() * 80 + 50, // 50-130px
        position: {
          x: Math.random() * 100, // 0-100%
          y: Math.random() * 100, // 0-100%
        },
        speed: Math.random() * 30 + 20, // 20-50s
        opacity: Math.random() * 0.2 + 0.1, // 0.1-0.3
      });
    }
    
    setClouds(newClouds);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute"
          style={{
            top: `${cloud.position.y}%`,
            left: `${cloud.position.x}%`,
            opacity: cloud.opacity,
          }}
          animate={{
            x: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: cloud.speed,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <svg 
            width={cloud.size} 
            height={cloud.size * 0.6} 
            viewBox="0 0 24 14" 
            className="text-white fill-current"
          >
            <path d="M20 17.58A5 5 0 0 0 18.92 13a7 7 0 0 0-1.15-13.96 6.86 6.86 0 0 0-5.13 1.84 7.03 7.03 0 0 0-1.64 2.04 5 5 0 0 0-8.19 4.97A5 5 0 0 0 0 12.6a5 5 0 0 0 6.84 4.65A5 5 0 0 0 12 21a5 5 0 0 0 8-3.42z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
