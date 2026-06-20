"use client";

import { motion } from "framer-motion";
import { User, Calendar, GraduationCap, Video, BookOpen, Globe, LineChart, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: <User className="h-6 w-6" />, title: "One-on-One Learning", desc: "Personal attention for maximum progress and better understanding." },
  { icon: <Calendar className="h-6 w-6" />, title: "Flexible Schedule", desc: "Choose class timings that perfectly fit your daily routine." },
  { icon: <GraduationCap className="h-6 w-6" />, title: "Experienced Tutors", desc: "Learn from certified, highly qualified male and female scholars." },
  { icon: <Video className="h-6 w-6" />, title: "Interactive Classes", engaging: "desc", desc: "Modern digital tools and screen sharing for an engaging experience." },
  { icon: <BookOpen className="h-6 w-6" />, title: "Structured Curriculum", desc: "Step-by-step syllabus designed for all ages and proficiency levels." },
  { icon: <Globe className="h-6 w-6" />, title: "Global Accessibility", desc: "Learn from anywhere in the world from the comfort of your home." },
  { icon: <LineChart className="h-6 w-6" />, title: "Progress Reports", desc: "Regular assessments and feedback to track your learning journey." },
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Safe Environment", desc: "Secure and monitored online classes suitable for children and adults." },
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Blessing Quran Advantage
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine traditional Islamic knowledge with modern teaching methodologies to provide an exceptional learning experience.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
