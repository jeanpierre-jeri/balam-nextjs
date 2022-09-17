import { useGenerals } from '@/context/generals.context'
import React from 'react'
import { Button } from '@/components/atoms'
import Image from 'next/image'

export function ServiceCard({ title, content, img }) {
  const { polylang } = useGenerals()
  return (
    <article className="hs-card" data-service={polylang.title_service_gral}>
      <picture className="hs-card__picture">
        <Image src={img} alt={title} width={500} height={270} />
      </picture>
      <div className="hs-card__body">
        <h3 className="hs-card__title">{title}</h3>
        <p className="hs-card__content">{content}</p>
        <div className="hs-card__btn">
          <Button link="/contact" type="secondary">
            {polylang.lbl_request}
          </Button>
        </div>
      </div>
    </article>
  )
}
