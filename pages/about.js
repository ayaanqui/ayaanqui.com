import Header from '../components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header title='About' />

      <div className="container mt-5 mb-5">
        <h1>The about page</h1>
        <p><Link href="/">Home</Link></p>
      </div>
    </>
  )
}
