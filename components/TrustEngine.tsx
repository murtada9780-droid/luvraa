import React from 'react'

export default function TrustEngine(){
  const bullets = [
    'Fully custom (no templates)',
    'Crafted manually',
    'Private & secure',
    'Emotional storytelling'
  ]
  return (
    <section className="section container" aria-label="Why Luvra">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold">Why Luvra</h3>
        <p className="text-sm text-white/70 mt-1">A private studio for moments that matter</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {bullets.map((b,i)=> (
          <div key={i} className="glass p-4 rounded-md text-sm text-white/80">{b}</div>
        ))}
      </div>
      <div className="mt-4 text-xs text-white/70 text-center">Delivered as a private link and QR code</div>
    </section>
  )
}
