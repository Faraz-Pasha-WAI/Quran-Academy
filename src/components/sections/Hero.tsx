"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
  "/hero/slide-1.png",
  "/hero/slide-2.png",
  "/hero/slide-3.png",
  "/hero/slide-4.png",
];

const trustBadges = [
  "Qualified Tutors",
  "Flexible Timings",
  "One-on-One Classes",
  "Global Learning",
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #047857 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Welcome to Blessing Quran Academy
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Learn Quran Online with <span className="text-primary">Expert Tutors</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Personalized Quran Education for Children and Adults Worldwide Through Structured and Interactive Learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="text-lg rounded-full px-8 shadow-lg shadow-primary/25" asChild>
                <Link href="#registration">Register Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg rounded-full px-8 border-primary text-primary hover:bg-primary/5" asChild>
                <Link href="#courses">Explore Courses</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-xs font-semibold text-foreground">{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentSlide]}
                  alt={`Hero slide ${currentSlide + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-secondary" : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
