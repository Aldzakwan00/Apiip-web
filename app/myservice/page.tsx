"use client";
import Header from '../components/Header';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Typescript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
];

const Service = () => {
  const [counter, setCounter] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (count > 10) {
        clearInterval(interval);
        setDone(true);
      } else {
        setCounter(count);
      }
    }, 100); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="h-screen flex flex-col justify-between bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white font-sans overflow-hidden pt-32"> {/* Add pt-32 here */}
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            My Services & Projects
          </h1>

          <p className="text-center text-gray-400 mb-12 text-lg">
            I build things with passion using the best tools out there.
          </p>

          {/* Skill Section */}
          <div className="flex flex-wrap justify-center gap-10 mb-12">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-110">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-14 h-14 drop-shadow-lg"
                />
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Project Counter */}
        <div className="flex justify-center items-center mb-10">
          <div className="text-[100px] font-extrabold text-white animate-pulse">
            {done ? '10+' : counter}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
