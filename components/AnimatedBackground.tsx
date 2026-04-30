import React, { useEffect, useRef } from 'react'

export default function AnimatedBackground(){
  const ref = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let width = window.innerWidth
    let height = 600
    canvas.width = width
    canvas.height = height

    const particles = Array.from({ length: 60 }).map(() => {
      const x = Math.random() * width
      const y = Math.random() * height
      const r = Math.random() * 2 + 0.5
      const vy = Math.random() * 0.3 + 0.1
      return { x, y, r, vy }
    })

    let raf = 0
    const loop = () => {
      if (!ctx) return
      ctx.clearRect(0,0,width,height)
      // soft gradient glow
      const g = ctx.createRadialGradient(width/2, height/2, 50, width/2, height/2, width/2)
      g.addColorStop(0, 'rgba(212,175,55,0.15)')
      g.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g
      ctx.fillRect(0,0,width,height)

      particles.forEach(p => {
        p.y += p.vy
        if (p.y > height) p.y = 0
        ctx.fillStyle = 'rgba(212,175,55,0.8)'
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill()
      })
      raf = requestAnimationFrame(loop)
    }
    loop()
    const onResize = () => {
      width = window.innerWidth
      height = 600
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  },[])
  return <canvas ref={ref} className="absolute inset-0 w-full h-72 pointer-events-none" style={{opacity:0.5}}/>
}
