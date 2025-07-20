import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export function TypewriterHeader() {
  return (
    <header className="bg-gradient-to-r from-primary to-accent">
      {/* Developer Mode Button Container */}
      <div className="container mx-auto px-4 py-3 flex justify-end">
        <Link 
          to="/dev" 
          className="px-4 py-2 bg-secondary text-gray-200 rounded-lg flex items-center gap-2 hover:bg-secondary/80 transition-colors shadow-lg hover:shadow-xl"
        >
          <Terminal size={18} />
          <span className="text-sm md:text-base">Developer Mode</span>
        </Link>
      </div>

      {/* Title and Typewriter Container */}
      <div className="container mx-auto px-4 text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Álvaro Lucas Castillo Calabacero
        </h1>
        <div className="text-xl text-white h-8">
          <Typewriter
            options={{
              strings: [
                'Software Engineer',
                'Developer',
                'Problem Solver',
                'Tech Enthusiast'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50,
            }}
          />
        </div>
      </div>
    </header>
  );
}