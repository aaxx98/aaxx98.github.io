import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageProps } from "gatsby";
import React from "react";
import Breadcrumb from "../components/breadcrumb";
import Layout from "../components/layout";
import TagList from "../components/search/tag-list";
import Seo from "../components/seo";
import { BreadcrumbItem } from "../types/breadcrumb";

type PageContextProps = {
  breadCrumbs: BreadcrumbItem[];
};

const TagListPage = ({ pageContext }: PageProps<unknown, PageContextProps>) => {
  return (
    <Layout>
      <div className="tag-page-container">
        <TagList />
        <div className="tag-page-below">
          <div className="breadcrumb-wrap">
            <Breadcrumb info={pageContext.breadCrumbs} />
          </div>
          <h2 className="tag-page-subtitle">
            <span className="title-icon">
              <FontAwesomeIcon icon={faHashtag} className="title-icon" />
            </span>
            태그를 선택하세요.
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title={"태그 목록"} />;

export default TagListPage;
