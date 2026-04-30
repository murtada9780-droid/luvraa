import React from 'react'
import SectionHeading from '../components/SectionHeading'

export default function Experience(){
  return (
    <section className="section container">
      <SectionHeading title="Experiencing Luvra" subtitle="What a Luvra gift feels like" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass p-6">
          <h3 className="font-semibold">Cinematic Opening Screen</h3>
          <p className="text-sm text-white/70 mt-2">An entrance that sets the mood and invites discovery.</p>
        </div>
        <div className="glass p-6">
          <h3 className="font-semibold">Custom Story Pages</h3>
          <p className="text-sm text-white/70 mt-2">A narrative crafted around your memories and language.</p>
        </div>
      </div>
      <div className="mt-6 glass p-6">
        <h3 className="font-semibold">Other premium features</h3>
        <ul className="text-sm text-white/70 mt-2 space-y-1">
          <li>Timeline memories</li>
          <li>Hidden message</li>
          <li>Secret question unlock</li>
        </ul>
      </div>
    </section>
  )
}
