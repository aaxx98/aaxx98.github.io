import { graphql, useStaticQuery } from "gatsby";

export const usePostdata = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        totalCount
        nodes {
          id
          excerpt
          body
          frontmatter {
            date(formatString: "YYYY년 M월 D일")
            slug
            title
          }
        }
      }
    }
  `);

  return data;
};
