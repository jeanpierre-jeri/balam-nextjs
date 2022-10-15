import Image from 'next/image'

export function CharacteristicCard({ title, image }) {
  return (
    <article className="hcs-card">
      <picture className="hcs-card__picture">
        <Image src={image} width={110} height={87} objectFit="contain" alt={title} />
      </picture>
      <p className="hcs-card__title">{title}</p>
    </article>
  )
}
