import Image from 'next/image'
import GithubIcon from '../../../svg/GithubIcon'
import WebOpenIcon from '../../../svg/WebOpenIcon'
import styles from './project.module.scss'

const Project = ({ image, title, body, github, web }) => (
  <div className={styles.project}>
    <Image
      className={styles.img}
      width={350}
      height={168}
      src={image}
      alt={title}
    />

    <div className={styles.content}>
      <h3>{title}</h3>

      <p className={styles.text}>{body}</p>

      <div className={styles.links}>
        <a
          rel='noopener noreferrer'
          href={github}
          target='_blank'
          className={styles.link}
          aria-label='GitHub'
        >
          <GithubIcon className={styles.icon} />
          GitHub
        </a>
        <a
          rel='noopener noreferrer'
          href={web}
          target='_blank'
          className={styles.link}
          aria-label='Visit Website'
        >
          <WebOpenIcon className={styles.icon} />
          Visit Website
        </a>
      </div>
    </div>
  </div>
)

export default Project
