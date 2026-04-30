import React from 'react'
import RequestForm from '../components/RequestForm'

export default function RequestGift(){
  const onSubmit = (payload:any)=>{
    const textParts = [
      `Hey, I just submitted a request on Luvra...`,
      `Gift Type: ${payload.giftType || 'N/A'}`,
      `Package: ${payload.packageType}`,
      `From: ${payload.senderName}`,
      `For: ${payload.recipientName}`,
      `What are you celebrating?: ${payload.occasion}`,
    ]
    const text = textParts.filter(s => s).join('\n') + `\nNotes: ${payload.notes}`
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }
  return (
    <section className="section container">
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        <div className="flex-1 glass p-6">
          <h3 className="text-xl font-semibold mb-3">Premium Gift Request</h3>
          <p className="text-sm text-white/70">A graceful flow to request a custom digital gift. The private studio will craft it for you.</p>
          <p className="text-sm text-white/70 mt-2">You tell the story. We craft the moment.</p>
        </div>
        <div className="flex-1">
          <RequestForm onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  )
}
