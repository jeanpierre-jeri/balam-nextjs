import { Title } from '../atoms'
import { GalleryList } from '../molecules'

export function HomeGallery({ title, gallery, content }) {
  return (
    <section className="hg-section">
      <Title title={title} />
      <p className="hg-section__content" dangerouslySetInnerHTML={{ __html: content }} />
      <GalleryList gallery={gallery} />
    </section>
  )
}
