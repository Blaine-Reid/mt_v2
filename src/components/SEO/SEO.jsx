import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';
import { string, arrayOf, object } from 'prop-types';

export default function SEO({ description = '', lang = 'en', meta = [], title }) {
  //GraphQL Query
  const {
    site: { siteMetadata }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  //   USe description if passed in, else use GraphQL Query
  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s - Mythic Table | ${siteMetadata.title} `}
      meta={[
        // Twitter MetaData
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        // Open Graph MetaData
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: 'https://mywebsite.net/assets/opengraph/main.png'
        },
        {
          property: 'og:image:width',
          content: '1024'
        },
        {
          property: 'og:image:height',
          content: '353'
        }
      ].concat(meta)}
    />
  );
}

SEO.propTypes = {
  description: string,
  lang: string,
  meta: arrayOf(object),
  title: string.isRequired
};
