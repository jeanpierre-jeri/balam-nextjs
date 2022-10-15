import { useMemo } from 'react'

export function Title({ title }) {
  const titleSplit = useMemo(() => {
    return title?.includes('/') ? title.replace('/', '<span>') : title
  }, [title])

  return <h2 class="main-title" dangerouslySetInnerHTML={{ __html: titleSplit }}></h2>
}
