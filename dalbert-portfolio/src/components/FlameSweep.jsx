import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function FlameSweep({ onComplete }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let progress = 0
    const W = canvas.width
    const H = canvas.height

    const drawSweep = (t) => {
      ctx.clearRect(0, 0, W, H)
      const sweepX = t * (W + 400) - 200

      // Main flame wave
      const layers = [
        { offset: 0, colors: ['#ffd700', '#ff6b00', '#f85001', 'transparent'], width: 320 },
        { offset: -60, colors: ['#fff9c4', '#ffd700', '#ff6b00', 'transparent'], width: 200 },
        { offset: 80, colors: ['#f85001', '#8b0000', '#400000', 'transparent'], width: 280 },
      ]

      layers.forEach(({ offset, colors, width }) => {
        const x = sweepX + offset
        const grad = ctx.createLinearGradient(x - width / 2, 0, x + width / 2, 0)
        grad.addColorStop(0, 'transparent')
        grad.addColorStop(0.2, colors[0])
        grad.addColorStop(0.5, colors[1])
        grad.addColorStop(0.8, colors[2])
        grad.addColorStop(1, colors[3])

        // Draw jagged flame shape
        ctx.beginPath()
        ctx.moveTo(x - width, H)
        for (let i = 0; i <= 20; i++) {
          const px = x - width + (i / 20) * width * 2
          const py = Math.sin(i * 0.8 + t * 10) * 40 + Math.sin(i * 1.5) * 20
          ctx.lineTo(px, py + H * 0.1)
        }
        ctx.lineTo(x + width, H)
        ctx.closePath()
        ctx.fillStyle = grad
        ctx.fill()

        // Sparks
        for (let s = 0; s < 8; s++) {
          const sx = x + (Math.random() - 0.5) * width
          const sy = Math.random() * H * 0.6
          const sr = Math.random() * 3 + 1
          ctx.beginPath()
          ctx.arc(sx, sy, sr, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 220, 100, ${Math.random() * 0.8})`
          ctx.fill()
        }
      })
    }

    const startTime = performance.now()
    const duration = 1200

    const loop = (now) => {
      progress = Math.min((now - startTime) / duration, 1)
      drawSweep(progress)
      if (progress < 1) {
        animRef.current = requestAnimationFrame(loop)
      } else {
        setTimeout(() => onComplete?.(), 100)
      }
    }
    animRef.current = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(animRef.current)
  }, [onComplete])

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
