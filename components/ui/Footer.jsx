import { useGenerals } from '@/context/generals.context'
import { Socials } from '@/components/atoms'

export function Footer() {
  const { polylang, options } = useGenerals()
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__days">{polylang.days_title}</p>
        <a className="footer__link" href={`mailto:${options.email}`}>
          <i className="footer__icon icon-email"></i>
          {options.email}
        </a>
        <a className="footer__link" href={`tel:${options.phone}`}>
          <i className="footer__icon icon-phone-alt"></i>
          {options.phone}
        </a>
      </div>
      <Socials />
    </footer>
  )
}
