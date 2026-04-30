import React from 'react'

type Item = { text: string; author: string }
const items: Item[] = [
  { text: 'She cried when she opened it.', author: '— Client' },
  { text: 'Best gift I’ve ever sent.', author: '— Client' },
  { text: 'I didn’t expect it to feel this real.', author: '— Client' },
]

export default function Testimonials(){
  return (
    <section className="section container" aria-label="Testimonials">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold">What people say</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, idx)=> (
          <div key={idx} className="glass p-4 rounded-md text-sm">
            <div className="text-white/80 mb-1">"{it.text}"</div>
            <div className="text-xs text-white/70">{it.author}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
