import { getGenerals } from '../lib/getGenerals'
import { baseApi } from './api/baseApi'
import {
  HomeBanner,
  HomeServices,
  HomeMiddleBanner,
  HomeReviews,
  HomeAbout,
  HomeCharacteristics,
  HomeGallery
} from '@/components/organisms'
import { SeoEngine } from '@/components/global/SeoEngine'

export default function Home({ home }) {
  return (
    <div className="min-h-screen">
      <HomeBanner
        data-id="136"
        data-es="148"
        subtitle={home.subtitle_banner}
        title={home.title_banner}
        content={home.content_banner}
        img={home.img_banner}
      />
      <HomeServices
        id="services"
        data-id="138"
        data-es="149"
        title={home.title_services}
        content={home.content_services}
        services={home.list_services}
      />
      <HomeMiddleBanner
        title={home.title_banner_middle}
        content={home.content_banner_middle}
        img={home.img_banner_middle}
      />
      <HomeReviews
        id="reviews"
        data-id="139"
        data-es="150"
        title={home.title_reviews}
        content={home.content_reviews}
        reviews={home.list_reviews}
      />
      <HomeAbout
        id="about-us"
        data-id="140"
        data-es="151"
        title={home.title_about}
        images={home.list_images_about}
        content={home.content_about}
        numberList={home.list_number_about}
        subtitle={home.subtitle_about}
        contentTwo={home.content_two_about}
        titleYears={home.title_years_about}
      />
      <HomeCharacteristics
        img={home.banner_characteristics}
        imgMob={home.banner_mob_characteristics}
        characteristic={home.list_characteristics}
      />
      <HomeGallery
        id="gallery"
        data-id="141"
        data-es="152"
        title={home.title_gallery}
        content={home.content_gallery}
        gallery={home.list_gallery}
      />
      <SeoEngine seo={home.meta_seo} />
    </div>
  )
}

export const getStaticProps = async () => {
  const { options, polylang } = await getGenerals()
  const { data: home } = await baseApi('/page?template=home&seo=allow&lang=en')

  return {
    props: {
      options,
      polylang,
      home
    }
  }
}
