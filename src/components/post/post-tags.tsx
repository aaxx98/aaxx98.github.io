import * as React from 'react';

import { Link } from 'gatsby';

import tagNames from '../../code/tagName';

type PostTagProps = {
  tags: string[];
  isLinked?: boolean;
};

function PostTags({ tags, isLinked = false }: PostTagProps) {
  return (
    <div className="post-tags">
      {tags.map((tag: string) =>
        isLinked ? (
          <Link key={tag} to={`/tags/${tag}`} className="post-tag">
            #{tagNames[tag] || tag}
          </Link>
        ) : (
          <div key={tag} className="post-tag">
            #{tagNames[tag] || tag}
          </div>
        ),
      )}
    </div>
  );
}

export default PostTags;
