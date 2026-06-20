import { notFound } from "next/navigation";
import Link from "next/link";
import { Book, Mic, Star, Heart, FileText, Library, Sun, Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Noorani Qaida",
    description: "The fundamental course to learn Arabic alphabets and basic pronunciation rules.",
    icon: <Book className="h-16 w-16 text-primary" />,
    longDescription: "Our Noorani Qaida course is designed for absolute beginners to master the Arabic alphabet, pronunciation, and the basic rules of reading the Quran. With step-by-step guidance from our expert tutors, you will build a solid foundation that will make reciting the Quran much easier.",
  },
  {
    id: 2,
    title: "Quran Reading",
    description: "Learn to read the Holy Quran fluently with correct Arabic accent and pronunciation.",
    icon: <Mic className="h-16 w-16 text-secondary" />,
    longDescription: "The Quran Reading course focuses on helping students read the Holy Quran with correct fluency and accurate pronunciation. This course is ideal for those who have completed the Noorani Qaida and want to improve their reading skills with proper Arabic accent.",
  },
  {
    id: 3,
    title: "Quran with Tajweed",
    description: "Master the rules of Tajweed to recite the Quran beautifully and accurately.",
    icon: <Star className="h-16 w-16 text-primary" />,
    longDescription: "Recite the Quran as it was revealed by mastering the rules of Tajweed. This comprehensive course covers all essential Tajweed rules, including Makharij (articulation points) and Sifat (characteristics of letters), ensuring your recitation is beautiful and accurate.",
  },
  {
    id: 4,
    title: "Hifz-ul-Quran",
    description: "Memorize the Holy Quran with our structured and effective memorization program.",
    icon: <Heart className="h-16 w-16 text-secondary" />,
    longDescription: "Our Hifz-ul-Quran program provides a structured and supportive environment for memorizing the Holy Quran. Our experienced tutors use effective memorization techniques and regular revision strategies to help you achieve your goal of becoming a Hafiz.",
  },
  {
    id: 5,
    title: "Quran Translation",
    description: "Understand the deep meaning of the Quranic verses in your native language.",
    icon: <FileText className="h-16 w-16 text-primary" />,
    longDescription: "Gain a deeper understanding of Allah's message with our Quran Translation course. Learn the meanings of Quranic words and verses in your native language, enabling you to connect more profoundly with the divine revelation in your daily life.",
  },
  {
    id: 6,
    title: "Tafseer Course",
    description: "In-depth explanation and context of the Quranic verses by expert scholars.",
    icon: <Library className="h-16 w-16 text-secondary" />,
    longDescription: "Delve into the profound wisdom of the Quran through our Tafseer course. Expert scholars provide in-depth explanations, historical contexts, and practical lessons from the verses, helping you apply Quranic teachings to contemporary challenges.",
  },
  {
    id: 7,
    title: "Islamic Studies",
    description: "Comprehensive knowledge of Fiqh, Seerah, Hadith, and Islamic History.",
    icon: <Shield className="h-16 w-16 text-primary" />,
    longDescription: "Our Islamic Studies program offers comprehensive knowledge covering essential aspects of Islam, including Fiqh (Islamic jurisprudence), Seerah (the life of Prophet Muhammad PBUH), Hadith, and Islamic History, nurturing a well-rounded Islamic identity.",
  },
  {
    id: 8,
    title: "Daily Duas & Sunnah",
    description: "Learn essential daily supplications and the beautiful Sunnah of Prophet Muhammad (PBUH).",
    icon: <Sun className="h-16 w-16 text-secondary" />,
    longDescription: "Incorporate the beautiful practices of Prophet Muhammad (PBUH) into your daily life. This course teaches essential daily supplications (Duas) for various occasions and highlights key Sunnah practices that bring blessings and peace to your routine.",
  },
];

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const courseId = parseInt(id);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link href="/#courses" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
        </Link>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 text-center md:text-left">
            <div className="bg-primary/5 p-6 rounded-2xl shrink-0">
              {course.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground">{course.description}</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold mb-4">About this Course</h3>
            <p className="text-muted-foreground leading-relaxed">
              {course.longDescription}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Ready to start your journey?</h4>
            <Button size="lg" className="rounded-full px-8 text-lg" asChild>
              <Link href="/#registration">Register Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
