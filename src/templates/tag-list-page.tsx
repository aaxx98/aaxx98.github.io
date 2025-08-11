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
      <TagList />
      <div className="m-8 sm:mx-30 lg:mx-60">
        <Breadcrumb info={pageContext.breadCrumbs} />
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          🏷️ 태그를 선택하세요.
        </h2>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title={"태그 목록"} />;

export default TagListPage;
