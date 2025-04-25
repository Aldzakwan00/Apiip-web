"use client";
import Header from '../components/Header';

const projects = [
  {
    name: 'Project 1',
    description: 'This is a brief description of project 1. It involves building a full-stack application with React and Node.js.',
    image: 'https://via.placeholder.com/400x250?text=Project+1',
    link: '#'
  },
  {
    name: 'Project 2',
    description: 'A mobile app built with Flutter to track personal fitness goals, including data syncing and user authentication.',
    image: 'https://via.placeholder.com/400x250?text=Project+2',
    link: '#'
  },
  {
    name: 'Project 3',
    description: 'A web application for managing personal finances using Laravel and MySQL for database management.',
    image: 'https://via.placeholder.com/400x250?text=Project+3',
    link: '#'
  },
  {
    name: 'Project 4',
    description: 'A real-time chat application built using Vue.js and Firebase for messaging and notifications.',
    image: 'https://via.placeholder.com/400x250?text=Project+4',
    link: '#'
  }
];

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="pt-32 min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white font-sans overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h1 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            My Portfolio
          </h1>

          <p className="text-center text-gray-400 mb-12 text-lg">
            Here are some of the projects I have worked on.
          </p>

          {/* Project Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-4 bg-black bg-opacity-60 p-6 rounded-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <p className="text-gray-300 text-center">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mt-4"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
