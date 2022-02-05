import Image from 'next/image'
import Toggle from 'react-toggle'
import sunImg from '../../../public/sun.png'
import moonImg from '../../../public/moon.png'
import styles from './switch.module.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeProvider'
import 'react-toggle/style.css'

const Switch = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <div className={styles.switch}>
      <Image width={18} height={18} src={sunImg} alt='Sun' />
      <Toggle
        className={styles.button}
        checked={theme === 'dark'}
        onChange={e => changeTheme(e.target.checked ? 'dark' : 'light')}
        icons={false}
        aria-label='Toggle dark mode'
      />
      <Image width={18} height={18} src={moonImg} alt='Moon' />
    </div>
  )
}

export default Switch
