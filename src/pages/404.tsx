import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="error-icon">
            <span className="error-code">404</span>
          </div>

          <div className="error-message">
            <h1 className="error-title">Page Not Found</h1>
            <h2 className="error-subtitle">페이지를 찾을 수 없습니다</h2>
            <p className="error-description">
              요청한 페이지가 존재하지 않거나 삭제된 글일 수 있습니다.
              <br />
              다른 페이지를 탐색해보시거나 홈으로 돌아가세요.
            </p>
          </div>

          <div className="action-buttons">
            <Link to="/" className="btn-primary">
              홈으로 돌아가기
            </Link>
            <Link to="/categories" className="btn-secondary">
              시리즈 보기
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="Page Not Found" />;
