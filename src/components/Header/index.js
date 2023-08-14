'use client'
import Link from 'next/link'
import { Logo } from './Logo'
import { navLinks } from '@/helpers/navLinks'

import style from './style.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        {navLinks.map(({ label, to }) => (
          <Link key={label} href={to} className={style.nav__link}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
