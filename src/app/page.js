import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/projects'
import { Footer } from '@/components/Footer'
import style from './page.module.css'

export default function Home() {
  return (
    <main className={style.container}>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </main>
  )
}
