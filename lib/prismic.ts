import Prismic from 'prismic-javascript';
import { Article, Experiment, Project } from '../types/prismic';

export const apiEndpoint = 'https://petercxyz.cdn.prismic.io/api/v2';
export const accessToken =
  'MC5YNnNqWXhNQUFDTUFBWHd0.77-977-9Te-_ve-_vSBEID_vv70677-9ORLvv71fVe-_vXLvv73vv71S77-977-977-977-9V2bvv73vv73vv70F';

const Client = Prismic.client(apiEndpoint, { accessToken });

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
