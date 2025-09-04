import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="tag-page-container">
        <TagList selected={tag.name} />
        <div className="tag-page-below">
          <div className="breadcrumb-wrap">
            <Breadcrumb info={pageContext.breadCrumbs} />
          </div>
          <h2 className="tag-page-subtitle">
            <FontAwesomeIcon icon={faHashtag} className="title-icon" />
            {tag.name} :: {tag.count}건의 글
          </h2>
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

export const Head = ({ pageContext }: PageProps<{}, PageContextProps>) => (
  <Seo title={`${pageContext.tag.name} 태그한 글`} />
);

export default TagPage;
