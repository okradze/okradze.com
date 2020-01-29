import React from 'react'
import Img from 'gatsby-image'
import githubSvg from '../../../images/github.svg'
import webOpenSvg from '../../../images/web-open.svg'
import './project.scss'

const Project = ({ fluid, title, paragraph, tech, github, web }) => {
    return (
        <div className='project'>
            <Img className='project__img' fluid={fluid} alt='Podcast Player' />

            <div className='project__content'>
                <div className='project__heading-wrapper'>
                    <h3>{title}</h3>
                    <div className='project__links'>
                        <a
                            href={github}
                            rel='noopener norefferer'
                            target='_blank'
                            className='project__link'
                        >
                            <img src={githubSvg} alt='' />
                        </a>
                        <a
                            rel='noopener norefferer'
                            href={web}
                            target='_blank'
                            className='project__link'
                        >
                            <img src={webOpenSvg} alt='' />
                        </a>
                    </div>
                </div>
                <div className='project__text'>
                    <p>{paragraph}</p>
                </div>
                <ul className='project__tech'>
                    {tech.map(item => (
                        <li className='project__tech-item'>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Project
