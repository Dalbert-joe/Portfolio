import { motion } from 'framer-motion'

export default function PublicationsPage({ onBack, onNavigate }) {
  return (
    <div className="absolute inset-0 bg-brand-orange flex flex-col overflow-hidden">
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
        onClick={() => onNavigate('skills')}
        className="absolute top-6 right-6 z-30 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border-2 border-white/60 text-white hover:bg-white hover:text-brand-orange transition-all"
      >
        Skills →
      </button>

      <div className="flex-1 flex items-center px-[7%]">
        <div className="w-full max-w-4xl">
          <motion.h2
            className="font-bebas text-brand-teal mb-10"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1 }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Publications
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border-l-8 border-brand-teal pl-8 py-2"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            {/* Award badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl">🏆</span>
              <span className="font-righteous text-white tracking-widest text-sm uppercase">
                Best Paper Award — ICAIDS Loyola College (2026)
              </span>
            </div>

            {/* Paper title */}
            <h3
              className="font-bebas text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)' }}
            >
              From Video to Tactics: An AI-Based System for Automation of Football Match Analysis and Performance Evaluation
            </h3>

            {/* Description */}
            <p className="font-oswald text-white/80 leading-loose text-sm mb-6">
              Applied artificial intelligence techniques to extract tactical insights from football match video data, enabling automated performance evaluation. The system processes match footage to identify player movements, formations, and key events, translating raw video into structured tactical data.
            </p>

            {/* Authors */}
            <div className="flex flex-col gap-1">
              <div className="font-righteous text-white/50 text-xs tracking-widest uppercase mb-1">Authors</div>
              <div className="font-oswald text-white/80 text-sm">
                Dalbert Joe J, Ananya S V, Antony Thomas Sharone A, Jeff Reuben S I, Siddeshwaran U R
              </div>
              <div className="font-righteous text-brand-teal text-xs tracking-wider mt-1 uppercase">
                Mentor: Mr. Srivathsava M
              </div>
            </div>
          </motion.div>

          {/* Decorative bottom number */}
          <motion.div
            className="font-bebas text-white/5 mt-4 select-none"
            style={{ fontSize: 'clamp(5rem, 15vw, 12rem)', lineHeight: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            2026
          </motion.div>
        </div>
      </div>
    </div>
  )
}
