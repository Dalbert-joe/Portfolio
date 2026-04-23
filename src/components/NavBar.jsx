import { motion } from 'framer-motion'

const SECTIONS = ['About', 'Projects', 'Achievements', 'Publications', 'Skills', 'Education', 'Contact']

export default function NavBar({ current, onNavigate }) {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="absolute top-0 right-0 z-50 flex items-center gap-1 p-4"
    >
      {SECTIONS.map((s) => (
        <button
          key={s}
          onClick={() => onNavigate(s.toLowerCase())}
          className={`
            font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border transition-all duration-200
            ${current === s.toLowerCase()
              ? 'border-brand-orange bg-brand-orange text-brand-green'
              : 'border-brand-orange/50 text-brand-orange hover:border-brand-orange hover:bg-brand-orange/10'
            }
          `}
        >
          {s}
        </button>
      ))}
    </motion.nav>
  )
}
