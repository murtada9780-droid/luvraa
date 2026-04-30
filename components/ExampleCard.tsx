import React from 'react'

type Props = { title:string; description:string; packageType:string; tags:string[] }
export default function ExampleCard({ title, description, packageType, tags }: Props){
  return (
    <div className="glass p-4 rounded-md overflow-hidden" style={{aspectRatio:'16/9', display:'grid', gridTemplateRows:'1fr auto'}}>
      <div className="bg-gradient-to-br from-black via-gray-900 to-black w-full h-full" />
      <div className="flex items-center justify-between px-2 py-1 bg-black/50">
        <div className="text-sm font-semibold">{title}</div>
        <span className="text-xs text-white/70">{packageType}</span>
      </div>
    </div>
  )
}
