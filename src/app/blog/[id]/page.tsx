import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Tajweed in Quranic Recitation",
    content: `
      <p class="mb-4">Tajweed is not just an optional skill, but an essential part of reading the Holy Quran correctly. The word "Tajweed" linguistically means "proficiency" or "doing something well." When applied to the Quran, it means giving every letter of the Quran its rights and dues of characteristics when we recite it, and observing the rules that apply to those letters in different situations.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Why is Tajweed Important?</h3>
      <p class="mb-4">The Quran was revealed with Tajweed rules applied to it. When the angel Jibreel (AS) recited the words of Allah to the Prophet Muhammad (PBUH), he recited them in a certain way, and he showed the Prophet (PBUH) the ways in which it was permissible to recite the Quran.</p>
      <p class="mb-4">So it is upon us to observe those rules so that we recite it in the way it was revealed. Making a mistake in a short vowel or a letter can sometimes change the meaning of the word entirely, which is why scholars have said that reading the Quran with Tajweed is an obligation upon every Muslim who recites it.</p>
    `,
    category: "Tajweed Rules",
    date: "Oct 15, 2023",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaab31ce?w=1200&q=80",
  },
  {
    id: 2,
    title: "Tips for Memorizing the Quran for Busy Professionals",
    content: `
      <p class="mb-4">Discover practical strategies and time management tips to balance your daily job while doing Hifz. Memorizing the Quran (Hifz) is a noble endeavor, but finding the time can be challenging, especially for professionals with busy schedules.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Practical Strategies</h3>
      <p class="mb-4">1. <strong>Consistency over Quantity</strong>: It is better to memorize a few verses every single day than a whole page once a week. The Prophet (PBUH) said, "The most beloved of deeds to Allah are those that are most consistent, even if it is small."</p>
      <p class="mb-4">2. <strong>Use the Early Morning Hours</strong>: The time after Fajr prayer is blessed. Your mind is fresh, and there are fewer distractions. Dedicate 20-30 minutes after Fajr strictly for your Hifz.</p>
      <p class="mb-4">3. <strong>Listen to Recitations</strong>: During your commute, listen to the verses you are currently memorizing. Repetitive listening makes memorization significantly easier.</p>
    `,
    category: "Hifz Tips",
    date: "Nov 02, 2023",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=1200&q=80",
  },
  {
    id: 3,
    title: "Understanding the Meaning of Surah Al-Fatihah",
    content: `
      <p class="mb-4">An in-depth look at the opening chapter of the Quran, its significance, and the deep meanings behind its verses. Surah Al-Fatihah is known as "The Opening" and is considered the greatest Surah in the Quran.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">The Essence of the Quran</h3>
      <p class="mb-4">Surah Al-Fatihah is recited in every unit (rak'ah) of our prayers. It contains the essence of the entire Quran: praising Allah, acknowledging His sovereignty, seeking His guidance, and asking for His help.</p>
      <p class="mb-4">When we say "Alhamdulillahi Rabbil 'Alamin," we are acknowledging that all praise and gratitude belong to Allah, the Lord of all the worlds. This simple yet profound statement shifts our perspective and centers our lives around the Creator.</p>
    `,
    category: "Tafseer",
    date: "Nov 20, 2023",
    image: "https://images.unsplash.com/photo-1594957597148-356a68d0af74?w=1200&q=80",
  },
];

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postId = parseInt(id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link href="/#blog" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
        
        <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border/50">
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 font-bold text-primary rounded-md shadow-sm">
              {post.category}
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <CalendarDays className="h-5 w-5" />
              <span>{post.date}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div 
              className="prose prose-lg max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
