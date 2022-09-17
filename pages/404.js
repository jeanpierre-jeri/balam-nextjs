import { getGenerals } from 'lib/getGenerals'

export default function Custom404() {
  return <h1>404 - Page Not Found</h1>
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
