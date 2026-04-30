import React from 'react'

export default function Contact(){
  return (
    <section className="section container grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="glass p-6">
        <h3 className="text-xl font-semibold">Get in touch</h3>
        <p className="text-sm text-white/70 mt-2">Premium inquiries and serious requests welcome.</p>
        <div className="mt-4 text-sm space-y-1">
          <div>WhatsApp: +9647770998885</div>
          <div>Instagram: luvra.iq</div>
          <div>TikTok: luvra.iq</div>
          <div>Email: hello@luvra.example</div>
        </div>
      </div>
      <div className="glass p-6">
        <h3 className="text-xl font-semibold">Direct Contact</h3>
        <p className="text-sm text-white/70 mt-2">We respond with discretion and care. Your request matters.</p>
        <button className="btn btn-primary mt-4">Contact via WhatsApp</button>
      </div>
    </section>
  )
}
