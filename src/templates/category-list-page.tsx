import React from "react";
import Layout from "../components/layout";
import CategoryList from "../components/search/category-list";
import Seo from "../components/seo";

const CategoryListPage = () => {
  return (
    <Layout>
      <CategoryList />
    </Layout>
  );
};

export const Head = () => <Seo title={"카테고리"} />;

export default CategoryListPage;
