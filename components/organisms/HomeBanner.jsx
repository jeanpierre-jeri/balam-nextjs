import { useMemo } from 'react'
import Image from 'next/image'
import { Button } from '@/components/atoms'
import { useGenerals } from '@/context/generals.context'

export function HomeBanner({ subtitle, title, content, img }) {
  const { polylang } = useGenerals()

  const titleSplit = useMemo(() => {
    return title.replace('/', '<span />')
  }, [title])

  return (
    <main className="main-banner">
      <picture className="main-banner__img">
        <Image src={img} alt={title} layout="fill" />
      </picture>
      <div className="main-banner__content">
        <h3 className="main-banner__subtitle">{subtitle}</h3>
        <h1 className="main-banner__title" dangerouslySetInnerHTML={{ __html: titleSplit }} />
        <p className="main-banner__text" dangerouslySetInnerHTML={{ __html: content }} />
        <div className="main-banner__btn">
          <Button link="/contact">{polylang.lbl_quote}</Button>
        </div>
      </div>
    </main>
  )
}
