import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const items = [
  { q:'What is a digital gift?', a:'A cinematic, private memory delivered as a private link with QR code.' },
  { q:'Do I create the gift myself?', a:'No. Luvra is crafted by our team in a private studio.' },
  { q:'Can I request Arabic or English?', a:'Yes. Language options include Arabic and English.' },
  { q:'Can I add music?', a:'Yes, music can be included where appropriate.' },
  { q:'Can I add video?', a:'Yes, video sections are supported in Pro and VIP.' },
  { q:'Can I get a QR code?', a:'Yes. Each gift comes with a QR code.' },
  { q:'Delivery time?', a:'Delivery timelines depend on package and scope; see pricing.' },
  { q:'Can I request changes?', a:'We accommodate reasonable revisions during the private process.' },
  { q:'Is the gift private?', a:'Yes. Gifts are private, accessible only via link/QR code.' },
  { q:'Difference between Basic, Pro, VIP?', a:'Basic is single-page; Pro adds multi-page, music, video; VIP adds full cinematic experience and advanced features.' },
]

export default function FAQ(){
  const itemVariant = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.25 } } }
  return (
    <section className="section container">
      <SectionHeading title="FAQ" />
      <div className="space-y-3 text-white/80">
        {items.map((it,i)=> (
          <motion.div key={i} className="glass p-4 rounded-md" initial="hidden" whileInView="visible" viewport={{once:true}} variants={itemVariant}>
            <div className="font-semibold">{it.q}</div>
            <div className="text-sm mt-1">{it.a}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
