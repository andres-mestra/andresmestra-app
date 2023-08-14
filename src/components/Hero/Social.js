import style from './style.module.css'
import { socialsLinks } from '@/helpers/socialsLinks'

export const Social = () => {
  return (
    <>
      {socialsLinks.map((social) => (
        <a
          className={style.social}
          key={social.label}
          href={social.to}
          target="_blank"
        >
          <img
            className={style.social_dark}
            src={`/images/${social.label}_dark.svg`}
            alt={social.label}
          />
          <img
            className={style.social_ligth}
            src={`/images/${social.label}.svg`}
            alt={social.label}
          />
        </a>
      ))}
    </>
  )
}
