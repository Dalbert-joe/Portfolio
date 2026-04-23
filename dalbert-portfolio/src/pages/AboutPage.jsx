import { motion } from 'framer-motion'

export default function AboutPage({ onBack, onNavigate }) {
  return (
    <div className="absolute inset-0 bg-brand-orange flex overflow-hidden">
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-6 left-6 z-50 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border-2 border-white/60 text-white hover:bg-white hover:text-brand-orange transition-all duration-200"
      >
        ← Back
      </motion.button>

      {/* Next nav */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => onNavigate('projects')}
        className="absolute top-6 right-6 z-50 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border-2 border-white/60 text-white hover:bg-white hover:text-brand-orange transition-all duration-200"
      >
        Projects →
      </motion.button>

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)',
        }}
      />

      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center px-[7%] py-20 max-w-[60%]">
        <motion.h2
          className="font-bebas text-brand-teal mb-6"
          style={{ fontSize: 'clamp(4rem, 9vw, 7rem)', lineHeight: 1 }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        <motion.p
          className="font-oswald font-bold text-white leading-loose mb-6"
          style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Engineering student pursuing B.Tech in Artificial Intelligence and Data Science, focused on building practical, data-driven systems. Experienced in developing applications using machine learning, computer vision, and data engineering concepts. Strong interest in problem-solving, system design, and hands-on implementation.
        </motion.p>

        <motion.p
          className="font-oswald text-white/85 leading-loose"
          style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Also engaged in storytelling and visual communication through filmmaking and video editing, supporting structured thinking and effective presentation of technical ideas.
        </motion.p>

        {/* Quick stats */}
        <motion.div
          className="flex gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { num: '6+', label: 'Projects' },
            { num: '5+', label: 'Awards' },
            { num: '1', label: 'Publication' },
            { num: '2024', label: 'B.Tech Start' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="font-bebas text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>{num}</div>
              <div className="font-righteous text-white/60 text-xs tracking-widest uppercase">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right photo */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          {/* Decorative teal border frame */}
          <div
            className="absolute -top-3 -left-3 w-full h-full border-2 border-brand-teal"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute -bottom-3 -right-3 w-full h-full border-2 border-white/30"
            style={{ zIndex: 0 }}
          />

          {/* Photo */}
          <div
            className="relative z-10 border-4 border-brand-teal overflow-hidden"
            style={{ width: 'clamp(200px, 22vw, 300px)', height: 'clamp(240px, 28vw, 380px)' }}
          >
            <img
              src="/dalbert.png"
              alt="Dalbert Joe J"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.style.background = 'rgba(255,255,255,0.1)'
                e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:white;font-family:Bebas Neue;font-size:3rem;letter-spacing:0.1em">D J</div>'
              }}
            />
          </div>

          {/* Name tag */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-brand-green px-4 py-1 z-20 whitespace-nowrap">
            <span className="font-bebas text-brand-orange tracking-widest text-sm">Dalbert Joe J</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
