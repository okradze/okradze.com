import Link from 'next/link'

const NotFoundPage = () => (
  <main className='not-found'>
    <div>
      <h1>Page Not Found</h1>
      <Link href='/'>
        <a>Go Home</a>
      </Link>
    </div>
  </main>
)

export default NotFoundPage
