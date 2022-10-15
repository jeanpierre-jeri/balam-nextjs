import Head from 'next/head'

export function SeoEngine({ seo = {} }) {
  if (!Object.keys(seo).length) return <></>
  return (
    <Head>
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.canonical || seo.og_url}></link>
      <meta name="description" content={seo.description || ''} />

      {/* <---->>> Twitter Support <<<------> */}

      <meta name="twitter:title" content={seo.og_title || ''} />
      <meta name="twitter:url" content={seo.canonical || seo.og_url || ''} />
      <meta name="twitter:image" content={seo.canonical || ''} />
      <meta name="twitter:description" content={seo.description || ''} />
      <meta name="twitter:creator" content={''} />
      <meta name="twitter:card" content={seo.twitter_card || ''} />

      {/* <---->>> Open Graph <<<------> */}

      <meta property="og:title" content={seo.og_title || ''} />
      <meta property="og:url" content={''} />
      <meta property="og:image" content={seo.canonical || seo.og_url || ''} />
      <meta
        property="og:description"
        content={seo.schema['@graph'][0].description || seo.og_description || ''}
      />
      <meta property="og:site_name" content={''} />
      <meta property="website:publish_time" content={seo.article_modified_time} />
      <meta property="og:type" content="website" />
    </Head>
  )
}
