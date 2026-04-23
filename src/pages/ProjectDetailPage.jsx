import { motion } from 'framer-motion'

export default function ProjectDetailPage({ project, onBack }) {
  if (!project) return null

  return (
    <div className="absolute inset-0 bg-brand-green flex overflow-hidden">
      {/* Bg grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(#f85001 1px, transparent 1px), linear-gradient(90deg, #f85001 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent color bar left */}
      <div
        className="absolute left-0 top-0 w-1 h-full"
        style={{ background: project.color }}
      />

      {/* Back */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-6 right-6 z-50 font-righteous text-xs tracking-widest uppercase px-3 py-1.5 border border-brand-orange/60 text-brand-orange hover:bg-brand-orange hover:text-brand-green transition-all"
      >
        ← Back to Projects
      </motion.button>

      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center pl-12 pr-8 py-20 max-w-[58%]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="text-5xl mb-4">{project.icon}</div>

          {/* Badge */}
          {project.badge && (
            <div
              className="inline-block font-righteous text-xs tracking-widest uppercase px-3 py-1 mb-4"
              style={{ background: project.color + '20', color: project.color, border: `1px solid ${project.color}40` }}
            >
              {project.badge}
            </div>
          )}

          {/* Title */}
          <h2
            className="font-bebas leading-none mb-2"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              color: project.color,
              textShadow: `0 0 40px ${project.color}40`,
            }}
          >
            {project.name}
          </h2>

          {/* Tagline */}
          <p className="font-righteous text-white/50 tracking-widest text-sm mb-6 uppercase">
            {project.tagline}
          </p>

          {/* Divider */}
          <div className="h-px mb-6" style={{ background: `linear-gradient(to right, ${project.color}80, transparent)` }} />

          {/* Description */}
          <p className="font-oswald text-white/80 leading-loose text-base">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="font-righteous text-xs tracking-wider uppercase px-2 py-1"
                style={{
                  border: `1px solid ${project.color}50`,
                  color: project.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right image */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center"
        style={{ width: '34%' }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Decorative frame */}
        <div className="relative">
          <div
            className="absolute -top-3 -left-3 w-full h-full border"
            style={{ borderColor: project.color + '40' }}
          />
          <div
            className="relative border-2 overflow-hidden"
            style={{
              borderColor: project.color,
              boxShadow: `0 0 30px ${project.color}30`,
              width: '100%',
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full object-cover"
              style={{ height: 280 }}
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to top, ${project.color}30, transparent 60%)` }}
            />
          </div>
        </div>

        {/* Project number */}
        <div
          className="font-bebas mt-6 tracking-widest"
          style={{
            fontSize: '6rem',
            color: project.color + '15',
            lineHeight: 1,
          }}
        >
          0{project.id}
        </div>
      </motion.div>
    </div>
  )
}
