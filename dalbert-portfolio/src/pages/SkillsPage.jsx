import { motion } from 'framer-motion'

const SKILL_ICONS = {
  python:   { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  java:     { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  c:        { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  react:    { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  tailwind: { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  nodejs:   { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  sql:      { emoji: '🗄️' },
  ml:       { emoji: '🧠' },
  data:     { emoji: '⚙️' },
  dsa:      { emoji: '📐' },
  opencv:   { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  yolo:     { emoji: '👁️' },
  bert:     { emoji: '🔵' },
  biogpt:   { emoji: '🧬' },
  prompt:   { emoji: '💬' },
  github:   { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  mongodb:  { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  vscode:   { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  anaconda: { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg' },
  jupyter:  { svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
  video:    { emoji: '🎬' },
  film:     { emoji: '🎥' },
  event:    { emoji: '🎤' },
}

const SKILLS = [
  { name: 'Python',       icon: 'python',   color: '#3776ab' },
  { name: 'Java',         icon: 'java',     color: '#f89820' },
  { name: 'C',            icon: 'c',        color: '#a8b9cc' },
  { name: 'React',        icon: 'react',    color: '#61dafb' },
  { name: 'Tailwind',     icon: 'tailwind', color: '#06b6d4' },
  { name: 'Node.js',      icon: 'nodejs',   color: '#339933' },
  { name: 'SQL',          icon: 'sql',      color: '#f85001' },
  { name: 'ML',           icon: 'ml',       color: '#ff6f00' },
  { name: 'Data Eng',     icon: 'data',     color: '#1ab8c8' },
  { name: 'DSA',          icon: 'dsa',      color: '#ffd700' },
  { name: 'OpenCV',       icon: 'opencv',   color: '#5c3ee8' },
  { name: 'YOLO',         icon: 'yolo',     color: '#f85001' },
  { name: 'BERT',         icon: 'bert',     color: '#4285f4' },
  { name: 'BioGPT',       icon: 'biogpt',   color: '#34a853' },
  { name: 'Prompt Eng',   icon: 'prompt',   color: '#1ab8c8' },
  { name: 'GitHub',       icon: 'github',   color: '#ffffff' },
  { name: 'MongoDB',      icon: 'mongodb',  color: '#47a248' },
  { name: 'VS Code',      icon: 'vscode',   color: '#007acc' },
  { name: 'Anaconda',     icon: 'anaconda', color: '#44a833' },
  { name: 'Jupyter',      icon: 'jupyter',  color: '#f37626' },
  { name: 'Video Edit',   icon: 'video',    color: '#f85001' },
  { name: 'Filmmaking',   icon: 'film',     color: '#ffd700' },
  { name: 'Event Host',   icon: 'event',    color: '#1ab8c8' },
]

function SkillItem({ skill, index }) {
  const iconData = SKILL_ICONS[skill.icon] || { emoji: '⚡' }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      whileHover={{ y: -12, scale: 1.1 }}
      className="flex flex-col items-center gap-2 cursor-default group"
    >
      {/* Fire ring bubble */}
      <div
        className="relative rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          width: 62,
          height: 62,
          background: `radial-gradient(circle at 40% 35%, ${skill.color}22, #0a1f1c)`,
          border: `2px solid ${skill.color}70`,
          boxShadow: `0 0 12px ${skill.color}40, inset 0 0 8px ${skill.color}15`,
        }}
      >
        {/* Animated fire ring on hover */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `0 0 18px ${skill.color}, 0 0 36px ${skill.color}80, 0 0 60px ${skill.color}40`,
            animation: 'fireRingPulse 1.8s ease-in-out infinite',
          }}
        />

        {/* Icon */}
        {iconData.svg ? (
          <img
            src={iconData.svg}
            alt={skill.name}
            width={32}
            height={32}
            style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }}
            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
          />
        ) : null}
        <span
          style={{
            fontSize: '1.6rem',
            display: iconData.svg ? 'none' : 'flex',
          }}
        >
          {iconData.emoji}
        </span>

        {/* Bottom ember glow */}
        <div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full opacity-60"
          style={{ background: skill.color, filter: 'blur(3px)' }}
        />
      </div>

      {/* Label */}
      <span
        className="font-righteous text-center leading-tight transition-colors duration-300 group-hover:text-brand-orange"
        style={{
          fontSize: '0.58rem',
          color: 'rgba(255,255,255,0.65)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          maxWidth: 70,
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function SkillsPage({ onBack, onNavigate }) {
  return (
    <div className="absolute inset-0 bg-brand-green flex flex-col overflow-hidden">
      <style>{`
        @keyframes fireRingPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>

      {/* Radial glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(248,80,1,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Dark noise grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#f85001 1px, transparent 1px), linear-gradient(90deg, #f85001 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Nav */}
      <button
        onClick={onBack}
        className="absolute top-5 left-5 z-30 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border border-brand-orange/60 text-brand-orange hover:bg-brand-orange hover:text-brand-green transition-all"
      >
        ← Back
      </button>
      <button
        onClick={() => onNavigate('education')}
        className="absolute top-5 right-5 z-30 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border border-brand-orange/60 text-brand-orange hover:bg-brand-orange hover:text-brand-green transition-all"
      >
        Education →
      </button>

      {/* Heading */}
      <motion.h2
        className="font-bebas text-brand-orange absolute top-4 left-1/2 -translate-x-1/2 tracking-widest z-20"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>

      {/* Skills grid */}
      <div className="flex-1 flex flex-col items-center justify-center pt-16 pb-4 px-6">
        {/* Dark panel behind grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-lg p-6"
          style={{
            background: 'rgba(0,0,0,0.55)',
            border: '1px solid rgba(248,80,1,0.15)',
            boxShadow: '0 0 60px rgba(248,80,1,0.08), inset 0 0 40px rgba(0,0,0,0.4)',
          }}
        >
          {/* Panel header */}
          <div className="text-center mb-5">
            <span className="font-righteous text-white/30 text-xs tracking-[0.3em] uppercase">
              Tech Stack & Expertise
            </span>
          </div>

          {/* Grid */}
          <div
            className="grid gap-x-4 gap-y-5"
            style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}
          >
            {SKILLS.map((skill, i) => (
              <SkillItem key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
