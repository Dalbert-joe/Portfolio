import { useEffect, useRef } from 'react'

export default function FlameCanvas({ style = {}, className = '' }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = []
    const COLS = Math.floor(canvas.width / 18)

    class FlameParticle {
      constructor(x) {
        this.reset(x)
      }
      reset(x) {
        this.x = x + (Math.random() - 0.5) * 30
        this.y = canvas.height + Math.random() * 10
        this.vx = (Math.random() - 0.5) * 1.5
        this.vy = -(Math.random() * 4 + 2)
        this.life = 1
        this.decay = Math.random() * 0.018 + 0.008
        this.size = Math.random() * 18 + 8
        this.baseX = x
      }
      update() {
        this.x += this.vx + Math.sin(this.y * 0.05) * 0.5
        this.y += this.vy
        this.vy *= 0.99
        this.life -= this.decay
        this.size *= 0.995
        if (this.life <= 0) this.reset(this.baseX)
      }
      draw() {
        const alpha = this.life
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
        if (alpha > 0.7) {
          grad.addColorStop(0, `rgba(255,255,200,${alpha})`)
          grad.addColorStop(0.3, `rgba(255,200,0,${alpha * 0.9})`)
          grad.addColorStop(0.7, `rgba(248,80,1,${alpha * 0.6})`)
          grad.addColorStop(1, `rgba(180,0,0,0)`)
        } else if (alpha > 0.3) {
          grad.addColorStop(0, `rgba(255,150,0,${alpha})`)
          grad.addColorStop(0.5, `rgba(248,80,1,${alpha * 0.7})`)
          grad.addColorStop(1, `rgba(100,0,0,0)`)
        } else {
          grad.addColorStop(0, `rgba(180,0,0,${alpha * 0.5})`)
          grad.addColorStop(1, `rgba(0,0,0,0)`)
        }
        ctx.beginPath()
        ctx.ellipse(this.x, this.y, this.size * 0.6, this.size, 0, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }
    }

    for (let i = 0; i <= COLS; i++) {
      const x = (i / COLS) * canvas.width
      const count = Math.floor(Math.random() * 4) + 3
      for (let j = 0; j < count; j++) {
        const p = new FlameParticle(x)
        p.life = Math.random()
        particles.push(p)
      }
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      animRef.current = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block', ...style }}
    />
  )
}
