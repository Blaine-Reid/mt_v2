import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Layout'
import Hero from '../components/Hero/Hero'

const Index = ({ data }) => {
    const {
        site: {
            siteMetadata: {
                name,
                role
            }
        }
    } = data

    return (
        <Layout>
            <Hero />
        </Layout>

    )
}

export const query = graphql`
{
    site{
        siteMetadata{
            name
            role
        }
    }
}
`;




export default Index