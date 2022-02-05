import Image from 'next/image'
import GithubIcon from '../../../svg/GithubIcon'
import WebOpenIcon from '../../../svg/WebOpenIcon'
import styles from './project.module.scss'

const Project = ({ image, title, body, tech, github, web }) => (
  <div className={styles.project}>
    <Image className={styles.img} src={image} alt={title} />

    <div className={styles.content}>
      <div className={styles.headingWrapper}>
        <h3>{title}</h3>
        <div className={styles.links}>
          <a
            rel='noopener noreferrer'
            href={github}
            target='_blank'
            className={styles.link}
            aria-label='GitHub'
          >
            <GithubIcon className={styles.icon} />
          </a>
          <a
            rel='noopener noreferrer'
            href={web}
            target='_blank'
            className={styles.link}
            aria-label='Visit Website'
          >
            <WebOpenIcon className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.text}>
        <p>{body}</p>
      </div>
      <ul className={styles.tech}>
        {tech.map(item => (
          <li key={item} className={styles.techItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Project
