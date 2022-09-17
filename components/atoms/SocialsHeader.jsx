import { useGenerals } from '@/context/generals.context'

export const SocialsHeader = () => {
  const { options } = useGenerals()
  return (
    <div className="socials-header">
      {options.social_networks.map(({ type, url }, i) => (
        <div className={type} key={i} title={!url && 'Coming soon'}>
          <a
            href={url ? url : '#'}
            className={!url && 'pointer-events-none'}
            target="_blank"
            rel="noreferrer"
          >
            <span className={`icon-${type}`}></span>
          </a>
        </div>
      ))}
    </div>
  )
}
