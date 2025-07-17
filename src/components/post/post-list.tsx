import * as React from "react";
import { usePostdata } from "../../hooks/usePostData";
import PostItem from "./post-item";

const PostList = () => {
  const data = usePostdata();
  const count = data.allMdx.totalCount;
  const nodes = data.allMdx.nodes;

  return (
    <div className="m-8 mt-12 sm:mt-8 sm:mx-30 lg:mx-60">
      <div className="text-2xl font-semibold mb-6 text-gray-800">
        전체 {count}건의 포스트
      </div>
      <div className="space-y-8">
        <ul className="space-y-4">
          {nodes.map((node: any, index: number) => (
            <li key={index}>
              <PostItem {...node} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
