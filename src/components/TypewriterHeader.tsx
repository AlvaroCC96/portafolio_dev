import React from 'react';
import Typewriter from 'typewriter-effect';

export function TypewriterHeader() {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 py-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Álvaro Lucas Castillo Calabacero
        </h1>
        <div className="text-xl text-gray-300 h-8">
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