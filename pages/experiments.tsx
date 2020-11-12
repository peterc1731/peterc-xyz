import { GetStaticPropsResult } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import { getExperiments } from '../lib/prismic';
import { Experiment } from '../types/prismic';
import { RichText } from 'prismic-reactjs';

interface Props {
  experiments: Experiment[];
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const experiments = await getExperiments();
  return {
    props: {
      experiments,
    },
  };
}

export default function Experiments({ experiments }: Props) {
  return (
    <>
      <Header title="Experiments" />
      <main>
        <Spacer height={10} />
        {experiments.map((a) => (
          <div key={a.id}>
            <h2>
              <a href={a.data.link.url}>{RichText.asText(a.data.title)}</a>
            </h2>
            <Spacer height={5} />
            <p className="no-margin">{RichText.asText(a.data.description)}</p>
            <Spacer height={30} />
          </div>
        ))}
      </main>
      <Footer />
      <style global jsx>{`
        body {
          background-color: #000000;
          color: #ffffff;
        }
        a:hover {
          color: #000000;
          background-color: #ffffff;
        }
      `}</style>
    </>
  );
}
