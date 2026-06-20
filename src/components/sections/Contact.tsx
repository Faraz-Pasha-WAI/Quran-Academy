"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SocialIcon({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
      {children}
    </a>
  );
}

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We&apos;d Love to Hear from You
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about our courses or want to discuss your learning goals? Our dedicated support team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="border-0 shadow-lg bg-primary text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Phone Number</p>
                      <p className="font-semibold">+923142658679</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full shrink-0">
                      <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">WhatsApp</p>
                      <p className="font-semibold">+923142658679</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Email Address</p>
                      <p className="font-semibold">blessingquran786@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Office Location</p>
                      <p className="font-semibold">Karachi,<br />Pakistan</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="text-sm text-white/70 mb-4">Follow us on social media</p>
                  <div className="flex gap-4">
                    <SocialIcon href="https://www.facebook.com/profile.php?id=61579859491363&_rdc=2&_rdr#">
                      <FacebookIcon className="h-5 w-5" />
                    </SocialIcon>
                    <SocialIcon href="https://www.instagram.com/blessingquran786/">
                      <InstagramIcon className="h-5 w-5" />
                    </SocialIcon>
                    <SocialIcon href="https://www.youtube.com/@BlessingQuranOfficial">
                      <YoutubeIcon className="h-5 w-5" />
                    </SocialIcon>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="h-full border-border/50 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const firstName = formData.get('firstName') || '';
                  const lastName = formData.get('lastName') || '';
                  const email = formData.get('email') || '';
                  const phone = formData.get('phone') || '';
                  const subject = formData.get('subject') || '';
                  const message = formData.get('message') || '';
                  
                  const text = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`;
                  const encodedText = encodeURIComponent(text);
                  window.open(`https://wa.me/923142658679?text=${encodedText}`, '_blank');
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input name="firstName" required placeholder="John" className="bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input name="lastName" placeholder="Doe" className="bg-slate-50" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <Input name="email" type="email" placeholder="john@example.com" className="bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <Input name="phone" type="tel" placeholder="+923142658679" className="bg-slate-50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input name="subject" required placeholder="How can we help you?" className="bg-slate-50" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea 
                      name="message"
                      required
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto h-12 px-8">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
