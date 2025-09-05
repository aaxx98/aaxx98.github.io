import * as React from 'react';

import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import Comment from '../../components/post/comment';
import PostContent from '../../components/post/post-content';
import PostTags from '../../components/post/post-tags';
import Seo from '../../components/seo';

type BlogPostProps = {
  children: React.ReactNode;
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        slug: string;
        category: string;
        tags: string[];
      };
    };
  };
};

function BlogPost({ data, children }: BlogPostProps) {
  return (
    <Layout>
      <PostContent data={data} />
      <section className="post-body-container">
        <div className="post-body">{children}</div>
        <div className="post-tags-area">
          <PostTags tags={data.mdx.frontmatter.tags} />
        </div>
        <div className="post-top-wrap">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="post-top-button"
            aria-label="맨 위로 이동"
          >
            ↑ TOP
          </button>
        </div>
      </section>

      <section className="comment-section">
        <Comment />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY년 M월 D일")
        slug
        category
        tags
      }
    }
  }
`;

export function Head({ data }: BlogPostProps) {
  return <Seo title={data.mdx.frontmatter.title} />;
}

export default BlogPost;
