import { useGenerals } from '@/context/generals.context'

export function Socials() {
  const { options } = useGenerals()
  return (
    <div className="socials">
      {options.social_networks.map(({ type, url }, i) => (
        <div
          key={i}
          className={`${type === 'youtube' ? 'youtube' : ''} ${!url ? 'pointer-events-none' : ''}`}
          title={`${!url && 'Coming soon'}`}
        >
          <a className="socials__link" href={url ? url : '#'} target="_blank" rel="noreferrer">
            <span className={`socials__icon icon-${type} `} />
          </a>
        </div>
      ))}
    </div>
  )
}
