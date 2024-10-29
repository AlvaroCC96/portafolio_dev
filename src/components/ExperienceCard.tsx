import React from 'react';

interface ExperienceCardProps {
  position: string;
  company: string;
  date: string;
  description: string;
}

export function ExperienceCard({ position, company, date, description }: ExperienceCardProps) {
  return (
    <div className="p-6 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl transition duration-300 border border-purple-500/10 hover:border-purple-500/30">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            {position}
          </h3>
          <p className="text-purple-400">{company}</p>
        </div>
        <span className="text-gray-300 mt-2 md:mt-0">{date}</span>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}