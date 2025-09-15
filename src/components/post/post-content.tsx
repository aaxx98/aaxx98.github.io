import * as React from 'react';

import Breadcrumb from '../breadcrumb';

function PostContent({ data }: any) {
  return (
    <div className="post-content-container">
      <h1 className="post-content-title">{data.mdx.frontmatter.title}</h1>
      <p className="post-content-meta">작성일: {data.mdx.frontmatter.date}</p>
      <div className="breadcrumb-wrap">
        <Breadcrumb
          info={[
            { name: 'HOME', url: '/' },
            {
              name: `${data.mdx.frontmatter.category}`,
              url: `/categories/${data.mdx.frontmatter.category}`,
            },
            {
              name: data.mdx.frontmatter.title,
              url: `/${data.mdx.frontmatter.slug}`,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default PostContent;
