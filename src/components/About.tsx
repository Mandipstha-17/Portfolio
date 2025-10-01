import { useEffect, useRef } from 'react';
import { User, Mail, MapPin, FileText } from 'lucide-react';
import ports from '../assets/port.jpeg';
import ProfileCard from './ProfileCard';
import DecryptedText from './DecryptedText';

interface AboutProps {
  setActiveSection: (section: string) => void;
}

const About = ({ setActiveSection }: AboutProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('about');
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setActiveSection]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-5/12 lg:w-4/12">
            <ProfileCard
              avatarUrl={ports}
              alt="Profile"
              className="aspect-[3/4]"
              name="Mandip Shrestha"
              title="Front-end Developer"
              handle="mandipstha17"
              status="Available for work"
              contactText="Contact Me"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.open('mailto:mandipstha17@gmail.com', '_self')}
            />
          </div>

          <div className="w-full md:w-7/12 lg:w-8/12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">About Me</h2>
              <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 rounded-full mb-6"></div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                <DecryptedText
                  text={"I'm a passionate Front-end Developer focused on building responsive, user-friendly web applications. I specialize in creating modern, high-performance interfaces using React, TypeScript, and Tailwind CSS."}
                  durationMs={1400}
                />
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                <DecryptedText
                  text={"My approach blends technical excellence with a strong sense of design, ensuring that the websites I create are not only highly functional but also visually engaging and user-friendly. I’m committed to continuous learning, constantly exploring new technologies and techniques to stay at the forefront of web development."}
                  durationMs={1600}
                />
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                  <User size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Name</h3>
                  <p className="font-medium">Mandip Shrestha</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                  <Mail size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Email</h3>
                  <p className="font-medium">mandipstha17@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                  <MapPin size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Location</h3>
                  <p className="font-medium">Chamati,Kathmandu</p>
                </div>
              </div>

              {/* <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                  <Award size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Experience</h3>
                  <p className="font-medium">5+ Years</p>
                </div> 
               </div> */}
            </div>

            <div className="mt-8">
              <a 
                href="https://drive.google.com/drive/u/0/folders/1BSAAJjE6wCaY3GM2yniFA-aeSrnlXiVY" 
                className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg transition-colors"
              >
                <FileText size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;