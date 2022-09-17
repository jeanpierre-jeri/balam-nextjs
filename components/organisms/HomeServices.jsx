import React from 'react'
import { AppContainer } from '@/components/layouts'
import { Title } from '@/components/atoms'
import { ServiceList } from '@/components/molecules/ServiceList'

export function HomeServices({ title, content, services }) {
  return (
    <section className="h-services">
      <AppContainer className="h-services__container">
        <Title className="h-services__title" title={title} />
        <p className="h-services__content">{content}</p>

        <ServiceList services={services} />
      </AppContainer>
    </section>
  )
}
