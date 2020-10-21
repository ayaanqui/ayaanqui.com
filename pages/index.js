import Header from '../components/header';
import Link from 'next/link';
import Content from '../components/Layout/content';

export default function Home() {
  return (
    <Content>
      <Header />

      <div className="container mt-5 mb-5">
        <h1>Welcome!</h1>

        <br />

        <p>
          This webstite is still under works, with only the portfolio page working. In the near future, I hope to display my resume, projects, interests, and contact information on here.
        </p>
      </div>
    </Content>
  )
}
