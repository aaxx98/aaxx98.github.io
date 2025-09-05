import React from 'react';

import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import PostTags from './post-tags';
import categoryNames from '../../code/categoryName';

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

function PostItem({ id, frontmatter, excerpt }: PostItemProps) {
  const thumbnail = getImage(frontmatter.thumbnail);

  return (
    <article key={id} className="post-item">
      <Link to={`/post/${frontmatter.slug}`} className="post-link">
        <div className="post-card">
          <div className="post-header">
            <h2 className="post-title">{frontmatter.title}</h2>
            <div className="post-meta">
              <span className="post-date">{frontmatter.date}</span>
              <div className="post-category">{categoryNames[frontmatter.category]}</div>
            </div>
          </div>

          <div className="post-content">
            {thumbnail && (
              <div className="post-thumbnail">
                <GatsbyImage
                  image={thumbnail}
                  alt={frontmatter.title}
                  className="thumbnail-image"
                />
              </div>
            )}
            <div className={`post-excerpt ${!thumbnail ? 'full-width' : ''}`}>
              <p className="excerpt-text">{excerpt}</p>
            </div>
          </div>

          <PostTags tags={frontmatter.tags} />
        </div>
      </Link>
    </article>
  );
}

export default PostItem;
