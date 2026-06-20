import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Courses } from "@/components/sections/Courses";
import { Tutors } from "@/components/sections/Tutors";
import { LearningProcess } from "@/components/sections/LearningProcess";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Registration } from "@/components/sections/Registration";

import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Hero />
      <About />
      <Courses />
      <Tutors />
      <LearningProcess />
      <WhyChooseUs />
      <Registration />

      <Blog />
      <Contact />
    </main>
  );
}
