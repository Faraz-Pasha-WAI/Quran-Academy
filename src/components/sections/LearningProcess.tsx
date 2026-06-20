"use client";

import { motion } from "framer-motion";
import { PenTool, ClipboardCheck, UserPlus, PlayCircle, LineChart } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Submit Registration",
    description: "Fill out the simple online registration form with your preferences.",
    icon: <PenTool className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Initial Assessment",
    description: "A brief session to evaluate your current level and goals.",
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Tutor Assignment",
    description: "We match you with the best-suited expert tutor based on your needs.",
    icon: <UserPlus className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Start Classes",
    description: "Begin your one-on-one personalized learning journey.",
    icon: <PlayCircle className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Progress Tracking",
    description: "Regular feedback and reports to ensure steady improvement.",
    icon: <LineChart className="h-6 w-6" />,
  },
];

export function LearningProcess() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple Steps to Start Learning
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process ensures you get started with the right tutor quickly and efficiently.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-1 bg-border rounded-full">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-primary rounded-full"
            />
          </div>

          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-[39px] w-1 bg-border rounded-full">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full bg-primary rounded-full"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 flex-1"
              >
                {/* Number/Icon Circle */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-primary/20 shadow-lg flex items-center justify-center text-primary relative z-10 group hover:border-primary transition-colors duration-300">
                    <div className="absolute inset-0 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                    <div className="group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold shadow-md z-20">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
