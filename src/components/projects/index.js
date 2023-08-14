'use client'
import { projects } from '@/helpers/projects'
import style from './style.module.css'

export const Projects = () => {
  return (
    <>
      <h2 id="projects">Proyectos</h2>
      <section className={style.container}>
        {projects.map((project) => (
          <div
            key={project.title}
            className={style.box}
            style={{ background: project.background }}
          >
            <div className={style.project} style={{ color: project.color }}>
              <div className={style.info}>
                <div>
                  <h2 className={style.title}>{project.title}</h2>
                  <p className={style.description}>{project.description}</p>
                </div>
                <a
                  className={style.arrow}
                  target="_blank"
                  href={project.githubUrl}
                >
                  <img src="/images/github.svg" alt="arrow" />
                </a>
              </div>
              <a target="_blank" href={project.url}>
                <img
                  className={style.image}
                  src={project.image}
                  alt={project.title}
                />
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
