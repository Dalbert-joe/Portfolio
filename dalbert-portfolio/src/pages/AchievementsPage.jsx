import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '../data/portfolio'

export default function AchievementsPage({ onBack, onNavigate }) {
  return (
    <div className="absolute inset-0 bg-brand-orange flex flex-col overflow-hidden">
      {/* Diagonal stripes */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <button
        onClick={onBack}
        className="absolute top-6 left-6 z-30 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border-2 border-white/60 text-white hover:bg-white hover:text-brand-orange transition-all"
      >
        ← Back
      </button>
      <button
        onClick={() => onNavigate('publications')}
        className="absolute top-6 right-6 z-30 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border-2 border-white/60 text-white hover:bg-white hover:text-brand-orange transition-all"
      >
        Publications →
      </button>

      <div className="flex-1 flex items-center px-[7%]">
        <div className="w-full">
          <motion.h2
            className="font-bebas text-brand-teal mb-10"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1 }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Achievements
          </motion.h2>

          <div className="flex flex-col gap-4">
            {ACHIEVEMENTS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-5 group cursor-default"
              >
                {/* Number */}
                <div
                  className="font-bebas text-white/20 flex-shrink-0 w-16 text-right"
                  style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex-1 flex items-center gap-4 border-l-4 border-white/30 pl-5 py-2 hover:border-white transition-all duration-300"
                >
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div
                      className="font-bebas text-white leading-none"
                      style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
                    >
                      {item.title}
                    </div>
                    <div className="font-righteous text-white/70 text-sm tracking-wider uppercase mt-0.5">
                      {item.event}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
