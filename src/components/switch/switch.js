import { useContext } from 'react'
import Toggle from 'react-toggle'
import { ThemeContext } from '../../providers/ThemeProvider'
import styles from './switch.module.scss'
import 'react-toggle/style.css'

const Switch = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <div className={styles.switch}>
      <img width={18} height={18} src='/sun.png' alt='Sun' />
      <Toggle
        className={styles.button}
        checked={theme === 'dark'}
        onChange={e => changeTheme(e.target.checked ? 'dark' : 'light')}
        icons={false}
        aria-label='Toggle dark mode'
      />
      <img width={18} height={18} src='/moon.png' alt='Moon' />
    </div>
  )
}

export default Switch
