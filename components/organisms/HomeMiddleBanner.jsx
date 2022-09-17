import Image from 'next/image'
import { Button } from '@/components/atoms'
import { useGenerals } from '@/context/generals.context'

export function HomeMiddleBanner({ img, title, content }) {
  const { polylang } = useGenerals()
  return (
    <section className="hm-banner">
      <picture className="hm-banner__picture">
        <Image src={img} imgMobile="imgMob" alt="title" layout="fill" />
      </picture>
      <div className="hm-banner__content">
        <h2 className="hm-banner__title">{title}</h2>
        <p className="hm-banner__text" dangerouslySetInnerHTML={{ __html: content }} />

        <Button link="/contact">{polylang.lbl_request}</Button>
      </div>
    </section>
  )
}
