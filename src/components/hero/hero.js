import React from 'react'
import './hero.scss'

const Hero = () => (
    <section id='home' className='hero'>
        <div className='hero__content'>
            <h1 className='hero__heading'>
                I'm <span>Mirian Okradze</span>
            </h1>
            <p className='hero__paragraph'>I build performant web apps</p>
            <a className='button' href='#projects'>
                See My Work
            </a>
        </div>
    </section>
)

export default Hero
