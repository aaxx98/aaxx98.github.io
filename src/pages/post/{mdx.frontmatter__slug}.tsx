import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import PostContent from "../../components/post/post-content";
import Seo from "../../components/seo";

type BlogPostProps = {
  children: React.ReactNode;
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
};

const BlogPost = ({ data, children }: BlogPostProps) => {
  return (
    <Layout>
      <div className="m-12">
        <PostContent data={data} />
        {children}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY년 M월 D일")
      }
    }
  }
`;

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
