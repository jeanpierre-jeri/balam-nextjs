import { getGenerals } from '../lib/getGenerals'
import { baseApi } from './api/baseApi'
import { HomeBanner, HomeServices, HomeMiddleBanner, HomeReviews } from '@/components/organisms'

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
