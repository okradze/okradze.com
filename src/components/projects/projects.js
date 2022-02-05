import React from 'react'
import Project from './project/project'
import podcastPlayerImg from '../../images/podcast-player.png'
import styles from './projects.module.scss'

const PROJECTS = [
  {
    title: 'Podcast Player',
    body:
      'A web app for listening to podcasts. View the top podcasts, discover new podcasts, get detailed information and recommendations.',
    web: 'https://podcasts.okradze.com',
    github: 'https://github.com/okradze/podcast-player',
    tech: [
      'React',
      'Redux',
      'ListenNotes API',
      'Jest',
      'React Testing Library',
    ],
    image: podcastPlayerImg,
  },
  {
    title: 'Podcast Player',
    body:
      'A web app for listening to podcasts. View the top podcasts, discover new podcasts, get detailed information and recommendations.',
    web: 'https://podcasts.okradze.com',
    github: 'https://github.com/okradze/podcast-player',
    tech: [
      'React',
      'Redux',
      'ListenNotes API',
      'Jest',
      'React Testing Library',
    ],
    image: podcastPlayerImg,
  },
]

const Projects = () => {
  return (
    <section id='projects'>
      <div className='container'>
        <h2 className={styles.heading}>Some Projects I've Made</h2>
        <div className={styles.projects}>
          {PROJECTS.map(project => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
