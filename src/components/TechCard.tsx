import React from 'react';

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export function TechCard({ icon, title, items }: TechCardProps) {
  const displayItems = [...items.slice(0, 5), ...Array(5).fill('')].slice(0, 5);

  return (
    <div className="pt-6 pb-10 mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl shadow-lg hover:shadow-primary/20 transition duration-300 h-[300px] border border-primary/10">
      <div className="flex flex-col items-center h-full">
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4 text-white">
          {title}
        </h3>
        <ul className="text-white text-center w-full">
          {displayItems.map((item, index) => (
            <li key={index} className="mb-2 h-6">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}