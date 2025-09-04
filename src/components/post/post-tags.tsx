import { Link } from "gatsby";
import * as React from "react";
import { tagNames } from "../../code/tagName";

type PostTagProps = {
  tags: string[];
};

const PostTags = ({ tags }: PostTagProps) => {
  return (
    <div className="post-tags">
      {tags.map((tag: string) => (
        <Link key={tag} to={`/tags/${tag}`} className="post-tag">
          #{tagNames[tag] || tag}
        </Link>
      ))}
    </div>
  );
};

export default PostTags;
