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
      <CategoryList />
      <div className="m-8 sm:mx-30 lg:mx-60">
        <Breadcrumb info={pageContext.breadCrumbs} />
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          📂 카테고리를 선택하세요.
        </h2>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title={"카테고리 목록"} />;

export default CategoryListPage;
