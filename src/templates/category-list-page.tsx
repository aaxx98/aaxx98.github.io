import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageProps } from "gatsby";
import React from "react";
import Breadcrumb from "../components/breadcrumb";
import Layout from "../components/layout";
import CategoryList from "../components/search/category-list";
import Seo from "../components/seo";
import { BreadcrumbItem } from "../types/breadcrumb";

type PageContextProps = {
  breadCrumbs: BreadcrumbItem[];
};

const CategoryListPage = ({
  pageContext,
}: PageProps<unknown, PageContextProps>) => {
  return (
    <Layout>
      <div className="tag-page-container">
        <CategoryList />
        <div className="tag-page-below">
          <div className="breadcrumb-wrap">
            <Breadcrumb info={pageContext.breadCrumbs} />
          </div>
          <h2 className="category-page-subtitle">
            <FontAwesomeIcon icon={faBook} className="title-icon" />
            시리즈를 선택하세요.
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title={"글 시리즈 목록"} />;

export default CategoryListPage;
