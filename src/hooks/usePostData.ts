import { graphql, useStaticQuery } from 'gatsby';

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
            category
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 800
                  height: 600
                  placeholder: BLURRED
                  transformOptions: { fit: COVER, cropFocus: CENTER }
                )
              }
            }
          }
        }
      }
    }
  `);

  return data;
};
