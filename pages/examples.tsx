import React from 'react'
import SectionHeading from '../components/SectionHeading'
import ExampleCard from '../components/ExampleCard'

const examples = [
  { title:'Qamar VIP Anniversary', packageType:'VIP', description:'Exclusive, cinematic memory for a couple.' },
  { title:'One Year Together', packageType:'Pro', description:'A year in memories, curated.' },
  { title:'I’m Sorry', packageType:'Basic', description:'A heartfelt reconciliation in visuals.' },
  { title:'For Mom', packageType:'Pro', description:'A tender tribute from the heart.' },
  { title:'Birthday Memory Journey', packageType:'VIP', description:'A personal journey through memories.' },
]

export default function Examples(){
  return (
    <section className="section container">
      <SectionHeading title="Examples" subtitle="Demo gallery (fake data)" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {examples.map((e,i)=> (
          <ExampleCard key={i} title={e.title} description={e.description} packageType={e.packageType} tags={[]} />
        ))}
      </div>
    </section>
  )
}
