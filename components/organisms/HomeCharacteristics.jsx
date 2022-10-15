import { Swiper, SwiperSlide } from 'swiper/react'
import { CharacteristicCard } from '../molecules'

const breakpoints = {
  1200: {
    slidesPerView: 4,
    spaceBetween: 152
  },
  1400: {
    slidesPerView: 4,
    spaceBetween: 171
  },
  1700: {
    slidesPerView: 4,
    spaceBetween: 211
  }
}

export function HomeCharacteristics({ img, imgMob, characteristic }) {
  const styles = {
    '--bg': `url(${img})`,
    '--bg-mob': `url(${imgMob})`
  }

  return (
    <section style={styles} className="hc-section">
      <div class="hc-section__swiper-container">
        <Swiper slidesPerView={2} spaceBetween={50} speed={1200} breakpoints={breakpoints}>
          {characteristic.map(({ image, title }, i) => (
            <SwiperSlide class="hc-section__slide" key={i}>
              <CharacteristicCard image={image} title={title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
