import { Link } from "gatsby";
import * as React from "react";

type PostTagProps = {
  tags: string[];
};
const PostTags = ({ tags }: PostTagProps) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag: string) => (
        <Link to={`/tags/${tag}`}>
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-blue-200 hover:text-blue-500"
          >
            #{tag}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default PostTags;
