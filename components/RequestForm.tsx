import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  onSubmit?: (payload:any)=>void
}

type Data = {
  giftType:string; packageType:string; senderName:string; recipientName:string; relationship:string; occasion:string; emotionalStyle:string; language:string; deliveryDate:string; contactMethod:string; whatsapp:string; instagram:string; tiktok:string; notes:string
}

const initial: Data = {
  giftType:'', packageType:'Basic', senderName:'', recipientName:'', relationship:'', occasion:'', emotionalStyle:'', language:'English', deliveryDate:'', contactMethod:'WhatsApp', whatsapp:'', instagram:'', tiktok:'', notes:''
}

export default function RequestForm({ onSubmit }: Props){
  const [step, setStep] = useState(1)
  const [data, setData] = useState<Data>(initial)
  const [errors, setErrors] = useState<{[k:string]:string}>({})

  const set = (name:string, value:string) => setData(d => ({ ...d, [name]: value }))

  const validate = ():boolean => {
    const e: {[k:string]:string} = {}
    if(!data.giftType) (e as any)['giftType'] = 'Please choose a gift type'
    if(!data.senderName) e.senderName = 'Your name is required'
    if(!data.recipientName) e.recipientName = 'Recipient name is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = ()=>{ if (step === 3) { if(!validate()) return; onSubmit?.(data); return } setStep(s => Math.min(3, s+1)) }
  const prev = ()=> setStep(s => Math.max(1, s-1))

  const submit = ()=>{ if(validate()) { onSubmit?.(data) } }

  const stepContent = useMemo(() => {
    if(step === 1) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Gift Type</label>
            <select className="bg-black/40 border border-white/20 rounded-md px-3 py-2 w-full" value={data.giftType} onChange={e=>set('giftType', e.target.value)}>
              <option value="">Select</option>
              <option value="Lover Gift">Lover Gift</option>
              <option value="Anniversary Gift">Anniversary Gift</option>
              <option value="Birthday Gift">Birthday Gift</option>
              <option value="Apology Gift">Apology Gift</option>
            </select>
            {errors.giftType && <div className="text-sm text-rose-300 mt-1">{errors.giftType}</div>}
            <div className="text-xs text-white/70 mt-1">Guiding emotion: warm • romantic • hopeful</div>
          </div>
          <div>
            <label className="text-sm">Package</label>
            <select className="bg-black/40 border border-white/20 rounded-md px-3 py-2 w-full" value={data.packageType} onChange={e=>set('packageType', e.target.value)}>
              <option value="Basic">Basic</option>
              <option value="Pro">Pro</option>
              <option value="VIP">VIP</option>
            </select>
          </div>
        </div>
      )
    } else if(step === 2) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Your Name</label>
            <input className="bg-black/40 border border-white/20 rounded-md px-3 py-2 w-full" value={data.senderName} onChange={e=>set('senderName', e.target.value)} />
            {errors.senderName && <div className="text-sm text-rose-300 mt-1">{errors.senderName}</div>}
            <div className="text-xs text-white/70 mt-1">Who is gifting this memory?</div>
          </div>
          <div>
            <label className="text-sm">Recipient Name</label>
            <input className="bg-black/40 border border-white/20 rounded-md px-3 py-2 w-full" value={data.recipientName} onChange={e=>set('recipientName', e.target.value)} />
            <div className="text-xs text-white/70 mt-1">Recipient's name</div>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Relation</label>
            <input className="bg-black/40 border border-white/20 rounded-md px-3 py-2 w-full" value={data.relationship} onChange={e=>set('relationship', e.target.value)} />
            <div className="text-xs text-white/70 mt-1">Your relationship with the recipient</div>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">What are you celebrating?</label>
            <input className="bg-black/40 border border-white/20 rounded-md px-3 py-2 w-full" value={data.occasion} onChange={e=>set('occasion', e.target.value)} />
            <div className="text-xs text-white/70 mt-1">Share the moment you want to honor</div>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Language</label>
            <select className="bg-black/40 border border-white/20 rounded-md px-3 py-2 w-full" value={data.language} onChange={e=>set('language', e.target.value)}>
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>
      )
    } else {
      return (
        <div className="grid gap-4">
          <div>
            <label className="text-sm">Delivery Date</label>
            <input className="bg-black/40 border border-white/20 rounded-md px-3 py-2 w-full" value={data.deliveryDate} onChange={e=>set('deliveryDate', e.target.value)} />
          </div>
          <div>
            <label className="text-sm">Contact Method</label>
            <select className="bg-black/40 border border-white/20 rounded-md px-3 py-2 w-full" value={data.contactMethod} onChange={e=>set('contactMethod', e.target.value)}>
              <option>WhatsApp</option>
              <option>Instagram</option>
              <option>Telegram</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Tell us your story (this helps us craft something unforgettable)</label>
            <textarea className="bg-black/40 border border-white/20 rounded-md px-3 py-2 w-full" rows={4} value={data.notes} onChange={e=>set('notes', e.target.value)} />
          </div>
        </div>
      )
    }
  }, [step, data, errors])

  return (
    <div className="glass p-6 rounded-md max-w-3xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">Premium Gift Request</h3>
      <div className="space-y-3 text-sm text-white/80">
        {stepContent}
      </div>
      <div className="flex gap-3 mt-4 items-center">
        <button className="btn btn-secondary" onClick={prev} disabled={step===1} aria-disabled={step===1}>Back</button>
        {step < 3 ? (
          <button className="btn btn-primary" onClick={next}>Next</button>
        ) : (
          <button className="btn btn-primary" onClick={submit}>Submit</button>
        )}
        <div className="ml-auto text-sm text-white/70">Step {step} of 3</div>
      </div>
      {step === 3 && (
        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} className="mt-4 p-4 bg-black/40 rounded-md border border-white/20" transition={{ duration: 0.4 }}>
          <div className="text-sm">Your private gift request has been prepared. We’ll reach out via your chosen method shortly.</div>
          <div className="mt-2 text-xs text-white/70">This is a private process. Your data stays with us until requested.</div>
        </motion.div>
      )}
    </div>
  )
}
