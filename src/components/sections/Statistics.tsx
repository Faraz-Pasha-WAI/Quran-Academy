"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Globe, BookOpen, GraduationCap } from "lucide-react";

interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

function Counter({ end, label, icon, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center group">
      <div className="mb-4 p-4 rounded-full bg-secondary/10 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
        {count}
        {suffix}
      </div>
      <div className="text-white/80 font-medium text-lg">{label}</div>
    </div>
  );
}

export function Statistics() {
  const stats = [
    { end: 5000, suffix: "+", label: "Students Enrolled", icon: <Users className="h-8 w-8" /> },
    { end: 45, suffix: "+", label: "Countries Served", icon: <Globe className="h-8 w-8" /> },
    { end: 120, suffix: "+", label: "Expert Tutors", icon: <GraduationCap className="h-8 w-8" /> },
    { end: 15, suffix: "+", label: "Courses Available", icon: <BookOpen className="h-8 w-8" /> },
  ];

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Islamic geometric pattern overlay could be added here as an SVG background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Counter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
