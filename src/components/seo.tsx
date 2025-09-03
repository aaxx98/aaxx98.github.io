import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

type SeoProps = {
  title: string;
};
const Seo = ({ title }: SeoProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        {title === "" ? (
          <title>{data.site.siteMetadata.title}</title>
        ) : (
          <title>
            {title} | {data.site.siteMetadata.title}
          </title>
        )}
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Helmet>
      <meta
        name="google-site-verification"
        content="coXYBqdXz20NCF29TTKd8Plu-sNimboMIdtEZ5WZZrU"
      />
      <meta
        name="naver-site-verification"
        content="aa33d972d16906f015d8a1004d50e72f7d8a0f43"
      />
    </>
  );
};

export default Seo;
