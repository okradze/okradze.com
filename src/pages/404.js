import { Link } from 'gatsby'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <main className='not-found'>
    <Seo title='404: Not found' />
    <div>
      <h1>Page Not Found</h1>
      <Link to='/'>Go Home</Link>
    </div>
  </main>
)

export default NotFoundPage
