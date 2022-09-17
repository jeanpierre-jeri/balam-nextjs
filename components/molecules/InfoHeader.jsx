import { useGenerals } from '@/context/generals.context'

import { SocialsHeader } from '@/components/atoms'

export function InfoHeader() {
  const { polylang, options } = useGenerals()
  return (
    <div className="info-header">
      <div className="info-header__container">
        <div className="info-header__left">
          <p className="text-white">{polylang.days_title}</p>
          <a className="info-header__phone" href={`tel:${options.phone}`}>
            <i className="icon-phone"></i>
            {options.phone}
          </a>
        </div>
        <div className="info-header__right">
          <SocialsHeader />
          {/* <LanguageSwitcher className="info-header__lang" /> */}
        </div>
      </div>
    </div>
  )
}
