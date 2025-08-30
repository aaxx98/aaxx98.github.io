import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import PostContent from "../../components/post/post-content";
import PostTags from "../../components/post/post-tags";
import Comment from "../../components/post/comment";
import Seo from "../../components/seo";

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

const BlogPost = ({ data, children }: BlogPostProps) => {
  return (
    <Layout>
      <PostContent data={data} />
      <div className="justify-self-center max-w-[850px] w-full mr-8 ml-8 sm:mx-30 lg:mx-60 p-6 rounded-lg bg-white border-2 border-blue-200">
        {children}
        <div className="mt-8">
          <PostTags tags={data.mdx.frontmatter.tags} />
        </div>
        <div className="mt-2 text-right">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 border-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full transition-colors"
          >
            ↑ TOP
          </button>
        </div>
      </div>
      <div className="w-full mt-8">
        <Comment />
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
        slug
        category
        tags
      }
    }
  }
`;

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
