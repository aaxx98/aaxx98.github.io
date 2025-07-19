import * as React from "react";

const PostContent = ({ data }: any) => {
  return (
    <div className="m-8 mt-12 sm:mt-8 m-8 sm:mx-30 lg:mx-60">
      <h1 className="text-4xl font-bold text-gray-800 mb-2 pt-8 pb-1 border-b-2 border-blue-200">
        {data.mdx.frontmatter.title}
      </h1>
      <p className="text-sm text-gray-500 mb-1 text-right">
        작성일: {data.mdx.frontmatter.date}
      </p>
    </div>
  );
};

export default PostContent;
