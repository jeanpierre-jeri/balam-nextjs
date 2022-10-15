import Image from 'next/image'

export function GalleryCard({ img }) {
  return (
    <article className="hgs-card">
      <Image src={img} alt="Image Gallery" width={351} height={353} />
    </article>
  )
}
