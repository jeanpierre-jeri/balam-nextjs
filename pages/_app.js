import { GeneralsProvider } from '../context/generals.context'
import { Layout } from '../components/layouts/'
import 'swiper/css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GeneralsProvider options={pageProps.options} polylang={pageProps.polylang}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeneralsProvider>
  )
}

export default MyApp
