import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useGenerals } from '@/context/generals.context'
import { SocialsHeader, MenuIcon } from '@/components/atoms'
import { Menu } from '@/components/molecules'

export function Header({ isTop = false }) {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const { options, polylang } = useGenerals()

  useEffect(() => {
    console.log('Header montado')
  }, [])

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive)
    document.body.classList.toggle('active-menu')
  }
  const closeMenu = () => {
    setIsMenuActive(false)
    document.body.classList.remove('active-menu')
  }
  return (
    <header className="header">
      <div onClick={closeMenu} className={`header__overlay ${isMenuActive ? 'active' : ''}`}></div>
      <Link href={{ pathname: '/' }}>
        <a
          className={`block header__logo ${isMenuActive ? 'active' : ''} ${
            !isTop && 'menu-sticky'
          }`}
        >
          <Image src={options.logo} alt="logo" width={305} height={226} />
        </a>
      </Link>
      <div className="header__white-bg"></div>

      <SocialsHeader />
      <div onClick={toggleMenu} className={`header__icon ${isMenuActive ? 'active' : ''}`}>
        <MenuIcon isActive={isMenuActive} />
      </div>
      <Menu isMenuActive={isMenuActive} closeMenu={closeMenu} />
      <figure className="h-contact">
        <i className={`icon-call`}></i>
        <figcaption className="h-contact__info">
          <h3 className="h-contact__title">{polylang.lbl_contact}</h3>
          <a href={`tel:${options.phone}`} className="h-contact__text">
            {options.phone}
          </a>
        </figcaption>
      </figure>
      {/* <LanguageSwitcher :className="{ active: !isTop }" className="header__lang" /> */}
    </header>
  )
}
