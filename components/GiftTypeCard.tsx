import React from 'react'

type Props = { name: string; description: string; image?: string; packageName?: string; onClick?: () => void }
export default function GiftTypeCard({ name, description, image, onClick }: Props){
  return (
    <div className="glass p-6 flex flex-col gap-3 hover:shadow-soft-glow transition-shadow" style={{minHeight: 180}}>
      <div className="h-28 w-full rounded-md bg-gradient-to-br from-black to-gray-800" style={{backgroundImage:image?`url(${image})`:undefined}} />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-white/70 mt-1">{description}</p>
      </div>
      <button className="btn btn-primary w-full" onClick={onClick}>Request This Gift</button>
      <div className="text-xs text-white/70">Private • Custom • Takes 2 minutes</div>
    </div>
  )
}
