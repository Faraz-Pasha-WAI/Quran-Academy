"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Lightbulb, UserCheck, CalendarDays, BookOpen, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const features = [
    { icon: <UserCheck className="h-6 w-6 text-primary" />, title: "Personalized Learning", desc: "Tailored to your pace" },
    { icon: <Target className="h-6 w-6 text-primary" />, title: "Qualified Tutors", desc: "Certified professionals" },
    { icon: <CalendarDays className="h-6 w-6 text-primary" />, title: "Flexible Schedule", desc: "Learn at your convenience" },
    { icon: <BookOpen className="h-6 w-6 text-primary" />, title: "Structured Curriculum", desc: "Step-by-step progress" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.jpeg"
                alt="About Blessing Quran Academy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-multiply"></div>
            </div>
            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-border/50 max-w-[200px]"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-secondary/20 p-3 rounded-full text-secondary">
                  <Heart className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-xl text-foreground">10+</h4>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Years of Excellence in Quran Education</p>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-6">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nurturing Souls Through the Light of the Quran
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Blessing Quran Academy, we are dedicated to providing a premium, interactive, and authentic Islamic learning experience. Our mission is to make Quranic education accessible, engaging, and meaningful for students of all ages across the globe.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <div className="shrink-0 bg-primary/10 p-3 rounded-xl h-fit">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">To spread the true knowledge of the Quran with correct Tajweed and profound understanding.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 bg-secondary/10 p-3 rounded-xl h-fit">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">To become a globally recognized center of excellence for online Islamic education.</p>
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex flex-col gap-2">
                    {feature.icon}
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
