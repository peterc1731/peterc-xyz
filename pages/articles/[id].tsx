import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getArticleById, getArticles } from '../../lib/prismic';
import { Article } from '../../types/prismic';
import { RichText } from 'prismic-reactjs';
import { formatDate } from '../../lib/date';

interface Props {
  article: Article;
}

export async function getStaticPaths() {
  const articles = await getArticles();
  return {
    paths: articles.map((a) => ({ params: { id: a.id } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params: { id },
}: GetStaticPropsContext<{ id: string }>): Promise<
  GetStaticPropsResult<Props>
> {
  const article = await getArticleById(id);
  return {
    props: {
      article,
    },
  };
}

export default function ArticlePage({ article }: Props) {
  return (
    <>
      <Header
        title={RichText.asText(article.data.title)}
        subtitle={formatDate(article.data.date)}
      />
      <main>
        <div className="article">
          <RichText render={article.data.body} />
        </div>
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
