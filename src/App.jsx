import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import FlameSweep from './components/FlameSweep'
import LoadingPage from './pages/LoadingPage'
import HeroPage from './pages/HeroPage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AchievementsPage from './pages/AchievementsPage'
import PublicationsPage from './pages/PublicationsPage'
import SkillsPage from './pages/SkillsPage'
import EducationPage from './pages/EducationPage'
import ContactPage from './pages/ContactPage'

const PAGE_ORDER = ['hero', 'about', 'projects', 'achievements', 'publications', 'skills', 'education', 'contact']

const pageVariants = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.25 } },
}

export default function App() {
  const [phase, setPhase] = useState('loading') // loading | transition | main
  const [currentPage, setCurrentPage] = useState('hero')
  const [selectedProject, setSelectedProject] = useState(null)
  const [sweeping, setSweeping] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setPhase('transition')
    setSweeping(true)
  }, [])

  const handleSweepComplete = useCallback(() => {
    setSweeping(false)
    setPhase('main')
  }, [])

  const navigateTo = useCallback((page) => {
    setSelectedProject(null)
    setCurrentPage(page)
  }, [])

  const handleSelectProject = useCallback((project) => {
    setSelectedProject(project)
  }, [])

  const handleBack = useCallback(() => {
    if (selectedProject) {
      setSelectedProject(null)
      return
    }
    const idx = PAGE_ORDER.indexOf(currentPage)
    if (idx > 0) setCurrentPage(PAGE_ORDER[idx - 1])
    else setCurrentPage('hero')
  }, [currentPage, selectedProject])

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: '#163d36' }}>
      <CustomCursor />

      {/* LOADING */}
      {phase === 'loading' && (
        <LoadingPage onComplete={handleLoadComplete} />
      )}

      {/* FLAME SWEEP TRANSITION */}
      <AnimatePresence>
        {sweeping && (
          <motion.div
            className="absolute inset-0 z-50"
            style={{ background: '#163d36' }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <FlameSweep onComplete={handleSweepComplete} />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="font-bebas text-brand-orange tracking-widest"
                style={{
                  fontSize: 'clamp(4rem, 12vw, 9rem)',
                  textShadow: '0 0 60px rgba(248,80,1,0.7)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.05, 1, 0.9] }}
                transition={{ duration: 1.2, times: [0, 0.2, 0.7, 1] }}
              >
                DALBERT JOE J
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      {phase === 'main' && (
        <AnimatePresence mode="wait">
          {/* Project detail view */}
          {selectedProject ? (
            <motion.div
              key="project-detail"
              className="absolute inset-0"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ProjectDetailPage project={selectedProject} onBack={handleBack} />
            </motion.div>
          ) : (
            <motion.div
              key={currentPage}
              className="absolute inset-0"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {currentPage === 'hero' && (
                <HeroPage onNavigate={navigateTo} />
              )}
              {currentPage === 'about' && (
                <AboutPage onBack={handleBack} onNavigate={navigateTo} />
              )}
              {currentPage === 'projects' && (
                <ProjectsPage
                  onBack={handleBack}
                  onNavigate={navigateTo}
                  onSelectProject={handleSelectProject}
                />
              )}
              {currentPage === 'achievements' && (
                <AchievementsPage onBack={handleBack} onNavigate={navigateTo} />
              )}
              {currentPage === 'publications' && (
                <PublicationsPage onBack={handleBack} onNavigate={navigateTo} />
              )}
              {currentPage === 'skills' && (
                <SkillsPage onBack={handleBack} onNavigate={navigateTo} />
              )}
              {currentPage === 'education' && (
                <EducationPage onBack={handleBack} onNavigate={navigateTo} />
              )}
              {currentPage === 'contact' && (
                <ContactPage onBack={handleBack} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}
