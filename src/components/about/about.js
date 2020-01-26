import React from 'react'
import Skill from './skill/skill'
import './about.scss'

const About = () => (
    <section id='about'>
        <div className='container'>
            <h2 className='about__heading'>About Me</h2>
            <div className='container-sm'>
                <p className='about__paragraph'>
                    I'm a full-stack web developer, based in Tbilisi, Georgia,
                    who enjoys building modern and performant web apps.
                    <br />
                    Here are technologies I've been working with:
                </p>
            </div>

            <div className='skills'>
                <Skill title='HTML' fill={90} />
                <Skill title='CSS' fill={90} />
                <Skill title='JavaScript ES6+' fill={85} />
                <Skill title='React' fill={90} />
                <Skill title='Node.js' fill={75} />
                <Skill title='GraphQL' fill={70} />
            </div>
        </div>
    </section>
)

export default About
