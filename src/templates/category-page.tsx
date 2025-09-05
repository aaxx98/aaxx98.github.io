import React from 'react';

import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, PageProps } from 'gatsby';

import Breadcrumb from '../components/breadcrumb';
import Layout from '../components/layout';
import PostItem from '../components/post/post-item';
import CategoryList from '../components/search/category-list';
import Seo from '../components/seo';
import { BreadcrumbItem } from '../types/breadcrumb';

type Post = {
  id: string;
  frontmatter: {
    title: string;
    slug: string;
    date: string;
  };
  excerpt: string;
};

type DataProps = {
  allMdx: {
    nodes: Post[];
  };
};

type PageContextProps = {
  breadCrumbs: BreadcrumbItem[];
  category: {
    name: string;
    count: number;
  };
  categoryName: string;
};

function CategoryPage({ data, pageContext }: PageProps<DataProps, PageContextProps>) {
  const { category } = pageContext;
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <div className="tag-page-container">
        <CategoryList selected={category.name} />
        <div className="tag-page-below">
          <div className="breadcrumb-wrap">
            <Breadcrumb info={pageContext.breadCrumbs} />
          </div>
          <h1 className="category-page-subtitle">
            <FontAwesomeIcon icon={faBook} className="title-icon" />
            {category.name} :: {category.count}건의 글
          </h1>
          <div>
            <ul className="post-list">
              {posts.map((node: any, index: number) => (
                <li key={index}>
                  <PostItem {...node} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($categoryName: String!) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { eq: $categoryName } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "YYYY년 M월 D일")
          tags
          category
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 800
                height: 600
                placeholder: BLURRED
                transformOptions: { fit: COVER, cropFocus: CENTER }
              )
            }
          }
        }
        excerpt
      }
    }
  }
`;

export function Head({ pageContext }: PageProps<{}, PageContextProps>) {
  return <Seo title={`${pageContext.category.name} 시리즈의 글`} />;
}

export default CategoryPage;
