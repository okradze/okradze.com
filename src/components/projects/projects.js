import React from 'react'
import Project from './project/project'
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
    image: '/podcast-player.png',
  },
  {
    title: 'Color Generator',
    body: 'A web app to generate the colors.',
    web: 'https://colors.okradze.com',
    github: 'https://github.com/okradze/color-generator',
    tech: ['React', 'Framer Motion'],
    image: '/color-generator.png',
  },
]

const Projects = () => (
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

export default Projects
