import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Spacer from '../components/Spacer';

export default function Index() {
  return (
    <>
      <Header title="Peter Carpenter" />
      <main>
        <p>Software Engineer.</p>
        <p>
          Building innovative products using web, backend and mobile
          technologies.
        </p>
        <Spacer height={50} />
        <nav>
          <ul>
            <li>
              <h2>
                <Link href="/articles">
                  <a>Articles</a>
                </Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link href="/experiments">
                  <a>Experiments</a>
                </Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </h2>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}
