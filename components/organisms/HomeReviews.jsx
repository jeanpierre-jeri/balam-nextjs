import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { ReviewCard } from '@/components/molecules'

const navigation = {
  prevEl: '.hr-section__prev',
  nextEl: '.hr-section__next'
}

const pagination = {
  type: 'bullets',
  clickable: true,
  el: '.hr-section__pagination'
}

const breakpoints = {
  768: {
    slidesPerView: 2
  },
  1024: {
    slidesPerView: 2.5
  },
  1200: {
    slidesPerView: 1.5,
    spaceBetween: 42
  },
  1400: {
    slidesPerView: 1.5,
    spaceBetween: 53
  },
  1700: {
    slidesPerView: 1.5,
    spaceBetween: 65
  }
}

export function HomeReviews({ title, content, reviews }) {
  return (
    <section className="hr-section">
      <div className="hr-section__left">
        <h2 className="hr-section__title">{title}</h2>
        <p className="hr-section__content">{content}</p>
        <div className="hr-section__navigation hr-section__prev">
          <i className="icon-arrow"></i>
        </div>
        <div className="hr-section__navigation hr-section__next">
          <i className="icon-arrow"></i>
        </div>
      </div>
      <div className="hr-section__swiper-container">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={15}
          speed={1200}
          navigation={navigation}
          pagination={pagination}
          breakpoints={breakpoints}
        >
          {reviews.map(({ image, name, content }, i) => (
            <SwiperSlide key={i} className="hr-section__slide">
              <ReviewCard img={image} name={name} content={content} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hr-section__pagination"></div>
      </div>
    </section>
  )
}
