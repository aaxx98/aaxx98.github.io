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
      <PostContent data={data} />
      <div className="m-8 p-6 rounded-lg bg-white border-2 border-blue-200">
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
