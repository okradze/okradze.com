import React from 'react'
import './hero.scss'

const Hero = () => (
    <div id='home' className='hero'>
        <div className='hero__content'>
            <h1 className='hero__heading'>
                I'm <span>Mirian Okradze</span>
            </h1>
            <p className='hero__paragraph'>I build things for web</p>
            <a className='button' href='#projects'>
                See My Work
            </a>
        </div>
    </div>
)

export default Hero
