export const LinkSecondary = ({ to, children, target = '_self' }) => {
  return (
    <a href={to} target={target} className="link__secondary">
      {children}
    </a>
  )
}
