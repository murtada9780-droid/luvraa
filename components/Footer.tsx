import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-white/20 mt-12 pt-8 pb-12 bg-black/60">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-white/80">
        <div>
          <strong>Luvra</strong>
          <p className="mt-2 text-xs text-white/70">Private digital gifts, crafted with care.</p>
        </div>
        <div>
          <strong>Gift Types</strong>
          <ul className="mt-2 space-y-1">
            <li>Lover</li>
            <li>Anniversary</li>
            <li>Birthday</li>
          </ul>
        </div>
        <div>
          <strong>Contact</strong>
          <p className="mt-2">WhatsApp • Instagram</p>
        </div>
        <div>
          <strong>Tagline</strong>
          <p className="mt-2" style={{fontFamily:'serif'}}>Crafted for memories that deserve more than a message.</p>
        </div>
      </div>
      <div className="container mt-6 text-center text-xs text-white/60">© {new Date().getFullYear()} Luvra. All rights reserved.</div>
    </footer>
  )
}
