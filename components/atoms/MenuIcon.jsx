export function MenuIcon({ isActive = false, type = 'hamburguer' }) {
  return (
    <div className={`menu-icon ${type} ${isActive ? 'change' : null}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
