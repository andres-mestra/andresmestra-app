import { Social } from './Social'
import { LinkSecondary } from '@/components/Links/LinkSecondary'
import style from './style.module.css'

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.background}>
        <div className={style.content}>
          <div>
            <h1 className={style.title}>Andres Mestra</h1>
            <h2 className={style.subtitle}>Frontend Developer</h2>
          </div>
          <p style={{ color: 'var(--primary-color)' }}>
            Tengo experiencia en el desarrollo de aplicaciones web, escritorio y
            móviles, así como en la integración de hardware. Me comprometo con
            soluciones innovadoras y efectivas. Entiendo la importancia del
            análisis y la comunicación en equipo para alcanzar el éxito del
            proyecto. Actualmente trabajo en{' '}
            <span className="logo">ticketplus.cl</span>
          </p>
          <div className={style.links}>
            <LinkSecondary
              to="https://www.linkedin.com/in/jhon-andres-mestra-tapias-aa2318203/"
              target="_blank"
            >
              Contacto
            </LinkSecondary>
            <Social />
          </div>
        </div>
      </div>
      <div className={style.profile}>&nbsp;</div>
    </section>
  )
}
