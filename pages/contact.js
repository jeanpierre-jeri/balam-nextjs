import { useGenerals } from '../context/generals.context'
import Link from 'next/link'
import { getGenerals } from '../lib/getGenerals'

export default function Home() {
  const { options } = useGenerals()
  return (
    <div className="min-h-screen">
      contacto <span>{options.phone}</span>
      <br />
      <Link href="/">Inicio</Link>
    </div>
  )
}

export const getStaticProps = async () => {
  const { options, polylang } = await getGenerals()

  return {
    props: {
      options,
      polylang
    }
  }
}
