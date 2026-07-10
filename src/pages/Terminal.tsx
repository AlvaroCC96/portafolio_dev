import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { experience } from '../data/experience';
import { specialties } from '../data/specialties';
import { stack } from '../data/stack';
import { principles } from '../data/principles';
import { labs } from '../data/labs';

interface CommandEntry {
  command: string;
  output: string;
}

const whoami = `Álvaro Lucas Castillo Calabacero
Backend Engineer · Cloud & DevOps · IA
+6 años de experiencia (GCP, AWS, Python, Go, gRPC)`;

const experienceOutput = experience
  .map((e) => `- ${e.role} @ ${e.company} (${e.period})`)
  .join('\n');

const specialtiesOutput = specialties.map((s) => `- ${s.title}\n  ${s.tags.join(', ')}`).join('\n\n');

const stackOutput = stack.map((c) => `${c.category}:\n  ${c.items.join(', ')}`).join('\n\n');

const principlesOutput = principles.map((p, i) => `${i + 1}. ${p.title}\n   ${p.description}`).join('\n\n');

const labOutput = labs
  .map(
    (l) =>
      `- ${l.title} (${l.category}) ${l.status === 'production' ? '[Producción]' : '[Beta]'}\n  ${l.stack.join(', ')}${
        l.repoUrl ? `\n  ${l.repoUrl}` : ''
      }`
  )
  .join('\n\n');

const contact = `GitHub: https://github.com/AlvaroCC96
LinkedIn: https://www.linkedin.com/in/alvarocc96
Email: alvarolucascc96@gmail.com`;

const help = `Comandos disponibles:
/help          - muestra esta ayuda
/whoami        - quién soy
/experience    - experiencia laboral
/specialties   - dónde enfoco mi ingeniería
/stack         - stack tecnológico por categoría
/principles    - cómo tomo decisiones de ingeniería
/lab           - proyectos personales (laboratorio)
/contact       - información de contacto
/clear         - limpiar terminal
/exit          - volver al portafolio`;

function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandEntry[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

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
      case '/whoami':
        output = whoami;
        break;
      case '/experience':
        output = experienceOutput;
        break;
      case '/specialties':
        output = specialtiesOutput;
        break;
      case '/stack':
        output = stackOutput;
        break;
      case '/principles':
        output = principlesOutput;
        break;
      case '/lab':
        output = labOutput;
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
        output = `Comando no encontrado: ${cmd}. Escribe /help para ver los comandos disponibles.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-base text-ink p-4 font-mono">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-base-border bg-base-panel text-ink-muted hover:text-ink hover:border-base-borderHover transition-colors mb-4"
      >
        <ArrowLeft size={16} />
        Volver al portafolio
      </Link>

      <div
        ref={terminalRef}
        onClick={() => document.getElementById('terminal-input')?.focus()}
        className="rounded-xl border border-base-border bg-base-panel/60 backdrop-blur-xl p-4 h-[calc(100vh-100px)] overflow-y-auto text-sm"
      >
        <div className="mb-4 text-status-live">
          Bienvenido a la terminal. Escribe /help para ver los comandos disponibles.
        </div>

        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center text-accent">
              <span className="mr-2">➜</span>
              <span className="text-ink-muted">~</span>
              <span className="ml-2 text-ink">{entry.command}</span>
            </div>
            <div className="mt-2 whitespace-pre-wrap text-ink-muted">{entry.output}</div>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-accent mr-2">➜</span>
          <span className="text-ink-muted mr-2">~</span>
          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-ink"
            autoFocus
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}

export default Terminal;
