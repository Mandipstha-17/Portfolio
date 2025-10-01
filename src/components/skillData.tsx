// src/data/skillsData.ts
import {
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  // SiPython,
  SiMysql,
  SiPostgresql,
  SiFigma,
} from 'react-icons/si';

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: <SiHtml5 size={32} color="#E34F26" /> },
      { name: 'CSS', icon: <SiCss3 size={32} color="#1572B6" /> },
      { name: 'JavaScript', icon: <SiJavascript size={32} color="#F7DF1E" /> },
      { name: 'TypeScript', icon: <SiTypescript size={32} color="#3178C6" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} color="#38B2AC" /> },
      { name: 'React', icon: <SiReact size={32} color="#61DAFB" /> },
      { name: 'Bootstrap', icon: <SiBootstrap size={32} color="#7952B3" /> },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs size={32} color="#339933" /> },
      { name: 'Express.js', icon: <SiExpress size={32} color="#000000" /> },
      { name: 'MongoDB', icon: <SiMongodb size={32} color="#47A248" /> },
      { name: 'MySQL', icon: <SiMysql size={32} color="#4479A1" /> },
      { name: 'Postgresql', icon: <SiPostgresql size={32} color="#336791" /> },
    ],
  },
  {
    category: 'Others',
    skills: [
      { name: 'C', icon: <SiC size={32} color="#A8B9CC" /> },
      { name: 'C++', icon: <SiCplusplus size={32} color="#00599C" /> },
      { name: 'DSA', icon: <span className="text-xl font-bold">DSA</span> },
      {name: 'Figma', icon: <SiFigma size={32} color='#6B46C1'/>   }
    ],
  },
];
