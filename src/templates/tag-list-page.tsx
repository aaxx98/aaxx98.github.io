import React from "react";
import Layout from "../components/layout";
import TagList from "../components/search/tag-list";
import Seo from "../components/seo";

const TagListPage = () => {
  return (
    <Layout>
      <TagList />
    </Layout>
  );
};

export const Head = () => <Seo title={"태그 목록"} />;

export default TagListPage;
