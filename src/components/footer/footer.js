import Image from 'next/image'
import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.footerContainer}`}>
      <h4 className={styles.footerLeft}>
        Designed & Developed by Mirian Okradze
        <span className={styles.emoji}>
          <Image src='/rockon.png' alt='Rock On Emoji' width={15} height={23} />
        </span>
      </h4>

      <div>
        <a
          rel='noopener noreferrer'
          href='mailto:okradzemirian@gmail.com'
          target='_blank'
          className={styles.link}
        >
          EMAIL
        </a>
        <a
          rel='noopener noreferrer'
          href='https://github.com/okradze'
          target='_blank'
          className={styles.link}
        >
          GITHUB
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
