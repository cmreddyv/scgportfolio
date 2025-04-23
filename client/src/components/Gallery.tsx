import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60",
    alt: "Cloud computing interface",
    caption: "Working on GCP infrastructure"
  },
  {
    url: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
    alt: "Technology team collaboration",
    caption: "Brainstorming session with the cloud team"
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    alt: "Cloud computing dashboard",
    caption: "Monitoring our Kubernetes clusters"
  },
  {
    url: "https://images.unsplash.com/photo-1535378620166-273708d44e4c",
    alt: "Team farewell celebration",
    caption: "Team building event in 2022"
  },
  {
    url: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3",
    alt: "Cloud architecture diagram",
    caption: "Planning our multi-region deployment"
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Team working together",
    caption: "Hackathon winners 2021"
  },
  {
    url: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
    alt: "Coding on laptop",
    caption: "Late night debugging session"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Memories Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A collection of memorable moments from my journey with the team.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-md overflow-hidden">
                    <CardContent className="p-0">
                      <AspectRatio ratio={4/3}>
                        <img 
                          src={photo.url} 
                          alt={photo.alt} 
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="p-3 bg-white">
                        <p className="text-center text-neutral-700">{photo.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-2" />
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
