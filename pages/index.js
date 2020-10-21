import Header from '../components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />

      <div className="container mt-5 mb-5">
        <h1>Hello and welcome to v2 of my personal website</h1>
        <p><Link href="/about">About</Link></p>
      </div>
    </>
  )
}
