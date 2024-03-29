import { useTheme } from 'next-themes'
import Image from 'next/image'
import Toggle from 'react-toggle'
import styles from './switch.module.scss'
import 'react-toggle/style.css'

const Switch = () => {
  const { theme, setTheme } = useTheme()

  if (!theme) return null

  return (
    <div className={styles.switch}>
      <Image width={18} height={18} src='/sun.png' alt='Sun' />
      <Toggle
        className={styles.button}
        checked={theme === 'dark'}
        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
        icons={false}
        aria-label='Toggle dark mode'
      />
      <Image width={18} height={18} src='/moon.png' alt='Moon' />
    </div>
  )
}

export default Switch
