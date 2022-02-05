import Image from 'next/image'
import Toggle from 'react-toggle'
import sunImg from '../../../public/sun.png'
import moonImg from '../../../public/moon.png'
import styles from './switch.module.scss'
// import 'react-toggle/style.css'

const Switch = () => {
  return (
    <div>Hello</div>
    // <ThemeToggler>
    //   {({ theme, toggleTheme }) => {
    //     if (theme === null) {
    //       return null
    //     }

    //     return (
    //       <div className={styles.switch}>
    //         <Image className={styles.icon} src={sunImg} alt='Sun' />
    //         <Toggle
    //           checked={theme === 'dark'}
    //           onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
    //           icons={false}
    //           aria-label='Toggle dark mode'
    //         />
    //         <Image className={styles.icon} src={moonImg} alt='Moon' />
    //       </div>
    //     )
    //   }}
    // </ThemeToggler>
  )
}

export default Switch
