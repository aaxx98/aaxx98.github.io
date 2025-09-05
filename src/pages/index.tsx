import * as React from 'react';

import Layout from '../components/layout';
import PostList from '../components/post/post-list';
import Seo from '../components/seo';

import type { HeadFC, PageProps } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
  return <Layout children={<PostList />} />;
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="" />;
