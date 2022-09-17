import { InfoHeader } from '@/components/molecules'
import { Header, Footer } from '@/components/ui/'
import { useEffect, useRef, useState } from 'react'

export function Layout({ children }) {
  const [isTop, setIsTop] = useState(true)
  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsTop(true)
        return
      }
      setIsTop(false)
    })

    observer.observe(observerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div>
      <InfoHeader />
      <div ref={observerRef}></div>
      <Header isTop={isTop} />
      {children}
      <Footer />
    </div>
  )
}
