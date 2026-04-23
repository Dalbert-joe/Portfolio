import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import FlameCanvas from '../components/FlameCanvas'

export default function HeroPage({ onNavigate }) {
  const nameRef = useRef(null)

  // Particle burst on click
  const burstParticles = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const container = e.currentTarget.closest('.hero-container')
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div')
      p.style.cssText = `
        position: absolute;
        width: ${Math.random() * 8 + 4}px;
        height: ${Math.random() * 8 + 4}px;
        background: hsl(${Math.random() * 40 + 15}, 100%, ${Math.random() * 30 + 50}%);
        border-radius: 50%;
        left: ${e.clientX - rect.left}px;
        top: ${e.clientY - rect.top}px;
        pointer-events: none;
        z-index: 100;
        --drift: ${(Math.random() - 0.5) * 80}px;
      `
      p.classList.add('flame-particle')
      container?.appendChild(p)
      setTimeout(() => p.remove(), 1600)
    }
  }

  const navItems = [
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' },
  ]

  return (
    <div className="hero-container absolute inset-0 bg-brand-green flex flex-col items-center justify-center overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#f85001 1px, transparent 1px), linear-gradient(90deg, #f85001 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Nav top right */}
      <div className="absolute top-6 right-6 flex gap-2 z-30">
        {navItems.map(({ label, section }) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate(section)}
            className="font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border border-brand-orange/60 text-brand-orange hover:bg-brand-orange hover:text-brand-green transition-all duration-200"
          >
            {label}
          </motion.button>
        ))}
      </div>

      {/* Flame bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10" style={{ height: '38%' }}>
        <FlameCanvas />
      </div>

      {/* Main name */}
      <motion.div
        ref={nameRef}
        className="relative z-20 text-center select-none"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onClick={burstParticles}
        style={{ cursor: 'none' }}
      >
        {/* Decorative line above */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-24 h-px bg-brand-orange mx-auto mb-4"
        />

        {/* DALBERT */}
        <motion.h1
          className="font-bebas leading-none"
          style={{
            fontSize: 'clamp(4rem, 14vw, 12rem)',
            color: '#f85001',
            textShadow: '0 0 60px rgba(248,80,1,0.4)',
            letterSpacing: '0.05em',
          }}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          DALBERT
        </motion.h1>

        {/* JOE J */}
        <motion.h1
          className="font-bebas leading-none"
          style={{
            fontSize: 'clamp(4rem, 14vw, 12rem)',
            color: '#f85001',
            textShadow: '0 0 60px rgba(248,80,1,0.4)',
            letterSpacing: '0.05em',
            marginTop: '-0.15em',
          }}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          JOE J
        </motion.h1>

        {/* Since 2007 */}
        <motion.p
          className="font-righteous tracking-[0.6em] uppercase"
          style={{
            fontSize: 'clamp(0.8rem, 2vw, 1.4rem)',
            color: '#f85001',
            marginTop: '0.3em',
            textShadow: '0 0 20px rgba(248,80,1,0.6)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          — Since 2007 —
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-24 h-px bg-brand-orange mx-auto mt-4"
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="absolute font-oswald text-white/40 tracking-widest text-xs z-20"
        style={{ bottom: '42%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        AI & Data Science · Computer Vision · Full Stack
      </motion.p>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-6 bg-brand-orange/40" />
        <p className="font-righteous text-brand-orange/40 text-xs tracking-widest">EXPLORE</p>
      </motion.div>
    </div>
  )
}
