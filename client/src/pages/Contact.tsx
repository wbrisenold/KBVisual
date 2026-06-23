import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  eventDate: z.string().optional(),
  location: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your needs")
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      eventDate: "",
      location: "",
      message: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Format data for Formspree
      const formData = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone || '',
        serviceType: data.serviceType,
        eventDate: data.eventDate || '',
        location: data.location || '',
        message: data.message,
        _replyto: data.email
      };
      
      // Try Formspree first
      const response = await fetch('https://formspree.io/f/mjkvoqnv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Trigger Google Ads conversion tracking
        if (typeof (window as any).gtag !== 'undefined') {
          (window as any).gtag('event', 'conversion', {'send_to': 'AW-16461012087/hduWCMqfyt8aEPe4nKk9'});
        }
        
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I will get back to you within 24 hours.",
        });
        form.reset();
      } else {
        // Fallback to alternative method
        const fallbackResponse = await fetch('https://formsubmit.co/ajax/wilkensbrisenold@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            _captcha: 'false',
            _subject: `New Contact Form Submission from ${formData.name}`
          })
        });
        
        if (fallbackResponse.ok) {
          // Trigger Google Ads conversion tracking
          if (typeof (window as any).gtag !== 'undefined') {
            (window as any).gtag('event', 'conversion', {'send_to': 'AW-16461012087/hduWCMqfyt8aEPe4nKk9'});
          }
          
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I will get back to you within 24 hours.",
          });
          form.reset();
        } else {
          throw new Error('Both form services failed');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Studio Location",
      content: ["Orlando, FL", "Available for travel nationwide"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: ["Wilkensbrisenold@gmail.com"],
      href: "mailto:Wilkensbrisenold@gmail.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      content: ["Within 24 hours", "Monday - Friday, 9AM - 6PM EST"]
    }
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/kbvisualz_?igsh=N20ybjQyN3JoY2ox", icon: "fab fa-instagram", label: "Instagram" }
  ];

  return (
    <div className="min-h-screen page-content" style={{ backgroundColor: '#fafafa' }}>
      <section className="section-padding pt-32" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Book Your Session
            </h1>
            <p className="text-xl text-stone-700 opacity-80 max-w-2xl mx-auto">
              Ready to start planning your photography session? Share your vision and let's create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              style={{ backgroundColor: "#f8f8f8" }}
              className="rounded-lg p-8 shadow-2xl border border-yellow-600/10 hover:border-yellow-600/20 transition-all duration-500"
            >
              <h2 className="text-2xl font-semibold text-yellow-600 mb-6">
                Book Your Photography Session
              </h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-stone-900 font-medium">
                            First Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-white border-yellow-600 border-opacity-30 text-stone-900 focus:border-yellow-600"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-stone-900 font-medium">
                            Last Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-white border-yellow-600 border-opacity-30 text-stone-900 focus:border-yellow-600"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-stone-900 font-medium">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className="bg-white border-yellow-600 border-opacity-30 text-stone-900 focus:border-yellow-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-stone-900 font-medium">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            {...field}
                            value={field.value || ""}
                            className="bg-white border-yellow-600 border-opacity-30 text-stone-900 focus:border-yellow-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-stone-900 font-medium">
                          Service Type *
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white border-yellow-600 border-opacity-30 text-stone-900 focus:border-yellow-600">
                              <SelectValue placeholder="Select a service type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding Photography</SelectItem>
                            <SelectItem value="portrait">Individual Portrait Session</SelectItem>
                            <SelectItem value="event">Event Photography</SelectItem>
                            <SelectItem value="corporate">Corporate & Business</SelectItem>
                            <SelectItem value="videography">Videography Services</SelectItem>
                            <SelectItem value="other">Other Services</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-stone-900 font-medium">
                            Preferred Date
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              {...field}
                              value={field.value || ""}
                              className="bg-white border-yellow-600 border-opacity-30 text-stone-900 focus:border-yellow-600"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-stone-900 font-medium">
                            Location
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="City, State or Venue"
                              {...field}
                              value={field.value || ""}
                              className="bg-white border-yellow-600 border-opacity-30 text-stone-900 focus:border-yellow-600 placeholder-stone-400"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-stone-900 font-medium">
                          Tell Me About Your Vision *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Share details about your event, style preferences, location, and any specific ideas you have in mind..."
                            {...field}
                            className="bg-white border-yellow-600 border-opacity-30 text-stone-900 focus:border-yellow-600 placeholder-stone-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gold-gradient hover:opacity-90 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <motion.div 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div 
                            className="rounded-full h-4 w-4 border-b-2 border-stone-100"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          ></motion.div>
                          Sending...
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Send className="w-5 h-5" />
                          Send Message
                        </motion.div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-yellow-600 mb-6">
                  Let's Connect
                </h2>
                <p className="text-stone-700 opacity-90 leading-relaxed mb-8">
                  I believe every photograph should tell a story and every client should feel like the most important person in the room. Let's discuss your vision and create something beautiful together.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 bg-opacity-20 rounded-full flex items-center justify-center text-yellow-600">
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="text-stone-900 font-medium mb-1">{detail.title}</h3>
                      {detail.content.map((item, i) => (
                        <p key={i} className="text-stone-700 opacity-80">
                          {detail.href ? (
                            <a href={detail.href} className="hover:text-yellow-600 transition-colors duration-300">
                              {item}
                            </a>
                          ) : (
                            item
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-yellow-600 border-opacity-20"
              >
                <h3 className="text-stone-900 font-medium mb-4">Follow My Work</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-yellow-600 bg-opacity-20 rounded-full flex items-center justify-center text-yellow-600 hover:bg-opacity-30 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
