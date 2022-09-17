import Link from 'next/link'

export function Button({ link = '/', type = 'primary', children }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={`btn ${type}`}>
          {children}
          <i className="icon-plus"></i>
        </a>
      </Link>
    )
  }
  return (
    <button className={`btn ${type}`}>
      {children}
      <i className="icon-plus"></i>
    </button>
  )
}
