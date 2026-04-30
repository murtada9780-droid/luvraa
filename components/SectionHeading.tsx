import React from 'react'

type Props = { title: string; subtitle?: string }
export default function SectionHeading({ title, subtitle }: Props){
  return (
    <div className="section-heading text-center mb-6">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-white/70">{subtitle}</p>}
    </div>
  )
}
