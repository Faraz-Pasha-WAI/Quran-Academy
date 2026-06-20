"use client";


import { motion } from "framer-motion";
import { Award, BookOpen, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const tutors = [
  {
    id: 1,
    name: "Molana Syed Ahtisham Tirmizi",
    qualification: "MA Islamic, Islamic Scholar",
    specialization: "Fiqh, Hadith, Tajweed, Nazra, Arabic Language",
    experience: "10+ Years",
  },
];

export function Tutors() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="tutors" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-4">
            Expert Educators
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Tutors
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from highly qualified, certified, and experienced Islamic scholars dedicated to your spiritual growth.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-1 gap-8 max-w-lg mx-auto"
        >
          {tutors.map((tutor) => (
            <motion.div key={tutor.id} variants={itemVariants}>
              <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-center">{tutor.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Qualification</p>
                        <p className="text-sm font-medium text-foreground">{tutor.qualification}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary/10 p-2 rounded-full">
                        <BookOpen className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Specialization</p>
                        <p className="text-sm font-medium text-foreground">{tutor.specialization}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 p-2 rounded-full">
                        <Clock className="h-4 w-4 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Experience</p>
                        <p className="text-sm font-medium text-foreground">{tutor.experience}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
