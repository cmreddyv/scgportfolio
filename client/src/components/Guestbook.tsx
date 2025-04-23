import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertGuestbookEntrySchema } from "@shared/schema";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { MessageSquare, Send } from "lucide-react";

const formSchema = insertGuestbookEntrySchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(5, "Message must be at least 5 characters").max(500, "Message cannot exceed 500 characters")
});

export default function Guestbook() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });
  
  const { data: guestbookEntries, isLoading } = useQuery({
    queryKey: ['/api/guestbook'],
  });
  
  const mutation = useMutation({
    mutationFn: (data: z.infer<typeof formSchema>) => {
      return apiRequest('POST', '/api/guestbook', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/guestbook'] });
      form.reset();
      toast({
        title: "Message Submitted",
        description: "Thank you for signing my guestbook!",
      });
      setIsSubmitting(false);
    },
    onError: (error) => {
      console.error("Error submitting entry:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your message. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  });
  
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    mutation.mutate(data);
  };
  
  return (
    <section id="guestbook" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Sign My Guestbook</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Leave a message, share a memory, or wish me well on my next adventure.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Submit Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Send className="mr-2 h-5 w-5 text-primary" />
                  Leave a Message
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share a memory or wish me well..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Sign Guestbook"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Guestbook Entries */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                  Recent Messages
                </h3>
                
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {isLoading ? (
                    <p className="text-center py-8 text-neutral-500">Loading messages...</p>
                  ) : !guestbookEntries || guestbookEntries.length === 0 ? (
                    <p className="text-center py-8 text-neutral-500">Be the first to sign the guestbook!</p>
                  ) : (
                    guestbookEntries.map((entry: any, index: number) => (
                      <motion.div
                        key={entry.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="bg-primary/5 border-none">
                          <CardContent className="p-4">
                            <p className="text-neutral-700 mb-2">{entry.message}</p>
                            <div className="flex justify-between items-center text-sm">
                              <p className="font-medium text-primary">{entry.name}</p>
                              <p className="text-neutral-500">
                                {new Date(entry.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
