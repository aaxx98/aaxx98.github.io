import { Link } from "gatsby";
import React from "react";

type PostItemProps = {
  id: string;
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
  };
};

const PostItem = ({ id, frontmatter, excerpt }: PostItemProps) => {
  return (
    <article key={id}>
      <Link to={`/post/${frontmatter.slug}`}>
        <div className="p-6 rounded-lg bg-white border-2 border-blue-200 hover:bg-blue-50 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 pb-1 border-b-2 border-blue-200">
            {frontmatter.title}
          </h2>
          <p className="text-sm text-gray-500 mb-1 text-right">
            작성일: {frontmatter.date}
          </p>
          <p className="text-sm text-blue-500 mb-3 text-right">
            @{frontmatter.slug}
          </p>
          <p className="text-gray-700 leading-relaxed">{excerpt}</p>
        </div>
      </Link>
    </article>
  );
};

export default PostItem;
