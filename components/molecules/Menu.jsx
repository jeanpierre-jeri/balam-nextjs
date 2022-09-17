import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useGenerals } from '@/context/generals.context'

export function Menu({ isMenuActive = false, closeMenu }) {
  const [activeSection, setActiveSection] = useState('')
  const { polylang } = useGenerals()

  const menuWithLinks = useMemo(() => {
    return polylang.menu.map((item) => {
      let section
      let name

      if (item.url.includes('http') || item.url === '/' || item.url === '/es') {
        name = '/'
        section = item.url === '/' ? '' : item.url.replace(/^http[s]?:\/\//i, '')
      }

      if (item.url.includes('contact')) {
        name = '/contact'
      }

      const link =
        item.url.includes('/') && !item.url.includes('http')
          ? { name }
          : {
              pathname: name,
              query: {
                section
              }
            }
      return {
        ...item,
        link
      }
    })
  }, [polylang.menu])

  const close = (id) => {
    setActiveSection(id)
    closeMenu()
  }
  return (
    <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
      {menuWithLinks.map(({ id, label, link }) => (
        <li key={id} className="menu__item">
          <Link href={link}>
            <a
              onClick={() => close(id)}
              className={`menu__link ${id === activeSection ? 'active' : ''}`}
            >
              {label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
