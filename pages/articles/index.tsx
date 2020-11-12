import { GetStaticPropsResult } from 'next';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import { getArticles } from '../../lib/prismic';
import { Article } from '../../types/prismic';
import { RichText } from 'prismic-reactjs';
import { formatDate } from '../../lib/date';

interface Props {
  articles: Article[];
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const articles = await getArticles();
  return {
    props: {
      articles,
    },
  };
}

export default function Articles({ articles }: Props) {
  return (
    <>
      <Header title="Articles" />
      <main>
        <Spacer height={10} />
        {articles.map((a) => (
          <div key={a.uid}>
            <h2>
              <Link href={`/articles/${a.id}`}>
                <a>{RichText.asText(a.data.title)}</a>
              </Link>
            </h2>
            <Spacer height={2} />
            <small>{formatDate(a.data.date)}</small>
            <p>{RichText.asText(a.data.description)}</p>
            <Spacer height={20} />
          </div>
        ))}
      </main>
      <Footer />
      <style global jsx>{`
        body {
          background-color: #fff7f1;
          color: #444444;
        }
        a:hover {
          color: #fff7f1;
          background-color: #444444;
        }
      `}</style>
    </>
  );
}
