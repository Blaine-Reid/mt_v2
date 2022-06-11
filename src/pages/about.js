import React from 'react'
import { object } from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx";


const About = ({ data }) => {

    const { mdx: {
        body,
    }
    } = data

    return (
        <div>
            <MDXRenderer>{body}</MDXRenderer >
        </div>
    )
}

About.propTypes = {
    data: object.isRequired
}

export const query = graphql`    {
                        mdx(frontmatter: {type: {eq: "bio"}}) {
                        body

  }
}
                    `;

export default About