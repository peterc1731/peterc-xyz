import Prismic from 'prismic-javascript';
import { Article, Experiment, Project } from '../types/prismic';

const Client = Prismic.client('https://petercxyz.cdn.prismic.io/api/v2');

export const getArticles = async (): Promise<Article[]> =>
  (await Client.query(Prismic.Predicates.at('document.type', 'article')))
    .results;

export const getArticleById = async (id: string): Promise<Article> =>
  Client.getByID(id, {});

export const getExperiments = async (): Promise<Experiment[]> =>
  (await Client.query(Prismic.Predicates.at('document.type', 'experiment')))
    .results;

export const getProjects = async (): Promise<Project[]> =>
  (await Client.query(Prismic.Predicates.at('document.type', 'project')))
    .results;
