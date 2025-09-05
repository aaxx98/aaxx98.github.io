import { graphql, useStaticQuery } from 'gatsby';

export const useTagData = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        totalCount
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return data.allMdx;
};
