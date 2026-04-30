import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'

type LayoutProps = { children: React.ReactNode }

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-deep text-white">
      <AnimatedBackground />
      <Navbar />
      <main className="pt-20 pb-12">{children}</main>
      <Footer />
      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 px-4 flex justify-center pointer-events-none">
        <div className="bg-black/60 rounded-md border border-white/20 px-4 py-2 flex items-center gap-3 shadow-soft-glow" style={{minWidth: '260px', maxWidth: '90vw', pointerEvents: 'auto'}}>
          <Link href="/request" passHref>
            <button className="btn btn-primary" style={{flexShrink:0}}>Request Gift</button>
          </Link>
          <span className="text-xs" style={{whiteSpace:'nowrap'}}>Private • Custom • Takes 2 minutes</span>
        </div>
      </div>
    </div>
  )
}
