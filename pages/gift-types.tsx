import React from 'react'
import SectionHeading from '../components/SectionHeading'
import GiftTypeCard from '../components/GiftTypeCard'

const items = [
  { name:'Lover Gift', description:'A private cinematic memory for two.' },
  { name:'Anniversary Gift', description:'A timeless love story in motion.' },
  { name:'Birthday Gift', description:'A personal journey through cherished moments.' },
  { name:'Apology Gift', description:'A heartfelt message turned into a moment.' },
  { name:'Long Distance Gift', description:'A bridge across miles with memory and meaning.' },
  { name:'Mom Gift', description:'A tribute to gratitude and warmth.' },
  { name:'Dad Gift', description:'Respectful, cinematic, enduring.' },
  { name:'Best Friend Gift', description:'A private moment of shared history.' },
  { name:'Graduation Gift', description:'Celebrating growth with emotion and artistry.' },
  { name:'Wedding Gift', description:'A cinematic vow in digital form.' },
  { name:'Secret Crush Gift', description:'A private invitation to a moment.' },
]

export default function GiftTypes(){
  return (
    <section className="section container">
      <SectionHeading title="Gift Types" subtitle="Curated experiences for every meaningful relationship." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it,i)=> (
          <GiftTypeCard key={i} name={it.name} description={it.description} />
        ))}
      </div>
    </section>
  )
}
