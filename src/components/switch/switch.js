import { useTheme } from 'next-themes'
import Toggle from 'react-toggle'
import styles from './switch.module.scss'
import 'react-toggle/style.css'

const Switch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.switch}>
      <img width={18} height={18} src='/sun.png' alt='Sun' />
      <Toggle
        className={styles.button}
        checked={theme === 'dark'}
        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
        icons={false}
        aria-label='Toggle dark mode'
      />
      <img width={18} height={18} src='/moon.png' alt='Moon' />
    </div>
  )
}

export default Switch
