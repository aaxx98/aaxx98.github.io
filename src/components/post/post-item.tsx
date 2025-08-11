import { Link } from "gatsby";
import React from "react";
import PostTags from "./post-tags";

type PostItemProps = {
  id: string;
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    category: string;
    tags: string[];
  };
};

const PostItem = ({ id, frontmatter, excerpt }: PostItemProps) => {
  return (
    <article key={id}>
      <Link to={`/post/${frontmatter.slug}`}>
        <div className="p-6 rounded-lg bg-white border-2 border-blue-200 hover:bg-blue-50 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 pb-1 border-b-2 border-blue-200">
            {frontmatter.title}
            <span className="ml-3 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-500 rounded-full">
              @{frontmatter.slug}
            </span>
          </h2>
          <p className="text-sm text-gray-500 mb-1 text-right">
            작성일: {frontmatter.date}
          </p>
          <div className="text-right mb-3">
            <Link to={`/categories/${frontmatter.category}`}>
              <span className="text-sm text-blue-500 hover:underline">
                📂 {frontmatter.category}
              </span>
            </Link>
          </div>
          <p className="text-gray-700 leading-relaxed">{excerpt}</p>
          <PostTags tags={frontmatter.tags} />
        </div>
      </Link>
    </article>
  );
};

export default PostItem;
