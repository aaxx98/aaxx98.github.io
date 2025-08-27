import { graphql, PageProps } from "gatsby";
import React from "react";
import Breadcrumb from "../components/breadcrumb";
import Layout from "../components/layout";
import PostItem from "../components/post/post-item";
import TagList from "../components/search/tag-list";
import Seo from "../components/seo";
import { BreadcrumbItem } from "../types/breadcrumb";

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
  tag: {
    name: string;
    count: number;
  };
  tagName: string;
};

const TagPage = ({
  data,
  pageContext,
}: PageProps<DataProps, PageContextProps>) => {
  const { tag } = pageContext;
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <TagList selected={tag.name} />
      <div className="m-8 sm:mx-30 lg:mx-60">
        <Breadcrumb info={pageContext.breadCrumbs} />
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          🏷️ {tag.name} :: {tag.count}건의 포스트
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
  query ($tagName: [String]) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: $tagName } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "YYYY-MM-DD")
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

export const Head = ({ pageContext }: PageProps<{}, PageContextProps>) => (
  <Seo title={`${pageContext.tag.name} 태그한 포스트`} />
);

export default TagPage;
