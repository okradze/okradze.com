import React from 'react'
import styles from './hero.module.scss'

const Hero = () => (
  <section id="home" className={styles.hero}>
    <div className="container">
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          I'm <span>Mirian Okradze</span>, a software developer, focused on
          building performant web apps
        </h1>
        <a className={styles.button} href="#projects">
          See My Work
        </a>
      </div>
    </div>
  </section>
)

export default Hero
