import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '../data/portfolio'

const RADIUS = 220
const CENTER_X = 0
const CENTER_Y = 0

function getAngle(index, offset, total) {
  return (index / total) * 360 + offset
}

function polarToXY(angleDeg, r) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: Math.cos(rad) * r, y: Math.sin(rad) * r }
}

export default function ProjectsPage({ onBack, onNavigate, onSelectProject }) {
  const [rotationOffset, setRotationOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [lastY, setLastY] = useState(null)
  const [velocity, setVelocity] = useState(0)
  const velRef = useRef(0)
  const animRef = useRef(null)
  const containerRef = useRef(null)

  const TOTAL = PROJECTS.length
  const STEP = 360 / TOTAL

  // Find the project closest to the top (angle ~ 0 from top)
  const getActiveIndex = () => {
    const normalized = ((rotationOffset % 360) + 360) % 360
    const raw = Math.round((360 - normalized) / STEP) % TOTAL
    return ((raw % TOTAL) + TOTAL) % TOTAL
  }

  const activeIndex = getActiveIndex()

  const snapToNearest = useCallback(() => {
    const normalized = ((rotationOffset % 360) + 360) % 360
    const nearest = Math.round(normalized / STEP) * STEP
    setRotationOffset(nearest)
  }, [rotationOffset, STEP])

  // Inertia
  useEffect(() => {
    if (!isDragging && Math.abs(velRef.current) > 0.1) {
      animRef.current = requestAnimationFrame(() => {
        setRotationOffset(prev => prev + velRef.current)
        velRef.current *= 0.94
      })
    } else if (!isDragging) {
      snapToNearest()
    }
    return () => cancelAnimationFrame(animRef.current)
  }, [rotationOffset, isDragging, snapToNearest])

  const onWheel = (e) => {
    e.preventDefault()
    setRotationOffset(prev => prev + e.deltaY * 0.3)
    velRef.current = e.deltaY * 0.05
  }

  const onMouseDown = (e) => {
    setIsDragging(true)
    setLastY(e.clientY)
    velRef.current = 0
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    const delta = e.clientY - lastY
    setRotationOffset(prev => prev + delta * 0.5)
    velRef.current = delta * 0.3
    setLastY(e.clientY)
  }

  const onMouseUp = () => setIsDragging(false)

  const onTouchStart = (e) => {
    setIsDragging(true)
    setLastY(e.touches[0].clientY)
  }

  const onTouchMove = (e) => {
    if (!isDragging) return
    const delta = e.touches[0].clientY - lastY
    setRotationOffset(prev => prev + delta * 0.5)
    velRef.current = delta * 0.3
    setLastY(e.touches[0].clientY)
  }

  const onTouchEnd = () => setIsDragging(false)

  return (
    <div
      className="absolute inset-0 bg-brand-green flex flex-col items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(#f85001 1px, transparent 1px), linear-gradient(90deg, #f85001 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Header */}
      <motion.h2
        className="font-bebas text-brand-orange absolute top-5 left-1/2 -translate-x-1/2 z-20 tracking-widest"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      {/* Nav buttons */}
      <button
        onClick={onBack}
        className="absolute top-5 left-5 z-30 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border border-brand-orange/60 text-brand-orange hover:bg-brand-orange hover:text-brand-green transition-all"
      >
        ← Back
      </button>
      <button
        onClick={() => onNavigate('achievements')}
        className="absolute top-5 right-5 z-30 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border border-brand-orange/60 text-brand-orange hover:bg-brand-orange hover:text-brand-green transition-all"
      >
        Next →
      </button>

      {/* Scroll hint */}
      <p className="absolute bottom-5 font-righteous text-brand-teal/60 text-xs tracking-widest z-20">
        SCROLL / DRAG TO SPIN · CLICK PROJECT TO EXPLORE
      </p>

      {/* Radial Wheel */}
      <div
        className="relative select-none"
        style={{ width: 520, height: 520 }}
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Wheel ring */}
        <svg
          className="absolute inset-0"
          width="520"
          height="520"
          viewBox="-260 -260 520 520"
        >
          {/* Outer ring */}
          <circle cx="0" cy="0" r={RADIUS + 40} fill="none" stroke="rgba(248,80,1,0.08)" strokeWidth="80" />
          <circle cx="0" cy="0" r={RADIUS} fill="none" stroke="rgba(248,80,1,0.2)" strokeWidth="1" strokeDasharray="6 4" />
          {/* Spokes */}
          {PROJECTS.map((_, i) => {
            const ang = getAngle(i, rotationOffset, TOTAL)
            const pt = polarToXY(ang, RADIUS + 30)
            return (
              <line
                key={i}
                x1="0" y1="0"
                x2={pt.x} y2={pt.y}
                stroke="rgba(248,80,1,0.06)"
                strokeWidth="1"
              />
            )
          })}
          {/* Center glow */}
          <circle cx="0" cy="0" r="20" fill="rgba(248,80,1,0.15)" />
          <circle cx="0" cy="0" r="8" fill="#f85001" />
        </svg>

        {/* Project bubbles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {PROJECTS.map((proj, i) => {
            const ang = getAngle(i, rotationOffset, TOTAL)
            const { x, y } = polarToXY(ang, RADIUS)
            const isActive = i === activeIndex
            const scale = isActive ? 1.2 : 0.85
            const opacity = (() => {
              const diff = Math.abs(ang % 360 - 0)
              const d = Math.min(diff, 360 - diff)
              return 1 - (d / 180) * 0.5
            })()

            return (
              <motion.button
                key={proj.id}
                animate={{ x, y, scale }}
                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                onClick={() => onSelectProject(proj)}
                className="absolute flex flex-col items-center gap-1 group"
                style={{ opacity }}
              >
                {/* Bubble */}
                <div
                  className={`
                    rounded-full flex items-center justify-center transition-all duration-300
                    ${isActive ? 'fire-ring' : ''}
                  `}
                  style={{
                    width: isActive ? 90 : 70,
                    height: isActive ? 90 : 70,
                    background: isActive
                      ? `radial-gradient(circle, rgba(248,80,1,0.3), rgba(22,61,54,0.95))`
                      : 'rgba(22,61,54,0.9)',
                    border: `2px solid ${isActive ? proj.color : 'rgba(248,80,1,0.3)'}`,
                    boxShadow: isActive ? `0 0 20px ${proj.color}60` : 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  <span style={{ fontSize: isActive ? '2rem' : '1.5rem' }}>{proj.icon}</span>
                </div>

                {/* Label */}
                <div
                  className={`font-righteous text-center leading-tight transition-all duration-300 ${isActive ? 'text-brand-orange' : 'text-white/60'}`}
                  style={{
                    fontSize: isActive ? '0.7rem' : '0.6rem',
                    maxWidth: 90,
                    letterSpacing: '0.05em',
                  }}
                >
                  {proj.name}
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Active project info card in center */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
            style={{ width: 100 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="font-bebas text-brand-orange text-xs tracking-widest"
              style={{ fontSize: '0.55rem' }}
            >
              {PROJECTS[activeIndex]?.tagline}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Active project preview card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20"
          style={{ width: 280 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="border overflow-hidden"
            style={{ borderColor: PROJECTS[activeIndex]?.color + '60', background: 'rgba(0,0,0,0.4)' }}
          >
            <img
              src={PROJECTS[activeIndex]?.image}
              alt={PROJECTS[activeIndex]?.name}
              className="w-full object-cover"
              style={{ height: 140 }}
            />
            <div className="p-4">
              <div className="font-bebas text-brand-orange text-xl mb-1">{PROJECTS[activeIndex]?.name}</div>
              <div className="font-righteous text-white/60 text-xs tracking-wider mb-3">{PROJECTS[activeIndex]?.tagline}</div>
              <p className="font-oswald text-white/70 text-xs leading-relaxed line-clamp-3">
                {PROJECTS[activeIndex]?.description}
              </p>
              <button
                onClick={() => onSelectProject(PROJECTS[activeIndex])}
                className="mt-3 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-brand-green transition-all w-full"
              >
                View Project →
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
