import Image from 'next/image'
import { Stars } from '@/components/atoms'

export function ReviewCard({ img, name, content }) {
  return (
    <div className="h-full hr-card__decoration">
      <article className="hr-card">
        <p className="hr-card__content">{content}</p>
        <div className="hr-card__person">
          <Image className="hr-card__picture" src={img} width={80} height={80} alt={name} />
          <div className="hr-card__info">
            <h3 className="hr-card__name">{name}</h3>
            <Stars className="hr-card__stars" />
          </div>
        </div>
      </article>
    </div>
  )
}
