import { graphql, useStaticQuery } from 'gatsby';

export const useCategoryData = () => {
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
