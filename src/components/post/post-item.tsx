import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { categoryNames } from "../../code/categoryName";
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
    thumbnail: any;
  };
};

const PostItem = ({ id, frontmatter, excerpt }: PostItemProps) => {
  const thumbnail = getImage(frontmatter.thumbnail);

  return (
    <article key={id}>
      <Link to={`/post/${frontmatter.slug}`}>
        <div className="p-6 rounded-lg bg-white border-2 border-blue-200 hover:bg-blue-50 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 pb-1 border-b-2 border-blue-200">
            {frontmatter.title}
          </h2>

          <div className="flex gap-4 items-center">
            {thumbnail && (
              <div className="w-full sm:basis-[40%] sm:shrink-0 overflow-hidden rounded-lg">
                <GatsbyImage
                  image={thumbnail}
                  alt={frontmatter.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            <div className={!thumbnail ? "flex-1" : "flex-1 hidden sm:block"}>
              <p className="text-sm text-gray-500 mb-1 text-right">
                작성일: {frontmatter.date}
              </p>
              <div className="text-right mb-3">
                <Link to={`/categories/${frontmatter.category}`}>
                  <span className="text-sm text-blue-500 hover:underline">
                    📂 {categoryNames[frontmatter.category]}
                  </span>
                </Link>
              </div>
              <p className="text-gray-700 leading-relaxed line-clamp-4">
                {excerpt}
              </p>
            </div>
          </div>
          <PostTags tags={frontmatter.tags} />
        </div>
      </Link>
    </article>
  );
};

export default PostItem;
