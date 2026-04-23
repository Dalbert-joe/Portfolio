import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingPage({ onComplete }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let current = 0
    const target = 100
    const totalDuration = 2800
    const steps = 80
    const stepTime = totalDuration / steps

    const timer = setInterval(() => {
      current += Math.floor(Math.random() * 3) + 1
      if (current >= target) {
        current = target
        setCount(current)
        clearInterval(timer)
        setTimeout(() => setDone(true), 400)
        setTimeout(() => onComplete(), 1000)
      } else {
        setCount(current)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-brand-green flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(#f85001 1px, transparent 1px), linear-gradient(90deg, #f85001 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Corner brackets */}
          {[
            'top-8 left-8 border-t-2 border-l-2',
            'top-8 right-8 border-t-2 border-r-2',
            'bottom-8 left-8 border-b-2 border-l-2',
            'bottom-8 right-8 border-b-2 border-r-2',
          ].map((cls, i) => (
            <div key={i} className={`absolute w-10 h-10 border-brand-orange/60 ${cls}`} />
          ))}

          {/* Main counter */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="font-bebas leading-none select-none"
              style={{
                fontSize: 'clamp(8rem, 22vw, 20rem)',
                color: '#f85001',
                textShadow: '0 0 80px rgba(248,80,1,0.5), 0 0 160px rgba(248,80,1,0.2)',
              }}
            >
              {count}
              <span style={{ fontSize: '50%', verticalAlign: 'super' }}>%</span>
            </div>

            <motion.p
              className="font-righteous text-white/60 tracking-[0.4em] text-sm mt-2"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              LOADING PORTFOLIO
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-px bg-white/10">
            <motion.div
              className="h-full bg-brand-orange"
              style={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Name watermark */}
          <div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 font-bebas text-white/5 whitespace-nowrap select-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            DALBERT JOE J
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
