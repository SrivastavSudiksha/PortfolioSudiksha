import { useState, useRef, useEffect } from 'react';

interface Line {
  type: 'input' | 'output' | 'error';
  content: string;
}

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  help        — Show this help message
  about       — About Sudiksha
  projects    — List all projects
  skills      — Technical skills overview
  research    — Research interests
  resume      — Resume summary
  contact     — Contact information
  whoami      — Identity
  clear       — Clear terminal`,

  whoami: `sudiksha@workspace ~ % whoami
  Sudiksha Srivastav
  AI Engineer · Researcher · Builder
  B.Tech Biotechnology @ JIIT Noida | BS Data Science @ IIT Madras`,

  about: `Sudiksha Srivastav — AI Engineer & Researcher
  ─────────────────────────────────────────
  Dual-degree student pursuing B.Tech Biotechnology (Minor: AI/ML)
  at JIIT Noida and BS in Data Science from IIT Madras.

  Builds AI systems at the intersection of computer vision,
  machine learning, and real-world impact — from ICU monitoring
  to smart surveillance to placement intelligence.

  Currently: Building · Learning · Exploring`,

  projects: `Projects — Sudiksha Srivastav
  ─────────────────────────────────────────
  [1] Placement Engine          → AI job-matching system (NLP + ML)
  [2] Fake News Detector        → ML news classifier (deployed)
  [3] Smart Surveillance System → AI + EI behavioral CCTV analysis
  [4] ICU Monitoring System     → Patient vitals anomaly detection
  [5] Cloud Biotech Automation  → AWS-based lab workflow pipeline
  [6] Portfolio Website         → This very site you're exploring`,

  skills: `Technical Skills
  ─────────────────────────────────────────
  Languages   : Python (90%) · JavaScript (75%) · C/C++ (70%) · SQL (75%)
  ML/AI       : Scikit-learn · YOLOv8 · OpenCV · MTCNN · NumPy · Pandas
  Frameworks  : FastAPI · Streamlit · REST APIs · Git
  Cloud       : AWS S3 · AWS EC2 · AWS Lambda
  Databases   : MongoDB · MySQL`,

  research: `Research Interests
  ─────────────────────────────────────────
  [ACTIVE]    Computer Vision for Healthcare
              → CNNs + transformers for medical imaging & anomaly detection

  [ACTIVE]    Behavioral AI in Surveillance
              → Pose estimation + emotion recognition + action sequencing

  [EXPLORING] Biotechnology + ML Intersections
              → ML for genomics and proteomics pipeline acceleration

  [COMPLETED] NLP for Information Credibility
              → Transformer-based misinformation detection`,

  resume: `Resume — Sudiksha Srivastav
  ─────────────────────────────────────────
  Education:
    B.Tech Biotechnology, Minor AI/ML — JIIT Noida (2024–2028)
    BS Data Science — IIT Madras (2024–2028)

  Key Skills: Python, ML, CV, AWS, FastAPI, Streamlit

  Notable Projects:
    • ICU Monitoring — 80%+ anomaly detection precision (AWS)
    • Surveillance   — 85% emotion classification accuracy
    • Fake News      — Real-time ML classifier, deployed on Vercel

  Certifications: ML A-Z, AWS CCP, Python Bootcamp, DSA, SQL

  Contact: sudiksha241206@gmail.com`,

  contact: `Contact Information
  ─────────────────────────────────────────
  Email    : sudiksha241206@gmail.com
  GitHub   : github.com/sudiksha
  LinkedIn : linkedin.com/in/sudiksha
  Location : Noida, India

  Open to: Research internships · ML engineering · Collaboration`,
};

export default function TerminalWindow() {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', content: 'Sudiksha OS — Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.\n' },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLines: Line[] = [{ type: 'input', content: `sudiksha@workspace ~ % ${cmd}` }];

    if (cmd === 'clear') {
      setLines([{ type: 'output', content: 'Terminal cleared.\n' }]);
      setInput('');
      setHistory((h) => [cmd, ...h]);
      setHistIdx(-1);
      return;
    }

    if (COMMANDS[cmd]) {
      newLines.push({ type: 'output', content: COMMANDS[cmd] + '\n' });
    } else {
      newLines.push({
        type: 'error',
        content: `Command not found: ${cmd}. Type "help" for available commands.\n`,
      });
    }

    setLines((prev) => [...prev, ...newLines]);
    setHistory((h) => [cmd, ...h]);
    setHistIdx(-1);
    setInput('');
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(idx);
      setInput(history[idx] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? '' : history[idx]);
    }
  }

  return (
    <div
      className="h-full flex flex-col p-4 font-mono text-xs"
      style={{ background: 'rgba(0,0,0,0.6)', color: 'rgba(255,255,255,0.85)' }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Output */}
      <div className="flex-1 overflow-auto space-y-0.5">
        {lines.map((line, i) => (
          <div
            key={i}
            className="leading-relaxed whitespace-pre-wrap"
            style={{
              color:
                line.type === 'input'
                  ? 'rgba(34,211,238,0.9)'
                  : line.type === 'error'
                  ? 'rgba(239,68,68,0.8)'
                  : 'rgba(255,255,255,0.75)',
            }}
          >
            {line.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2 pt-2 border-t border-white/5">
        <span style={{ color: 'rgba(34,211,238,0.7)' }}>sudiksha@workspace ~ %</span>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-white/85 caret-cyan-400"
          spellCheck={false}
          autoComplete="off"
        />
      </form>
    </div>
  );
}
