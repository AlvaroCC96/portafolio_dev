import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Command {
  command: string;
  output: string;
}

function DevMode() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const aboutMe = `I am a proactive professional with +4 years of experience in software development, infrastructure management, and technological solutions.
My goal is to contribute my knowledge and skills while continuing my professional growth and learning new technologies. 
I have experience in web application development, DevOps, and managing collaboration tools like Git and Jira.`;

  const experience = `- Backend Developer at LATAM Airlines (2024 - Present)
- Fullstack Developer at Kuantaz (2024)
- Software Architect at RedCapital (2023 - 2024)
- Backend Developer at RedCapital (2021 - 2023)
- Software Engineer at Seremi De Salud Antofagasta (2021)
- Professional Internship at FCAB (2020)`;

  const skills = `Backend:
- Laravel, Python, MySQL, BigQuery, OracleSQL

Frontend:
- React, jQuery, CSS, HTML

DevOps:
- CI/CD, Docker, Jenkins, Terraform

Tools:
- Git, Jira, Postman

Web:
- REST APIs, Testing, WebScraping

Cloud:
- AWS, GCP

Design:
- Figma`;

  const contact = `GitHub: https://github.com/AlvaroCC96
LinkedIn: https://www.linkedin.com/in/alvarocc96
E-mail: alvarolucascc96@gmail.com`;

  const help = `Available commands:
/help - Show this help message
/aboutme - Display about me section
/experience - Show work experience
/skills - List technical skills
/contact - Show contact information
/clear - Clear terminal
/exit - Return to main profile`;

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    let output = '';

    switch (command) {
      case '/help':
        output = help;
        break;
      case '/aboutme':
        output = aboutMe;
        break;
      case '/experience':
        output = experience;
        break;
      case '/skills':
        output = skills;
        break;
      case '/contact':
        output = contact;
        break;
      case '/clear':
        setHistory([]);
        return;
      case '/exit':
        window.location.href = '/';
        return;
      default:
        output = `Command not found: ${cmd}. Type /help for available commands.`;
    }

    setHistory([...history, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg mb-4 hover:bg-gray-700 transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Profile
      </Link>
      
      <div 
        ref={terminalRef}
        className="bg-[#262626] rounded-lg p-4 h-[calc(100vh-100px)] overflow-y-auto font-mono"
      >
        <div className="mb-4 text-green-400">
          Welcome to Developer Mode! Type /help for available commands.
        </div>
        
        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center text-purple-400">
              <span className="mr-2">➜</span>
              <span className="text-blue-400">~</span>
              <span className="ml-2">{entry.command}</span>
            </div>
            <div className="mt-2 whitespace-pre-wrap">{entry.output}</div>
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-purple-400 mr-2">➜</span>
          <span className="text-blue-400 mr-2">~</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}

export default DevMode;