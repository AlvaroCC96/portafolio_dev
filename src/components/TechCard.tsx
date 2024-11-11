import React from 'react';

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export function TechCard({ icon, title, items }: TechCardProps) {
  const displayItems = [...items.slice(0, 5), ...Array(5).fill('')].slice(0, 5);

  return (
    <div className="pt-6 pb-10 mb-12 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl shadow-lg hover:shadow-purple-500/20 transition duration-300 h-[300px] border border-purple-500/10">
      <div className="flex flex-col items-center h-full">
        <div className="text-purple-400 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          {title}
        </h3>
        <ul className="text-gray-300 text-center w-full">
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