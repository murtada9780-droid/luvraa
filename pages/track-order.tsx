import React from 'react'

export default function TrackOrder(){
  return (
    <section className="section container">
      <div className="glass p-6 max-w-md mx-auto text-center">
        <h3 className="text-lg font-semibold mb-2">Track Your Order</h3>
        <p className="text-sm text-white/70 mb-4">Order tracking is coming soon. For now, contact us directly with your order ID.</p>
        <input className="bg-black/50 border border-white/20 rounded-md px-3 py-2 w-full" placeholder="Order ID" />
        <button className="btn btn-primary w-full mt-3">Check Status</button>
      </div>
    </section>
  )
}
