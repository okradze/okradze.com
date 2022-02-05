import Link from 'next/link'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <main className='not-found'>
    {/* <Seo title='404: Not found' /> */}
    <div>
      <h1>Page Not Found</h1>
      <Link href='/'>
        <a>Go Home</a>
      </Link>
    </div>
  </main>
)

export default NotFoundPage
