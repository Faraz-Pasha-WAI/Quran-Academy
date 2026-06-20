import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function SocialIcon({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-secondary transition-colors">
      {children}
    </a>
  );
}

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 block">
              <img src="/images/blessing-quran-logo.jpeg" alt="Blessing Quran Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-white/80 mb-6">
              Empowering students worldwide with authentic and personalized online Quran education.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.facebook.com/profile.php?id=61579859491363&_rdc=2&_rdr#">
                <FacebookIcon className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/blessingquran786/">
                <InstagramIcon className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@BlessingQuranOfficial">
                <YoutubeIcon className="h-5 w-5" />
              </SocialIcon>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#tutors" className="hover:text-white transition-colors">Our Tutors</Link></li>
              <li><Link href="#registration" className="hover:text-white transition-colors">Register Now</Link></li>
              <li><Link href="#blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Courses</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#courses" className="hover:text-white transition-colors">Noorani Qaida</Link></li>
              <li><Link href="#courses" className="hover:text-white transition-colors">Quran Reading</Link></li>
              <li><Link href="#courses" className="hover:text-white transition-colors">Quran with Tajweed</Link></li>
              <li><Link href="#courses" className="hover:text-white transition-colors">Hifz-ul-Quran</Link></li>
              <li><Link href="#courses" className="hover:text-white transition-colors">Islamic Studies</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#resources" className="hover:text-white transition-colors">Quran Reading Guide</Link></li>
              <li><Link href="#resources" className="hover:text-white transition-colors">Tajweed Rules</Link></li>
              <li><Link href="#resources" className="hover:text-white transition-colors">Daily Duas</Link></li>
              <li><Link href="#resources" className="hover:text-white transition-colors">Student Handbook</Link></li>
              <li><Link href="#resources" className="hover:text-white transition-colors">Course Syllabus</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+923142658679</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>blessingquran786@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Blessing Quran Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/60">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
