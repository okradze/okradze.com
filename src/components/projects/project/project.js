import Image from 'next/image'
import GithubIcon from '../../../images/github.svg'
import WebOpenIcon from '../../../images/web-open.svg'
import './project.scss'

const Project = ({ image, title, body, tech, github, web }) => (
  <div className='project'>
    <Image
      className='project__img'
      fluid={image.childImageSharp.fluid}
      alt={title}
    />

    <div className='project__content'>
      <div className='project__heading-wrapper'>
        <h3>{title}</h3>
        <div className='project__links'>
          <a
            rel='noopener noreferrer'
            href={github}
            target='_blank'
            className='project__link'
            aria-label='GitHub'
          >
            <GithubIcon className='project__icon' />
          </a>
          <a
            rel='noopener noreferrer'
            href={web}
            target='_blank'
            className='project__link'
            aria-label='Visit Website'
          >
            <WebOpenIcon className='project__icon' />
          </a>
        </div>
      </div>
      <div className='project__text'>
        <p>{body}</p>
      </div>
      <ul className='project__tech'>
        {tech.map((item) => (
          <li key={item} className='project__tech-item'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Project
