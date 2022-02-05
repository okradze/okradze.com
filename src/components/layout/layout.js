import Switch from '../switch/switch'
import Footer from '../footer/footer'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <Switch />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
