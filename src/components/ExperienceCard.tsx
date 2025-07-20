import React from 'react';

interface ExperienceCardProps {
  position: string;
  company: string;
  date: string;
  description: string;
}

export function ExperienceCard({ position, company, date, description }: ExperienceCardProps) {
  return (
    <div className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl transition duration-300 border border-primary/10 hover:border-primary/30">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {position}
          </h3>
          <p className="text-white">{company}</p>
        </div>
        <span className="text-white mt-2 md:mt-0">{date}</span>
      </div>
      <p className="text-white">{description}</p>
    </div>
  );
}