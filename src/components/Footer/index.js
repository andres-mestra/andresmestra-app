'use client'
import style from './style.module.css'

const thakns = [
  'Fernando Herrera',
  'Midudev',
  'Johas Schmedtmann',
  'Ben Awad',
  'Team Platzi',
  'Código Facilito',
]

const formatter = new Intl.ListFormat('es-ES', {
  style: 'long',
  type: 'conjunction',
})

const names = formatter.format(thakns)

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <h2>Agradecimientos</h2>
      <p>{names}</p>
    </footer>
  )
}
