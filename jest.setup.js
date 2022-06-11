// Mock return data from StaticQuery for SEO components

require('@testing-library/jest-dom/extend-expect')
const { StaticQuery } = requrie('gatsby')

beforeAll(() => {
    useStaticQuery.mockReturnValue({
        site: {
            siteMetaData: {
                siteUrl: "test.url.com",
                social: { twitter: "@slarsendisney" }
            }
        }
    })
})