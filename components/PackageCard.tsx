import React from 'react'

type Props = { title: string; price?: string; features: string[]; highlight?: boolean }
export default function PackageCard({ title, price, features, highlight }: Props){
  return (
    <div className={`glass p-6 ${highlight ? 'border-yellow-400' : ''}`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-lg font-semibold">{title}</h4>
        {price && <span className="text-sm text-white/70">{price}</span>}
      </div>
      <ul className="text-sm text-white/90 space-y-1 mb-4">
        {features.map((f,i)=> <li key={i}>• {f}</li>)}
      </ul>
      <button className="btn btn-primary w-full">Choose {title}</button>
      <div className="text-xs text-white/70 mt-2">Private • Custom • Takes 2 minutes</div>
    </div>
  )
}
