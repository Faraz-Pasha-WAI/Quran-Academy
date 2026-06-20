"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, Link as LinkIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
  {
    id: 1,
    title: "Quran Reading Guide",
    type: "download",
    category: "PDF Document",
    url: "#",
  },
  {
    id: 2,
    title: "Tajweed Rules",
    type: "download",
    category: "PDF Document",
    url: "#",
  },
  {
    id: 3,
    title: "Daily Duas",
    type: "download",
    category: "PDF Document",
    url: "#",
  },
  {
    id: 4,
    title: "Student Handbook",
    type: "download",
    category: "PDF Document",
    url: "#",
  },
  {
    id: 5,
    title: "Islamic Learning Resources",
    type: "link",
    category: "External Website",
    url: "#",
  },
  {
    id: 6,
    title: "Recommended Reading",
    type: "link",
    category: "External Website",
    url: "#",
  },
];

export function Resources() {
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
    <section id="resources" className="py-24 bg-white relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Free Resources
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resource Center
            </h2>
            <p className="text-lg text-muted-foreground">
              Enhance your learning journey with our curated collection of free Islamic study materials, guides, and recommended links.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 rounded-full">
            View All Resources
          </Button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {resources.map((resource) => (
            <motion.div key={resource.id} variants={itemVariants}>
              <Card className="hover:shadow-md transition-shadow border-border/50 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-slate-100 p-3 rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      {resource.type === "download" ? (
                        <FileText className="h-6 w-6" />
                      ) : (
                        <LinkIcon className="h-6 w-6" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground bg-slate-100 px-2 py-1 rounded-md uppercase tracking-wider">
                      {resource.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  
                  <Button 
                    variant={resource.type === "download" ? "default" : "secondary"} 
                    className="w-full justify-center gap-2 group-hover:shadow-md transition-all"
                    asChild
                  >
                    <a href={resource.url} target={resource.type === "link" ? "_blank" : "_self"} rel="noreferrer">
                      {resource.type === "download" ? (
                        <>
                          <Download className="h-4 w-4" /> Download PDF
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-4 w-4" /> Visit Website
                        </>
                      )}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
