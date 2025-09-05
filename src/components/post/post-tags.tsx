import * as React from 'react';

import { Link } from 'gatsby';

import tagNames from '../../code/tagName';

type PostTagProps = {
  tags: string[];
};

function PostTags({ tags }: PostTagProps) {
  return (
    <div className="post-tags">
      {tags.map((tag: string) => (
        <Link key={tag} to={`/tags/${tag}`} className="post-tag">
          #{tagNames[tag] || tag}
        </Link>
      ))}
    </div>
  );
}

export default PostTags;
