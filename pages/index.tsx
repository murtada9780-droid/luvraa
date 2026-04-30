import React from 'react'
import SectionHeading from '../components/SectionHeading'
import GiftTypeCard from '../components/GiftTypeCard'
import { motion } from 'framer-motion'
import Link from 'next/link'
import TrustEngine from '../components/TrustEngine'
import Testimonials from '../components/Testimonials'

export default function Home(){
  const giftTypes = [
    { name: 'Lover Gift', desc:'A cinematic memory for two, crafted with intimacy and care.' },
    { name: 'Anniversary Gift', desc:'A timeless story told through moving visuals and musings.' },
    { name: 'Birthday Gift', desc:'A personal journey through moments that shaped their year.' },
  ]
  const reveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }
  return (
    <section>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black/40"></div>
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.25), transparent 40%), radial-gradient(circle at 80% 60%, rgba(138,43,226,0.25), transparent 40%)'}} />
        <div className="relative z-10 container h-full flex flex-col justify-center">
          <motion.div variants={ reveal } initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Turn your memories into a cinematic digital gift.</h1>
            <p className="mt-4 text-lg text-white/80">A private studio crafting emotional, custom-made web experiences for the people you love.</p>
            <div className="text-sm text-white/70 mt-2">This is not a message. It’s a memory.</div>
            <div className="text-sm text-white/70">Some moments deserve more than a text.</div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/request"><button className="btn btn-primary">Request a Gift</button></Link>
              <Link href="/experience"><button className="btn btn-secondary">View Experiences</button></Link>
            </div>
            <div className="text-xs text-white/70 mt-2 text-center">Private • Custom • Takes 2 minutes</div>
            <p className="text-xs mt-2 text-white/70">Private. Crafted. Delivered as a link and QR code.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 max-w-4xl pointer-events-none">
          <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{ once: true }} transition={{ duration: 1.0 }} className="rounded-xl glass p-4 shadow-soft-glow">
            <div className="h-28 bg-black/40 rounded-md mb-2" />
            <div className="text-sm text-white/80">Preview: private, non-functional gift visual</div>
          </motion.div>
        </div>
      </div>

      {/* Trust and scarcity micro-copy */}
      <div className="section container py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center text-white/90">
          <span className="badge-pill">Takes less than 2 minutes</span>
          <span className="badge-pill">No payment required to start</span>
          <span className="badge-pill">We guide you step by step</span>
        </div>
        <div className="text-center text-xs text-white/70 mt-2">Limited daily requests — crafted manually</div>
      </div>

      {/* Trust engine */}
      <TrustEngine />
      <Testimonials />
      {/* Why Luvra — trust engine */}
      <section className="section container" aria-label="Why Luvra">
        <div className="section-heading text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Why people choose Luvra</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            'Fully custom (no templates)',
            'Crafted manually',
            'Private & secure',
            'Emotional storytelling',
          ].map((t,i)=> (
            <div key={i} className="glass p-4 rounded-md text-sm text-white/80">{t}</div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            'She cried when she opened it.',
            'Best gift I’ve ever sent.',
            'I didn’t expect it to feel this real.'
          ].map((t,i)=> (
            <div key={i} className="glass p-4 rounded-md text-sm text-white/80">“{t}”</div>
          ))}
        </div>
      </section>

      <section className="section container" aria-label="What is Luvra">
        <SectionHeading title="What is Luvra?" subtitle="A private studio crafting emotions into digital gifts." />
        <p className="text-center text-sm text-white/70 mb-4">Not a template. Not a normal message. A memory turned into an experience.</p>
        <p className="text-xs text-white/70 text-center mb-6">Not mass-produced. Made for one person.</p>
      </section>

      <section className="section container text-center" aria-label="Final CTA">
        <div className="glass p-6 mx-auto" style={{maxWidth:600}}>
          <div className="text-xl font-semibold mb-2">Ready to create a memory that lasts?</div>
          <div className="text-sm text-white/70 mb-4">For moments that truly matter — this is what most people choose.</div>
          <Link href="/request" passHref><button className="btn btn-primary w-full">Request Your Gift</button></Link>
          <div className="text-xs text-white/70 mt-2">Private • Crafted • Delivered as an experience</div>
        </div>
      </section>
      <section className="section container grid grid-cols-1 md:grid-cols-3 gap-6">
        {giftTypes.map((g, i)=> (
          <GiftTypeCard key={i} name={g.name} description={g.desc} />
        ))}
      </section>
    </section>
  )
}
