import * as React from 'react';

import PostItem from './post-item';
import { usePostdata } from '../../hooks/usePostData';

function PostList() {
  const data = usePostdata();
  const count = data.allMdx.totalCount;
  const { nodes } = data.allMdx;

  return (
    <section className="post-list-container">
      <h1 className="post-list-title">전체 {count}건의 글</h1>

      <div>
        <ul className="post-list">
          {nodes.map((node: any, index: number) => (
            <li className="post-list-item" key={index}>
              <PostItem {...node} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PostList;
