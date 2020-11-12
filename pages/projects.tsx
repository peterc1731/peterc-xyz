import { GetStaticPropsResult } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import { getProjects } from '../lib/prismic';
import { Project } from '../types/prismic';
import { RichText } from 'prismic-reactjs';

interface Props {
  projects: Project[];
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }: Props) {
  return (
    <>
      <Header title="Projects" />
      <main>
        <Spacer height={10} />
        {projects.map((a) => (
          <div key={a.id}>
            <h2>
              {a.data.link.url ? (
                <a href={a.data.link.url}>{RichText.asText(a.data.title)}</a>
              ) : (
                RichText.asText(a.data.title)
              )}
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
          background-color: #f9f1ff;
          color: #444444;
        }
        a:hover {
          color: #f9f1ff;
          background-color: #444444;
        }
      `}</style>
    </>
  );
}
