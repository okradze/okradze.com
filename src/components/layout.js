import Switch from './switch/switch'
import Footer from './footer/footer'

const Layout = ({ children }) => (
  <div
    style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
    }}
  >
    <Switch />
    {children}
    <Footer />
  </div>
)

export default Layout
