import { motion } from 'framer-motion'

const EDUCATION = [
  {
    degree: 'B.Tech — AI & Data Science',
    institution: 'Loyola ICAM College of Engineering and Technology',
    year: '2024 – 2028',
    type: 'degree',
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Velammal Vidyalaya, Viraganoor',
    year: 'Completed',
    type: 'school',
    icon: '🏫',
  },
]

const COURSES = [
  { name: 'Prompt Engineering', provider: 'Infosys Springboard', icon: '💬' },
  { name: 'Artificial Intelligence', provider: 'Infosys Springboard', icon: '🧠' },
  { name: 'Database Programming with SQL', provider: 'Oracle Academy', icon: '🗄️' },
  { name: 'IoT and IoRT', provider: '5-Day Workshop', icon: '📡' },
]

export default function EducationPage({ onBack, onNavigate }) {
  return (
    <div className="absolute inset-0 bg-brand-green flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(#f85001 1px, transparent 1px), linear-gradient(90deg, #f85001 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <button
        onClick={onBack}
        className="absolute top-5 left-5 z-30 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border border-brand-orange/60 text-brand-orange hover:bg-brand-orange hover:text-brand-green transition-all"
      >
        ← Back
      </button>
      <button
        onClick={() => onNavigate('contact')}
        className="absolute top-5 right-5 z-30 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border border-brand-orange/60 text-brand-orange hover:bg-brand-orange hover:text-brand-green transition-all"
      >
        Contact →
      </button>

      <div className="flex-1 flex items-center px-[7%] py-20 gap-16">
        {/* Left — Education */}
        <div className="flex-1">
          <motion.h2
            className="font-bebas text-brand-orange mb-10"
            style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1 }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Education
          </motion.h2>

          <div className="flex flex-col gap-6 relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-brand-orange/20" />

            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-6 items-start pl-4"
              >
                {/* Timeline dot */}
                <div
                  className="w-10 h-10 rounded-full border-2 border-brand-orange flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{ background: '#163d36' }}
                >
                  <span className="text-lg">{edu.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div
                    className="font-bebas text-brand-orange leading-none mb-1"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
                  >
                    {edu.degree}
                  </div>
                  <div className="font-oswald text-white/80 text-sm mb-1">{edu.institution}</div>
                  <div className="font-righteous text-brand-teal text-xs tracking-widest uppercase">{edu.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-px self-stretch bg-brand-orange/20" />

        {/* Right — Courses */}
        <div className="flex-1">
          <motion.h3
            className="font-bebas text-brand-teal mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Courses
          </motion.h3>

          <div className="flex flex-col gap-4">
            {COURSES.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 border border-brand-orange/20 px-4 py-3 hover:border-brand-orange/60 transition-all duration-300"
                style={{ background: 'rgba(248,80,1,0.04)' }}
              >
                <span className="text-2xl flex-shrink-0">{course.icon}</span>
                <div>
                  <div className="font-oswald text-white font-medium text-sm">{course.name}</div>
                  <div className="font-righteous text-brand-orange/70 text-xs tracking-wider uppercase">{course.provider}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
