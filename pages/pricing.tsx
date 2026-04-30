import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import PackageCard from '../components/PackageCard'

export default function Pricing(){
  const common = [
    'Custom message', 'Up to 20 images', 'QR code included'
  ]
  const variant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }
  return (
    <section className="section container">
      <SectionHeading title="Pricing" subtitle="Premium packages for meaningful gifts" />
      <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={variant} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PackageCard title="Basic" features={["Single-page emotional gift", "Custom message", "Up to 3 images", "Delivered as link"]} />
        <PackageCard title="Pro" features={["Multi-page journey", "Timeline memories", "Music + Video", "QR code included"]} highlight />
        <PackageCard title="VIP" features={["Full cinematic experience", "Secret unlock", "Love counter", "Countdown", "Priority delivery"]} />
      </motion.div>
      <div className="mt-4 text-center text-sm text-white/80">For moments that truly matter — this is what most people choose.</div>
    </section>
  )
}
