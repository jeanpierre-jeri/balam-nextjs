import { GalleryCard } from './GalleryCard'

export function GalleryList({ gallery }) {
  return (
    <div className="hg-section__list">
      {gallery.map(({ image }, i) => (
        <GalleryCard key={i} img={image} />
      ))}
    </div>
  )
}
