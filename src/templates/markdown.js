import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function Template({ data }) {
    const {
        body,
        frontmatter: {
            title,
            date,
            summary }
    } = data.mdx; // data.mdx holds your post data

    return (
        <Layout>
            <section id="wrapper">
                <header>
                    <div className="inner">
                        <h2>{title}</h2>
                        <p>{summary}</p>
                    </div>
                </header>

                <div className="wrapper">
                    <MDXRenderer>{body}</MDXRenderer>
                    <div className="inner" align="left"><i>{date}</i></div>
                </div>
            </section>
        </Layout>
    );
}

export const query = graphql`
  query ($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
          date(formatString: "MMMM DD, YYYY")
        title
        summary
      }
      body
    }
  }
`;