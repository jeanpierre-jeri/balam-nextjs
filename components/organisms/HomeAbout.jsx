import { useMemo } from 'react'
import Image from 'next/image'
import { useGenerals } from '@/context/generals.context'
import { Button } from '../atoms'

export function HomeAbout(props) {
  const { title, content, images, numberList, subtitle, contentTwo, titleYears } = props
  const { polylang } = useGenerals()

  const titleYear = useMemo(() => {
    return titleYears.replace('/', '<span class="span" />')
  }, [titleYears])

  return (
    <section className="ha-section">
      <div className="ha-section__container">
        <div className="laptop:flex-1">
          <h2 className="ha-section__title">{title}</h2>
          <p className="ha-section__content">{content}</p>
          <ul className="ha-section__list">
            {numberList.map((item, i) => (
              <li className="ha-section__item" key={i}>
                <h4 className="h4">{item.number}</h4>
                <span className="span">{item.title}</span>
              </li>
            ))}
          </ul>
          <h3 className="ha-section__subtitle">{subtitle}</h3>
          <div
            className="ha-section__content-two"
            dangerouslySetInnerHTML={{ __html: contentTwo }}
          />
          <div className="ha-section__btn">
            <Button link="/contanct" type="secondary">
              {polylang.lbl_quote}
            </Button>
          </div>
        </div>
        <div className="has-images">
          {images.map(({ image }, i) => (
            <picture className="has-images__image" key={i}>
              <Image src={image} layout="fill" alt={`Image about ${i + 1}`} />
            </picture>
          ))}
          <p className="has-images__title" dangerouslySetInnerHTML={{ __html: titleYear }} />
        </div>
      </div>
      <div className="flex justify-center mt-12 laptop:hidden">
        <Button link="/contact" type="secondary">
          {polylang.lbl_quote}
        </Button>
      </div>
    </section>
  )
}
