// src/components/Skills.tsx
import { useEffect, useRef, useState } from 'react';
import { skillsData } from './skillData';

interface SkillsProps {
  setActiveSection: (section: string) => void;
}

const Skills = ({ setActiveSection }: SkillsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>(skillsData[0].category);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('skills');
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

  const activeSkills = skillsData.find(
    (category) => category.category === activeCategory
  )?.skills || [];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my learning journey and projects.
            Below are some of the key skills I've developed across programming and full-stack web development.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {skillsData.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activeSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="font-medium text-lg text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
