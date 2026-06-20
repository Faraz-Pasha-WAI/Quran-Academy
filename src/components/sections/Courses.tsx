"use client";

import { motion } from "framer-motion";
import { Book, Mic, Star, Heart, FileText, Library, Sun, Shield } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Noorani Qaida",
    description: "The fundamental course to learn Arabic alphabets and basic pronunciation rules.",
    icon: <Book className="h-8 w-8 text-primary" />,
  },
  {
    id: 2,
    title: "Quran Reading",
    description: "Learn to read the Holy Quran fluently with correct Arabic accent and pronunciation.",
    icon: <Mic className="h-8 w-8 text-secondary" />,
  },
  {
    id: 3,
    title: "Quran with Tajweed",
    description: "Master the rules of Tajweed to recite the Quran beautifully and accurately.",
    icon: <Star className="h-8 w-8 text-primary" />,
  },
  {
    id: 4,
    title: "Hifz-ul-Quran",
    description: "Memorize the Holy Quran with our structured and effective memorization program.",
    icon: <Heart className="h-8 w-8 text-secondary" />,
  },
  {
    id: 5,
    title: "Quran Translation",
    description: "Understand the deep meaning of the Quranic verses in your native language.",
    icon: <FileText className="h-8 w-8 text-primary" />,
  },
  {
    id: 6,
    title: "Tafseer Course",
    description: "In-depth explanation and context of the Quranic verses by expert scholars.",
    icon: <Library className="h-8 w-8 text-secondary" />,
  },
  {
    id: 7,
    title: "Islamic Studies",
    description: "Comprehensive knowledge of Fiqh, Seerah, Hadith, and Islamic History.",
    icon: <Shield className="h-8 w-8 text-primary" />,
  },
  {
    id: 8,
    title: "Daily Duas & Sunnah",
    description: "Learn essential daily supplications and the beautiful Sunnah of Prophet Muhammad (PBUH).",
    icon: <Sun className="h-8 w-8 text-secondary" />,
  },
];

export function Courses() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="courses" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Our Courses
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Islamic Education
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our wide range of courses designed for beginners to advanced learners, taught by expert certified tutors.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <Card className="h-full flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="scale-150 transform -translate-y-4 translate-x-4">
                    {course.icon}
                  </div>
                </div>
                <CardHeader>
                  <div className="mb-4 bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-transform">
                    {course.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full justify-between group/btn hover:bg-primary hover:text-white border border-border group-hover:border-primary transition-colors">
                    <Link href={`/course/${course.id}`}>
                      Learn More
                      <span className="transform translate-x-0 group-hover/btn:translate-x-2 transition-transform">→</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
