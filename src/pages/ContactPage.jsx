import { motion } from 'framer-motion'
import { CONTACT } from '../data/portfolio'

const CONTACT_ITEMS = [
  {
    label: 'Phone',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18L6.55 2a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.61 9.91a16 16 0 0 0 5.47 5.47l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    color: '#1ab8c8',
  },
  {
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    color: '#f85001',
  },
  {
    label: 'LinkedIn',
    value: 'dalbert-joe-j',
    href: CONTACT.linkedin,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    color: '#0077b5',
  },
  {
    label: 'GitHub',
    value: 'Dalbert-joe',
    href: CONTACT.github,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    color: '#ffffff',
  },
]

export default function ContactPage({ onBack }) {
  return (
    <div className="absolute inset-0 bg-brand-green flex flex-col overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(#f85001 1px, transparent 1px), linear-gradient(90deg, #f85001 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(248,80,1,0.05) 0%, transparent 70%)' }}
      />

      <button
        onClick={onBack}
        className="absolute top-5 left-5 z-30 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border border-brand-orange/60 text-brand-orange hover:bg-brand-orange hover:text-brand-green transition-all"
      >
        ← Back
      </button>

      <div className="flex-1 flex flex-col items-center justify-center px-[7%] gap-12">

        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-bebas text-brand-orange leading-none"
            style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', textShadow: '0 0 60px rgba(248,80,1,0.3)' }}
          >
            Let's Connect
          </h2>
          <p className="font-righteous text-white/40 tracking-[0.3em] text-xs uppercase mt-2">
            Open to Opportunities & Collaborations
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-2 gap-5 w-full max-w-2xl">
          {CONTACT_ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 p-5 border transition-all duration-300 group cursor-none"
              style={{
                borderColor: `${item.color}30`,
                background: `${item.color}08`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = item.color + '80'
                e.currentTarget.style.boxShadow = `0 0 20px ${item.color}20`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = item.color + '30'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}40`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <div className="font-righteous text-white/50 text-xs tracking-widest uppercase mb-1">
                  {item.label}
                </div>
                <div
                  className="font-oswald font-medium text-sm transition-colors duration-300"
                  style={{ color: item.color, wordBreak: 'break-all' }}
                >
                  {item.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom signature */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div
            className="font-bebas text-white/10 select-none"
            style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', letterSpacing: '0.1em' }}
          >
            Dalbert Joe J
          </div>
        </motion.div>
      </div>
    </div>
  )
}
