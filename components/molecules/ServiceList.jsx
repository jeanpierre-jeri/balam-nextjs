import React from 'react'
import { ServiceCard } from '@/components/molecules/ServiceCard'

export function ServiceList({ services }) {
  return (
    <div className="hs-list">
      {services.map(({ image, title, content }, i) => (
        <ServiceCard key={i} title={title} content={content} img={image} />
      ))}
    </div>
  )
}
