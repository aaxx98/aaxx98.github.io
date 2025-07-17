import { graphql, useStaticQuery } from "gatsby";

export const useCategorydata = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        totalCount
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return data.allMdx;
};
