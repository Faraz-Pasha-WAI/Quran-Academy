"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Tajweed in Quranic Recitation",
    excerpt: "Learn why Tajweed is not just an optional skill, but an essential part of reading the Holy Quran correctly...",
    category: "Tajweed Rules",
    date: "May 15, 2026",
    image: "https://images.unsplash.com/photo-1624357824434-27d181804b20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "/blog/1",
  },
  {
    id: 2,
    title: "Tips for Memorizing the Quran for Busy Professionals",
    excerpt: "Discover practical strategies and time management tips to balance your daily job while doing Hifz...",
    category: "Hifz Tips",
    date: "June 02, 2026",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=500&q=80",
    slug: "/blog/2",
  },
  {
    id: 3,
    title: "Understanding the Meaning of Surah Al-Fatihah",
    excerpt: "An in-depth look at the opening chapter of the Quran, its significance, and the deep meanings behind its verses...",
    category: "Tafseer",
    date: "May 20, 2026",
    image: "https://images.unsplash.com/photo-1637721958581-be9cc2dcc753?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "/blog/3",
  },
];

export function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-4">
              Latest Articles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Insights & Knowledge
            </h2>
            <p className="text-lg text-muted-foreground">
              Read our latest articles on Quranic studies, Islamic history, and tips for spiritual growth.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 rounded-full">
            View All Posts
          </Button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary rounded-md shadow-sm">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <CalendarDays className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={post.slug} className="before:absolute before:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center text-primary font-semibold text-sm group-hover:underline">
                    Read More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
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
