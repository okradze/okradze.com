import React from 'react'
import './hero.scss'

const Hero = () => (
  <section id="home" className="hero">
    <div className="container">
      <div className="hero__content">
        <h1 className="hero__heading">
          I'm <span>Mirian Okradze</span>, a software developer, focused
          on building performant web apps
        </h1>
        <a className="button" href="#projects">
          See My Work
        </a>
      </div>
    </div>
  </section>
)

export default Hero
