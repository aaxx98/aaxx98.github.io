import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-blue-400">
            Page Not Found
          </h1>
          <h2 className="mt-4 text-2xl font-medium text-gray-600">
            페이지를 찾을 수 없습니다.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            요청한 페이지가 존재하지 않거나 삭제된 포스트일 수 있습니다.
          </p>

          <div className="mt-6">
            <Link
              to="/"
              className="px-5 py-3 text-lg border-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full transition-colors"
            >
              전체 글 목록으로 이동
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="Page Not Found" />;
