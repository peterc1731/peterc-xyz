import { Document } from 'prismic-javascript/types/documents';
import { RichTextBlock } from 'prismic-reactjs';

interface Link {
  link_type: string;
  url?: string;
}

export interface Article extends Document {
  data: {
    uid: string;
    title: RichTextBlock[];
    date: string;
    body: RichTextBlock[];
    description: RichTextBlock[];
  };
}

export interface Experiment extends Document {
  data: {
    title: RichTextBlock[];
    link: Link;
    description: RichTextBlock[];
  };
}

export interface Project extends Document {
  data: {
    title: RichTextBlock[];
    link: Link;
    description: RichTextBlock[];
  };
}
