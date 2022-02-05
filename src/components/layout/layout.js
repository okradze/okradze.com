import Switch from '../switch/switch'
import Footer from '../footer/footer'
import { useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeProvider'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <main className={`${styles.main} ${theme}`}>
      <Switch />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
