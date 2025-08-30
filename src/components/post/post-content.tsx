import * as React from "react";
import Breadcrumb from "../breadcrumb";

const PostContent = ({ data }: any) => {
  return (
    <div className="justify-self-center max-w-[850px] w-full mr-8 ml-8 mt-12 sm:mt-8 sm:mx-30 lg:mx-60">
      <h1 className="text-4xl font-bold text-gray-800 mb-2 pt-8 pb-1 border-b-2 border-blue-200">
        {data.mdx.frontmatter.title}
      </h1>
      <p className="text-sm text-gray-500 mb-1 text-right">
        작성일: {data.mdx.frontmatter.date}
      </p>
      <Breadcrumb
        info={[
          { name: "🏠", url: "/" },
          {
            name: `📂 ${data.mdx.frontmatter.category}`,
            url: `/categories/${data.mdx.frontmatter.category}`,
          },
          {
            name: data.mdx.frontmatter.title,
            url: `/${data.mdx.frontmatter.slug}`,
          },
        ]}
      />
    </div>
  );
};

export default PostContent;
