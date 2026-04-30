import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/gift-types', label: 'Gift Types' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/examples', label: 'Examples' },
  { href: '/faq', label: 'FAQ' },
  { href: '/request', label: 'Request Gift' },
]

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 ${scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/20' : ''}`}>
      <div className="container flex items-center justify-between py-4">
        <div className="text-xl font-semibold tracking-tight">Luvra</div>
        <nav className="hidden md:flex gap-6 text-sm hover:opacity-100 opacity-85">
          {links.map(l => (
            <Link key={l.label} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <Link href="/request" passHref>
          <button className="btn btn-primary transform hover:scale-105 hover:shadow-soft-glow">Request Gift</button>
        </Link>
        <div className="md:hidden">
          <button aria-label="Open menu" className="px-3 py-2 rounded-md bg-black/40 border border-white/20" onClick={()=>setMobileOpen(o=>!o)}>
            ☰
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden container pb-4"><div className="glass p-4 rounded-md flex flex-col gap-2">
          {links.map(l => (
            <Link key={l.label + '-m'} href={l.href} onClick={()=>setMobileOpen(false)}>{l.label}</Link>
          ))}
        </div></nav>
      )}
    </header>
  )
}
