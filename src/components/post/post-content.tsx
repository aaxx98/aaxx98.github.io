import * as React from "react";

const PostContent = ({ data }: any) => {
  return (
    <div className="m-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {data.mdx.frontmatter.title}
      </h2>
      <p className="text-sm text-gray-500 mb-1 text-right">
        {data.mdx.frontmatter.date}
      </p>
    </div>
  );
};

export default PostContent;
