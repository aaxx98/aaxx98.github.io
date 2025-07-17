import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import PostItem from "../components/post/post-item";
import CategoryList from "../components/search/category-list";
import Seo from "../components/seo";

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
  category: {
    name: string;
    count: number;
  };
  categoryName: string;
};

const CategoryPage = ({
  data,
  pageContext,
}: PageProps<DataProps, PageContextProps>) => {
  const { category } = pageContext;
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <CategoryList selected={category.name} />
      <div className="m-8 sm:mx-30 lg:mx-60">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          📂 {category.name} :: {category.count}건의 포스트
        </h1>
        <div className="space-y-8">
          <ul className="space-y-8">
            {posts.map((node: any, index: number) => (
              <li key={index}>
                <PostItem {...node} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

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
          date(formatString: "YYYY-MM-DD")
        }
        excerpt
      }
    }
  }
`;

export const Head = ({ pageContext }: PageProps<{}, PageContextProps>) => (
  <Seo title={`${pageContext.category.name} 카테고리`} />
);

export default CategoryPage;
