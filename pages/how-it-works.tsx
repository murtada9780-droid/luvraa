import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function HowItWorks(){
  const steps = [
    'Request your private gift',
    'Send your photos and details',
    'We craft the emotional experience',
    'You review it',
    'Receive your private link + QR code',
    'Share with the person you love'
  ]
  const variant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }
  return (
    <section className="section container">
      <SectionHeading title="How It Works" subtitle="A refined process for private digital gifts" />
      <motion.ol initial="hidden" whileInView="visible" viewport={{ once: true }} className="list-decimal pl-6 space-y-2 text-white/80" variants={variant}>
        {steps.map((s,i)=> (
          <li key={i}>{s}</li>
        ))}
      </motion.ol>
    </section>
  )
}
